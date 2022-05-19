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
  {/* <Text style={styles.text}>{data.price}€</Text> */}
</ImageBackground>

<Text style={styles.text}>{data.price} €</Text>
  

  </View>


  }

/>

<View>
  <View style={styles.description}>
  <View style={styles.description2}>

<Text style={styles.titleDecription}>{data.title}</Text>
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
  height: 300,
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


});