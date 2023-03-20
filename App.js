import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import AddScreen from './screens/AddScreen';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const Stack = createStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
    headerShown: false,
      }}/>
      <Stack.Screen name="AddScreen" component={AddScreen} options={{
    headerShown: false,
      }}/>
    </Stack.Navigator>
    </NavigationContainer>
    </QueryClientProvider>
  
  );
}

