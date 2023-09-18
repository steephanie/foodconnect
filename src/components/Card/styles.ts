import { Image, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { sizes } from '../../theme/sizes';
import { colors } from '../../theme/colors';



export const Button = styled(TouchableOpacity)`
    padding: 10px;
    border-radius: ${sizes.RADIUS_SMALL};
    border: 2px solid;
    margin-bottom: 17px;
`;

export const ContainerButton = styled(View)`
    flex-direction: row;
`; 

export const BoxTitles = styled(View)`
    flex: 1;
    margin-left: 15px;
`;

export const Title = styled(Text)`
    color: ${colors.BLACK};
    font-weight: bold;
    font-size: ${sizes.LABEL_MEDIUM};
    margin-left: 5px;
    margin-top: 5px;
`;

export const Location = styled(Text)`
    color: ${colors.BLACK};
    font-weight: 500;
    font-size: ${sizes.LABEL_SMALL};
    margin-left: 5px;
    margin-top: 5px;
`;

export const SeparatorTitle = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 13px;
    margin-left: 5px;
`;

export const Address = styled(Text)`
    color: ${colors.BLACK};
    font-weight: 500;
    font-size: ${sizes.LABEL_SMALL};
    margin-right: 10px;
    margin-left: 2px;
`;

export const Availability = styled(Text)`
    color: ${colors.BLACK};
    font-weight: 500;
    font-size: ${sizes.LABEL_SMALL};
    right: 30px;

`;

export const Img = styled(Image)`
    width: 61px;
    height: 61px;
    border-radius: 8px;
`;

export const Icon = styled(Image)`
    width: 6px;
    height: 8px;
`;