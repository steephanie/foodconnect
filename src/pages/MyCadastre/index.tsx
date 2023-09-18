import React from 'react'
import Box from '../../components/Box';
import { FlatList, View } from 'react-native';
import * as S from './styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import account from '../../data/account.json'


export const MyCadastre = ({ }) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleSave = () => {
        alert('Cadastro atualizado com sucesso!');
        navigation.navigate('Conta');
    }
    return (
        <Box>
            <Header title='Voltar' onPress={handleGoBack} icon />
            <S.Container>

                <S.LabelLarge>
                    Meus Dados
                </S.LabelLarge>

                <FlatList
                    data={account}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <>
                            <Input value={item.nome} keyboardType='default' />
                            <Input value={item.cpf} keyboardType='numeric' />
                            <Input value={item.data} keyboardType='numeric' />
                            <Input value={item.mail} keyboardType='email-address' />
                            <Input value={item.phone} keyboardType='phone-pad' />
                            <Input value={item.andress} keyboardType='default' />
                        </>
                    )}
                />

                <View style={{ marginLeft: 10, marginRight: 10, marginTop: 50 }}>
                    <Button title='Salvar Alterações' color='#41245C' colorBorder='#41245C' textStyle='center' onClick={handleSave} />
                </View>
            </S.Container>
        </Box >
    )
};