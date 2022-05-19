import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,FlatList } from "react-native";
// Import du package expo-location
import * as Location from "expo-location";
import { useEffect, useState } from "react";
// Import du package pour fficher des maps
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import axios from "axios";

export default function Arround(props) {

const [data, setData] = useState();
const [isLoading, setIsLoading] = useState(true);
console.log(props.longitude)
  useEffect(() => {

    const fetchData = async () => {
 try {
     
 } catch (error) {
     
 }
      const response = await axios.get(
        `https://express-airbnb-api.herokuapp.com/rooms/around`,
        {
          longitude: `${props.longitude}`,
          latitude: `${props.latitude}`,
        }     
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    console.log("ma data map")
    console.log({data})
    fetchData();
  }, []);


  return isLoading === true ? (
    <Text>En cours de chargement</Text>
  ) : (
    <MapView
    // Je dois donner une dimension à ma map
    style={styles.map}
    //  provider={PROVIDER_GOOGLE}
    // Initial region pour dire où dans le monde apparaît ma map
    initialRegion={{
      latitude: 48.856614,
      longitude: 2.3522219,
      latitudeDelta: 0.5,
      longitudeDelta: 0.5,
    }}
    // Pour montrer la position du user
    showsUserLocation={true}
    >


{data.map((elem,index)=>{
    return(
        console.log(props.longitude),
 <MapView.Marker
 key={index}
        coordinate={{
          latitude: elem.location[1],
          longitude: elem.location[0],
        }}
      />
        )
})}

</MapView>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  map: {
    height: 500,
  },
});
