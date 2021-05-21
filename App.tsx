
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('HomeB')}>
        <Text>Screen 1</Text>
      </TouchableWithoutFeedback>

    </View>
  );
}

function HomeScreenB({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
        <Text>Screen 2</Text>
      </TouchableWithoutFeedback>

    </View>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeB" component={HomeScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;