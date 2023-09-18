import React from 'react'
import Box from '../../components/Box';
import * as S from './styles';
import { Image, StatusBar, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import logo from '../../../assets/logo.png'
import { Button } from '../../components/Button';



export const SucessInstitute = ({ }) => {
    const navigation = useNavigation();

    const handleHome = () => {
        navigation.navigate('Inicio');
    };
    return (
        <S.Container>
            <S.HeaderSeparator />
            <View style={{ alignItems: 'center' }}>
                <Image source={logo} style={{ width: 160, height: 165 }} />

                <S.Inscription>Inscrição realizada!</S.Inscription>

                <Image source={{ uri: 'https://media.giphy.com/media/tIeCLkB8geYtW/giphy.gif' }}
                    style={{ width: 200, height: 200, alignItems: 'center' }}
                />

                <S.Title>
                    Em instantes o estabelecimento enviara todas as informaçoes sobre o seu novo freela.
                    {'\n\n'}
                    Fique ligado ;)
                </S.Title>

            </View>
            <View style={{ marginLeft: 40, marginRight: 40, marginTop: 30, marginBottom: 20 }}>
                <Button title='Ok' 
                color='transparent' 
                colorBorder='white' 
                textStyle='center' 
                onClick={handleHome} />
            </View>
        </S.Container>
    )
};