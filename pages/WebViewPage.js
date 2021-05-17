import React, { useState, useEffect, Component } from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';


export default function About({navigation}) {
    const instaKim = "http://instagram.com/seuldaaaa";
    const google = "http://www.google.com";

    return (
        <View style={styles.container}>
            <StatusBar style="black" />
            <View style={styles.webContainer}>
                <WebView source={{ uri: instaKim }} style={{ marginTop: 20 }} />
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
    webContainer: {
        width: '94%',
        height: '93%',
        backgroundColor: "#fff",
        padding: 10,
        marginTop: 20,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
})