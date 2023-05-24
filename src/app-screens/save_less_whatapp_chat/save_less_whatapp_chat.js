// Example to Send WhatsApp Message from React Native App
// https://aboutreact.com/send-whatsapp-message/

import React, { useState } from "react";

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
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsAppMsg, setWhatsAppMsg] = useState(
    "Hi. My name is [name]. How are you today?"
  );

  const initiateWhatsApp = () => {
    if (mobileNumber.length !== 11) {
      alert("Please insert correct South African WhatsApp number");
      return;
    }
    let url = "whatsapp://send?text=" + whatsAppMsg + "&phone=" + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp Opened");
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
          <TextInput
            value={mobileNumber}
            onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
            placeholder={"Eg. 27612345678"}
            keyboardType="numeric"
            style={styles.textInput}
          />
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
    width: windowWidth * 0.7,
    padding: 10,
    marginBottom: 20,
    borderRadius: 7,
    borderColor: "rgb(0,149,0)",
  },
  textMultilineInput: {
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
