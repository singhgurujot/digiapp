import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { styles } from "./styles";
import AppConstant from "../../Themes/appConstant";
import appColors from "../../Themes/colors";

const ConfirmationPopup = ({
  visible,
  onRequestClose,
  onPressNoButton,
  onPressYesButton,
}) => {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}
      >
        <View style={styles.centeredView2}>
          <View style={styles.blueView}>
            <Text style={styles.areYouSure}>{AppConstant.confirmation}</Text>
            <Text style={styles.areYouSure1}>{AppConstant.areYouSure}</Text>
            <View
              style={[
                styles.lineView,
                { backgroundColor: appColors.appBlueColor },
              ]}
            />
            <View style={styles.yesAndNoView}>
              <TouchableOpacity
                style={[styles.yesAndNoButtton]}
                delayPressIn={0}
                onPress={onPressNoButton}
              >
                <Text
                  style={[styles.yesAndNo, { color: appColors.appBlueColor }]}
                >
                  {AppConstant.no}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.yesAndNoButtton,
                  { backgroundColor: appColors.appBlueColor },
                ]}
                delayPressIn={0}
                onPress={onPressYesButton}
              >
                <Text style={styles.yesAndNo}>{AppConstant.yes}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ConfirmationPopup;
