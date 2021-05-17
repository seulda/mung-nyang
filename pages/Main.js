import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import data from '../data.json';
import Board from '../components/Board.js';
import AddCard from '../components/AddCard.js';
import PetProfile from '../components/PetProfile.js';
import PetService from '../components/PetService.js';
import Loading from '../components/Loading.js';

import {firebase_db} from "../firebaseConfig.js"


export default function Main({ navigation, route }) {
  console.disableYellowBox = true;

  let board = data.board;

  //useState 사용법 : [state,setState] 에서 
  //state는 이 컴포넌트에서 관리될 상태 데이터를 담고 있는 변수
  //setState는 state를 변경시킬때 사용해야하는 함수
  //useState()안에 전달되는 값은 state 초기값
  const [state, setState] = useState([])
  const [ready, setReady] = useState(true)

  //하단의 return 문이 실행되어 화면이 그려진다음 실행되는 useEffect 함수
  //내부에서 data.json으로 부터 가져온 데이터를 state 상태에 담고 있음
  useEffect(() => {
    firebase_db.ref('/board').once('value').then((snapshot) => {
      console.log("firebase data 연결되었습니다.")
      let board = snapshot.val();
      setState(board)
      setReady(false)
      //let board = state.board;
    });  
    //setTimeout(() => {
      // let board = data.board;
      // setState(board)
      // setReady(false)
    //}, 1000)

  }, [])

    //let board = data.board;
    //let board = state.board;


  testAlert = () => {
    Alert.alert('Hello', 'Coming Soon!');
    console.log("Button Pressed");
  }


  return ready ? (<Loading />) : (
    <ScrollView style={styles.container}>

      <StatusBar style="black" />
      {/* Title bar */}
      {/* <View style={styles.title}>
        <Text style={styles.titleText}>멍냥이랑</Text>
      </View> */}

      {/* Pet Profile */}
      <PetProfile />

      {/* 산책&돌봄 서비스 이용 */}
      <PetService />

      {/* AD */}
      <ScrollView style={styles.cardContainer} horizontal indicatorStyle={"white"}>
        <AddCard />
      </ScrollView>

      {/* Q&A */}
      <View style={styles.helpContainer} horizontal indicatorStyle={"white"}>
        <Text style={styles.helpText}>훈련사님, 도와주세요!</Text>
        <TouchableOpacity style={styles.helpWriteBtn} onPress={() => { navigation.navigate('Write') }}>
          <Text style={styles.helpWriteBtnText}>글작성</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.boardContainer} horizontal indicatorStyle={"white"}>
        {
          board.map((content, i) => {
            return (<Board content={content} key={i} />)
          })
        }
      </ScrollView>

      {/* Q&A : 자주묻는질문 토글 네비게이션 버튼 컴포넌트 */}
      <TouchableOpacity style={styles.qnaButtonContainer} onPress={() => { navigation.navigate('QnA') }}>
        <Text style={styles.qnaButtonText}>Q&A (훈련사Q&A / 자주묻는질문)</Text>
      </TouchableOpacity>


      {/* About 멍냥이랑 */}
      <TouchableOpacity style={styles.aboutContainer} onPress={() => { navigation.navigate('About') }}>
        <Text style={styles.aboutText}>About 멍냥이랑</Text>
      </TouchableOpacity>


    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {          //앱의 배경 색
    backgroundColor: '#fff',
  },

  title: {
    margin: 1,
    padding: 2,
    backgroundColor: "#fe8d6f"
  },
  titleText: {
    marginTop: 35,
    width: 375,
    height: 54,
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
    color: "#606060"
  },

  cardContainer: {
    backgroundColor: "#fae0d4",
    marginTop: 15,
    marginBottom: 15,
    height: 115,
    borderTopWidth: 0.5,
    borderTopColor: "#eee",
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },

  helpText: {
    marginLeft: 12,
    margin: 5,
    fontSize: 25,
    fontWeight: "bold",
    alignItems: 'center'
  },
  helpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 15,
  },
  helpWriteBtn: {
    margin: 5,
    marginRight: 22,
    width: 60,
    borderRadius: 10,
    backgroundColor: "#fe8d6f",
    padding: 3,
  },
  helpWriteBtnText: {
    margin: 5,
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  boardContainer: {
    flexDirection: "row",
    margin: 10,
    padding: 5,
    height: 180,
    alignSelf: 'center'
  },

  qnaButtonContainer: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#000",
    padding: 3,
  },
  qnaButtonText: {
    margin: 10,
    color: "#fff",
    fontSize: 20,
    // fontWeight: 'bold',
    textAlign: 'center'
  },

  aboutContainer: {
    margin: 20,
    marginTop: 50,
    marginBottom: 100,
    borderRadius: 10,
    backgroundColor: "#fe8d6f",
    padding: 3,
  },
  aboutText: {
    margin: 10,
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

});