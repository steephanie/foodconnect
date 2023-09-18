import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox';
import * as S from './styles';
import { Input } from '../../components/Input';
import { RegisterProps } from './types';
import { Button } from '../../components/Button';
import Box from '../../components/Box';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export const Register = ({
    title
}: RegisterProps) => {
    const navigation = useNavigation();
    const [isChecked, setChecked] = useState(false);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [contato, setContato] = useState('');
    const [endereco, setEndereco] = useState('');

    const handleTerm = () => {
        navigation.navigate('Term');
    };

    const handleCadastro = () => {
        // Validação dos campos antes de cadastrar
        if (!nome || !cpf || !dataNascimento || !email || !contato || !endereco || !isChecked) {
            alert('Por favor, preencha todos os campos e aceite os Termos de Uso.');
        } else {
            // Navegacao para a Home.
            alert('Cadastro realizado com sucesso!');
            navigation.navigate('SucessRegister');
        }
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <KeyboardAwareScrollView scrollEnabled={true}>
            <Box>
                <Header title='Voltar' onPress={handleGoBack} />
                <S.Container>
                    <S.Title>Que legal! Para começar vamos realizar o seu cadastro.</S.Title>
                    <Input placeholder='NOME COMPLETO' keyboardType='default' onChangeText={(text) => setNome(text)} />
                    <Input placeholder='CPF' keyboardType='numeric' onChangeText={(text) => setCpf(text)} />
                    <Input placeholder='DATA DE NASCIMENTO' keyboardType='numeric' onChangeText={(text) => setDataNascimento(text)} />
                    <Input placeholder='E-MAIL' keyboardType='email-address' onChangeText={(text) => setEmail(text)} />
                    <Input placeholder='CONTATO' keyboardType='phone-pad' onChangeText={(text) => setContato(text)} />
                    <Input placeholder='ENDEREÇO' keyboardType='default' onChangeText={(text) => setEndereco(text)} />

                    <Box style={{ alignContent: 'center', flexDirection: 'row', left: 4 }}>
                        <Checkbox
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#41245C' : undefined}
                        />
                        <S.TitleTerm>
                            Li e concordo com os
                            <TouchableOpacity onPress={handleTerm}>
                                <S.TitleTermBold>
                                    Termos de uso.
                                </S.TitleTermBold>
                            </TouchableOpacity>
                        </S.TitleTerm>
                    </Box>
                    <Box style={{ marginTop: 0 }}>
                        <Button title='Cadastrar' onClick={handleCadastro} color='#41245C' colorBorder="#41245C" textStyle='center' />
                    </Box>
                </S.Container>
            </Box>
        </KeyboardAwareScrollView>
    )
};