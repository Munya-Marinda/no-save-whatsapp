import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
  Dimensions,
  ImageBackground,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const App = () => {
  //
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsAppMsg, setWhatsAppMsg] = useState(
    "Hi. My name is [name]. How are you today?"
  );
  //
  const textIsNuber = (text) => {
    const charNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (charNumbers.indexOf(char) === -1) {
        setMobileNumber("");
        return false;
      }
      return true;
    }
  };
  //
  const initiateWhatsApp = () => {
    if (!textIsNuber(mobileNumber)) {
      alert("Please enter a valid number!");
      return;
    }
    if (mobileNumber.length !== 9) {
      alert("Please insert correct South African WhatsApp number");
      return;
    }
    let url = "whatsapp://send?text=" + whatsAppMsg + "&phone=" + mobileNumber;
    Linking.openURL(url)
      .then(() => { 
      })
      .catch(() => {
        alert("Make sure Whatsapp installed on your device");
      });
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          width: windowWidth,
          height: windowHeight * 1.2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        source={require("../../../assets/splash-wallpaper.png")}
      >
        <View style={styles.container}>
          <Text style={styles.titleTextsmall}>Enter WhatsApp Number</Text>
          <Text style={styles.titleTextsmaller}>
            11 Digit South Africa Number
          </Text>
          <View style={styles.container_2}>
            <TextInput
              value={"+27"}
              editable={false}
              placeholder={"+27"}
              keyboardType="numeric"
              style={styles.textInput_2}
            />
            <TextInput
              value={mobileNumber}
              onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
              placeholder={"612345678"}
              keyboardType="numeric"
              style={styles.textInput}
            />
          </View>
          <Text style={styles.titleTextsmall}>Enter WhatsApp Message</Text>
          <Text style={styles.titleTextsmaller}>
            That you want to send to the number
          </Text>
          <TextInput
            multiline={true}
            value={whatsAppMsg}
            onChangeText={(whatsAppMsg) => setWhatsAppMsg(whatsAppMsg)}
            placeholder={"WhatsApp Message"}
            style={styles.textMultilineInput}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={initiateWhatsApp}
          >
            <Text style={styles.buttonTextStyle}>Send WhatsApp Message</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.credits}>By MUNYA M.</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(231,255,231)",
    borderRadius: 15,
    padding: 30,
    width: windowWidth * 0.8,
  },
  container_2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(231,255,231)",
    borderRadius: 15,
    padding: 10,
    width: windowWidth * 0.8,
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "rgb(0,133,0)",
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
    color: "rgb(0,133,0)",
  },
  titleTextsmaller: {
    marginBottom: 10,
    fontSize: 13,
    color: "rgb(162,181,162)",
  },
  buttonStyle: {
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
    backgroundColor: "#8ad24e",
    borderRadius: 7,
  },
  buttonTextStyle: {
    color: "black",
    textAlign: "center",
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    width: windowWidth * 0.5,
    padding: 10,
    marginBottom: 20,
    borderRadius: 7,
    borderColor: "rgb(0,149,0)",
  },
  textInput_2: {
    height: 40,
    width: windowWidth / 8,
    padding: 10,
    marginBottom: 20,
    marginRight: 10,
    borderRadius: 7,
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgb(66, 145, 0)",
  },
  textMultilineInput: {
    textAlign: "left",
    textAlignVertical: "top",
    height: 40,
    borderWidth: 1,
    width: windowWidth * 0.7,
    paddingHorizontal: 10,
    borderRadius: 7,
    padding: 10,
    marginBottom: 20,
    height: windowWidth / 2,
    borderColor: "rgb(0,149,0)",
  },
  credits: {
    color: "rgba(138,210,78,0.2)",
    marginTop: 20,
  },
});
