import { View } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3Copy1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    <Text>Lorem ipsum…</Text><Text>Lorem ipsum…</Text><Text>Lorem ipsum…</Text><Text>Lorem ipsum…</Text><Text>Lorem ipsum…</Text><Text>Lorem ipsum…</Text><Text>Lorem ipsum…</Text><Text>Lorem ipsum…</Text><Text>Lorem ipsum…</Text><View></View><View></View><View></View><View></View><View></View><View></View></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  }
});
export default Untitled3Copy1;