import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./Splash.style";
const Splash = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate("HomeScreen");
  }, 3000);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../../assets/splashScreen.png")}
          style={styles.logoChef}
        />
        <Text style={styles.mainHiding}>Detect your pneumonia </Text>
      </View>
    </View>
  );
};

export default Splash;
