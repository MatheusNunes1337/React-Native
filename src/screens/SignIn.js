import React from 'react'
import {View, Text} from 'react-native'

const SignIn = (props) => {
    return (
        <View>
            <Text onPress={() => props.navigation.navigate('Home')}>Home</Text>
            <Text onPress={() => props.navigation.navigate('SignUp')}>SignUp</Text>
        </View>
    )
}

export default SignIn