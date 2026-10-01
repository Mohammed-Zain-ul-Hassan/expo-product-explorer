import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CategoryFilter from './components/CategoryFilter';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { categories, products } from './data/products';

export default function App() {
  const [selected, setSelected] = useState('All');

  const visibleProducts =
    selected === 'All'
      ? products
      : products.filter((product) => product.category === selected);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={visibleProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard product={item} />}
          ListHeaderComponent={
            <>
              <Header
                title="Product Explorer"
                name="Mohammed Zain ul Hassan"
                roll="23i-6030"
              />
              <CategoryFilter
                categories={categories}
                selected={selected}
                onSelect={setSelected}
              />
              <Text style={styles.count}>
                {visibleProduct.length} products
              </Text>
            </>
          }
          showsVerticalScrollIndicator={false}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  count: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 8,
  },
});
