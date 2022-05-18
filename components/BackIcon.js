import { View, Text, Image , StyleSheet} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackIcon = () => {
  const navigation = useNavigation();
  return (

<Image
style={styles.logo}
      source={require("../assets/images/logo.jpeg")}
    />
  );
};

export default BackIcon;


const styles = StyleSheet.create({
  logo: {
    height: 20,
    width: 20,
    marginRight:200
  }})