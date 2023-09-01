import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { sizes } from '../../theme/sizes';
import { colors } from '../../theme/colors';

export const Container = styled(View)`
    display: flex;
    flex: 1;
`;

export const Title = styled(Text)`
    font-size: ${sizes.TITLE_MEDIUM};
    color: ${colors.BLACK};
    font-weight: 400;
    margin-left: 13px;
    margin-bottom: 30px;
    margin-top: 20px;
`;

export const TitleTerm = styled(Text)`
    font-size: ${sizes.LABEL_MEDIUM};
    color: ${colors.BLACK};
    font-weight: 400;
    margin-left: 10px;
`;

export const TitleTermBold = styled(Text)`
    font-size: ${sizes.LABEL_MEDIUM};
    color: ${colors.BLACK};
    font-weight: 700;
    text-align: center;
    top: 3px;
    left: 3px;
`;