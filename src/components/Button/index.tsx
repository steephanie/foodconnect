import React from 'react'
import { View } from 'react-native'
import * as Styles from './styles';
import { ButtonProps } from './types';


export function Button({
    title,
    onClick,
    color,
    colorBorder,
    textStyle,
}: ButtonProps) {
    const buttonStyles = {
        backgroundColor: color,
        borderColor: colorBorder,
        alignItems: textStyle,
    };

    return (
        <View>
            <Styles.Button onPress={onClick} style={buttonStyles}>
                <Styles.ButtonText>{title}</Styles.ButtonText>
            </Styles.Button>
        </View>
    )
};
