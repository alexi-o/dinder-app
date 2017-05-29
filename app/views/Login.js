import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';

import Container from '../../app/components/Container';
import Button from '../../app/components/Button';
import Label from '../../app/components/Label';

class Login extends Component {
  state = {
    autoCorrect: false,
  }

  press() {
  }

  handlePress = () => {
    this.props.navigator.push({
      screen: 'Main',
      title: 'Main',
    });
  };
render(){
return (
<ScrollView style={styles.scroll}>
          <Container>
          <Text style={styles.welcome}>
          Welcome to Foonder
        </Text>
            <Button 
              label="Forgot Login/Pass"
              styles={{button: styles.alignRight, label: styles.label}} 
              onPress={this.handlePress} />
          </Container>
          <Container>
            <Label text="Username or Email" />
              <TextInput
                style={styles.textInput}
                autoCorrect={this.state.autoCorrect} />
          </Container>
          <Container>
            <Label text="Password" />
              <TextInput
                secureTextEntry={true}
                style={styles.textInput}
                autoCorrect={this.state.autoCorrect} />
          </Container>
          <View style={styles.footer}>
            <Container>
                <Button 
                    label="Sign In"
                    styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
                    onPress={this.handlePress} />
            </Container>
          </View>
        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#00A4BC',
    padding: 30,
    flexDirection: 'column'
},
  textInput: {
    height: 80,
    fontSize: 20,
    backgroundColor: '#FFF',
},
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'black',
 },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
},
buttonBlackText: {
    fontSize: 20,
    color: '#595856'
},
primaryButton: {
    backgroundColor: '#34A853'
},
});

export default Login;

//onPress={this.press.bind(this)}