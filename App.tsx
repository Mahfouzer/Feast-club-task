
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MoviesScreen from './screens/Movies-Screen'
import MovieDetailsScreen from './screens/Movie-Details-screen';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppTheme } from './constants';


import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'


const queryClient = new QueryClient();
const Stack = createStackNavigator();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={AppTheme}>
        <SafeAreaView style={styles.AppContainer}>
          <Stack.Navigator>
            <Stack.Screen name="Movies" component={MoviesScreen} />
            <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </QueryClientProvider>

  );
}

const styles = StyleSheet.create({
  AppContainer: { flex: 1 },
})

export default App;