import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";
import React from "react";
import NoDataGif from "../../JSON/noDataGif1.json";
// import Lottie from "lottie-react-native";
import { fontSize, fontWeight } from "../../Themes/Fonts";
import appColors from "../../Themes/colors";

const NoDataFound = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get("screen").height,
      }}
    >
      {/* <Lottie
                source={NoDataGif}
                autoPlay
                loop
                style={{ height: 200, width: 200, borderRadius: 100,bottom:50 }}
            /> */}
      <Text style={styles.notFount}>Not Found</Text>
    </View>
  );
};

export default NoDataFound;

const styles = StyleSheet.create({
  headingTextStyle: {
    fontSize: fontSize.F20,
    fontWeight: fontWeight.FW600,
    color: appColors.threeESeven,
    lineHeight: 25,
  },
  notFount: {
    marginBottom: Dimensions.get("screen").height * 0.3,
    fontWeight: "400",
    fontSize: 20,
  },
});
