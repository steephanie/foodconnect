import React from 'react'
import Box from '../../components/Box';
import * as S from './styles';
import { Image, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import outback from '../../assets/img/outback.png'
import { Button } from '../../components/Button';

export const InstituteOutback = ({ }) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleSucessInstitute = () => {
        navigation.navigate('SucessInstitute');
    };
    return (
        <Box>
            <Header title='Voltar' onPress={handleGoBack} icon />
            <View style={{ right: 10 }}>
                <Image source={outback} style={{ width: 390, height: 240 }} />
            </View>
            <S.Title>Outback Steakhouse</S.Title>
            <S.Value>2 Vagas / Garçom</S.Value>

            <S.Line />

            <S.Description>Sobre o Estabelecimento</S.Description>
            <S.Abount>
                O Outback Steakhouse tem 152 restaurantes no Brasil, presentes em 61 cidades e 20 estados mais o Distrito Federal.
                Globalmente, está em 23 países. Fundado em 1997, o primeiro restaurante abriu no Rio de Janeiro.
                Com cortes de carne especiais e aperitivos como a Bloomin' Onion, conquistou os brasileiros pela qualidade da culinária, ambiente descontraído e referências à cultura australiana.
                A marca oferece uma experiência única, chamada #MomentoOutback, e pertence ao grupo Bloomin’ Brands junto com Abbraccio e Aussie Grill
            </S.Abount>

            <S.Description>Requisitos</S.Description>
            <S.RequirementSeparator>
                <S.Requirement>Experiência prévia, boa comunicação</S.Requirement>
                <S.Requirement>Eficiência e Organização</S.Requirement>
            </S.RequirementSeparator>
            <S.RequirementSeparator>
                <S.Requirement>Trabalho em Equipe</S.Requirement>
                <S.Requirement>Adaptação a Situações Diversas</S.Requirement>
            </S.RequirementSeparator>
            <S.RequirementSeparator>
                <S.Requirement>Habilidade de Atendimento ao Cliente</S.Requirement>
                <S.Requirement>Resistência Física</S.Requirement>
            </S.RequirementSeparator>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Button
                    title='Se inscrever'
                    color='#41245C'
                    colorBorder='#41245C'
                    textStyle='center'
                    onClick={handleSucessInstitute} />
            </View>

        </Box >
    )
};