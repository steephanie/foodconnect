import React from 'react'
import Box from '../../components/Box';
import { TermProps } from './types';
import { Linking } from 'react-native';
import * as S from './styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';



export const Term = ({ }: TermProps) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <Box>
            <Header title='Voltar' onPress={handleGoBack} icon/>
            <S.Container>
                <S.TitleMedium>
                    TERMOS DE USO
                </S.TitleMedium>

                <S.LabelMedium>
                    Por favor, leia atentamente estes Termos de Uso antes de utilizar o aplicativo FoodConnect.

                    Ao acessar ou usar o Aplicativo, você concorda em cumprir e estar vinculado a estes Termos de Uso.
                    Se você não concorda com estes termos, não utilize o Aplicativo.
                </S.LabelMedium>

                <S.LabelLarge>
                    1. Uso do Aplicativo
                </S.LabelLarge>
                <S.LabelMedium>
                    1.1. O FoodConnect é uma plataforma que visa conectar freelancers a estabelecimentos de restaurantes e bares para oportunidades de trabalho temporário.
                    {'\n'}
                    1.2. Você concorda em usar o Aplicativo apenas para fins legais e de acordo com estes Termos de Uso.
                    {'\n'}
                    1.3. Você é responsável por todas as informações fornecidas ao Aplicativo e pela precisão das mesmas.
                </S.LabelMedium>

                <S.LabelLarge>
                    2. Contas de Usuário
                </S.LabelLarge>
                <S.LabelMedium>
                    2.1. Para usar determinados recursos do Aplicativo, você pode ser solicitado a criar uma conta de usuário. Você é responsável por manter a confidencialidade de sua conta e senha, e concorda em aceitar a responsabilidade por todas as atividades que ocorrerem sob sua conta.
                    {'\n'}
                    2.2. Você concorda em notificar imediatamente o FoodConnect sobre qualquer uso não autorizado de sua conta ou qualquer outra violação de segurança.
                </S.LabelMedium>

                <S.LabelLarge>
                    3. Privacidade
                </S.LabelLarge>
                <S.LabelMedium>
                    3.1. A privacidade dos nossos usuários é importante para nós. Consulte nossa Política de Privacidade para entender como coletamos, usamos e divulgamos informações pessoais.
                </S.LabelMedium>

                <S.LabelLarge>
                    4. Conduta do Usuário
                </S.LabelLarge>
                <S.LabelMedium>
                    4.1. Você concorda em usar o Aplicativo de maneira que não viole qualquer lei ou regulamento aplicável.
                    {'\n'}
                    4.2. Você não deve:
                    {'\n'}
                    <S.I>a)</S.I> Publicar informações falsas, enganosas ou fraudulentas.
                    {'\n'}
                    <S.I>b)</S.I> Enviar ou transmitir vírus, malware ou qualquer código destrutivo.
                    {'\n'}
                    <S.I>c)</S.I> Assediar, intimidar ou prejudicar outros usuários.
                    {'\n'}
                    <S.I>d)</S.I> Tentar acessar informações ou contas de outros usuários sem permissão.
                </S.LabelMedium>

                <S.LabelLarge>
                    5. Rescisão
                </S.LabelLarge>
                <S.LabelMedium>
                    5.1. O FoodConnect reserva-se o direito de rescindir ou suspender sua conta e acesso ao Aplicativo, a seu critério e sem aviso prévio.
                </S.LabelMedium>


                <S.LabelLarge>
                    6. Alterações nos Termos de Uso
                </S.LabelLarge>
                <S.LabelMedium>
                    6.1. O FoodConnect pode atualizar ou modificar estes Termos de Uso a qualquer momento, e tais alterações entrarão em vigor imediatamente após serem publicadas no Aplicativo.
                </S.LabelMedium>

                <S.LabelLarge>
                    7. Contato
                </S.LabelLarge>
                <S.LabelMedium>
                    7.1. Se você tiver alguma dúvida ou preocupação sobre estes Termos de Uso, entre em contato conosco em <S.Mail onPress={() => { Linking.openURL('https://reactnative.dev') }}>foodconnectsac@gmail.com</S.Mail>.
                    {'\n\n'}
                    Ao usar o Aplicativo FoodConnect, você concorda em cumprir estes Termos de Uso. O FoodConnect se esforça para proporcionar uma experiência positiva e segura para todos os usuários.
                </S.LabelMedium>

            </S.Container>
        </Box >
    )
};