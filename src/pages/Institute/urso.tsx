import React from 'react'
import Box from '../../components/Box';
import * as S from './styles';
import { Image, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import urso from '../../assets/img/urso.png'
import { Button } from '../../components/Button';

export const InstituteUrso = ({ }) => {
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
                <Image source={urso} style={{ width: 390, height: 240 }} />
            </View>
            <S.Title>Bar do Urso</S.Title>
            <S.Value>3 Vagas / Barman</S.Value>

            <S.Line />

            <S.Description>Sobre o Estabelecimento</S.Description>
            <S.Abount>
                A Cervejaria Colorado é uma das primeiras Cervejarias Artesanais do Brasil, fundada por Marcelo Carneiro, em 1996.
                Natural de Ribeirão Preto, nós apoiamos fortemente os micro-produtores locais, que fornecem insumos para os rótulos criativos.
                Desde sua fundação, a Colorado tem valorizado ingredientes tipicamente brasileiros em suas cervejas, provando que biodiversidade também gera biodeliciosidade.
            </S.Abount>

            <S.Description>Requisitos</S.Description>
            <S.RequirementSeparator>
                <S.Requirement>Experiência prévia, boa comunicação</S.Requirement>
                <S.Requirement>Agilidade</S.Requirement>
            </S.RequirementSeparator>
            <S.RequirementSeparator>
                <S.Requirement>Experiência em Bartending</S.Requirement>
                <S.Requirement>Criatividade</S.Requirement>
            </S.RequirementSeparator>
            <S.Requirement>Conhecimento de Bebidas</S.Requirement>

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