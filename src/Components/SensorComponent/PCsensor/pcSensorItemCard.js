import {
    View,
    FlatList,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Animated,
} from "react-native";
import { useState, useRef } from "react";
import appColors from "../../../Themes/colors";
import { formatDistanceStrict } from "date-fns";
import {
    formatHeartbeat,
    formatSensorType,
    getColor,
} from "../../../Helper/senser";
import TilesHeader from "../../TilesHeader";
import { styles } from "./styles";
import AppConstant from "../../../Themes/appConstant";
import {
    getChannelsOutOfRange,
    getHeaderColor,
} from "../../../Helper/particlecounters";

const SensorPcCard = ({ item, index, listArray }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const [selectedItemForPC, setSelectedItemForPC] = useState(null);
    const [selectedItemForHoldSensorForPc, setSelectedItemforHoldSensorForPc] =
        useState(null);
    const [selectedActiveAlarmForPC, setSelectedActiveAlarmForPC] =
        useState(null);
    const [selectedTimeoutAlarmForPC, setSelectedTimeoutAlarmForPC] =
        useState(null);
    const [selectedOutRangeAlarmForPC, setSelectedOutRangeAlarmForPC] =
        useState(null);

    let unit = item?.unit?.S;
    let heartbeat = item?.heartbeat?.N;
    let rangeMax = item?.rangeMax?.N;
    let alarmOn = item?.alarmOn?.BOOL;
    let alarmType = item?.alarmType?.S;
    let hasEscalation = item?.hasEscalation?.BOOL;
    let schedule = item?.schedule?.M;
    const heartbeats = item?.heartbeats.M;
    const rangeMaxAll = item?.rangeMaxAll.M;
    const particleSizes = item?.particleSizes.M;
    const lastHeartbeat = item?.lastHeartbeat.N;
    const lastHeartbeatDate = new Date(parseInt(lastHeartbeat, 10));
    const dateNow = Date.now();
    const lastUpdate = formatDistanceStrict(lastHeartbeatDate, dateNow);
    const channelValues = getChannelsOutOfRange(heartbeats, rangeMaxAll);
    const backgroundColor = getHeaderColor({
        heartbeats,
        rangeMaxAll,
        alarmOn,
        schedule,
    });

    const showTooltip = selectedItemForPC == index;
    const showSensorHoldTooltip = selectedItemForHoldSensorForPc == index;
    const showActiveAlarm = selectedActiveAlarmForPC == index;
    const showTimeoutAlarm = selectedTimeoutAlarmForPC == index;
    const showOutRangeAlarm = selectedOutRangeAlarmForPC == index;

    const handlePressOnHoldSensor = () => {
        setSelectedItemforHoldSensorForPc(index);
    };

    const handlePress = () => {
        setSelectedItemForPC(index);
    };
    const handlePressOnActiveAlarm = () => {
        setSelectedActiveAlarmForPC(index);
    };
    const handlePressOnATimeoutAlarm = () => {
        setSelectedTimeoutAlarmForPC(index);
    };
    const handlePressOutRangeActiveAlaram = () => {
        setSelectedOutRangeAlarmForPC(index);
    };

    return (
        <View style={styles.mainParticular}>
            <View
                style={[
                    styles.greenViewParticular,
                    { backgroundColor: backgroundColor },
                ]}
            >
                <TilesHeader
                    lastOddItem={true}
                    item={item}
                    handlePressOnHoldSensor={handlePressOnHoldSensor}
                    showSensorHoldTooltip={showSensorHoldTooltip}
                    showActiveAlarm={showActiveAlarm}
                    showTimeoutAlarm={showTimeoutAlarm}
                    showOutRangeAlarm={showOutRangeAlarm}
                    onCloseHoldSensor={() => setSelectedItemforHoldSensorForPc(null)}
                    alarmOn={alarmOn}
                    alarmType={alarmType}
                    hasEscalation={hasEscalation}
                    handlePressOutRangeActiveAlaram={handlePressOutRangeActiveAlaram}
                    backgroundColor={backgroundColor}
                    onCloseOutRangeAlaram={() => setSelectedOutRangeAlarmForPC(null)}
                    onCloseTimeoutAlarm={() => setSelectedTimeoutAlarmForPC(null)}
                    handlePressOnActiveAlarm={handlePressOnActiveAlarm}
                    onCloseActiveAlarm={() => setSelectedActiveAlarmForPC(null)}
                    handlePress={handlePress}
                    showTooltip={showTooltip}
                    onCloseSelectedItem={() => setSelectedItemForPC(null)}
                    fadeAnim={fadeAnim}
                />
            </View>
            <View style={styles.whiteView}>
                <View style={styles.containerThreeRows}>
                    <View style={styles.row}>
                        {channelValues.map(
                            ({ channel, value, maxRange, outOfRange }, index) => {
                                return (
                                    <View style={styles.particularTextView}>
                                        <Text
                                            style={styles.particleSize}
                                        >{`${particleSizes[channel].N} μm`}</Text>
                                        <Text style={styles.middleText}>{value.N}</Text>
                                        <Text
                                            style={styles.rangeMaxVell}
                                        >{`Max: ${maxRange.N}`}</Text>
                                    </View>
                                );
                            }
                        )}
                    </View>
                </View>
                <Text
                    style={styles.lastUpdateParticular}
                >{`${AppConstant.lastUpdate} ${lastUpdate} ago`}</Text>
            </View>
        </View>
    );
};

export default SensorPcCard;
