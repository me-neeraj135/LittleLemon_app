import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  SectionList,
} from "react-native";

// const menuItemsToDisplay = [
//   { name: "Hummus", price: "$5.00", id: "1A" },
//   { name: "Moutabal", price: "$5.00", id: "2B" },
//   { name: "Falafel", price: "$7.50", id: "3C" },
//   { name: "Marinated Olives", price: "$5.00", id: "4D" },
//   { name: "Kofta", price: "$5.00", id: "5E" },
//   { name: "Eggplant Salad", price: "$8.50", id: "6F" },
//   { name: "Lentil Burger", price: "$10.00", id: "7G" },
//   { name: "Smoked Salmon", price: "$14.00", id: "8H" },
//   { name: "Kofta Burger", price: "$11.00", id: "9I" },
//   { name: "Turkish Kebab", price: "$15.50", id: "10J" },
//   { name: "Fries", price: "$3.00", id: "11K" },
//   { name: "Buttered Rice", price: "$3.00", id: "12L" },
//   { name: "Bread Sticks", price: "$3.00", id: "13M" },
//   { name: "Pita Pocket", price: "$3.00", id: "14N" },
//   { name: "Lentil Soup", price: "$3.75", id: "15O" },
//   { name: "Greek Salad", price: "$6.00", id: "16Q" },
//   { name: "Rice Pilaf", price: "$4.00", id: "17R" },
//   { name: "Baklava", price: "$3.00", id: "18S" },
//   { name: "Tartufo", price: "$3.00", id: "19T" },
//   { name: "Tiramisu", price: "$5.00", id: "20U" },
//   { name: "Panna Cotta", price: "$5.00", id: "21V" },
// ];

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

// const Header = () => <Text style={styles.headerText}>View Menu</Text>;
const Separator = () => <View style={styles.Separator} />;
const Footer = () => (
  <Text style={styles.footerText}>
    {" "}
    All Rights Reserved by Little Lemon 2022
  </Text>
);

const renderSectionHeader = ({ section: { title } }) => (
  <Text style={styles.sectionHeader}>{title}</Text>
);
const Item = ({ name, price }) => (
  <View style={styles.innerContainer}>
    <Text style={styles.itemText}>{name}</Text>
    <Text style={styles.itemText}>{price}</Text>
  </View>
);

function MenuItems() {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;
  return (
    <View style={styles.container}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={Footer}
        // ListHeaderComponent={Header}
      ></SectionList>
    </View>
  );
}

export default MenuItems;

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    // backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: 40,
    flexWrap: "wrap",
    textAlign: "center",
  },
  sectionHeader: {
    backgroundColor: "#fbdabb",
    color: "#333333",
    fontSize: 34,
    flexWrap: "wrap",
    textAlign: "center",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 25,
  },
  Separator: {
    borderBottomWidth: 1,
    borderColor: "white",
  },
  footerText: {
    color: "#EDEFEE",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  },
});
