import { useRef } from "react";
import { View, TouchableOpacity, Text, Image, Animated } from "react-native";
import { styles } from "./styles";
import AppImages from "../../Themes/appImages";
import WalkthroughTooltip from "react-native-walkthrough-tooltip";
import AppConstant from "../../Themes/appConstant";

const getAlarmIcon = (hasEscalation, alarmType) => {
  if (alarmType === "timeout") {
    return "wifi";
  }

  if (alarmType === "lowBattery") {
    return AppImages.batteryAlert;
  }

  return "noImage";
};

const getHeaderIcon = (alarmOn, alarmType, hasEscalation) => {
  if (alarmOn) {
    return getAlarmIcon(hasEscalation, alarmType);
  }

  return AppImages.tick;
};

const TilesHeader = ({
  lastOddItem,
  item,
  handlePressOnHoldSensor,
  showSensorHoldTooltip,
  showActiveAlarm,
  showTimeoutAlarm,
  showOutRangeAlarm,
  onCloseHoldSensor,
  alarmOn,
  alarmType,
  hasEscalation,
  handlePressOutRangeActiveAlaram,
  backgroundColor,
  onCloseOutRangeAlaram,
  onCloseTimeoutAlarm,
  handlePressOnActiveAlarm,
  onCloseActiveAlarm,
  handlePress,
  showTooltip,
  onCloseSelectedItem,
  handlePressOnATimeoutAlarm,
  fadeAnim,
}) => {
  return (
    <View style={styles.tickAndText}>
      <View>
        {!lastOddItem && item?.onHold?.BOOL && (
          <TouchableOpacity onPress={handlePressOnHoldSensor}>
            <Image source={AppImages.ring} style={styles.ring} />
            {showSensorHoldTooltip && (
              <WalkthroughTooltip
                isVisible={true}
                content={<Text>{AppConstant.sensorOnHold}</Text>}
                showChildInTooltip={false}
                onClose={onCloseHoldSensor}
              >
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={[
                    styles.name,
                    { width: !lastOddItem ? "95%" : "100%" },
                  ]}
                >
                  {""}
                </Text>
              </WalkthroughTooltip>
            )}
          </TouchableOpacity>
        )}
        {getHeaderIcon(alarmOn, alarmType, hasEscalation) == "noImage" ? (
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              height: 20,
              width: 20,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              marginLeft: -5,
              marginRight: 5,
            }}
            onPress={handlePressOutRangeActiveAlaram}
          >
            <Text
              style={{
                color: backgroundColor,
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              !
            </Text>
            {showOutRangeAlarm && (
              <WalkthroughTooltip
                isVisible={true}
                content={
                  <Text>{`Alarm ${
                    alarmType ? "of type " + alarmType : ""
                  } active, some action is needed!`}</Text>
                }
                showChildInTooltip={false}
                onClose={onCloseOutRangeAlaram}
              >
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={[
                    styles.name,
                    { width: !lastOddItem ? "95%" : "100%" },
                  ]}
                >
                  {""}
                </Text>
              </WalkthroughTooltip>
            )}
          </TouchableOpacity>
        ) : getHeaderIcon(alarmOn, alarmType, hasEscalation) == "wifi" ? (
          <TouchableOpacity onPress={handlePressOnATimeoutAlarm}>
            <Animated.Image
              source={AppImages.wifiOffIcon}
              style={[styles.tick, { opacity: fadeAnim }]}
            />
            {showTimeoutAlarm && (
              <WalkthroughTooltip
                isVisible={true}
                content={<Text>{AppConstant.timeOutActiveAlarm}</Text>}
                showChildInTooltip={false}
                onClose={onCloseTimeoutAlarm}
              >
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={[
                    styles.name,
                    { width: !lastOddItem ? "95%" : "100%" },
                  ]}
                >
                  {""}
                </Text>
              </WalkthroughTooltip>
            )}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handlePressOnActiveAlarm}>
            <Image
              source={getHeaderIcon(alarmOn, alarmType, hasEscalation)}
              style={styles.tick}
              resizeMode="contain"
            />
            {showActiveAlarm && (
              <WalkthroughTooltip
                isVisible={true}
                content={<Text>{AppConstant.noActiveAlarm}</Text>}
                showChildInTooltip={false}
                onClose={onCloseActiveAlarm}
              >
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={[
                    styles.name,
                    { width: !lastOddItem ? "95%" : "100%" },
                  ]}
                >
                  {""}
                </Text>
              </WalkthroughTooltip>
            )}
          </TouchableOpacity>
        )}
      </View>
      <View style={{ width: "80%" }}>
        <TouchableOpacity onPress={handlePress}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.name, { width: !lastOddItem ? "95%" : "100%" }]}
          >
            {item.name.S}
          </Text>
          {showTooltip && (
            <WalkthroughTooltip
              isVisible={true}
              content={<Text>{item.name.S}</Text>}
              showChildInTooltip={false}
              onClose={onCloseSelectedItem}
            >
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[styles.name, { width: !lastOddItem ? "95%" : "100%" }]}
              >
                {""}
              </Text>
            </WalkthroughTooltip>
          )}
        </TouchableOpacity>

        <Text style={styles.id}>{item.txid.S}</Text>
      </View>

      {lastOddItem && item?.onHold?.BOOL && (
        <TouchableOpacity
          onPress={handlePressOnHoldSensor}
          style={[styles.ring2, { right: 5 }]}
        >
          <Image source={AppImages.ring} style={styles.ring} />
          {showSensorHoldTooltip && (
            <WalkthroughTooltip
              isVisible={true}
              content={<Text>{AppConstant.sensorOnHold}</Text>}
              showChildInTooltip={false}
              onClose={onCloseHoldSensor}
            >
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[styles.name, { width: !lastOddItem ? "95%" : "100%" }]}
              >
                {""}
              </Text>
            </WalkthroughTooltip>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TilesHeader;
