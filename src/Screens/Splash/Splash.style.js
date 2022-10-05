import { StyleSheet, Dimensions } from "react-native";
import GlobalColors from "../../UI/GlobalColors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  innerContainer: {
    marginTop: windowHeight * 0.3,
    alignItems: "center",
  },
  logoChef: {
    width: 212,
    height: 257,
  },
  mainHiding: {
    fontSize: 50,
    fontFamily: "Ranga_700Bold",
    lineHeight: 73.15,
    color: GlobalColors.white,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 10,
  },
});
