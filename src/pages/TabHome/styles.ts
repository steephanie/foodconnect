import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../theme/colors';
import { sizes } from '../../theme/sizes';

export const Container = styled(View)`
    display: flex;
    flex: 1;
    background-color: ${colors.WHITE};
    padding-left: 10px;
`;

export const Title = styled(Text)`
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: left;
    font-size: ${sizes.LABEL_LARGE};
    color: ${colors.BLACK};
    font-weight: 700;
    width: 260px;
`;

export const Subtitle = styled(Text)`
    text-align: left;
    font-size: ${sizes.LABEL_SMALL};
    color: ${colors.BLACK};
    font-weight: 400;
`;

export const BoxCards = styled(View)`
    margin-left: 20px;
    margin-right: 20px;
`;

export const BoxMap = styled(View)`
    align-items: center;
    margin-top: 30px;
`;