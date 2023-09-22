import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView, StyleSheet } from 'react-native'

function CardsMenu({ image, name,navigation }: any) {


    const onCLick = () => {
        navigation.navigate('Workers', {
            params: name,
        })
    }

    return (
        <SafeAreaView >
        <TouchableOpacity
            onPress={onCLick}
            style={styles.containerPage}>
                <View style={styles.container}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <Text style={styles.title}>{name}</Text>
                </View>
        </TouchableOpacity>
            </SafeAreaView>
    );
}

export default CardsMenu

const styles = StyleSheet.create({
    containerPage: {
        marginTop: 10,
        width: "100%",
        borderRadius: 20,
        height: 100,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#6649B8',
        alignItems: 'center',
        justifyContent: "flex-end",
        elevation:2
    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: "row",
        width: 300,
        alignItems: "center",
        justifyContent: "space-between",
    },
    image: {
        width: 100,
        height: "90%"
    },
    title: {
        color: "white",
        fontSize: 19,
        fontWeight: "900",

    },


});
