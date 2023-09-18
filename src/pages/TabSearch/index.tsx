import React from 'react'
import { SearchProps } from './types';
import * as S from './styles';
import { Header } from '../../components/Header';
import Box from '../../components/Box';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import outback from '../../assets/img/outback.png'
import juarez from '../../assets/img/juarez.png'
import urso from '../../assets/img/urso.png'
import { View } from 'react-native';

export const Search = ({ }: SearchProps) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleOutback = () => {
        navigation.navigate('InstituteOutback');
    };

    const handleJuarez = () => {
        navigation.navigate('InstituteJuarez');
    };

    const handleUrso = () => {
        navigation.navigate('InstituteUrso');
    };
    
    return (
        <S.Container>
            <Box>
                <Header title='' onPress={handleGoBack} />
                <S.Title>
                    Olá, Food Connect ;)
                    {'\n\n'}
                </S.Title>

                <S.BoxSearch>
                    <S.TitleSeach>Encontre um restaurante ou bar nas proximidades</S.TitleSeach>
                    <Input placeholder='Digite um endereço, bairro ou cidade' />
                    <View style={{ alignItems: 'center' }}>
                        <Button title='Pesquisar' color='#41245C' colorBorder='#41245C' textStyle='center' onClick={() => alert('Pesquisar')} />
                    </View>
                </S.BoxSearch>

                <S.Label>
                    Restaurantes e bares proximos
                </S.Label>

                <S.BoxCards>
                <Card
                        title='Outback Steakhouse'
                        location='Av. Moaci, 187 - Moema, São Paulo - SP, 04083-000'
                        address='1 km da localização'
                        availability='2 Vagas / Garçom'
                        color='transparent'
                        colorBorder='#F1F1F1'
                        textStyle='flex-start'
                        img={outback}
                        onClick={handleOutback}
                    />

                    <Card
                        title='Bar do Juarez'
                        location='Av. Jurema, 324 - Moema, Indianópolis - SP, 04079-001'
                        address='1.4 km da localização'
                        availability='1 Vagas / Balconista'
                        color='transparent'
                        colorBorder='#F1F1F1'
                        textStyle='flex-start'
                        img={juarez}
                        onClick={handleJuarez}
                    />

                    <Card
                        title='Bar do Urso'
                        location='Alameda dos Maracatins, 715 - Moema, São Paulo - SP, 04089-011'
                        address='1.5 km da localização'
                        availability='3 Vagas / Barman'
                        color='transparent'
                        colorBorder='#F1F1F1'
                        textStyle='flex-start'
                        img={urso}
                        onClick={handleUrso}
                    />
                </S.BoxCards>
            </Box>
        </S.Container>
    )
};
