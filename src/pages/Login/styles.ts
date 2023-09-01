import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    display: flex;
    flex: 1;
    background-color: #41245C;
    align-Items: center;
    justify-content: space-between;
`;

export const Title = styled(Text)`
    color: #FFF;
    font-size: 20px;
    margin-top: 98px;
    margin-bottom: 90px;
`;

export const InputContainer = styled(View)`
    width: 80%;  
    margin-bottom: 30%;
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

export const TitleTouchble = styled(Text)`
    text-align: center;
    top: 3.5px;
    left: 3px;
    color: #FFF;
    font-size: 13px;
`;

export const ErrorText = styled(Text)`
    color: red;
    margin-bottom: 10px;
`;

export const Separator = styled(View)`
    margin-top: 20px;
`;