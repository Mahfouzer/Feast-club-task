
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MoviesScreen from './screens/Movies-Screen'


const Stack = createStackNavigator();

function HomeScreenB({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Movies')}>
        <Text>Screen 2</Text>
      </TouchableWithoutFeedback>

    </View>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movies" component={MoviesScreen} />
        <Stack.Screen name="HomeB" component={HomeScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;