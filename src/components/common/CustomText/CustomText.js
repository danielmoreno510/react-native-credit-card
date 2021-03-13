import React from "react";
import { Text } from "react-native";
import {
  useFonts,
  Hind_300Light,
  Hind_500Medium,
  Hind_700Bold,
} from "@expo-google-fonts/hind";

const CustomText = ({
  style,
  bold = false,
  light = false,
  children,
  onPress,
  selectable = false,
}) => {
  const [fontsLoaded] = useFonts({
    Hind_300Light,
    Hind_500Medium,
    Hind_700Bold,
  });
  let fontFamily = "Hind_500Medium";
  light && (fontFamily = "Hind_300Light");
  bold && (fontFamily = "Hind_700Bold");

  return (
    <Text
      style={[style, fontsLoaded && { fontFamily }]}
      onPress={onPress}
      selectable={selectable}
    >
      {children}
    </Text>
  );
};

export default CustomText;
