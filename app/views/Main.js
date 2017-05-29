import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ListView, Linking, TouchableOpacity} from 'react-native';
import Container from '../components/Container';
import OAuthSimple from 'oauthsimple';

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

  render(){
    return (
      <TouchableOpacity style={styles.resultRow}>
        <Image source={{uri: "https://s3-media2.fl.yelpcdn.com/bphoto/tycJcKwVZr7DdwPsalIoOA/o.jpg"}}
        style={{width: 80, height: 80, justifyContent: 'flex-start'}} />
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
           <Text style={{fontWeight: 'bold'}}>Grillin' Wings & Things</Text>
           <Text>Rating: 4.5</Text>
           <Text>Phone: (720) 570-7800</Text>
        </View>
      </TouchableOpacity>
    )
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
  },
  header: {
    textAlign: 'center',
    position: 'relative',
    top: 60,
    fontSize: 30
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginBottom: 20,
    padding: 5,
  }
});

export default Main;