import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Forecast(props) {
 
    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../pinvector.png')} style={{ width: 30, height: 30}} />
                <Text style={textStyle.fotecastTextMedium}> {props.name}, {props.country}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={textStyle.fotecastTextLarge}>{props.temp}</Text>
                <Text style={{fontSize: 40, lineHeight: 110, color: 'white'}}> °C</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={textStyle.fotecastTextMedium}>{props.main}</Text>
            </View>
                <Text style={textStyle.fotecastText}>{props.description}</Text>
        </View>
        
    );
}

const textStyle = StyleSheet.create({
    fotecastTextLarge: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 100,
        height: 150,
        color: 'white'
    },
    fotecastTextMedium: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 35,
        height: 50,
        color: 'white'
    },
    fotecastText: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 18,
        height: 50,
        color: 'white'
    }
})

