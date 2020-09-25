import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import db from '../config'
import { ScrollView } from 'react-native-gesture-handler';



export default class Searchscreen extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        allstories: [],
        lastVisiblestory: null,
        search:''
      }
    }

    fetchMorestories = async ()=>{
      var text = this.state.search.toUpperCase()
      var enteredText = text.split("")

      
      if (enteredText[0].toUpperCase() ==='R'){
      const query = await db.collection("read").where('stories','==',text).startAfter(this.state.lastVisiblestory).limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          allstories: [...this.state.allstories, doc.data()],
          lastVisiblestory: doc
        })
      })
    }
      else if(enteredText[0].toUpperCase() === 'W'){
        const query = await db.collection("write").where('stories','==',text).startAfter(this.state.lastVisiblestory).limit(10).get()
        query.docs.map((doc)=>{
          this.setState({
            allStories: [...this.state.allStories, doc.data()],
            lastVisibleStory: doc
          })
        })
      }
  }

    searchstories= async(text) =>{
      var enteredText = text.split("")  
      if (enteredText[0].toUpperCase() ==='B'){
        const story =  await db.collection("stories").where('write','==',text).get()
        story.docs.map((doc)=>{
          this.setState({
            allstories:[...this.state.allstories,doc.data()],
            lastVisibleStory: doc
          })
        })
      }
      else if(enteredText[0].toUpperCase() === 'S'){
        const story = await db.collection('stories').where('read','==',text).get()
        story.docs.map((doc)=>{
          this.setState({
            allStories:[...this.state.allStories,doc.data()],
            lastVisibleStory: doc
          })
        })
      }
    }

    componentDidMount = async ()=>{
      const query = await db.collection("stories").limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          allStories: [],
          lastVisibleStory: doc
        })
      })
    }
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.searchBar}>
        <TextInput 
          style ={styles.bar}
          placeholder = "Enter Story Name"
          onChangeText={(text)=>{this.setState({search:text})}}/>
          <TouchableOpacity
            style = {styles.searchButton}
            onPress={()=>{this.searchstories(this.state.search)}}
          >
            <Text>Search</Text>
          </TouchableOpacity>
          </View>
        <FlatList
          data={this.state.allstories}
          renderItem={({item})=>(
            <View style={{borderBottomWidth: 2}}>
              <Text>{"story: " + item.storyType}</Text>
            </View>
          )}
          keyExtractor= {(item, index)=> index.toString()}
          onEndReached ={this.fetchMoreStories}
          onEndReachedThreshold={0.7}
        /> 
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20
    },
    searchBar:{
      flexDirection:'row',
      height:40,
      width:'auto',
      borderWidth:0.5,
      alignItems:'center',
      backgroundColor:'grey',
  
    },
    bar:{
      borderWidth:2,
      height:30,
      width:300,
      paddingLeft:10,
    },
    searchButton:{
      borderWidth:1,
      height:30,
      width:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green'
    }
  })