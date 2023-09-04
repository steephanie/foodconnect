import React, { useState } from 'react'
import { PasswordProps } from './types';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, sendPasswordResetEmail } from '../../services/firebase';
import Box from '../../components/Box';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import * as S from './styles';

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
        <Box>
            <Header title='Voltar' icon onPress={handleGoBack} />
            <S.Title>
                Esqueci minha senha
            </S.Title>
            <S.Description>
                Confirme seu E-MAIL para que possamos te encaminhar o link para uma nova senha.
            </S.Description>
            <Input
                placeholder="Seu e-mail"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <Box>
                <Button title="Redefinir Senha" onClick={handleResetPassword} color='#41245C' textStyle='center' />
            </Box>
        </Box>
    );
};


