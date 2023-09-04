import React from 'react'
import { Image, View } from 'react-native'
import * as Styles from './styles';
import { CardProps } from './types';
import Box from '../Box';
import img from '../../../assets/favicon.png'


export function Card({
    title,
    location,
    address,
    availability,
    onClick,
    color,
    colorBorder,
    textStyle,
}: CardProps) {
    const buttonStyles = {
        backgroundColor: color,
        borderColor: colorBorder,
        alignItems: textStyle,
    };

    return (
        <Styles.Button onPress={onClick} style={buttonStyles}>
            <View style={{ flexDirection: 'row' }}>
                <Box style={{ marginTop: 0, backgroundColor: 'pink' }}>
                    <Image source={img} />
                </Box>
                <Box style={{ marginTop: 0, backgroundColor: 'red' }}>
                    <Styles.Title>{title}</Styles.Title>
                    <Styles.Location>{location}</Styles.Location>
                    <Styles.Address>{address}</Styles.Address>
                    <Styles.Availability>{availability}</Styles.Availability>
                </Box>
            </View>
        </Styles.Button>
    )
};
