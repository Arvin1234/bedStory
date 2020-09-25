import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';



export default class App extends React.Component {
  render(){
    return (
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Story App',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
    )

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStoryScreen},
  Read: {screen: ReadStoryScreen},
}),

defaultNavigationOptions: ({navigation})=>({
  tabBarIcon : ()=>{
    const routeName = navigation.state.routeName;
    console.log(routeName)
    if(routeName === "Write") {
      return(
        <Image source = {require('./assets/write.png')}
        style = {{width: 40, height:40}} />
      )
    }
    else if(routeName === "Read"){
      return(
        <Image source = {require('./assets/read.png')}
        style = {{width: 40, height:40}} />
      )
    }
  }
})

const AppContainer =  createAppContainer(TabNavigator);
