import { KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styled, { css } from 'styled-components/native';



export const Container = styled(SafeAreaView)`
    display: flex;
    flex: 1;
    background-color: #41245C;
    /* justify-content: space-between; */
    align-Items: center;
`;

export const Title = styled(Text)`
    color: #FFF;
    font-size: 20px;
    margin-top: 98px;
    margin-bottom: 103px;
`;

export const InputContainer = styled(View)`
    width: 80%;
    margin-bottom: 196px;
    
`;

export const Input = styled(TextInput)`
    border-width: 1px;
    border-color: gray;
    padding: 10px;
    color: #FFFFFF;
`;

export const Box = styled(View)`
    display: flex;
`;

export const TitlePassword = styled(Text)`
    color: #FFF;
    font-size: 13px;
    text-align: right;
    margin-top: 20px;
`;

export const ButtonContainer = styled(View)`
    width: 80%;
`;

export const Button = styled(TouchableOpacity)`
    background-color: blue;
    padding: 10px;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 30px;
`;

export const ButtonText = styled(Text)`
    color: #FFF;
    font-weight: bold;
`;

export const TitleAccess = styled(Text)`
    color: #FFF;
    font-size: 13px;
    text-align: center;
    margin-bottom: 50px;
`;

export const ErrorText = styled(Text)`
    color: red;
    margin-bottom: 10px;
`;

export const Separator = styled(View)`
margin-top: 20px;
`;


// export const Title = styled.Text`
//     ${({theme}) => css`
//         font-sizet: 14px;
//         color: ${theme.colors.text_white};
//     `}
// `;