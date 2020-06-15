import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import CategoryScreen from "../screens/CategoryScreen";
import ItemScreen from "../screens/ItemScreen";
import Colors from "../constants/Colors";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Categories";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerStyle: { backgroundColor: Colors.primary },
    headerTitleStyle: { color: "#fff" },
  });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: Colors.tintColor,
      }}
    >
      <BottomTab.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          title: "Categories",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-grid" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Items"
        component={ItemScreen}
        options={{
          title: "Items",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-restaurant" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Categories":
      return "Categories";
    case "Items":
      return "Items";
  }
}
