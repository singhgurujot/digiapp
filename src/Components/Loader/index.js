import React from "react";
import {View,Modal,ActivityIndicator,StatusBar,Platform,StyleSheet} from "react-native";
import appColors from "../../Themes/colors";

const Loader = (props) => {
  const { loading } = props;

  return (
    <Modal
      statusBarTranslucent={true}
      transparent={true}
      animationType={"none"}
      visible={loading}
      onRequestClose={() => {
        console.log("close Modal");
      }}
    >
      <View style={styles.modalBackground}>
        {Platform.OS === "ios" ? (
          <StatusBar
            style={{ flex: 1 }}
            translucent
            barStyle="light-content"
          />
        ) : null}
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            color={appColors.white}
            size={Platform.OS === "ios" ? 0 : 40}
            animating={loading}
            hidesWhenStopped={true}
          />
        </View>
      </View>
    </Modal>
  );
};
module.exports = Loader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "transparent",
  },
  activityIndicatorWrapper: {
    // backgroundColor: '#f4792080',
    height: 50,
    width: 50,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: appColors.appThemeColor,
  },
});
