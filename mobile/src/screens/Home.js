import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { PRODUCTS } from '../data/products';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', { id: item.id })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 32 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 16 },
  card: { padding: 16, borderRadius: 12, backgroundColor: '#fff', elevation: 2 },
  name: { fontSize: 16, fontWeight: '600' },
  price: { marginTop: 4, color: '#555' },
});
