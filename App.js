import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, ScrollView } from 'react-native';

import {names} from "./name"

const namesAsObjects = names.map((item) => {
  return {
    name: item,
  };
 });
 
 export default function App() {
  const renderName = ({ item }) => {
    return <Text>{item.name}</Text>;
  };
 
  return (
    <FlatList
      data={namesAsObjects}
      renderItem={renderName}
      keyExtractor={(item) => item.name}
    />
  );
 }
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 });
 
