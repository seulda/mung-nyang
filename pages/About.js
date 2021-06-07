import React, { useState, useEffect, Component } from 'react';
//import * as React from 'react';
import { WebView } from 'react-native-webview';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import main from '../assets/main.png';

export default function About({navigation,route}) {
    const instaKim = "http://instagram.com/seuldaaaa";

    testAlert = () => {
        Alert.alert('Hello', 'Coming Soon!');
        console.log("Button Pressed");
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
            <Text style={styles.title}>Wellcome  "멍냥이랑"</Text>

            <View style={styles.textContainer}>
                <Image style={styles.aboutImage} source={main} resizeMode={"cover"} />
                <Text style={styles.desc01}>멍이와 냥이. 내가 사랑하는,</Text>
                <Text style={styles.desc01}>나와 함께 하는 반려동물</Text>
                <Text style={styles.desc02}>반려동물과 함께하며 행복한 일상이 되도록, 세상 모든 멍이와 냥이, 반려동물을 위해      제작자들도 노력하겠습니다.</Text>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('WebViewPage') }}>
                    <Text style={styles.buttonText}>Coming Soon : )</Text>
                    {/* <WebView source={{ uri: instaKim }} style={{ marginTop: 20 }} /> */}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fe8d6f",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "900",
        color: "#fff",
        paddingTop: 20,
        margin: 20
    },
    textContainer: {
        width: 300,
        height: 500,
        backgroundColor: "#fff",
        marginTop: 30,
        marginBottom: 100,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    aboutImage: {
        width: 150,
        height: 150,
        borderRadius: 30,
        margin: 30,
        marginTop: 5
    },
    desc01: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
        paddingLeft: 22,
        paddingRight: 22

    },
    desc02: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "700",
        padding: 22,
        width: "85%"
    },
    button: {
        backgroundColor: "orange",
        marginTop: 20,
        padding: 20,
        borderRadius: 15
    },
    buttonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "700"
    }
})