import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home() {
    const [value, onChangeText] = React.useState('');
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Pizza Game!</Text>
          <Text style={styles.instructions}>Create a Pizza with Each Word</Text>
          <TextInput
            style={{
              height: 40,
              width: 200,  
              borderWidth: 3,
              borderColor: 'gray',
            }}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
            <Text style={{padding: 10, fontSize: 42}}>
            {value.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
         
        </View>
      );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});