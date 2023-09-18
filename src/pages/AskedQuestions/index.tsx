import React, { useState } from 'react'
import Box from '../../components/Box';
import * as S from './styles';
import { FlatList, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import abount from '../../data/abount.json'

export const AskedQuestions = ({ }) => {
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const toggleQuestion = (index) => {
        if (expandedQuestion === index) {
            setExpandedQuestion(null);
        } else {
            setExpandedQuestion(index);
        }
    };

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <Box>
            <Header title='Voltar' onPress={handleGoBack} icon />
            <Text style={{ marginTop: 30, marginBottom: 30, textAlign: 'center', fontSize: 36, color: '#41245C', fontWeight: '500' }}>
                Dúvidas Frequentes
            </Text>

            <FlatList
                data={abount}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 16 }}>
                        <Button
                            title={item.question}
                            color='#41245C'
                            colorBorder='#41245C'
                            textStyle='flex-start'
                            onClick={() => toggleQuestion(item.id)}
                        />
                        {expandedQuestion === item.id && (
                            <S.LabelMedium>
                                {item.response}
                            </S.LabelMedium>
                        )}
                    </View>
                )}
            />
        </Box >
    )
};