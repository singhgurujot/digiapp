import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { Header } from "../../Components/Header";
import { styles } from "./styles";
import AppConstant from "../../Themes/appConstant";
import appColors from "../../Themes/colors";
import { Loader } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import WalkthroughTooltip from "react-native-walkthrough-tooltip";
import NoDataFound from "../../Components/NoDatFound";
import useSensorInfo from "../../Utils/sensorInfo";

const Sensors = () => {
  const dispatch = useDispatch();
  const [buttonStates, setButtonStates] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [toggleIndex, setToggleIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [holdSensor, setHoldSensor] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { onLoad } = useSelector((data) => data.commonData);

  const {
    sensorListData,
    firstFilterSelectedvalue,
    secondFilterSelectedvalue,
    userInfo,
    filteredSensorData,
    filteredPCSensorData,
    searchValue
  } = useSelector((data) => data.dashBoardData);
  const {
    superClient,
    clientNameList,
    clientFloorsList,
    selectedClientName,
    selectedClientFloors
  } = useSelector((data) => data.superClients);
  const {
    pcSensors,
  } = useSelector((data) => data.pcSensor);

  const role = userInfo?.Items[0]?.role?.S;
  // const role = 'superuser';


  const { sensorOnHold } = useSensorInfo();


  const handleButtonToggle = async (index) => {
    sensorOnHold(selectedItem, holdSensor, sensorListData)
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
                <Text style={styles.areYouSure}>
                  {AppConstant.confirmation}
                </Text>
                <Text style={styles.areYouSure1}>{AppConstant.areYouSure}</Text>
                <View
                  style={[
                    styles.lineView,
                    { backgroundColor: appColors.lightGreen },
                  ]}
                />
                <View style={styles.yesAndNoView}>
                  <TouchableOpacity
                    style={[styles.yesAndNoButtton]}
                    onPress={() => setShowConfirmation(!showConfirmation)}
                  >
                    <Text
                      style={[
                        styles.yesAndNo,
                        { color: appColors.appBlueColor },
                      ]}
                    >
                      {AppConstant.no}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.yesAndNoButtton,
                      { backgroundColor: appColors.appBlueColor },
                    ]}
                    onPress={() => {
                      setShowConfirmation(!showConfirmation);
                      setTimeout(() => {
                        handleButtonToggle(toggleIndex);
                      }, 50);
                    }}
                  >
                    <Text style={[styles.yesAndNo]}>{AppConstant.yes}</Text>
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
    let name = item?.name?.S;
    let txid = item?.txid?.S;
    let location = item?.location?.S;
    let rangeMin = item?.rangeMin?.N;
    let rangeMax = item?.rangeMax?.N;
    let onHold = item?.onHold?.BOOL;
    return (
      <View style={styles.container}>
        {dataAndValue(AppConstant.name, name, (name = true), index)}
        {dataAndValue(AppConstant.id, txid, false, index)}
        {dataAndValue(AppConstant.location, location, false, index)}
        {dataAndValue(AppConstant.rangeMin, rangeMin, false, index)}
        {dataAndValue(AppConstant.rangeMix, rangeMax, false, index)}
        <View style={styles.switchAndText}>
          {onHold ? (
            <Text style={styles.onAndOff}>{AppConstant.onHold}</Text>
          ) : (
            <Text style={styles.onAndOff}>{AppConstant.OffHold}</Text>
          )}
          {switchButton(index, onHold, item, isButtonToggled)}
        </View>
      </View>
    );
  };

  const renderSuperUserView = () => {
    // let mergedArr = [...filteredSensorData, ...filteredPCSensorData]
    if (selectedClientName !== 'All' || searchValue.length > 0) {
      return (
        <>
          {
            filteredSensorData.length > 0 ? (
              <View style={styles.headerBelowView}>
                <View style={styles.sensorTextView}>
                  <Text
                    style={styles.sensorsText}
                  >{`${AppConstant.sensors}`}</Text>
                </View>
                <FlatList
                  data={filteredSensorData}
                  extraData={filteredSensorData}
                  renderItem={Item}
                  keyExtractor={(item) => item.txid.S}
                  numColumns={2}
                  contentContainerStyle={{
                    paddingBottom: 150,
                  }}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            ) : (
              <NoDataFound />
            )
          }




        </>
      )
    } else {
      return (
        <>
          {sensorListData.length > 0 ? (
            <View style={styles.headerBelowView}>
              <View style={styles.sensorTextView}>
                <Text
                  style={styles.sensorsText}
                >{`${AppConstant.sensors}`}</Text>
              </View>
              <FlatList
                data={sensorListData}
                extraData={sensorListData}
                renderItem={Item}
                keyExtractor={(item) => item.txid.S}
                numColumns={2}
                contentContainerStyle={{
                  paddingBottom: 150,
                }}
                showsVerticalScrollIndicator={false}
              />
            </View>
          ) : (
            <NoDataFound />
          )}
        </>
      )
    }
  }

  const renderOtherView = () => {
    if (firstFilterSelectedvalue !== 'All' || searchValue.length > 0) {
      return (
        <>
          {
            filteredSensorData.length > 0 ? (
              <View style={styles.headerBelowView}>
                <View style={styles.sensorTextView}>
                  <Text
                    style={styles.sensorsText}
                  >{`${AppConstant.sensors}`}</Text>
                </View>
                <FlatList
                  data={filteredSensorData}
                  extraData={filteredSensorData}
                  renderItem={Item}
                  keyExtractor={(item) => item.txid.S}
                  numColumns={2}
                  contentContainerStyle={{
                    paddingBottom: 150,
                  }}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            ) : (
              <NoDataFound />
            )
          }
        </>
      )
    } else {
      return (
        <>
          {sensorListData.length > 0 ? (
            <View style={styles.headerBelowView}>
              <View style={styles.sensorTextView}>
                <Text
                  style={styles.sensorsText}
                >{`${AppConstant.sensors}`}</Text>
              </View>
              <FlatList
                data={sensorListData}
                extraData={sensorListData}
                renderItem={Item}
                keyExtractor={(item) => item.txid.S}
                numColumns={2}
                contentContainerStyle={{
                  paddingBottom: 150,
                }}
                showsVerticalScrollIndicator={false}
              />
            </View>
          ) : (
            <NoDataFound />
          )}
        </>
      )
    }
  }

  return (
    <View style={styles.mainView}>
      {
        role == 'superuser' ?
          <Header dispatch={dispatch} clientName={selectedClientName} />
          :
          <Header dispatch={dispatch} clientName={firstFilterSelectedvalue} />
      }
      <Loader loading={onLoad} />
      {
        role == 'superuser' ?
          renderSuperUserView()
          :
          renderOtherView()
      }
      {confirmationView()}
    </View>
  );
};

export default Sensors;
