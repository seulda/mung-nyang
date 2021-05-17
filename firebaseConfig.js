import * as firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAO7SdBaMlC6dAropdkKQ7-jiF7cMJXogE",
    authDomain: "mung-nyang.firebaseapp.com",
    databaseURL: "https://mung-nyang-default-rtdb.firebaseio.com/",
    projectId: "mung-nyang",
    storageBucket: "mung-nyang.appspot.com",
    messagingSenderId: "906927359846",
    appId: "1:906927359846:web:88c0e6ca0e7301db1d6aa7",
    measurementId: "G-NX3GP9YQMN"
};

//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()