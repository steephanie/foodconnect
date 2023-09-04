import { TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import * as S from './styles';
import { LoginProps } from './type';
import { Button } from '../../components/Button';

export const Login = ({
  title
}: LoginProps) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredentials);

      // Se o email do usuário estiver verificado, navegue para a tela de home
      if (auth.currentUser?.emailVerified) {
        navigation.navigate('Home');
      } else {
        // Se o email não estiver verificado, exiba uma mensagem para o usuário
        setErrorMessage('Verifique seu e-mail antes de fazer login.');
      }
    } catch (error: any) {
      console.error('Error on SignIn', error);
      setErrorMessage(error.message); // Define a mensagem de erro para exibição
    }
  };

  const handleLogin = () => {
    navigation.navigate('Register');
  };

  const handlePassword = () => {
    navigation.navigate('Password');
  };

  return (
    <S.Container>
      <S.Title>
        Trabalho proximo de você, facil e rapido!
        {'\n\n'}
        Bora? ;)
      </S.Title>

      <S.InputContainer>
        <S.Input
          placeholderTextColor={'#FFFFFF'}
          placeholder='Email'
          value={email}
          onChangeText={(text: React.SetStateAction<string>) => setEmail(text)}
        />
        <S.Separator />
        <S.Input
          placeholderTextColor={'#FFFFFF'}
          placeholder='Senha'
          value={password}
          onChangeText={(text: React.SetStateAction<string>) => setPassword(text)}
          secureTextEntry
        />
        {errorMessage !== '' && <S.ErrorText>{errorMessage}</S.ErrorText>}
        <S.Box>
          <TouchableOpacity onPress={handlePassword}>
            <S.TitlePassword>
              Esqueci minha senha
            </S.TitlePassword>
          </TouchableOpacity>
        </S.Box>
      </S.InputContainer>

      <S.ButtonContainer>
        <Button title='Entrar' color='transparent' colorBorder='white' textStyle='center' onClick={handleSignIn} />
        <S.Separator />
        <S.TitleAccess>
          Primeiro acesso?
          <TouchableOpacity onPress={handleLogin}>
            <S.TitleTouchble>
              Clique aqui!
            </S.TitleTouchble>
          </TouchableOpacity>
        </S.TitleAccess>
      </S.ButtonContainer>
    </S.Container>
  );
};