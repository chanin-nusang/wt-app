import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { TouchableHighlight } from 'react-native-gesture-handler'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]   

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
    <View style={styles.ZipItem}>
        <Text style={styles.zipPlace}>{place}</Text>
        <Text style={styles.zipCode}>{code}</Text>
    </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../homebg.png')} style={styles.backdrop}>
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
            <StatusBar style="auto" />
        </View>
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
    ZipItem: {
        backgroundColor: 'rgba(125,125,125,0.25)',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 50,
        marginRight: 50,
        padding: 10
    },
    zipPlace: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color:'#FFFFFF'
    },
    zipCode: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color:'#FFFFFF'
    }
})