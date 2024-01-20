import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';


const ToDos = ({ initialValues }) => {
    const [toDos, setToDos] = useState(initialValues.map((value) => ({ id: uuidv4(), count: value })));
    
    const addToDo = (initialValue) => {
        const newTitle = { id: uuidv4(), count: initialValue };
        setToDos((prevToDos) => [...prevToDos, newTitle]);

    }

    const removeToDo = (id) => {
        setToDos((prevToDos) =>
            prevToDos.filter(toDo => toDo.id !== id));
    };
    
    return (
        <View style={styles.todoListContainer}>
            {toDos.map((toDo) => (
                <View key={toDo.id} style={styles.todoItem}>
                    <Text>{toDo.count}</Text>
                    <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
                </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
    );
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});
export default ToDos;
    
