import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {AppConstant} from '../../Themes/appConstants';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from '../../Themes/colors';
import appColors from '../../Themes/colors';
import AppImages from '../../Themes/appImages';

const CustomDropDown = props => {
  const {
    placeHolder,
    selectedValue,
    openDropDown,
    opacity,
    placeHolderFontWeight,
    placeholder,
    showPlaceHolder,
    placeHolderColor,
    zIndex,
    zIndexReverse,
    open,
    setOpen,
    items,
    setItems,
    disabled,
    value,
    setValue,
    onSelectItem,
    height,
    dropDownDirection,
    label,
    required,
    listMode,
    paymentScreen,
    modal,
    error,
    width,
  } = props;
  // const [value, setValue] = useState(null);

  return (
    <View style={{width: width ? width : '40%'}}>
      <DropDownPicker
        open={open}
        value={value}
        dropDownDirection={dropDownDirection}
        items={items}
        modal={modal}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeHolder={value && showPlaceHolder}
        placeholder={placeholder}
        itemSeparator={true}
        disabled={disabled}
        zIndex={zIndex}
        searchable={false}
        zIndexInverse={zIndexReverse}
        placeholderStyle={{
          color: appColors.white,
          fontWeight: placeHolderFontWeight ? placeHolderFontWeight : 'bold',
        }}
        style={{
          borderColor: appColors.appBlueColor,
          borderRadius: 5,
          backgroundColor: appColors.appBlueColor,
          height: 50,
          marginLeft: 5,
        }}
        dropDownContainerStyle={{
          borderColor: appColors.appBlueColor,
          marginLeft: 5,
        }}
        selectedItemContainerStyle={{
          backgroundColor: Colors.themeBlueColor,
        }}
        textStyle={{color: appColors.white, fontSize: 14, fontWeight: '500'}}
        // renderListItem={(props) => renderListItem(props)}
        dropDownStyle={{elevation: 999}}
        listMessageContainerStyle={{
          backgroundColor: 'rgb(195,195,195)',
        }}
        itemSeparatorStyle={{
          backgroundColor: appColors.appBlueColor,
        }}
        listItemLabelStyle={{color: appColors.appBlueColor}}
        selectedItemLabelStyle={{
          fontWeight: 'bold',
          fontSize: 16,
          color: appColors.appBlueColor,
        }}
        ArrowUpIconComponent={({style}) => (
          <Image source={AppImages.dropdownIcon} style={styles.downIcon} />
        )}
        ArrowDownIconComponent={({style}) => (
          <Image source={AppImages.dropdownIcon} style={styles.icon} />
        )}
        disabledStyle={{
          opacity: 0.5,
        }}
        onSelectItem={onSelectItem}
        listMode="SCROLLVIEW"
        scrollViewProps={{
          nestedScrollEnabled: true,
        }}
        searchTextInputStyle={{
          borderWidth: 1,
        }}
        searchTextInputProps={{autoFocus: true}}
      />
      {/* {error && <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>} */}
    </View>
  );
};

export default CustomDropDown;
