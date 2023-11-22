import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./styles";
import AppImages from "../../Themes/appImages";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import AppConstant from "../../Themes/appConstant";
import { DataManager } from "../../Helper/dataManager";
import { useSelector } from "react-redux";
import {
  clearAllDashboardData,
  saveUserInfo,
  updateSelectedFilterValue,
} from "../../Redux/slices/dashBoardSlice";
import { saveLoginData } from "../../Redux/slices/loginSlice";
import useAccount from "../../Utils/account";

export const Header = ({ clientName }) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [childrenIds, setChildrenIds] = useState("");
  const { userInfo } = useSelector((data) => data.dashBoardData);
  const { signOut } = useAccount();

  let userName = `${userInfo?.Items[0]?.firstName?.S} ${userInfo?.Items[0]?.lastName?.S}`;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSignOut = useCallback(() => {
    toggleModal()
    signOut();
    // navigation.navigate("Login");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  }, [signOut]);

  const _renderModalview = () => {
    return (
      <View onTouchEnd={() => setModalVisible(!isModalVisible)}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setModalVisible(!isModalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View
              onTouchEnd={(e) => {
                e.stopPropagation();
                setModalVisible(true);
              }}
              style={styles.blueHeader}
            >
              <Image
                source={AppImages.profileIcon}
                style={styles.profileIcon}
              />
              <View>
                <Text style={styles.profileName}>{userName}</Text>
              </View>
            </View>
            <View style={styles.belowHeaderView}>
              <TouchableOpacity
                delayPressIn={0}
                // onPress={() => {
                //   setModalVisible(!isModalVisible);
                //   DataManager.removeData();
                //   dispatch(
                //     updateSelectedFilterValue({
                //       data: "",
                //       key: "firstFilterSelectedvalue",
                //     })
                //   );
                //   dispatch(
                //     updateSelectedFilterValue({
                //       data: "",
                //       key: "secondFilterSelectedvalue",
                //     })
                //   );
                //   dispatch(
                //     saveLoginData({
                //       key: "access_Token",
                //       data: null,
                //     })
                //   );
                //   navigation.navigate("Login");
                // }}
                onPress={handleSignOut}
              >
                <Text style={styles.textwhiteViewModal}>
                  {AppConstant.logout}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.headerView}>
        <View style={styles.drawerAndCircleView}>
          <TouchableOpacity
            delayPressIn={0}
            onPress={() => navigation.openDrawer()}
          >
            <Image source={AppImages.drawer} style={styles.drawer} />
          </TouchableOpacity>
          <Image source={AppImages.brandIcon} style={styles.blueCircle} />
          <Text style={{ fontSize: 14, fontWeight: '500' }}>{clientName == 'All' ? '' : clientName}</Text>
        </View>
        <TouchableOpacity delayPressIn={0} onPress={() => toggleModal()}>
          <Image source={AppImages.profile} style={styles.blueCircle} />
        </TouchableOpacity>
      </View>
      {isModalVisible && _renderModalview()}
    </View>
  );
};
