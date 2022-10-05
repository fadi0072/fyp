import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import GlobalColors from "../../UI/GlobalColors";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  Heading: {
    fontSize: 30,
  },
  container: {
    marginTop: windowHeight * 0.06,
    padding: 12,
  },
  subHeading: {
    opacity: 0.4,
    fontSize: 16,
  },
  txt: {
    fontSize: 18,
  },
  menuDiv: {
    width: windowWidth * 0.62,
    height: windowHeight * 0.5,
    //width: 300,
    //height: 400,
  },
  search: {
    width: 17.51,
    height: 17.51,
    alignSelf: "center",
    marginHorizontal: windowWidth * 0.006,
  },
  recipeName: {
    fontFamily: "Cookie_400Regular",
    fontSize: windowWidth * 0.07,
    lineHeight: 44.36,
    color: GlobalColors.white,
    top: windowHeight * 0.15,
    left: windowWidth * 0.32,
    width: windowWidth * 0.35,
  },
  viewTxtImg: {
    backgroundColor: GlobalColors.mainColor,
    height: windowHeight * 0.06,
    width: windowWidth * 0.35,
    paddingLeft: 15,
    paddingTop: 6,
    borderRadius: 23,
  },
  dpRecipt: {
    width: 65,
    height: 65,
    right: 45,
    bottom: 10,
  },
  mainView: {
    left: windowWidth * 0.077,
    top: windowHeight * 0.16,
    justifyContent: "flex-end",
  },
  RecBy: {
    fontSize: 8,
    fontFamily: "OpenSans_400Regular",
    color: "#FFFFFF",
    lineHeight: 10.89,
  },
  name: {
    fontSize: 10,
    fontFamily: "OpenSans_400Regular",
    color: "#FFFFFF",
    lineHeight: 13.62,
  },
  ViewAll: {
    justifyContent: "center",
    margin: 15,

    alignItems: "center",
  },
  iconImg: {
    height: 18.14,
    width: 10,
  },
  Viewtxt: {
    right: 13,
    fontSize: 16,
    fontFamily: "OpenSans_400Regular",
    lineHeight: 21.79,
    color: "white",
  },
});
