import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import UserNameList from "./components/UserNameList";
export default App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Quốc Đạt',
    },
    {
      id: 2,
      name: 'Tường Hải',
    },
    {
      id: 3,
      name: 'Thanh Hòa',
    },
    {
      id: 4,
      name: 'Chí Định',
    },

  ]);


  return (

    <FlatList
      data={data}
      renderItem={({ item }) => <UserNameList name={item.name} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
    />

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    justifyContent: "center",
  },
  loadingText: {
    alignSelf: "center",
  },
  containe: {
    display: "flex",
    flexDirection: "column",
  },
});