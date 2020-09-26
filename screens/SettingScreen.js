import React from 'react'
import { View, 
    Text, 
    KeyboardAvoidingView,
    StyleSheet } from 'react-native'
import MyHeader from '../components/MyHeader'

export default class SettingScreen extends React.Component {
    render(){
        return (
            <KeyboardAvoidingView>
                <MyHeader title="Settings" />
            </KeyboardAvoidingView>
        )
    }
}