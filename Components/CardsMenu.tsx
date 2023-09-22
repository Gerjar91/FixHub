import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

function CardsMenu({ image, name, navigation }: any) {


    const onCLick = () => {
        navigation.navigate('Workers', {
            params: name,
        })
    }

    return (
        <SafeAreaView >
                <LinearGradient
                    colors={['#351A81','#2D1D5B']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.linearGradient}                    
                >
            <TouchableOpacity
                onPress={onCLick}
                style={styles.containerPage}>
                    <View style={styles.container}>
                        <Image source={{ uri: image }} style={styles.image} />
                        <Text style={styles.title}>{name}</Text>
                    </View>
            </TouchableOpacity>
                </LinearGradient>
        </SafeAreaView>
    );
}

export default CardsMenu

const styles = StyleSheet.create({
    containerPage: {
        width: "100%",
        height: 100,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        justifyContent: "flex-end",
    },
    linearGradient:{
        marginTop: 10,
        borderRadius: 20,
        elevation:4

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
