import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from '../components/Container';

class Main extends Component {
  handlePress = () => {
    this.props.navigator.push({
      screen: 'Login',
      title: 'Login',
    });
  };

state = {
    position: 'unknown'
  };
  
  componentDidMount() {
  navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({position});
      },
      (error) => alert(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  fetchData(){

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Dinder
        </Text>
        <Container
        Test
        onPress={this.handlePress}
      /> 
      </View>
       );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    textAlign: 'left',
    color: '#333333',
    margin: 5,
    height: 50,
    borderColor: '#60b7e2',
    borderWidth: 1
  },
  amount: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Main;