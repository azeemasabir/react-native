import {View, StyleSheet, FlatList } from 'react-native';
import Product from './components/Product.jsx'
import products from './data/products.json';

export default function App() {
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <Product product={item} />}
            />
        </View>
    );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 16
  }

})
