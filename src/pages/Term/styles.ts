import { ScrollView, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { sizes } from '../../theme/sizes';

export const Container = styled(ScrollView)`
    display: flex;
    margin-top: 10px;
    padding: 10px;
`;

export const TitleMedium = styled(Text)`
    font-size: ${sizes.TITLE_MEDIUM};
    font-weight: bold;
    text-align: center;
    margin-bottom: 15px;
`;

export const LabelLarge = styled(Text)`
    font-size: ${sizes.LABEL_LARGE};
    font-weight: bold;
    margin-bottom: 5px;
`;

export const LabelMedium = styled(Text)`
    font-size: ${sizes.LABEL_MEDIUM};
    font-weight: 400;
    margin-bottom: 15px;
    flex-direction: row;
    line-height: 16px;
`;

export const I = styled(Text)`
    font-style: italic;
`;

export const Mail = styled(Text)`
    font-style: italic;
    text-decoration: underline;
    color: #0000FF;
`;