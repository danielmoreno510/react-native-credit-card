import React from "react";
import { TextInput } from "react-native";
import { useFonts, Hind_500Medium } from "@expo-google-fonts/hind";

import styles from "./styles";

const CustomInput = ({
  style,
  placeholder,
  value,
  onChangeText,
  onFocus,
  onBlur,
  secureTextEntry,
  keyboardType,
  refer
}) => {
  const [fontsLoaded] = useFonts({ Hind_500Medium });

  return (
    <TextInput
      style={[style, fontsLoaded && styles.font]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onFocus={onFocus}
      onBlur={onBlur}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      placeholderTextColor={"#aaaaaa"}
      ref={refer}
    />
  );
};

export default CustomInput;
