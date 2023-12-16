import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from './components/header';
import TodoItem from './components/todoItems';
import AddTodo from './components/addTodo'; 
import Sandbox from './components/sandbox';


export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'}, 
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
    {text: 'go to sleep', key: '4'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos,
        ];
      });
    }else{
      alert('todo must be over 3 characters long',[
        {text: 'Unsterstood', onPress: () => {console.log('Unsterstood Pressed')},
          style: 'cancel',},
      ]);
    }
   
  };

  return (
  
   <TouchableWithoutFeedback onPress={()=>{
     console.log('working');
     Keyboard.dismiss(); 
     console.log('keyboard dismissed');
   }}>
     <View style={styles.container}>
     <Header/>
     <View style={styles.content}>
       <AddTodo submitHandler={submitHandler} />
       <View style={styles.list}>
         <FlatList 
           data={todos}
           renderItem={({item}) =>(
             <TodoItem item={item} pressHandler={pressHandler}/>
           ) }
         />
       </View>
     </View>
    
      {/*} <StatusBar style="auto" />*/}
     </View>
     </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
 
});
