import { useNavigation } from "@react-navigation/core";
import {TouchableOpacity,Button, Text, View,FlatList, Image ,StyleSheet,ImageBackground,ActivityIndicator} from "react-native";
import axios from "axios";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useEffect } from "react";
import Rating from "../components/Rating";
import * as Location from "expo-location";
import  { PROVIDER_GOOGLE } from "react-native-maps";







export default function RoomScreen ({ route }) {
  const navigation = useNavigation();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showText, setShowText] = useState(false);
  
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);






useEffect(() => {


  // const getPermission = async () => {
  //   try {
  //     // Je demande la permission au user d'avoir accès à sa localisation
  //     const { status } = await Location.requestForegroundPermissionsAsync();
  //     console.log(status);
  //     // S'il répond oui
  //     if (response.status === "granted") {
  //       // Je récupère sa localisation
  //       const location = await Location.getCurrentPositionAsync();
  //       console.log(location);
  //       // Et je stocke sa position dans mes states
  //       setLatitude(location.coords.latitude);
  //       setLongitude(location.coords.longitude);
  //     } else {
  //       alert("Permission refusée");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // getPermission()

  const fetchData = async () => {
  setError("");
  console.log(route.params.id)
  // if (email && password)  {
      try {
  
  
        const response = await axios.get(
          `https://express-airbnb-api.herokuapp.com/rooms/${route.params.id}`,
        );
        setData(response.data);
        setIsLoading(false);


        
      
      }
      catch{
      }}   
      fetchData();
  
    }, [])
  
    return isLoading === true ? (   
     <View>
        <ActivityIndicator />

     </View>  
     
     )
:
   (




<View style={styles.main}>


    <View style={styles.container}>

<View style={styles.list}>

<FlatList
horizontal
  data={data.photos}
  keyExtractor={item => String(item.picture_id)}
  renderItem={({ item }) => 

  <View style={styles.list} >
  <ImageBackground 
source={{uri: `${item.url}`}} resizeMode="cover" style={styles.image}>

</ImageBackground>

<Text style={styles.text}>{data.price} €</Text>


  </View>


  }

/>

<View>
  <View style={styles.description}>
  <View style={styles.description2}>

<Text style={styles.titleDecription}>{data.title}</Text>

<View style={styles.ratingReviews}>
<Rating  rating={data.ratingValue}    />
<Text>{data.reviews} reviews</Text>
</View>

</View>
<Image
        source={{
          uri: `${data.user.account.photo.url}`,
        }}
        style={styles.logo}
        resizeMode="contain"
        borderRadius={50}
      />

</View>


<TouchableOpacity
onPress={()=>{
  setShowText(!showText)

}}

>
<Text numberOfLines={showText? null:3}>{data.description}</Text>
{/* <Text>longitude:{data.location[0]}</Text>
<Text>latitude:{data.location[1]}</Text> */}
</TouchableOpacity>


  
<View>



 <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
              latitude: data.location[1],
              longitude: data.location[0],
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
          }}>
  <Marker
  
      coordinate={{ latitude : data.location[1] , longitude : data.location[0] }}
  
    />



      </MapView>
 </View> 



</View>


</View>
</View>
</View>










    </View>
  )
}

const styles = StyleSheet.create({
main:{
    flex:1,
    justifyContent:'center',
  alignContent:'center',
  backgroundColor:'white'
  
  },


container:{
  flex:1,
width:'95%',
alignSelf:'center',
alignContent:'center',
backgroundColor:'white'

},
  cover:{
width:40,
height:40

  },
image:{
  width:340,
  height: 200,
},
logo:{
  width:80,
  height: 80,
},

  text: {
    position:"absolute",
    top:240,
    justifyContent:"center",
    alignContent:"center",
    textAlign:"center",
    height: 40,
    width: '20%',
    color: "white",
    fontSize: 18,
    lineHeight: 40,
    fontWeight: '400',
    backgroundColor: "black"
  },
  ratingReviews:{
alignItems:"center",
    flexDirection:'row'
  },
  description:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:"center",
    flexDirection:'row',
    borderColor: 'grey',
    borderBottomWidth:1,
    marginBottom:10,
    paddingVertical:10,
    width:'100%'
  }  ,
  description2:{
    maxWidth:'80%'

  },

  titleDecription:{
    fontSize:20
  },
list:{

  },
map:{
  width:'100%',
  height:300
}

});