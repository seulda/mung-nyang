import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';

import main from '../assets/main.png';

export default function PetProfile() {
    console.disableYellowBox = true;

    return (
        <View style={styles.mainPetContainer}>
            <Image style={styles.mainImage} source={main} />
            <View style={styles.petProfile}>
                <Text style={styles.petName}>petName_춘배</Text>
                <Text style={styles.petSub}>petSub_나이모름, 수컷</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    mainPetContainer: {
        flex: 1,
        margin: 23,
        padding: 8,
        borderRadius: 20,
        backgroundColor: "#e5e5e5",
        flexDirection: "row",
      },
      mainImage: {
        flex: 1,
        width: 60,
        height: 70,
        borderRadius: 50,
        margin: 5,
        alignSelf: "center"
      },
      petProfile: {
        flex: 3,
        margin: 5,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-around'
      },
      petName: {
        backgroundColor: "#e5e5e5",
        fontSize: 20,
        fontWeight: "500"
      },
      petSub: {
        backgroundColor: "#e5e5e5",
        fontSize: 15,
      },
});