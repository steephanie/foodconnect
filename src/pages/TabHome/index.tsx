import React from 'react'
import { HomeProps } from './types';
import { Header } from '../../components/Header';
import * as css from './styles';
import { Text } from 'react-native';
import BoxComponent from '../../components/Box';
import { useNavigation } from '@react-navigation/native';

export const Home = ({
    title
}: HomeProps) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <BoxComponent>
            <Header title='' onPress={handleGoBack} />
            <css.Container>
                <Text>
                    HOME
                </Text>
            </css.Container>
        </BoxComponent>
    )
};
