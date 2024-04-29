import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {

    const fetachdata = async () => {
        try {
         
        } catch (error) {
            console.log('Error occur while getting  config data')
     }
}   
    return (
        <View style={styles.Maincontainer}>
            <Text style={{ fontSize: 40, color: "white", textAlign:"center", }}> Home page </Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    Maincontainer: {
        flex:1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent:"center"
    }
})