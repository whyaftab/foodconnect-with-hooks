import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { getAllItems } from "../apis";
import { Item } from "../components/Item";
import Colors from "../constants/Colors";

export default function ItemScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    setLoading(true);
    getAllItems()
      .then(({ data }) => {
        setData(data.DATA);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };

  return loading ? (
    <ActivityIndicator style={styles.loadingStyle} color={Colors.primary} />
  ) : (
    <FlatList
      data={data}
      extraData={data}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={() => (
        <Text style={styles.textStyle}>List is empty!</Text>
      )}
      refreshing={loading}
      numColumns={2}
      onRefresh={fetchData}
      ItemSeparatorComponent={() => <View style={styles.seprater} />}
      ListHeaderComponent={() => <View style={styles.seprater} />}
      columnWrapperStyle={{ justifyContent: "space-evenly" }}
      ListFooterComponent={() => <View style={styles.seprater} />}
    />
  );
}

const styles = StyleSheet.create({
  seprater: {
    height: 34,
  },
  loadingStyle: {
    alignSelf: "center",
    flex: 1,
  },
});
