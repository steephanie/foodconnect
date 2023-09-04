import React from 'react'
import { Text } from 'react-native'
import { SearchProps } from './types';
import * as S from './styles';
import { Header } from '../../components/Header';
import Box from '../../components/Box';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const Search = ({
    title
}: SearchProps) => {
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
                    Encontrei um restaurante ou bar nas proximidades
                </Text>
                <Box style={{ marginTop: 0, alignItems: 'center' }}>
                    <Input placeholder='Digite um endereço, bairro ou cidade' />
                    <Button title='Pesquisar' color='#41245C' colorBorder='#41245C' textStyle='center' onClick={() => alert('Pesquisar')} />
                </Box>
                {/* <Card title='Nome empresa' address='endereco' availability='disponibilidade' location='localizacao' /> */}
            </Box>
        </S.Container>
    )
};
