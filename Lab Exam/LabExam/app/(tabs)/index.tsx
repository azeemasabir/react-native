import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import data from '@/assets/data.json';
import ProductCard from '@/components/ProductCard';
import VendorFilter from '@/components/VendorFilter';

export default function HomeScreen() {
  const [products, setProducts] = useState(data.products);
  const [selectedVendor, setSelectedVendor] = useState<string | null>(null);

  const toggleStock = (id: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, inStock: !p.inStock } : p
      )
    );
  };

  const getVendorName = (vendorId: string) => {
    const vendor = data.vendors.find((v) => v.id === vendorId);
    return vendor ? vendor.name : '';
  };

  const filtered = selectedVendor
    ? products.filter((p) => p.vendorId === selectedVendor)
    : products;

  return (
    <SafeAreaView style={styles.container}>
      <VendorFilter
        vendors={data.vendors}
        selectedVendor={selectedVendor}
        onSelectVendor={setSelectedVendor}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            vendorName={getVendorName(item.vendorId)}
            toggleStock={toggleStock}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 40,
    flex: 1
  }
});
