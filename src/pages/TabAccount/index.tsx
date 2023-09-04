import React from 'react'
import { Text } from 'react-native'
import { AccountProps } from './types';
import * as S from './styles';
import { Header } from '../../components/Header';
import BoxComponent from '../../components/Box';
import { useNavigation } from '@react-navigation/native';

export const Account = ({
    title = 'Account'
}: AccountProps) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <BoxComponent>
            <S.Container>
                <Header title='' onPress={handleGoBack} />
                <Text>
                    {title}
                </Text>
            </S.Container>
        </BoxComponent>
    )
};
