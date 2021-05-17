import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//import data from '../data.json';
import BoardQna from '../components/BoardQna.js';

import { firebase_db } from "../firebaseConfig.js"


export default function Main({ navigation }) {
    console.disableYellowBox = true;


    const [state, setState] = useState([])
    const [cateState, setCateState] = useState([])
    const [ready, setReady] = useState(true)

    useEffect(() => {

        firebase_db.ref('board').once('value').then((snapshot) => {
            console.log("firebase data 연결되었습니다.")
            let board = snapshot.val();
            setState(board)
            setCateState(board)
            setReady(false)
        });

    }, [])

    //let board = data.board;
    //let board = state.board;

    const topCategory = (cate) => {
        setCateState(state.filter((d) => {
            return d.topCategory == cate
        }))
    }
    const allCategory = () => {
        setCateState(state)
    }


    testAlert = () => {
        Alert.alert('Hello', 'Coming Soon!');
        console.log("Button Pressed");
    }


    return (
        <View style={styles.container}>
            <StatusBar style="black" />

            <View style={styles.containerSemi}>
                {/* 상단탭 */}
                <View style={styles.topContainer} horizontal indicatorStyle={"white"}>
                    <TouchableOpacity style={styles.topContainerButton} onPress={() => { topCategory('훈련사') }}>
                        <Text style={styles.topContainerButtonText}>훈련사Q&A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topContainerButton} onPress={() => { topCategory('자주묻는질문') }}>
                        <Text style={styles.topContainerButtonText}>자주묻는질문</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.contentContainer}>

                    <TouchableOpacity style={styles.testButton} onPress={allCategory}>
                        <Text style={styles.testButtonText}>전체보기_Test</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.testButton} onPress={() => { topCategory('커뮤니티') }}>
                        <Text style={styles.testButtonText}>커뮤니티_Test</Text>
                    </TouchableOpacity>

                    {
                        cateState.map((content, i) => {
                            return (<BoardQna content={content} key={i} />)
                        })
                    }

                </ScrollView>

            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: "#fe8d6f",
        alignItems: "center"
    },
    containerSemi: {
        // width: '95%',
        // height: '97%',
        backgroundColor: "#fff",
        padding: 8,
        // marginTop: 10,
        // borderRadius: 20,
        //justifyContent: "center",
        // alignItems: "center"
    },

    topContainer: {
        flexDirection: "row",
        width: '100%',
        height: 50,
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        backgroundColor: "#e5e5e5",

    },
    topContainerButton: {
        backgroundColor: "#fff",
        width: '50%',
        height: 50,
        alignItems: "center",
        justifyContent: 'center',
    },
    topContainerButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
    },

    contentContainer: {
        backgroundColor: "#fff",
        padding: 8,
        marginTop: 5,
        // justifyContent: "center",
        // alignItems: "center"
    },

    contentArea: {
        width: '100%',
        alignItems: "center",
        backgroundColor: "#000",
    },

    testButton: {
        margin: 2,
        padding: 3,
        borderWidth: 1,
        borderColor: "#b5b5b5",
        backgroundColor: "#f0f0f0",
    },
    testButton2: {
        margin: 20,
        borderRadius: 10,
        backgroundColor: "#fe8d6f",
        padding: 3,
    },
    testButtonText: {
        margin: 10,
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
        // textAlign: 'center'
    },

});