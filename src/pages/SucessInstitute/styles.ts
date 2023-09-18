import { ScrollView, Text, View, ViewBase } from 'react-native';
import styled from 'styled-components/native';
import { sizes } from '../../theme/sizes';
import { colors } from '../../theme/colors';

export const Container = styled(ScrollView)`
    display: flex;
    flex: 1;
    background-color: ${colors.PURPLE100};
    padding: 10px;
`;

export const HeaderSeparator = styled(View)`
    margin-top: 40px;
`;

export const Title = styled(Text)`
    color: ${colors.WHITE};
    font-size: ${sizes.TITLE_MEDIUM};
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 15px;
    text-align: center;
`;

export const Inscription = styled(Text)`
    color: ${colors.WHITE};
    font-size: ${sizes.TITLE_LARGE};
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 30px;
    text-align: center;
`;