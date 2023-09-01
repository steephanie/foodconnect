import React, { useState } from 'react'
import { PasswordProps } from './types';
import { Alert, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, sendPasswordResetEmail } from '../../services/firebase';
import BoxComponent from '../../components/Box';
import { Header } from '../../components/Header';
import { Buttons } from '../../components/Button';
import { Input } from '../../components/Input';

export const Password = ({
    title
}: PasswordProps) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };
    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        if (!email) {
            Alert.alert('Erro', 'Por favor, insira seu e-mail.');
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                Alert.alert('E-mail Enviado', 'Um e-mail de redefinição de senha foi enviado para o seu endereço de e-mail.');
            })
            .catch((error) => {
                Alert.alert('Erro', 'Ocorreu um erro ao enviar o e-mail de redefinição de senha. Verifique seu endereço de e-mail.');
            });
    };

    return (
        <BoxComponent>
            <Header title='Voltar' icon onPress={handleGoBack} />
                <Text style={{ fontSize: 36, textAlign: 'center', marginTop: 10 }}>
                    Esqueci minha senha
                </Text>
                <Text style={{ fontSize: 20, marginTop: 23, marginBottom: 40 }}>
                    Confirme seu CPF ou E-MAIL para que possamos te encaminhar o link para uma nova senha.
                </Text>
                <Input
                    placeholder="Seu e-mail"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <BoxComponent>
                    <Buttons title="Redefinir Senha" onClick={handleResetPassword} color='#41245C' />
                </BoxComponent>
        </BoxComponent>
    );
};


