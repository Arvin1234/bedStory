import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class TransactionScreen extends React.Component {
    constructor(){
      super();
      this.state = {
        Submit: 'normal',
      }
    }

    <TouchableOpacity 
        style={styles.scanButton}
            onPress={()=>{
            goToSummaryScreen;
            }}>
     </TouchableOpacity>
     
     const styles = StyleSheet.create({
      scanButton: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });