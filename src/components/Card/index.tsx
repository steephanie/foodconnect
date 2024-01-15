import React from 'react'
import { View } from 'react-native'
import * as S from './styles';
import { CardProps } from './types';
import icon from '../../../src/assets/img/pin.png';

export function Card({
    title,
    location,
    address,
    availability,
    onClick,
    color,
    colorBorder,
    textStyle,
    img,
}: CardProps) {
    const buttonStyles = {
        backgroundColor: color,
        borderColor: colorBorder,
        alignItems: textStyle,
    };

    return (
        <S.Button onPress={onClick} style={buttonStyles}>
            <View style={{ flexDirection: 'row', }}>
                <S.Img source={img} />

                <S.BoxTitles>
                    <S.Title>{title}</S.Title>
                    <S.Location>{location}</S.Location>

                    <S.SeparatorTitle>
                        <View style={{ flexDirection: 'row' }}>
                            <S.Icon source={icon} />
                            <S.Address>{address}</S.Address>
                        </View>
                        <S.Availability>{availability}</S.Availability>
                    </S.SeparatorTitle>
                </S.BoxTitles>
            </View>
        </S.Button>
    )
};
