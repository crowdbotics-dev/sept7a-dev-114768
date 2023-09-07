import { ImageBackground } from "react-native";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3Copy = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.kiiCBSTa}></View><Text style={styles.epmWvNWn}>Lorem ipsum…</Text><FlatList style={styles.FKNlYnlw} renderItem={({
        item
      }) => <View style={styles.ZuyFnjOB}><Text style={styles.BMasqSNU}>Lorem ipsum…</Text><ImageBackground style={styles.QKGrfqAX} source={require("./sachin.jpeg")} resizeMode="cover"></ImageBackground></View>} ItemSeparatorComponent={() => <View style={styles.dmrDOhPt} />} data={[1, 2, 3, 4, 5]} keyExtractor={(item, index) => index} ListHeaderComponent={() => <Text style={styles.tlCTjndO}>My list header</Text>}></FlatList><ImageBackground style={styles.WxmhuwnY} source={require("./sachin.jpeg")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  kiiCBSTa: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  epmWvNWn: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  FKNlYnlw: {
    position: "absolute",
    width: 100,
    height: 150,
    color: "#d52121"
  },
  ZuyFnjOB: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  dmrDOhPt: {
    backgroundColor: "#000000",
    height: 1
  },
  BMasqSNU: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  WxmhuwnY: {
    width: 107,
    height: 62,
    position: "absolute",
    left: 131,
    top: 267
  },
  QKGrfqAX: {
    width: 107,
    height: 62
  },
  tlCTjndO: {
    color: "#NaNNaNNaN",
    opacity: 0.76
  }
});
export default Untitled3Copy;