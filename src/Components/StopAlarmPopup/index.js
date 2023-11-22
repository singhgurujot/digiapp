import { View, Text, TouchableOpacity, Image, Modal } from 'react-native'
import { styles } from './styles'
import AppConstant from '../../Themes/appConstant';
import appColors from '../../Themes/colors';
import AppImages from '../../Themes/appImages';
import CustomTextInput from '../CustomTextInput';

const StopAlarmPopup = ({ visible, onRequestClose, onPressCrossIcon, handleOnChangeDescription, handleStopAlarm, value }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}>
            <View style={styles.centeredView}>
                <View style={styles.descriptionView}>
                    <View style={styles.descriptionAndCross}>
                        <Text style={styles.description}>
                            {AppConstant.description}
                        </Text>
                        <TouchableOpacity
                            onPress={onPressCrossIcon}>
                            <Image
                                source={AppImages.crossImage}
                                style={styles.crossImage}
                            />
                        </TouchableOpacity>
                    </View>
                    <CustomTextInput
                        description={true}
                        value={value}
                        onChange={handleOnChangeDescription}
                        placeholderText={AppConstant.typeSomethingHere}
                        placeholderTextColor={appColors.grey}
                    />
                    <TouchableOpacity
                        // onPress={() => setModalVisible(!modalVisible)}
                        onPress={handleStopAlarm}
                        style={styles.buttonOK}>
                        <Text style={styles.ok}>{AppConstant.stopAlarm}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

export default StopAlarmPopup;