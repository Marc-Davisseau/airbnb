import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// Import du package expo-location
import * as Location from "expo-location";
import { useEffect, useState } from "react";
// Import du package pour fficher des maps
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import axios from "axios";
import Arround from "../components/Arround";

export default function ArroundMe() {

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [coords, setCoords] = useState([
    {
      latitude: 48.850869,
      longitude: 2.378946,
    },
    {
      latitude: 48.834672,
      longitude: 2.320606,
    },
    {
      latitude: 48.871938,
      longitude: 2.330379,
    },
  ]);

  useEffect(() => {
    const getPermission = async () => {
      try {
        // Je demande la permission au user d'avoir accès à sa localisation
        const { status } = await Location.requestForegroundPermissionsAsync();

      

        console.log(status);
        // S'il répond oui
        if (status === "granted") {
          // Je récupère sa localisation
          const location = await Location.getCurrentPositionAsync();
          console.log(location);
          // Et je stocke sa position dans mes states
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);


  





        } else {
          alert("Permission refusée");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPermission()

 ;
  }, [])
  
  
  
  
  
  
  
  
  
  ;

  return (
    <View style={styles.main}>

   
    <View style={styles.container}>

      <Text>Location</Text>
      <Text>Latitude : {latitude}</Text>
      <Text>Longitude : {longitude}</Text>
      <Arround longitude={`${longitude}`} latitude={`${latitude}`}  />
    </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor:"white",
  },
  main:{
    display:'flex',
    flex:1,
    backgroundColor:'white'
  }
});