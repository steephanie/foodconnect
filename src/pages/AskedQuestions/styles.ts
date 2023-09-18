import { Text } from 'react-native';
import styled from 'styled-components/native';
import { sizes } from '../../theme/sizes';
import { colors } from '../../theme/colors';

export const Title = styled(Text)`
    color: ${colors.BLACK};
    font-size: ${sizes.TITLE_MEDIUM};
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 8px;
`;

export const LabelMedium = styled(Text)`
    font-size: ${sizes.LABEL_LARGE};
    font-weight: 400;
    flex-direction: row;
    padding: 10px 10px;
`;