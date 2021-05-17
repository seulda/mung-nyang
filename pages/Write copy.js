import React, { useState, useEffect, Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import { StatusBar } from 'expo-status-bar';


import Board from '../components/Board.js';

export default function Write({ navigation, route }) {

    testAlert = () => {
        Alert.alert('Write', 'Good!');
        console.log("HelpBoard Write Button Pressed");
    }

    const [task, setTask] = useState();
    const [taskTitle, setTaskTitle] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();        
        console.log('help title input: ' + taskTitle);
        console.log('help content input: ' + task);
        setTaskItems([...taskItems, taskTitle, task])
        setTaskTitle(null);
        setTask(null);
    }

    //삭제기능
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    // useEffect(()=>{
    //     navigation.setOptions({
    //         title:"About 멍냥",
    //         headerStyle: {
    //             backgroundColor: '#1F266A',
    //             shadowColor: "#1F266A",
    //         },
    //         headerTintColor: "#fff",
    //     })
    // },[])


    return (
        <View style={styles.container}>
            <StatusBar style="black" />
            {/* <Text style={styles.writePageTitle}>질문하기</Text> */}
            <TouchableOpacity style={styles.addButton} onPress={() => handleAddTask()}>
                <Text style={styles.addButtonText}>등록하기</Text>
            </TouchableOpacity>
            
            

            <View style={styles.textContainer}>
                <View style={styles.textContainer01}>

                    <View style={styles.helpBoardTitle}>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={styles.writeTaskTitleWrapper}
                        >
                            <TextInput style={styles.inputTitle} placeholder={'제목'} value={taskTitle} onChangeText={text => setTaskTitle(text)} />
                        </KeyboardAvoidingView>
                    </View>

                    <View style={styles.helpBoardContent}>
                        {/* <TextInput placeholder="내용을 입력하세요." style={{ borderColor: 'black', borderWidth: 1, padding: 10 }} /> */}
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={styles.writeTaskWrapper}
                        >
                            <TextInput style={styles.input} placeholder={'내용'} value={task} onChangeText={text => setTask(text)} />
                        </KeyboardAvoidingView>

                    </View>

                </View>

            </View>

            {/* <View>
                {
                    taskItems.map((item, index) => {
                        return (<Board key={index} content={item} />)
                    })
                }
            </View> */}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fe8d6f",
        alignItems: "center",
    },
    writePageTitle: {
        fontSize: 30,
        fontWeight: "900",
        color: "#000",
        paddingTop: 15,
        margin: 10
    },
    textContainer: {
        width: 320,
        height: 400,
        backgroundColor: "white",
        margin: 20,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer01: {
        margin: 10,
        flex: 1,
    },
    helpBoardTitle: {
        //backgroundColor: "green",
        flex: 1,
        width: 300,
        justifyContent: "center",
        alignItems: "center",
    },
    helpBoardContent: {
        //backgroundColor: "yellow",
        flex: 7,
        justifyContent: "center",
        alignItems: "center",
    },

    addButton: {
        width: 350,
        backgroundColor: "orange",
        padding: 15,
        margin: 10,
        marginTop: 30,
        borderRadius: 15,
        alignItems: "center",
    },
    addButtonText: {
        color: "#fff",
        fontSize: 25,
        fontWeight: 'bold'
    },

    writeTaskTitleWrapper: {
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#c0c0c0',
        borderWidth: 2,
        width: '98%',
        height: '90%',
        backgroundColor: "#f8f8f8",        
        //backgroundColor: 'purple',
    },
    inputTitle: {
        backgroundColor: '#f8f8f8',
        margin: 5,
        padding: 5,
        width: '95%',
        fontSize: 23
    },
    writeTaskWrapper: {
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#c0c0c0',
        borderWidth: 2,
        width: '98%',
        height: '95%',
        backgroundColor: "#f8f8f8",  
        //backgroundColor: 'purple',
    },
    input: {
        backgroundColor: '#f8f8f8',
        margin: 5,
        padding: 5,
        width: '95%',
        height: '95%',
        fontSize: 20
    },

})