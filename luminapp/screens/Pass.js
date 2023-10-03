import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import { View, ImageBackground } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class PasswordRecovery extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}> Recuperar senha </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>
              E-mail para a recuperção de senha:
            </Text>
            <TextInput
              style={styles.inputBox}
              placeholder="e-mail"
              placeholderTextColor="#2B2B2B"
            />
            <View style={styles.checkBoxContainer}>
              <CheckBox
                title="Aceito os termos"
                //checked={this.state.isCheked}
                //onPress{this.handLeCheck}
              />
            </View>
          </View>
          <View style={styles.initialContainer}>
            <TouchableOpacity style={styles.buttonInitial}>
              <Text style={styles.buttonText}>COMEÇAR</Text>
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
    marginBottom: '0%',
    flex: 0.45,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  initialContainer: {},
  buttonInitial: {
    backgroundColor: 'rgba(6, 120, 246, 0.53)', // Cor com 53% de transparência
    padding: 15,
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  inputText: {
    marginTop: '6%',
    fontSize: 15,
    padding: 8,
    color: 'white',
    fontWeight: 'bold',

  },
  inputBox: {
    marginBottom: '20%',
    borderWidth: 1,
    borderColor: '2B2B2B',
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  inputContainer: {
    marginBottom: '40%',
    marginTop: '-80%',
    width: '83%',
    height: '20%',
    margin: 20,
    borderRadius: 12,
    backgroundColor: 'rgba(6, 120, 246, 0.43)',
  },
  checkBoxContainer: {
    marginTop: 100,
    borderRadius: 20,

  },
});
