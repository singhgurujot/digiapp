import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AppConstant from "../../Themes/appConstant";
import { styles } from "./styles";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} delayPressIn={0}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
