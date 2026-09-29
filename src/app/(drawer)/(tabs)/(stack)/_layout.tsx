import { Stack, useNavigation } from 'expo-router';
import {Ionicons} from "@expo/vector-icons";
import { canGoBack } from 'expo-router/build/global-state/router';

const StackLayout = () => {
  const navigation = useNavigation();
  const drawerNavigation = useNavigation() as any;

  const onHeaderLeftClick = (canGoBack?: boolean) => {
    if (canGoBack){
      navigation.goBack();
      return;
    }

    if (typeof drawerNavigation?.openDrawer === "function"){
      drawerNavigation.openDrawer();
    }
  };


  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: { backgroundColor: 'white' },
        headerLeft: ({canGoBack}) => (
          <Ionicons name={canGoBack ? "arrow-back-outline" : "grid-outline"} 
          className='mr-5' size={20} onPress={() => onHeaderLeftClick(Boolean(canGoBack))} />
        )
      }}
    >
      <Stack.Screen name="home/index" options={{ title: 'Inicio' }} />
      <Stack.Screen name="products/index" options={{ title: 'Productos' }} />
      {/* <Stack.Screen name="products/[id]" options={{ title: 'Producto' }} /> */}
      {/* <Stack.Screen name="profile/index" options={{ title: 'Perfil' }} /> */}
      <Stack.Screen name="settings/index" options={{ title: 'Ajustes' }} />
    </Stack>
  );
};

export default StackLayout;
