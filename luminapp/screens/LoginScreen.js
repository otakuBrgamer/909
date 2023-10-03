import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import { View, ImageBackground } from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Lumin App</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>E-mail:</Text>
            <TextInput
            style={styles.inputBox}
            placeholder="josefa@hotmail.com"
            placeholderTextColor="#2B2B2B"
             />
          </View>
          <View style={styles.initialContainer}>
            <TouchableOpacity style={styles.buttonInitial}>
              <Text style={styles.buttonText}>AVANÇAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 40, // Aumentei o marginBottom para criar mais espaço
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  initialContainer: {},
  buttonInitial: {
    backgroundColor: 'rgba(6, 160, 246, 0.53)', // Cor com 53% de transparência
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  inputContainer:{
    width:"80%",
    margin:20
  },
  inputText:{
    fontSize:18,
    padding:5
  },
  inputBox:{
    borderWidth:1,
    borderColor:"2B2B2B",
    padding:10,
    borderRadius:12,
    backgroundColor:"white"
  }
});
