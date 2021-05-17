import React, { useState, useEffect, Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main.js';
import About from '../pages/About.js';
import Write from '../pages/Write.js';
import WebViewPage from '../pages/WebViewPage.js';
import QnA from '../pages/QnA.js';


const Stack = createStackNavigator();

const StackNavi = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#fe8d6f",
                    shadowColor: "#fff",
                    height: 77,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 30,
                    marginBottom: 8
                },
                headerTintColor: "#FFFFFF",
                headerBackTitleVisible: false,
            }}
        >
            {/* 컴포넌트를 페이지로 만들어주는 엘리먼트에 끼워 넣어서 이 자체로 페이지 기능을 합니다*/}
            <Stack.Screen name="Main" component={Main} options={{ title: '멍냥이랑' }}/>
            <Stack.Screen name="About" component={About} options={{ title: 'About 멍냥이랑' }} />
            <Stack.Screen name="Write" component={Write} options={{ title: '글 작성' }} />
            <Stack.Screen name="WebViewPage" component={WebViewPage} options={{ title: 'Web View' }} />
            <Stack.Screen name="QnA" component={QnA} options={{ title: 'Q&A' }} />
        </Stack.Navigator>
    )
}

export default StackNavi;