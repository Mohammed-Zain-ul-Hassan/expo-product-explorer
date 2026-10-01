import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard product={item} />}
          ListHeaderComponent={
            <Header
              title="Product Explorer"
              name="Mohammed Zain ul Hassan"
              roll="23i-6030"
            />
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
});
