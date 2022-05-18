import {
  Button,
  Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CustomInput from "../components/CustomInput";

export default function SignInScreen({ setToken,navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    if (email && password)  {
        try {
          const response = await axios.post(
            "https://express-airbnb-api.herokuapp.com/user/log_in",
            {
              email,
              password  
            }
          );

///////Post login OK
///on sauvegarde le token
console.log(response.data.token)
await AsyncStorage.setItem("token", response.data.token);
///on bascule sur la page home
setToken(response.data.token)
  // navigation.navigate("Home");

///////////////

          console.log(response.data);
        } catch (error) {
          console.log(error);
          console.log(error.response.data);
          if (error.response.data) {
            setError(error.response.data.error);
          }
        }
      } else {
        setError("Veuillez remplir tous les champs");
      }
  };

  return (
    <KeyboardAwareScrollView
    style={styles.container}
    contentContainerStyle={{ alignItems: "center" }}
  >
    <Image
      style={styles.logo}
      source={require("../assets/images/logo.jpeg")}
    />
    <Text style={styles.title}>Sign In</Text>

    <CustomInput placeholder="email" 
   setState={setEmail}
   value={email} />


    <CustomInput
      placeholder="password"
      setState={setPassword}
      value={password}
      password={true}
    />

    {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

    

    <TouchableOpacity  style={styles.button} onPress={handleSubmit}>



      <Text>Sign In</Text>
    </TouchableOpacity>
    <TouchableOpacity

    >
      <Text
      style={styles.subtitle}
       onPress={() => {
        navigation.navigate("SignUp");
      }}
      
      >No account ?  Register</Text>
    </TouchableOpacity>
  </KeyboardAwareScrollView>

);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "white",
},
logo: {
  height: 100,
  width: 100,
},
title: {
  fontSize: 30,
  fontWeight: "600",
  color: "#727272",
  marginTop: 30,
},
bigInput: {
  width: "80%",
  marginTop: 30,
  borderColor: "#FFBAC0",
  borderWidth: 2,
  height: 80,
},
button: {
  borderColor: "#F9585D",
  borderWidth: 3,
  marginTop: 30,
  width: "60%",
  height: 50,
  borderRadius: 25,
  justifyContent: "center",
  alignItems: "center",
},
subtitle: {
  fontSize: 15,
  fontWeight: "400",
  color: "#727272",
  marginTop: 20,
}
});


