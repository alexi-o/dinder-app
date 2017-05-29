import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import Container from '../components/Container';

class Favorites extends Component {
  render() {
    return (
    <ScrollView style={styles.scroll}>
      <Container>
        <Text>
         This will display all favorites! (someday...)
        </Text>
      </Container>
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

export default Favorites;