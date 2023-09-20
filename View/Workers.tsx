import { useRoute } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native'

function Workers() {

    const route = useRoute();
    const { params }: any | undefined = route.params;
    return (
        <View>
            <Text>{params}</Text>
        </View>
    )
}

export default Workers