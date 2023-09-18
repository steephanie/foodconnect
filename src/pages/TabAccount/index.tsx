import React from 'react'
import { Text, View } from 'react-native'
import { AccountProps } from './types';
import * as S from './styles';
import { Header } from '../../components/Header';
import Box from '../../components/Box';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';

export const Account = ({
    title
}: AccountProps) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleTerm = () => {
        navigation.navigate('Term');
    };

    const handleLogin = () => {
        navigation.navigate('Login');
    };
    
    const handleAskedQuestions = () => {
        navigation.navigate('AskedQuestions');
    };

    const handleMyCadastre = () => {
        navigation.navigate('MyCadastre');
    };

    const handleMyFreelas = () => {
        navigation.navigate('MyFreelas');
    };

    
    return (
        <S.Container>
            <Box>
                <Header title='' onPress={handleGoBack} />
                <Text style={{ marginTop: 30, marginBottom: 30, textAlign: 'center', fontSize: 36, color: '#41245C', fontWeight: '500' }}>
                    CONTA
                </Text>
                <Button title='Meus Dados' color='#41245C' colorBorder='#41245C' onClick={handleMyCadastre} />
                <View style={{ marginBottom: 18 }} />
                <Button title='Meus freelas' color='#41245C' colorBorder='#41245C' onClick={handleMyFreelas} />
                <View style={{ marginBottom: 18 }} />
                <Button title='Dúvidas frequentes' color='#41245C' colorBorder='#41245C' onClick={handleAskedQuestions} />
                <View style={{ marginBottom: 18 }} />
                <Button title='Termos de uso' color='#41245C' colorBorder='#41245C' onClick={handleTerm} />
                <View style={{ marginBottom: 18 }} />
                <Button title='Sair' color='#41245C' colorBorder='#41245C' onClick={handleLogin} />
            </Box>
        </S.Container>
    )
};
