import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MyOwnComponent = () =>
Alert.alert('ALERT !!!', 'This is my own component', [
  {
    text: 'Cool',
    onPress: () => console.log('Cool Pressed'),
    style: 'Cool',
  },
  {text: 'Not cool', onPress: () => console.log('Not cool Pressed')},
]);

const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Text>This is my application !</Text>
    <TextInput
      style={{
        height: 40,
        borderWidth: 2,
      }}
      defaultValue="This is a text input zone"
    />
    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Profile")}}>
      <Text>Go to the second screen</Text>
    </TouchableOpacity>
  </View>
  )
}

const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Text>This is my second page !</Text>
    <TextInput
      style={{
        height: 40,
        borderWidth: 2,
      }}
      defaultValue="This is a text input zone"
    />
    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Home")}}>
      <Text>Go to the first screen</Text>
    </TouchableOpacity>
  </View>
  )
}


const Stack = createNativeStackNavigator();

export default function App() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Screen1}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "red"
  },
  button: {
    padding: 10,
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: 'pink',
  }
});
