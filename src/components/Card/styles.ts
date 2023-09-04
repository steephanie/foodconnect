import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { sizes } from '../../theme/sizes';
import { colors } from '../../theme/colors';



export const Button = styled(TouchableOpacity)`
    padding: 18px;
    border-radius: ${sizes.RADIUS_SMALL};
    border: 2px solid;
`;

export const Title = styled(Text)`
    color: ${colors.BLACK};
    font-weight: bold;
    font-size: ${sizes.LABEL_MEDIUM};
`;

export const Location = styled(Text)`
    color: ${colors.BLACK};
    font-weight: 500;
    font-size: ${sizes.LABEL_SMALL};
`;

export const Address = styled(Text)`
    color: ${colors.BLACK};
    font-weight: 500;
    font-size: ${sizes.LABEL_SMALL};
`;

export const Availability = styled(Text)`
    color: ${colors.BLACK};
    font-weight: 500;
    font-size: ${sizes.LABEL_SMALL};
`;