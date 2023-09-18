import React from 'react'
import Box from '../../components/Box';
import { Image, Linking, View } from 'react-native';
import * as S from './styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';



export const MyFreelas = ({ }) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleTabSearch = () => {
        navigation.navigate('Busca');
    };

    return (
        <Box>
            <Header title='Voltar' onPress={handleGoBack} icon />
            <S.Container>

                <S.LabelLarge>
                    Meus freelas
                </S.LabelLarge>

                <S.LabelMedium>
                    Voce ainda nao realizou nenhum freela que tal encontrar um estabelecimento nas proximidades da sua localizacao :D
                </S.LabelMedium>
                
                <View style={{ alignItems: 'center', marginBottom: 40}}>
                    <Image source={{ uri: 'https://media.giphy.com/media/6PtBZqT8earZ3XBTTL/giphy.gif' }}
                        style={{ width: 250, height: 200 }}
                    />
                </View>


                <Button title='Pesquisar freelas' colorBorder='#41245C' textStyle='center' color='#41245C' onClick={handleTabSearch} />

            </S.Container>
        </Box >
    )
};