import { Text, TouchableOpacity, ViewProps } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import * as Styles from './styles';
import { LoginProps } from './type';

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
    <Styles.Container>
      <Styles.Title>
        Trabalho proximo de você, facil e rapido!
        {'\n\n'}
        Bora? ;)
      </Styles.Title>

      <Styles.InputContainer>
        <Styles.Input
          placeholderTextColor={'#FFFFFF'}
          placeholder='Email'
          value={email}
          onChangeText={(text: React.SetStateAction<string>) => setEmail(text)}
        />
        <Styles.Separator />
        <Styles.Input
          placeholderTextColor={'#FFFFFF'}
          placeholder='Senha'
          value={password}
          onChangeText={(text: React.SetStateAction<string>) => setPassword(text)}
          secureTextEntry
        />
        {errorMessage !== '' && <Styles.ErrorText>{errorMessage}</Styles.ErrorText>}
        <Styles.Box>
          <TouchableOpacity onPress={handlePassword}>
            <Styles.TitlePassword>
              Esqueci minha senha
            </Styles.TitlePassword>
          </TouchableOpacity>
        </Styles.Box>
      </Styles.InputContainer>

      <Styles.ButtonContainer>
        <Styles.Button onPress={handleSignIn} >
          <Styles.ButtonText>Entrar</Styles.ButtonText>
        </Styles.Button>

        <Styles.TitleAccess>
          Primeiro acesso?
          <TouchableOpacity onPress={handleLogin}>
            <Styles.TitleTouchble>
              Clique aqui!
            </Styles.TitleTouchble>
          </TouchableOpacity>
        </Styles.TitleAccess>
      </Styles.ButtonContainer>
    </Styles.Container>
  );
};