import { Text, View, ViewBase } from 'react-native';
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

export const Value = styled(Text)`
    color: ${colors.BLACK};
    font-size: ${sizes.LABEL_MEDIUM};
    font-weight: 700;

`;

export const Line = styled(View)`
    flex: 1;
    height: 1px;
    background-color: #010101;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Description = styled(Text)`
    color: ${colors.BLACK};
    font-size: ${sizes.LABEL_LARGE};
    font-weight: 700;
    margin-bottom: 8px;
`;

export const Abount = styled(Text)`
    color: ${colors.BLACK};
    font-size: ${sizes.LABEL_MEDIUM};
    font-weight: 400;
    margin-bottom: 10px;
`;

export const RequirementSeparator = styled(View)`
    flex-direction: row;
`;

export const Requirement = styled(Text)`
    color: ${colors.BLACK};
    font-size: ${sizes.LABEL_MEDIUM};
    font-weight: 400;
    margin-bottom: 10px;
    flex: 1;
`;
