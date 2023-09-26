import React from "react";
import { View, Text, ScrollView } from "react-native";

const menuItemsToDisplay = [
  "Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta",
];

function MenuItems() {
  return (
    <View style={{ flex: 0.75 }}>
      <ScrollView
        indicatorStyle={"white"}
        style={{
          paddingHorizontal: 40,
        }}
      >
        <Text style={{ color: "white", fontSize: 40, flexWrap: "wrap" }}>
          View Menu
        </Text>
        <Text style={{ color: "#F4CE14", fontSize: 26 }}>
          {menuItemsToDisplay[0]}
        </Text>
        <Text style={{ color: "white", fontSize: 40, flexWrap: "wrap" }}>
          Description...
        </Text>
        <Text style={{ color: "white", fontSize: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio
          consectetur aperiam dolores eveniet ullam deleniti iure, beatae quae
          reiciendis quos alias suscipit dolor, voluptates dolore totam? Quis,
          voluptate temporibus? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas nulla similique mollitia laudantium nemo odio.
          Perspiciatis modi assumenda vero debitis enim, eaque laudantium ex
          unde officia maiores, ducimus suscipit distinctio.
        </Text>
      </ScrollView>
    </View>
  );
}

export default MenuItems;
