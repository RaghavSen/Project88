import React, { Component } from 'react';
import { Text, View,TouchableOpacity,SafeAreaView,Platform,StatusBar,StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.heading}/> 
                <View>  
                <Text> Stellar App</Text>
                 </View>
            <TouchableOpacity>
           <Text> Dailypic </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text> StarMap   </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text> SpaceCraft</Text>
            </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
   container:{
    flex:1

   },
   heading:{
    marginTop:Platform.OS==="android"? StatusBar.currentHeight:0
 },
 buttons:{
   flex:0.25,
   marginleft:50,
   marginRight:50,
   marginTop:50,
   borderradius:50,
   backgroundColor:"white"
 },
 titleBar:{
    felx:0.25,
    justifyContent:"center",
    alignItems:"center"
 },
 titleText:{
    fontSize:40,
    fontWeight:"bold",
    color:"white"
 },
 routetext:{
    fontSize:25,
    fontWeight:"bold",
    color:"red",
    justifyContent:"center",
    alignItems:"center"
    
 }


})
