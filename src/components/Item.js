import React from "react";
import { Text, TouchableHighlight, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

export const Item = ({ name, price }) => (
  <TouchableHighlight style={styles.itemStyle}>
    <>
      <Text style={styles.itemTextStyle}>{name}</Text>
      {price >= 0 && (
        <Text style={styles.priceStyle}>{parseFloat(price).toFixed(2)}</Text>
      )}
    </>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  itemStyle: {
    height: 140,
    width: "45%",
    borderWidth: 1,
    borderColor: "#e1eBee",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  itemTextStyle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  priceStyle: {
    color: "#fff",
    backgroundColor: Colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 1,
    position: "absolute",
    top: -20,
    left: 0,
  },
});
