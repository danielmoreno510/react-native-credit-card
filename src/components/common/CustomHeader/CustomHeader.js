import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Header, Left, Body, Right } from "native-base";

import Text from "../CustomText";
import styles from "./styles";

const CustomHeader = ({ title, back, goMenu }) => {

  return (
    <Header style={{ backgroundColor: "#583e9e" }}>
      <Left>
        <TouchableOpacity onPress={() => (back ? {} : goMenu())}>
          {back ? (
            <Text style={styles.back}>{"< Back"}</Text>
          ) : (
            <View style={[styles.menu]}>
              <View style={styles.line}></View>
              <View style={styles.line}></View>
              <View style={styles.line}></View>
            </View>
          )}
        </TouchableOpacity>
      </Left>
      <Body style={{ flex: 3 }}>
        <Text style={styles.title}>{title}</Text>
      </Body>
      <Right></Right>
    </Header>
  );
};

export default CustomHeader;
