import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./HomeScreen.style";
import GlobalStyles from "../../UI/GlobalStyles";
import InputText from "../../Components/InputText/InputText";
import GlobalColors from "../../UI/GlobalColors";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

export default function HomeScreen() {
  const [baseData, setBaseData] = useState("");
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("image result", result);
    var filename = result.uri.replace(/^.*[\\\/]/, "");
    console.log("filename:", filename);

    if (!result.cancelled) {
      let data = new FormData();
      const newFile = {
        image: result.uri,
      };
      data.append("image", newFile);
      console.log("chceckingfile", data);
      console.log("inresult", newFile);

      axios
        .post("https://127.0.0.1:5000/predict", data)
        .then((response) => {
          console.log("Status: ", response.status);
          console.log("Data: ", response.data);
        })
        .catch((error) => {
          console.error("Something went wrong!", error);
        });
      // let profile = profileavatar;
      //profile.avatar = { url: result.uri };

      //console.log("inresultaaaa", profile.avatar);

      //setprofileavatarStateState({ ...profile });

      // setImage(result.uri);

      // let data = new FormData();
      // const newFile = {
      //   uri: result.uri,
      //   name: result.uri.split("/").pop(),
      //   type: "image/*",
      // };
      // data.append("avatar", newFile);
      // console.log("checkingdata", data);

      // localdata
      //   .GetLoginPref()
      //   .then((token) => {
      //     api.UploadPicture(token, data);
      //     dispatch(CustomerThumbnail(result.uri));

      //     // .then((res) => {
      //     //   console.log("uploaded image response: ", res);
      //     // })
      //     // .catch((error) => {
      //     //   console.log("error in uploadfile:", error.response);
      //     // });
      //   })
      //   .catch((error) => {
      //     console.log("error:", error);
      //   });
    }
  };
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={[GlobalStyles.hidingH1]}>
          You can upload your xray image here
        </Text>
        <View style={{ backgroundColor: "black" }}>
          <TouchableOpacity
            style={[GlobalStyles.FlexRow, styles.ViewAll]}
            onPress={pickImage}
          >
            <Text style={styles.Viewtxt}>Upload Image</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
