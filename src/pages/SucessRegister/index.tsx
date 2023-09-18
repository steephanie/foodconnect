import React from 'react'
import * as S from './styles';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../../assets/logo.png'
import { Button } from '../../components/Button';



export const SucessRegister = ({ }) => {
    const navigation = useNavigation();

    const handleHome = () => {
        navigation.navigate('Home');
    };

    return (
        <S.Container>
            <S.HeaderSeparator />
            <View style={{ alignItems: 'center' }}>
                <Image source={logo} style={{ width: 160, height: 165 }} />

                <S.Inscription>Cadastro realizado
                    com sucesso!</S.Inscription>

                <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnJsZjg0NjNpNTl0dW1yc2txa2Y4YWE4emJxYzRybmtzeDIybmExeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WFyvwq3xoTTMs/giphy.gif' }}
                    style={{ width: 350, height: 300, alignItems: 'center' }}
                />

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