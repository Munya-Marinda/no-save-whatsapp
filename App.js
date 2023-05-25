import { StatusBar } from "expo-status-bar";
import SAVE_LESS_WHATAPP_CHAT from "./src/app-screens/save_less_whatapp_chat/save_less_whatapp_chat.js";
import { StyleSheet, View, Text } from "react-native"; 

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={"light-content"} />
      <SAVE_LESS_WHATAPP_CHAT />
      {/* <Test /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // backgroundColor: "rgb(178, 255, 189)",
    alignItems: "center",
    justifyContent: "center",
  },
});
