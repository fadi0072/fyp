import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { Ranga_400Regular, Ranga_700Bold } from "@expo-google-fonts/ranga";
import {
  WorkSans_100Thin,
  WorkSans_200ExtraLight,
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
  WorkSans_800ExtraBold,
  WorkSans_900Black,
  WorkSans_100Thin_Italic,
  WorkSans_200ExtraLight_Italic,
  WorkSans_300Light_Italic,
  WorkSans_400Regular_Italic,
  WorkSans_500Medium_Italic,
  WorkSans_600SemiBold_Italic,
  WorkSans_700Bold_Italic,
  WorkSans_800ExtraBold_Italic,
  WorkSans_900Black_Italic,
} from "@expo-google-fonts/work-sans";
import {
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
  OpenSans_300Light_Italic,
  OpenSans_400Regular_Italic,
  OpenSans_500Medium_Italic,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold_Italic,
} from "@expo-google-fonts/open-sans";
import { Cookie_400Regular } from "@expo-google-fonts/cookie";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Splash from "../Screens/Splash/Splash";
import SignIn from "../Screens/SignIn/SignIn";
import SignUp from "../Screens/SignUp/SignUp";
import SignUpComplete from "../Screens/SignUpComplete/SignUpComplete";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import ChefList from "../Screens/ChefList/ChefList";
import FavoriteRecipes from "../Screens/FavoriteRecipes/FavoriteRecipes";
import LikedScreen from "../Screens/LikedScreen/LikedScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import RecipeScreen from "../Screens/RecipeScreen/RecipeScreen";
import { CustomTabBar } from "../Components/CustomTabBar/CustomTabBar";
import RecipeDetailScreen from "../Screens/RecipeDetailScreen/RecipeDetailScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  let [fontsLoaded, error] = useFonts({
    Ranga_400Regular,
    Ranga_700Bold,
    WorkSans_100Thin,
    WorkSans_200ExtraLight,
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
    WorkSans_800ExtraBold,
    WorkSans_900Black,
    WorkSans_100Thin_Italic,
    WorkSans_200ExtraLight_Italic,
    WorkSans_300Light_Italic,
    WorkSans_400Regular_Italic,
    WorkSans_500Medium_Italic,
    WorkSans_600SemiBold_Italic,
    WorkSans_700Bold_Italic,
    WorkSans_800ExtraBold_Italic,
    WorkSans_900Black_Italic,
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
    OpenSans_300Light_Italic,
    OpenSans_400Regular_Italic,
    OpenSans_500Medium_Italic,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold_Italic,
    Cookie_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack.Navigator initialRouteName="Splash" backBehavior="initialRoute">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="SignUpComplete"
        component={SignUpComplete}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="BottomTabNavigation"
        component={BottomTabNavigation}
      />
    </Stack.Navigator>
  );
};
export const BottomTabNavigation = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: { border: "none" },
        gestureEnabled: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      {/* <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ gestureEnabled: false }}
      /> */}
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ChefList" component={ChefList} />
      <Tab.Screen name="FavoriteRecipes" component={FavoriteRecipes} />
      <Tab.Screen name="RecycleOrders" component={LikedScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      <Tab.Screen name="RecipeScreen" component={RecipeScreen} />
      <Tab.Screen name="LikedScreen" component={LikedScreen} />
      <Tab.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} />
    </Tab.Navigator>
  );
};

export default MainStack;
