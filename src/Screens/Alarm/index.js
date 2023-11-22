import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { styles } from "./style";
import AppConstant from "../../Themes/appConstant";
import appColors from "../../Themes/colors";
import { setLoader } from "../../Redux/slices/commonSlice";
import { Loader } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { apiMethods } from "../../Helper/api";
import { useIsFocused } from "@react-navigation/native";
import WalkthroughTooltip from "react-native-walkthrough-tooltip";

const Alarm = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [buttonStates, setButtonStates] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [sensorsData, setSensorData] = useState([]);
  const [toggleIndex, setToggleIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [holdSensor, setHoldSensor] = useState(null);
  const { onLoad } = useSelector((data) => data.commonData);
  const { access_Token, user_Id } = useSelector(
    (data) => data.loginData.loginrespons
  );

  useEffect(() => {
    dispatch(setLoader(true));
    getAlarmData();
  }, [isFocused]);

  const getAlarmData = async () => {
    const sensorRespons = await apiMethods.getSensorsData(
      access_Token,
      dispatch
    );
    setSensorData(sensorRespons);
  };

  const updateSensorData = (updatedData) => {
    let arr = sensorsData;
    const index = arr.findIndex(
      (element) => element.txid.S === updatedData.txid.S
    );
    if (index !== -1) {
      arr[index] = updatedData;
    }
    setSensorData([...arr]);
  };

  const handleButtonToggle = async (index) => {
    dispatch(setLoader(true));
    let responseData = await apiMethods.closeAlarm(
      access_Token,
      selectedItem,
      holdSensor,
      dispatch
    );
    if (responseData) {
      updateSensorData(responseData);
    }
  };

  const confirmationView = () => {
    return (
      showConfirmation && (
        <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={showConfirmation}
            onRequestClose={() => {
              setModalVisible(!showConfirmation);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.blueView}>
                <Text style={styles.confirmation}>
                  {AppConstant.confirmation}
                </Text>
                <View
                  style={[
                    styles.lineView,
                    { backgroundColor: appColors.yellow },
                  ]}
                />
                <Text style={styles.areYouSure}>{AppConstant.areYouSure}</Text>
                <View
                  style={[
                    styles.lineView,
                    { backgroundColor: appColors.lightGreen },
                  ]}
                />
                <View style={styles.yesAndNoView}>
                  <TouchableOpacity
                    onPress={() => {
                      setShowConfirmation(!showConfirmation);
                      setTimeout(() => {
                        handleButtonToggle(toggleIndex);
                      }, 50);
                    }}
                  >
                    <Text style={styles.yesAndNo}>{AppConstant.yes}</Text>
                  </TouchableOpacity>
                  <View style={styles.heightView} />
                  <TouchableOpacity
                    onPress={() => setShowConfirmation(!showConfirmation)}
                  >
                    <Text style={styles.yesAndNo}>{AppConstant.no}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      )
    );
  };

  const switchButton = (index, onHold, item, isButtonToggled) => {
    return (
      <TouchableOpacity
        delayPressIn={0}
        style={[
          styles.switchContainer,
          onHold ? styles.switchOn : styles.switchOff,
          // isButtonToggled ? styles.switchOn : styles.switchOff,
        ]}
        activeOpacity={0.8}
        onPress={() => {
          setHoldSensor(onHold);
          setSelectedItem(item);
          setToggleIndex(index);
          setShowConfirmation(!showConfirmation);
        }}
      >
        <View
          style={[
            styles.thumb,
            onHold ? styles.thumbOn : styles.thumbOff,
            // isButtonToggled ? styles.thumbOn : styles.thumbOff,
          ]}
        />
      </TouchableOpacity>
    );
  };

  const dataAndValue = (data, value, name, index) => {
    const showTooltip = selectedIndex == index;

    const handlePress = () => {
      setSelectedIndex(index);
    };
    return (
      <View style={styles.dataAndValue}>
        <Text style={styles.data}>{data}</Text>

        {name ? (
          <TouchableOpacity style={{ width: "100%" }} onPress={handlePress}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={[styles.value, { fontWeight: name ? "700" : "600" }]}
            >
              {value}
            </Text>
            {showTooltip && (
              <WalkthroughTooltip
                isVisible={true}
                content={<Text>{value}</Text>}
                showChildInTooltip={false}
                onClose={() => setSelectedIndex(null)}
              >
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={[styles.value, { fontWeight: name ? "700" : "600" }]}
                >
                  {""}
                </Text>
              </WalkthroughTooltip>
            )}
          </TouchableOpacity>
        ) : (
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={[styles.value, { fontWeight: name ? "700" : "600" }]}
          >
            {value}
          </Text>
        )}
      </View>
    );
  };

  const Item = ({ item, index }) => {
    const isButtonToggled = buttonStates[index];
    let name = item?.name.S;
    let txid = item?.txid.S;
    let location = item?.location.S;
    let rangeMin = item?.rangeMin.N;
    let rangeMax = item?.rangeMax.N;
    let alarmOn = item?.alarmOn.BOOL;
    return (
      <View style={styles.container}>
        {dataAndValue(AppConstant.name, name, (name = true), index)}
        {dataAndValue(AppConstant.id, txid, false, index)}
        {dataAndValue(AppConstant.location, location, false, index)}
        {dataAndValue(AppConstant.rangeMin, rangeMin, false, index)}
        {dataAndValue(AppConstant.rangeMix, rangeMax, false, index)}
        <View style={styles.switchAndText}>
          {alarmOn ? (
            <Text style={styles.onAndOff}>{AppConstant.on}</Text>
          ) : (
            <Text style={styles.onAndOff}>{AppConstant.off}</Text>
          )}
          {switchButton(index, alarmOn, item, isButtonToggled)}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <Header />
      <Loader loading={onLoad} />
      <View style={styles.headerBelowView}>
        <Text style={styles.sensorsText}>{AppConstant.alarm}</Text>
        <FlatList
          data={sensorsData}
          extraData={sensorsData}
          renderItem={Item}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{
            paddingBottom: 150,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {confirmationView()}
    </View>
  );
};

export default Alarm;
