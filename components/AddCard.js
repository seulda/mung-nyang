import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';

import coffee from '../assets/coffee.jpg';

export default function AddCard() {
    console.disableYellowBox = true;

    return (
        <View style={styles.card} >
            <View style={styles.addCard}>
                <Image style={styles.cardImage} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3" }} />
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle}>AD) 우리 동네 피자 맛집 드루와</Text>
                    <Text style={styles.cardSub} numberOfLines={3}>동해물과 백두산이 마르고 닳도록 치킨 피자를 먹어도 언제나 맛있쪙 치맥과 피맥은 더 옳지 그럼그럼 그치만 아아도 맛있다구 ㅋㅋㅋ 이거 세줄 이상 가면 짤린다?</Text>
                </View>
            </View>
            <View style={styles.addCard}>
                <Image style={styles.cardImage} source={coffee}/>
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle}>AD) 카공족 모여라~!~!@@</Text>
                    <Text style={styles.cardSub} numberOfLines={3}>거어지같은 코로나때문에 카페도 못가요~~ 넘 화나요ㅡㅡ 하는 사람들 다 모여봐~!~! 모이는 이유는 같이 울자고.. 혼자 울면 슬프잖아 ㅠㅠ 근데 이거 세줄 이상 가면 짤린다?</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        padding: 10,
        flexDirection: "row",
    },
    addCard: {
        margin: 5,
        width: 375,
        flex: 1,
        //컨텐츠들을 가로로 나열, 세로로 나열은 column(디폴트값) 
        flexDirection: "row",
    },
    cardImage: {
        flex: 1,
        width: 60,
        height: 80,
        borderRadius: 10,
    },
    cardText: {
        flex: 3,
        flexDirection: "column",
        marginLeft: 5,
    },
    cardTitle: {
        margin: 5,
        fontSize: 20,
        fontWeight: "700"
    },
    cardSub: {
        margin: 4,
        fontSize: 15
    },

});