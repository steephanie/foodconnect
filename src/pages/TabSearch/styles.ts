import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { sizes } from '../../theme/sizes';
import { colors } from '../../theme/colors';
import { Input } from '../../components/Input';

export const Container = styled(View)`
    display: flex;
    flex: 1;
    background-color: white;
`;

export const Title = styled(Text)`
    margin-top: 30px;
    text-align: left;
    font-size: ${sizes.LABEL_LARGE};
    color: ${colors.BLACK};
    font-weight: 700;
    width: 260px;
`;

export const TitleSeach = styled(Text)`
    margin-left: 15px;
    font-size: ${sizes.LABEL_LARGE};
    color: ${colors.BLACK};
    font-weight: 700;
    width: 260px;
`;


export const BoxSearch = styled(View)`
    padding: 20px 20px;
    border-radius: 8px;
    border-color: ${colors.BACKGROUND};
    border: 2px solid;
    width: 350px;
    left: 10px;
    right: 10px;
`;

export const Label = styled(Text)`
    margin-left: 15px;
    margin-top: 30px;
    text-align: left;
    font-size: ${sizes.LABEL_LARGE};
    color: ${colors.BLACK};
    font-weight: 700;
    width: 260px;
`;


export const BoxCards = styled(View)`
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 18px;
`;