import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Counter } from "@store/counterStore";
import { useRecoilState } from "recoil";

const about = () => {
  const [count, setCount] = useRecoilState<number>(Counter);
  return (
    <View>
      <TouchableOpacity onPress={() => setCount((val) => val + 1)}>
        <Text>+</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 25 }}>{count}</Text>
      <TouchableOpacity onPress={() => setCount((val) => val - 1)}>
        <Text>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default about;

const styles = StyleSheet.create({});
