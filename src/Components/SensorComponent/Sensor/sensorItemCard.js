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

const SensorItemCard = ({ item, index, listArray, handleStopAlarm }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemForHoldSensor, setSelectedItemforHoldSensor] =
        useState(null);
    const [selectedActiveAlarm, setSelectedActiveAlarm] = useState(null);
    const [selectedTimeoutAlarm, setSelectedTimeoutAlarm] = useState(null);
    const [selectedOutRangeAlarm, setSelectedOutRangeAlarm] = useState(null);
    const HEARTBEAT_TIMEOUT = 30 * 60 * 1000; // 30 minutes
    let lastOddItem =
        index === listArray.length - 1 && listArray.length % 2 !== 0;
    const lastHeartbeat = item?.lastHeartbeat.N
        ? parseInt(item.lastHeartbeat.N, 10)
        : Date.now();

    const lastUpdate = formatDistanceStrict(lastHeartbeat, Date.now());
    let unit = item?.unit?.S;
    let heartbeat = item?.heartbeat?.N;
    let rangeMin = item?.rangeMin?.N;
    let rangeMax = item?.rangeMax?.N;
    let alarmOn = item?.alarmOn?.BOOL;
    let alarmType = item?.alarmType?.S;
    let hasEscalation = item?.hasEscalation?.BOOL;
    const backgroundColor = getColor({
        heartbeat,
        unit,
        rangeMin,
        rangeMax,
        alarmOn,
    });
    const lastHeartbeatDate = new Date(parseInt(lastHeartbeat, 10));
    const dateNow = Date.now();
    const lastUpdateTimeout = dateNow - lastHeartbeatDate > HEARTBEAT_TIMEOUT;

    const showTooltip = selectedItem == index;
    const showSensorHoldTooltip = selectedItemForHoldSensor == index;
    const showActiveAlarm = selectedActiveAlarm == index;
    const showTimeoutAlarm = selectedTimeoutAlarm == index;
    const showOutRangeAlarm = selectedOutRangeAlarm == index;

    const handlePressOnHoldSensor = () => {
        setSelectedItemforHoldSensor(index);
    };

    const handlePress = () => {
        setSelectedItem(index);
    };
    const handlePressOnActiveAlarm = () => {
        setSelectedActiveAlarm(index);
    };
    const handlePressOnATimeoutAlarm = () => {
        setSelectedTimeoutAlarm(index);
    };
    const handlePressOutRangeActiveAlaram = () => {
        setSelectedOutRangeAlarm(index);
    };

    return (
        <View
            style={[
                styles.container,
                { flex: listArray.length == 1 ? 1 : lastOddItem ? 0.5 : 1 },
            ]}
        >
            <View
                style={[
                    styles.greenView,
                    {
                        backgroundColor: backgroundColor,
                    },
                ]}
            >
                <TilesHeader
                    lastOddItem={lastOddItem}
                    item={item}
                    handlePressOnHoldSensor={handlePressOnHoldSensor}
                    showSensorHoldTooltip={showSensorHoldTooltip}
                    showActiveAlarm={showActiveAlarm}
                    showTimeoutAlarm={showTimeoutAlarm}
                    showOutRangeAlarm={showOutRangeAlarm}
                    onCloseHoldSensor={() => setSelectedItemforHoldSensor(null)}
                    alarmOn={alarmOn}
                    alarmType={alarmType}
                    hasEscalation={hasEscalation}
                    handlePressOutRangeActiveAlaram={handlePressOutRangeActiveAlaram}
                    backgroundColor={backgroundColor}
                    onCloseOutRangeAlaram={() => setSelectedOutRangeAlarm(null)}
                    onCloseTimeoutAlarm={() => setSelectedTimeoutAlarm(null)}
                    handlePressOnActiveAlarm={handlePressOnActiveAlarm}
                    onCloseActiveAlarm={() => setSelectedActiveAlarm(null)}
                    handlePress={handlePress}
                    showTooltip={showTooltip}
                    onCloseSelectedItem={() => setSelectedItem(null)}
                    fadeAnim={fadeAnim}
                />
            </View>
            <Text
                style={[
                    styles.temp,
                    {
                        marginTop: 9,
                        marginBottom: null,
                    },
                ]}
            >
                {formatSensorType(unit)}
            </Text>
            <Text
                style={[
                    styles.tempValue,
                    {
                        color: "rgba(0, 0, 0, 0.87)",
                    },
                    {
                        fontSize: 27,
                        // formatHeartbeat(heartbeat, unit) === 'Not Av.' ? 27 : 32,
                    },
                ]}
            >
                {formatHeartbeat(heartbeat, unit)}
            </Text>
            <View
                style={[
                    styles.minAndMaxView,
                    {
                        paddingHorizontal:
                            formatHeartbeat(heartbeat, unit) === "Not Av."
                                ? 5
                                : listArray.length == 1
                                    ? 70
                                    : 10,
                        marginVertical: 5,
                    },
                ]}
            >
                <Text style={styles.textMinAndMax}>
                    {AppConstant.min} {item?.rangeMin?.N}
                </Text>
                <Text style={styles.textMinAndMax}>
                    {AppConstant.max} {item?.rangeMax?.N}
                </Text>
            </View>
            <Text
                style={lastUpdateTimeout ? styles.errorText : styles.lastUpdate}
                numberOfLines={1}
                ellipsizeMode="tail"
            >
                {AppConstant.lastUpdate}
                {`${lastUpdate} ago`}
            </Text>
            {alarmOn && (
                <TouchableOpacity
                    delayPressIn={0}
                    style={styles.stopIconButton}
                    onPress={() => handleStopAlarm(item)}
                >
                    <Text style={styles.stop}>{AppConstant.stopAlarm}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default SensorItemCard;
