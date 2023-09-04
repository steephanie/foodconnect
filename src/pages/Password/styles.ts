import { Text } from 'react-native';
import styled from 'styled-components/native';
import { sizes } from '../../theme/sizes';

export const Title = styled(Text)`
    font-size: ${sizes.TITLE_LARGE};
    text-align: center;
    margin-top: 10px;
`;

export const Description = styled(Text)`
    font-size: ${sizes.TITLE_MEDIUM};
    margin-top: 23px;
    margin-bottom: 40px;
    margin-left: 13px;
    margin-right: 13px;
`;