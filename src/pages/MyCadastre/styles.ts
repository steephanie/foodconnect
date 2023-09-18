import { ScrollView, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { sizes } from '../../theme/sizes';
import { colors } from '../../theme/colors';

export const Container = styled(ScrollView)`
    display: flex;
    margin-top: 10px;
    padding: 10px;
`;

export const LabelLarge = styled(Text)`
    font-size:${sizes.TITLE_LARGE};
    font-weight: bold;
    margin-bottom: 20px;
    text-align:center ;
    color: ${colors.PURPLE100};
`;
