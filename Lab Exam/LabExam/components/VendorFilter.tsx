import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

type Vendor = {
  id: string;
  name: string;
};

type Props = {
  vendors: Vendor[];
  selectedVendor: string | null;
  onSelectVendor: (id: string | null) => void;
};

const VendorFilter = ({ vendors, selectedVendor, onSelectVendor }: Props) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row}>
      <TouchableOpacity
        style={[styles.chip, selectedVendor === null && styles.active]}
        onPress={() => onSelectVendor(null)}
      >
        <Text style={styles.text}>All</Text>
      </TouchableOpacity>
      {vendors.map((vendor) => (
        <TouchableOpacity
          key={vendor.id}
          style={[styles.chip, selectedVendor === vendor.id && styles.active]}
          onPress={() => onSelectVendor(vendor.id)}
        >
          <Text style={styles.text}>{vendor.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 4, 
        paddingTop: 6,
        gap: 8
      },
      
chip: {
  backgroundColor: '#e0e0e0',
  paddingHorizontal: 14,
  paddingVertical: 8,
  marginRight: 10,
  borderRadius: 20,
  alignSelf: 'flex-start'
},

  active: {
    backgroundColor: '#4caf50'
  },
  text: {
    color: '#fff',
    fontWeight: '500'
  }
});

export default VendorFilter;
