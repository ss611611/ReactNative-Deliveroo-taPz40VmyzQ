import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BasketScreen from "./screens/BasketScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import HomeScreen from "./screens/HomeScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from 'react-redux';
import Header from './components/Header';
import Categories from './components/Categories';
import { store } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
       <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurants" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen}
            options={{presentation: 'modal', headerShown: false}} 
            />
            <Stack.Screen name="PreparingOrderScreen" 
              component={PreparingOrderScreen} 
              options={{ presentation:"fullScreenModal", headerShown: false}} 
            />
            <Stack.Screen name="Delivery" 
              component={DeliveryScreen} 
              options={{ presentation:"fullScreenModal", headerShown: false}} 
            />
        </Stack.Navigator>
      </TailwindProvider>
      </Provider>
    </NavigationContainer>

  );
}