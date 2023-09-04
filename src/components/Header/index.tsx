import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { HeaderProps } from './types';

export function Header({
    title,
    icon,
    onPress,
}: HeaderProps) {

    return (
        <View style={{ alignItems: 'flex-start', marginLeft: 10 }}>
            {icon && (
                <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="arrow-back" size={20} color="black" />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10, left: 10 }}>{title}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};