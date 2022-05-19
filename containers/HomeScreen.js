import { useNavigation } from "@react-navigation/core";
import {  TouchableOpacity, Button, Text, View,FlatList, Image ,StyleSheet,ImageBackground,ActivityIndicator} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useEffect } from "react";
import Rating from "../components/Rating";


export default function HomeScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
  const fetchData = async () => {
  setError("");
  console.log("hello")
  // if (email && password)  {
      try {
        const response = await axios.get(
          "https://express-airbnb-api.herokuapp.com/rooms",
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

<View style={styles.list}></View>

      <FlatList
  data={data}
  keyExtractor={item => String(item._id)}
  renderItem={({ item }) => 

  <TouchableOpacity
  onPress={()=>
    navigation.navigate("Room", { id: `${item._id}` })
  }
  
  
  >

<View>



{console.log(item.photos[0].url)}
<View style={styles}>
    <ImageBackground source={{uri: `${item.photos[0].url}`}} resizeMode="cover" style={styles.image}>
      <Text style={styles.texte}>{item.price}€</Text>
    </ImageBackground>
  </View>
  <View style={styles.des}>
<View style={styles.description}>

  <View style={styles.description2}>


<Text 
style={styles.titleDecription}
numberOfLines={1}>{item.title}


</Text>
{/* <Text>{item.ratingValue}</Text> */}

<View style={styles.ratingReviews}>
<Rating  rating={item.ratingValue}    />
<Text>{item.reviews} reviews</Text>
</View>
</View>
<Image
        source={{
          uri: `${item.user.account.photo.url}`,
        }}
        style={styles.logo}
        resizeMode="contain"
        borderRadius={50}
      />


</View>
</View>
</View>

  </TouchableOpacity>


  }
/>
      


      
{/*       
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate("Profile", { userId: 123 });
        }}
      /> */}
    </View>
  )
}



const styles = StyleSheet.create({

  cover: { 
    height: 300, 
    width: 200,
    
    marginTop: 100 },
  logo: {
    height: 60,
    width: 60,
  },
  container: {
    flex: 1,
    width:'100%',
    alignItems:"center",
    justifyContent:'center',
    backgroundColor:"white"

  },
  image: {
    flex: 1,
    height: 180,
    width: '100%',
  },
  texte: {
    position:"absolute",
    top:130,
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
    flexDirection:'row'
  },
  description2:{
     width:'83%',
    display:'flex',


    marginBottom:10,
    paddingVertical:10,

  },
  titleDecription:{
    fontSize:20
  },
  description:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    borderColor: 'grey',
    borderBottomWidth:1,
    marginBottom:10


  }


});
