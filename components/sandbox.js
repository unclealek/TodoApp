import React, {useState} from 'react';
import { StyleSheet, Text, View,FlatList, TextInput, Button } from 'react-native';


export default function Sandbox() {


    return (  
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
         
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: '#333', 
      } ,    
    boxOne: {
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {
        backgroundColor: 'gold',
        padding: 10,
    },
    boxThree: {
        backgroundColor: 'coral',
        padding: 10,
    },
    boxFour: {
        backgroundColor: 'skyblue',
        padding: 10,
    }
    
})