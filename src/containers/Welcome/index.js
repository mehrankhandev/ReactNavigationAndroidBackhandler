import React from "react";
import { View, Text, Button } from "react-native";

export default class Welcome extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ marginBottom: 16 }}>Welcome Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Detail")}
          title="Go To Detail Screen"
        />
      </View>
    );
  }
}
