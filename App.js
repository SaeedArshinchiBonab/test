import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontFamily : 'IRANSansMobile' , fontSize: 22}}>سلام</Text>    
        <Text style={{fontFamily:"IRANSansMobile_Light"}}>سلام</Text> 
        <Text style={{fontFamily:"IRANSansMobile_Medium"}}>سلام</Text> 
        <Text style={{fontFamily:"IRANSansMobile"}}>سلام</Text> 
        
      </View>
    );
  }
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
