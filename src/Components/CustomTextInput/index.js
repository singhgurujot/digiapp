import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";

const CustomTextInput = ({
  value,
  onChange,
  icon1,
  icon2,
  icon3,
  setSeePass,
  seePass,
  searchBar,
  placeholderText,
  visible,
  description,
  inputMode,
  placeholderTextColor,
  width,
  ...rest
}) => {
  return !description && !searchBar ? (
    <View style={styles.mainView}>
      <Image source={icon1} style={styles.icon1} />
      <TextInput
        onChangeText={onChange}
        value={value}
        style={styles.textInput}
        placeholder={placeholderText}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={visible}
        inputMode={inputMode}
        {...rest}
      />
      {icon2 && (
        <TouchableOpacity delayPressIn={0} onPress={() => setSeePass(!seePass)}>
          <Image
            source={!seePass ? icon2 : icon3}
            style={!seePass ? styles.icon2 : styles.icon3}
          />
        </TouchableOpacity>
      )}
    </View>
  ) : searchBar ? (
    <View style={[styles.searchBarMainView, { width: width && width }]}>
      <TextInput
        onChangeText={onChange}
        value={value}
        style={styles.textInputSearchBar}
        placeholder={placeholderText}
        placeholderTextColor={placeholderTextColor}
      />
      <Image source={icon1} style={styles.search} />
    </View>
  ) : (
    <View>
      <TextInput
        onChangeText={onChange}
        value={value}
        style={styles.textInputDescription}
        placeholder={placeholderText}
        placeholderTextColor={placeholderTextColor}
        inputMode={inputMode}
        multiline={true}
      />
    </View>
  );
};

export default CustomTextInput;
