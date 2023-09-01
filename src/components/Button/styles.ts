import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { sizes } from '../../theme/sizes';
import { colors } from '../../theme/colors';



export const Button = styled(TouchableOpacity)`
    padding: 18px;
    align-items: center;
    border-radius: ${sizes.RADIUS_SMALL};
    border: 2px solid;
`;

export const ButtonText = styled(Text)`
    color: ${colors.WHITE};
    font-weight: bold;
    font-size: ${sizes.LABEL_LARGE};
`;