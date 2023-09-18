import React, { useEffect, useState } from 'react'
import { HomeProps } from './types';
import { Header } from '../../components/Header';
import * as S from './styles';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import Box from '../../components/Box';
import { Card } from '../../components/Card';
import outback from '../../assets/img/outback.png'
import juarez from '../../assets/img/juarez.png'
import urso from '../../assets/img/urso.png'
import { Text } from 'react-native';

export const Home = ({ }: HomeProps) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleOutback = () => {
        navigation.navigate('InstituteOutback');
    };

    const handleJuarez = () => {
        navigation.navigate('InstituteJuarez');
    };

    const handleUrso = () => {
        navigation.navigate('InstituteUrso');
    };

    useEffect(() => {
        async function requestLocationPermission() {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status === 'granted') {
                // Permissão concedida, agora você pode usar a localização
            } else {
                // Permissão negada, lide com isso de acordo com seu aplicativo
            }
        }

        requestLocationPermission();
    }, []);

    const [isClickEnabled, setClickEnabled] = useState(true);
    const toggleClick = () => {
        // Alterne o estado do clique ativado/desativado
        setClickEnabled(!isClickEnabled);
      };

    return (
        <S.Container>
            <Box>
                <Header title='' onPress={handleGoBack} />
                <S.Title>
                    Olá, Food Connect ;)
                    {'\n\n'}
                    Veja os estabelecimentos mais populares nas proximidades.
                    {'\n\n'}
                    <S.Subtitle>
                       * Para ter mais informação das vagas pesquise sobre o estabelecimento.
                    </S.Subtitle>
                </S.Title>


                <S.BoxCards>
                    <Card
                        title='Outback Steakhouse'
                        location='Av. Moaci, 187 - Moema, São Paulo - SP, 04083-000'
                        address='1 km da localização'
                        availability='***'
                        color='transparent'
                        colorBorder='#F1F1F1'
                        textStyle='flex-start'
                        img={outback}
                        //onClick={handleOutback}
                    />

                    <Card
                        title='Bar do Juarez'
                        location='Av. Jurema, 324 - Moema, Indianópolis - SP, 04079-001'
                        address='1.4 km da localização'
                        availability='***'
                        color='transparent'
                        colorBorder='#F1F1F1'
                        textStyle='flex-start'
                        img={juarez}
                        //onClick={handleJuarez}
                    />

                    <Card
                        title='Bar do Urso'
                        location='Alameda dos Maracatins, 715 - Moema, São Paulo - SP, 04089-011'
                        address='1.5 km da localização'
                        availability='***'
                        color='transparent'
                        colorBorder='#F1F1F1'
                        textStyle='flex-start'
                        img={urso}
                        //onClick={handleUrso}
                    />
                </S.BoxCards>

                <S.BoxMap>
                    <MapView
                        style={{ borderRadius: 8, width: 300, height: 200 }}
                        initialRegion={{
                            latitude: -23.6098782,
                            longitude: -46.6681327,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.02,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: -23.6098782,
                                longitude: -46.6681327,
                            }}
                            title="Outback Steakhouse"
                            description="Av. Moaci, 187 - Moema, São Paulo - SP, 04083-000"
                            pinColor='red'
                        />

                        <Marker
                            coordinate={{
                                latitude: -23.6083111,
                                longitude: -46.6642713,
                            }}
                            title="Bar do Juarez"
                            description="Av. Jurema, 324 - Moema, Indianópolis - SP, 04079-001"
                            pinColor='orange'
                        />

                        <Marker
                            coordinate={{
                                latitude: -23.6071609,
                                longitude: -46.6656265,
                            }}
                            title="Bar do Urso"
                            description="Alameda dos Maracatins, 715 - Moema, São Paulo - SP, 04089-011"
                            pinColor='brown'
                        />
                    </MapView>
                </S.BoxMap>
            </Box>
        </S.Container>
    )
};
