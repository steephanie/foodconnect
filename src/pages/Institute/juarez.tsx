import React from 'react'
import Box from '../../components/Box';
import * as S from './styles';
import { Image, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import juarez from '../../assets/img/juarez.png'
import { Button } from '../../components/Button';

export const InstituteJuarez = ({ }) => {
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
                <Image source={juarez} style={{ width: 390, height: 240 }} resizeMode='contain' />
            </View>
            <S.Title>Bar do Juarez</S.Title>
            <S.Value>1 Vagas / Balconista</S.Value>

            <S.Line />

            <S.Description>Sobre o Estabelecimento</S.Description>
            <S.Abount>
                Juarez Alves, originário da Bahia, fundou o famoso Bar do Juarez em São Paulo após uma jornada de 20 anos.
                Chegando a São Paulo aos 12 anos, sonhava com um negócio próprio e trabalhou como balconista, chapeiro e garçom para economizar.
                Com cinco unidades na cidade, o bar se tornou renomado. Em 1999, Juarez inaugurou a primeira unidade do Bar do Juarez em Moema, após a venda de seu antigo restaurante.
            </S.Abount>

            <S.Description>Requisitos</S.Description>
            <S.RequirementSeparator>
                <S.Requirement>Experiência prévia, boa comunicação</S.Requirement>
                <S.Requirement>Organização</S.Requirement>
            </S.RequirementSeparator>
            <S.RequirementSeparator>
                <S.Requirement>Atendimento ao Cliente</S.Requirement>
                <S.Requirement>Agilidade</S.Requirement>
            </S.RequirementSeparator>
            <S.RequirementSeparator>
                <S.Requirement>Atenção aos Detalhes</S.Requirement>
                <S.Requirement>Resolução de Problemas</S.Requirement>
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