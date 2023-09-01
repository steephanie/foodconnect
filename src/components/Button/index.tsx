import React from 'react'
import { View } from 'react-native'
import * as Styles from './styles';
import { ButtonsProps } from './types';


export function Buttons({
    title,
    onClick,
    color,
    colorBorder,
}: ButtonsProps) {
    const buttonColor = {
        backgroundColor: color,
        borderColor: colorBorder,
    };

    return (
        <View>
            <Styles.Button onPress={onClick} style={buttonColor}>
                <Styles.ButtonText>{title}</Styles.ButtonText>
            </Styles.Button>
        </View>
    )
};
