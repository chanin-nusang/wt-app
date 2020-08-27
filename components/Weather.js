import React, { useState, useEffect, Component } from 'react';
import { ActivityIndicator, Text, ImageBackground, StyleSheet, View } from 'react-native';
import Forecast from './Forcast';

export default function Weather(props) {

    const [loading, setLoading] = useState(true)

    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        name: 'city',
        country: 'country'
    })

    const kelvinToCelsius = require('kelvin-to-celsius');

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&APPID=e8ddc39fb22437d72dca38fcb18f16d2`)
            .then((response) => response.json())
            .then((json) => { setLoading(false)
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: kelvinToCelsius(json.main.temp),
                    name: json.name,
                    country: json.sys.country
                    });
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

    return (
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                {loading === false ? (
                    <View style={styles.headline}>
                        <Text style={{textAlignVertical: "center",textAlign: "center", fontSize: 20, height: 30, color: 'white'}}>Zip code is {props.zipCode}.</Text>
                        <Forecast {...forecastInfo}/>
                    </View> ) : (
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text>Loading...</Text>
                    </View>  )
                }
            </ImageBackground>             
        );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    headline: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 0,
        justifyContent: 'space-evenly',
        width: '100%',
        height: '70%',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
})
