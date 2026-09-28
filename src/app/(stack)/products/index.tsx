import { products } from '@/constants/products';
import { Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';

const ProductsScreen = () => {
  return (
    <View className="flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text>{item.description}</Text>

            <View className="flex flex-row justify-between mt-2">
              <Text className="font-work-black">${item.price.toLocaleString('es-CO')}</Text>
              <Link href={`/products/${item.id}`} className="text-primary">
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
