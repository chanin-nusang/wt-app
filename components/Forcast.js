import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View>
            <Text style={textStyle.fotecastTextLarge}>{props.main}</Text>
            <Text style={textStyle.fotecastText}>{props.description}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={textStyle.fotecastTextLarge}>{props.temp}</Text>
                <Text style={{fontSize: 18, lineHeight: 42, color: 'white'}}> °C</Text>
            </View>
        </View>
    );
}

const textStyle = StyleSheet.create({
    fotecastTextLarge: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 30,
        height: 50,
        color: 'white'
    },
    fotecastText: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 18,
        height: 100,
        color: 'white'
    }
})

