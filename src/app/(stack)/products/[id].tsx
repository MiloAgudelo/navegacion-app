import { products } from '@/constants/products';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const ProductScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Redirect href="/products" />;
  }

  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="mt-2">{product.description}</Text>
      <Text className="font-work-black mt-4">${product.price.toLocaleString('es-CO')}</Text>
    </View>
  );
};

export default ProductScreen;
