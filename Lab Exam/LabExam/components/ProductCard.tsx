import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

type Props = {
  product: Product;
  vendorName: string;
  toggleStock: (id: string) => void;
};

const ProductCard = ({ product, vendorName, toggleStock }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.vendor}>By {vendorName}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <View style={styles.statusRow}>
        <Text style={[styles.status, product.inStock ? styles.inStock : styles.outOfStock]}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </Text>
        <Switch
          value={product.inStock}
          onValueChange={() => toggleStock(product.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 12,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4
  },
  vendor: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4
  },
  price: {
    fontSize: 16,
    color: '#2e7d32',
    fontWeight: '500',
    marginBottom: 8
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  status: {
    fontSize: 14,
    fontWeight: '500'
  },
  inStock: {
    color: '#388e3c'
  },
  outOfStock: {
    color: '#d32f2f'
  }
});

export default ProductCard;
