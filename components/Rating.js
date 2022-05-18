import { View, StyleSheet,Text,FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
const Rating = ({ rating }) => {
return rating===5?(
<View     style={styles.rating}>
<FontAwesome name="star" size={24} color="red" />
<FontAwesome name="star" size={24} color="red" />
<FontAwesome name="star" size={24} color="red" />
<FontAwesome name="star" size={24} color="red" />
<FontAwesome name="star" size={24} color="red" />
</View>    
)
:rating===4?(
<View     style={styles.rating}>
<FontAwesome name="star" size={24} color="red" />
<FontAwesome name="star" size={24} color="red" />
<FontAwesome name="star" size={24} color="red" />
<FontAwesome name="star" size={24} color="red" />
<FontAwesome name="star" size={24} color="grey" />
</View>  
)
:rating===3?(
    <View     style={styles.rating}>
    <FontAwesome name="star" size={24} color="red" />
    <FontAwesome name="star" size={24} color="red" />
    <FontAwesome name="star" size={24} color="red" />
    <FontAwesome name="star" size={24} color="grey" />
    <FontAwesome name="star" size={24} color="grey" />
    </View>  
    )
:rating===2?(
        <View     style={styles.rating}>
        <FontAwesome name="star" size={24} color="red" />
        <FontAwesome name="star" size={24} color="red" />
        <FontAwesome name="star" size={24} color="grey" />
        <FontAwesome name="star" size={24} color="grey" />
        <FontAwesome name="star" size={24} color="grey" />
        </View>  
        )
:rating===1?(
            <View     style={styles.rating}>
            <FontAwesome name="star" size={24} color="red" />
            <FontAwesome name="star" size={24} color="grey" />
            <FontAwesome name="star" size={24} color="grey" />
            <FontAwesome name="star" size={24} color="grey" />
            <FontAwesome name="star" size={24} color="grey" />
            </View>  
            )
:(
                <View     style={styles.rating}>
                <FontAwesome name="star" size={24} color="grey" />
                <FontAwesome name="star" size={24} color="grey" />
                <FontAwesome name="star" size={24} color="grey" />
                <FontAwesome name="star" size={24} color="grey" />
                <FontAwesome name="star" size={24} color="grey" />
                </View>  
                )
}
;

const styles = StyleSheet.create({
  rating: {
display:"flex",
flexDirection:"row"
  },
});

export default Rating;
