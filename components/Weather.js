import React, { useState } from 'react';
import { Text, ImageBackground, StyleSheet, View } from 'react-native';
import Forecast from './Forcast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    return (
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.headline}>
                    <Text style={{textAlignVertical: "center",textAlign: "center", fontSize: 20, color: 'white'}}>Zip code is {props.zipCode}.</Text>
                    <Forecast {...forecastInfo}/>
                </View>  
            </ImageBackground>             
        );
}
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
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
        height: '40%',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
})
