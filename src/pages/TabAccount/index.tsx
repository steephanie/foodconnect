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
    return (
        <S.Container>
            <Box>
                <Header title='' onPress={handleGoBack} />
                <Text style={{ marginTop: 30, marginBottom: 30, textAlign: 'center', fontSize: 36, color: '#41245C', fontWeight: '500' }}>
                    CONTA
                </Text>
                <Button title='Meus Dados' color='#41245C' colorBorder='#41245C' onClick={() => alert('Meus dados')} />
                <View style={{ marginBottom: 18 }} />
                <Button title='Meus freelas' color='#41245C' colorBorder='#41245C' onClick={() => alert('Meus freelas')} />
                <View style={{ marginBottom: 18 }} />
                <Button title='Dúvidas frequentes' color='#41245C' colorBorder='#41245C' onClick={() => alert('Dúvidas frequentes')} />
                <View style={{ marginBottom: 18 }} />
                <Button title='Termos de uso' color='#41245C' colorBorder='#41245C' onClick={() => alert('Termos de uso')} />
                <View style={{ marginBottom: 18 }} />
                <Button title='Sair' color='#41245C' colorBorder='#41245C' onClick={() => alert('Sair')} />
            </Box>
        </S.Container>
    )
};
