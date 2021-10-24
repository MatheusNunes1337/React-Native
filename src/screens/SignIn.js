import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const SignIn = (props) => {
    return (
        <View style={styles.container}>   
            <View style={styles.divSuperior}>
                
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