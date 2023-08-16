import { StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFonts } from "expo-font";

// Navigation
const Tab = createBottomTabNavigator();
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Components
import ChurchPrayers from "./components/ChurchPrayers/ChurchPrayers";
import MyPrayers from "./components/MyPrayers/MyPrayers";
import MyProfile from "./components/MyProfile/MyProfile";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lora-Regular": require("./assets/fonts/Lora-Regular.ttf"),
  });

  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);

    const baseURL = "http://192.168.100.200:3001/prays";

    try {
      axios
        .get(`${baseURL}`)
        .then((response) => setData(response.data.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const activeIcon = "#718e63";
  const inactiveIcon = "#b3b4b4";

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            fontSize: 16,
          },
          tabBarStyle: {
            height: "7%",
            justifyContent: "space-around",
            alignItems: "flex-start",
            borderTopColor: "rgba(0, 0, 0, .2)",
          },
        }}
      >
        <Tab.Screen
          name="Mi lista"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="hands-pray"
                color={focused ? activeIcon : inactiveIcon}
                size={24}
              />
            ),
          }}
          component={MyPrayers}
        />
        <Tab.Screen
          name="Nuestra lista"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="church"
                color={focused ? activeIcon : inactiveIcon}
                size={24}
              />
            ),
          }}
          children={() => <ChurchPrayers data={data} isLoading={isLoading} />}
        />
        <Tab.Screen
          name="Mi perfil"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="account"
                color={focused ? activeIcon : inactiveIcon}
                size={24}
              />
            ),
          }}
          component={MyProfile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
