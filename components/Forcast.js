import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View>
            <Text style={textStyle.fotecastTextMedium}>{props.name}, {props.country}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={textStyle.fotecastTextLarge}>{props.temp}</Text>
                <Text style={{fontSize: 40, lineHeight: 110, color: 'white'}}> °C</Text>
            </View>
            <Text style={textStyle.fotecastTextMedium}>{props.main}</Text>
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

