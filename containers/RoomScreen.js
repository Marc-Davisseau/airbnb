import { useNavigation } from "@react-navigation/core";
import { Button, Text, View,FlatList, Image ,StyleSheet,ImageBackground,ActivityIndicator} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useEffect } from "react";
import Rating from "../components/Rating";


export default function RoomScreen({ route }) {
  const navigation = useNavigation();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
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
    }, []);
  


    return isLoading === true ? (
     <View>
        <ActivityIndicator />

     </View>  
     
     )
:
   (


    <View style={styles.container}>

   

<FlatList
horizontal
  data={data.photos}
  keyExtractor={item => String(item.picture_id)}
  renderItem={({ item }) => 

  <>
  <ImageBackground 
source={{uri: `${item.url}`}} resizeMode="cover" style={styles.image}>
  {/* <Text style={styles.text}>{data.price}€</Text> */}
</ImageBackground>

<Text style={styles.text}>{data.price} €</Text>
  

  </>


  }

/>

<View style={styles.description}>
  <View>


<Text>{data.title}</Text>
{/* <Text>{item.ratingValue}</Text> */}

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

<Text numberOfLines={3}>{data.description}</Text>

  






    </View>
  )
}

const styles = StyleSheet.create({

  cover:{
width:40,
height:40

  },
image:{
  width:340,
  height: 300,
},
logo:{
  width:40,
  height: 40,
},

  text: {
    position:"absolute",

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
    justifyContent:'space-between',
    alignItems:"center",
    flexDirection:'row',
    borderColor: 'grey',
    borderBottomWidth:1,
    marginBottom:10,
    paddingVertical:10
  }

});