import {View, Text, Image, StyleSheet, Button} from 'react-native';

export default function Product(props){
    let product = props.product;

    return(
        
          <View style = {styles.card}>
            <Image 
                source={{uri: product.image }}
                style={styles.image}
            />
            <Text>{product.title}</Text>
          <View style= {styles.priceRow}>
            <Text>Rs. {product.price}</Text>
            <Text>Rating: {product.rating.rate} ({product.rating.count})</Text>
          </View>
          <Button title = "ADD TO CART"/> 
          </View>
        
    )
}

const styles = StyleSheet.create({

  card:{
    borderWidth:4,
    padding:8

  },
  image:{
    width: 200,
    height: 200
  },
  priceRow:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8

  }

})
