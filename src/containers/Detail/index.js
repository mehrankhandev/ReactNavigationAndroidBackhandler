import React from "react";
import { View, Text } from "react-native";

export default class Detail extends React.Component {
  static navigationOptions = {
    title: "Detail"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detail Screen</Text>
      </View>
    );
  }
}
