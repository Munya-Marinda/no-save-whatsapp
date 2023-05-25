// Example to Send WhatsApp Message from React Native App
// https://aboutreact.com/send-whatsapp-message/

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
import ManageContacts from "../models/realm-model";

const Test = () => {
  const [manageContactsObj, setManageContactsObj] = useState(null);

  // Create an instance of the ManageContacts class

  useEffect(() => {
    const manageContactsObj_ = new ManageContacts();
    setManageContactsObj(manageContactsObj_);
    console.log(manageContactsObj_);
  }, []);

  return <SafeAreaView></SafeAreaView>;
};

export default Test;
