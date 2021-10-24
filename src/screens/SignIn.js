import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'

const SignIn = (props) => {
    return (
        <View style={styles.container}>   
            <View style={styles.divSuperior}>
               <Image source={require('../assets/images/logo.png')} /> 
            </View>
            <View style={styles.divInferior}>
                
            </View>
        </View>   
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 25
    }, 

    divSuperior: {
        flex: 5,
        alignItems: 'center',
        backgroundColor: 'red'
    },

    divInferior: {
        flex: 1,
        alignItems: 'center',
        marginTop: 25,
        backgroundColor: 'blue'
    },
})