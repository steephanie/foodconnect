import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { sizes } from '../../theme/sizes';
import { colors } from '../../theme/colors';

export const Container = styled(SafeAreaView)`
    display: flex;
    flex: 1;
    background-color: ${colors.PURPLE100};
    align-Items: center;
    justify-content: space-between;
`;

export const Title = styled(Text)`
    color: ${colors.WHITE};
    font-size: ${sizes.TITLE_MEDIUM};
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
    color: ${colors.WHITE};
`;

export const Box = styled(View)`
    display: flex;
`;

export const TitlePassword = styled(Text)`
    color: ${colors.WHITE};
    font-size: ${sizes.LABEL_MEDIUM};
    text-align: right;
    margin-top: 20px;
`;

export const ButtonContainer = styled(View)`
    width: 80%;
`;

export const Button = styled(TouchableOpacity)`
    background-color: ${colors.BLUE100};
    padding: 10px;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 30px;
`;

export const ButtonText = styled(Text)`
    color: ${colors.WHITE};
    font-weight: bold;
`;

export const TitleAccess = styled(Text)`
    color: ${colors.WHITE};
    font-size: ${sizes.LABEL_MEDIUM};
    text-align: center;
    margin-bottom: 50px;
`;

export const TitleTouchble = styled(Text)`
    text-align: center;
    top: 3.5px;
    left: 3px;
    color: ${colors.WHITE};
    font-size: ${sizes.LABEL_MEDIUM};
`;

export const ErrorText = styled(Text)`
    color: red;
    margin-bottom: 10px;
`;

export const Separator = styled(View)`
    margin-top: 20px; 
`;