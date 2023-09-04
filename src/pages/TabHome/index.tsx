import React from 'react'
import { HomeProps } from './types';
import { Header } from '../../components/Header';
import * as S from './styles';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Box from '../../components/Box';
import { Card } from '../../components/Card';

export const Home = ({
    title
}: HomeProps) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <S.Container>
            <Box>
                <Header title='' onPress={handleGoBack} />
                <Text style={{ marginTop: 30, marginBottom: 30, textAlign: 'left', fontSize: 16, color: '#41245C', fontWeight: '500', width: 280 }}>
                    Ola, NOME ;)
                    {'\n\n'}
                    Veja os estabelecimentos mais populares nas proximidades
                </Text>
                {/* <Card title='Nome empresa' address='endereco' availability='disponibilidade' location='localizacao' /> */}
            </Box>
        </S.Container>
    )
};
