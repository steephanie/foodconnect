import React from 'react'
import { KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native'
import { InputProps } from './types';


export function Input({
    placeholder,
    onChangeText,
    value,
    keyboardType,
}: InputProps) {

    return (
        <KeyboardAvoidingView behavior="padding">
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
            />
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 2,
        borderColor: '#41245C',
        borderRadius: 8,
        padding: 10,
    },
});