import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function PetService() {
    console.disableYellowBox = true;

    const oneAlert = () => {
        Alert.alert('산책', '산책가까?!');
        console.log("Sanch Button Pressed");
    }

    const twoAlert = () => {
        Alert.alert('돌봄', '놀러가까?!');
        console.log("Dolb Button Pressed");
    }

    return (
        <View style={styles.middleContainer} horizontal indicatorStyle={"white"}>
            <TouchableOpacity style={styles.middleButton} onPress={oneAlert}>
                <Text style={styles.middleButtonText}>율무랑 산책갈래?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.middleButton} onPress={twoAlert}>
                <Text style={styles.middleButtonText}>구름이랑 놀자!</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    middleContainer: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
        padding: 5,
        marginLeft: 10,
        height: '100%',
        alignSelf: 'center'
    },
    middleButton: {
        width: 160,
        height: 180,
        borderRadius: 10,
        backgroundColor: "#fe8d6f",
        padding: 20,
        margin: 6
    },
    middleButtonText: {
        color: "#fff",
        fontWeight: "700",
        textAlign: "center"
    },
});