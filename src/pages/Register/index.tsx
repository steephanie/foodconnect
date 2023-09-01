import React, { useState } from 'react'
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox';
import * as Styles from './styles';
import { Input } from '../../components/Input';
import { RegisterProps } from './types';
import { Buttons } from '../../components/Button';
import Box from '../../components/Box';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';


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
            navigation.navigate('Home');
        }
    };
    
    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <Box>
            <Header title='Voltar' onPress={handleGoBack}/>
            <Styles.Container>
                <Styles.Title>Que legal! Para começar vamos realizar o seu cadastro.</Styles.Title>
                <KeyboardAvoidingView behavior="padding">
                    <Input placeholder='NOME COMPLETO' keyboardType='default' onChangeText={(text) => setNome(text)} />
                    <Input placeholder='CPF' keyboardType='numeric' onChangeText={(text) => setCpf(text)} />
                    <Input placeholder='DATA DE NASCIMENTO' keyboardType='numeric' onChangeText={(text) => setDataNascimento(text)} />
                    <Input placeholder='E-MAIL' keyboardType='email-address' onChangeText={(text) => setEmail(text)} />
                    <Input placeholder='CONTATO' keyboardType='phone-pad' onChangeText={(text) => setContato(text)} />
                    <Input placeholder='ENDEREÇO' keyboardType='default' onChangeText={(text) => setEndereco(text)} />
                </KeyboardAvoidingView>

                <Box style={{ alignContent: 'center', flexDirection: 'row', left: 4 }}>
                    <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#41245C' : undefined}
                    />
                    <Styles.TitleTerm>
                        Li e concordo com os
                        <TouchableOpacity onPress={handleTerm}>
                            <Styles.TitleTermBold>
                                Termos de uso.
                            </Styles.TitleTermBold>
                        </TouchableOpacity>
                    </Styles.TitleTerm>
                </Box>
                <Box style={{ marginTop: 0 }}>
                    <Buttons title='Cadastrar' onClick={handleCadastro} color='#41245C' colorBorder="#41245C" />
                </Box>
            </Styles.Container>
        </Box>
    )
};