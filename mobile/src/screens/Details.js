import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PRODUCTS } from '../data/products';

export default function Details({ route }) {
  const { id } = route.params || {};
  const product = useMemo(() => PRODUCTS.find((p) => p.id === id), [id]);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
      <Text style={styles.desc}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 32 },
  title: { fontSize: 22, fontWeight: '700' },
  price: { marginTop: 8, fontSize: 16, color: '#333' },
  desc: { marginTop: 12, fontSize: 14, color: '#555' },
  notFound: { fontSize: 16 },
});
