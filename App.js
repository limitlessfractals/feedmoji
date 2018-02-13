import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/SignIn';

export default class App extends React.Component {
  state = {
    loggedIn: false
  }

  renderView = () =>{
    if(!this.state.loggedIn){
      console.log("not signed in");
      return(
        <SignIn logIn={this.logIn}/>
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
