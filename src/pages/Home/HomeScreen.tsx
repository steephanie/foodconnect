import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior="padding">
                <Text style={{ fontSize: 30, color: '#000' }}>Home</Text>
            </KeyboardAvoidingView>
        </View>

    )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})