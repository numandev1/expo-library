import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

class ExampleComponent extends Component {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <Text>{text}</Text>
      </View>
    );
  }
}

export { ExampleComponent };

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItemsL:"center"
  }
});
