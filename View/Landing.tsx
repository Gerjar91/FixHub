import React from 'react'
import { Image, SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

function Landing({ navigation }: any) {
    return (
        <SafeAreaView style={styles.containerPage}>
            <LinearGradient
                colors={['#351A81', '#2D1D5B']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.linearGradient}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>¿ Te interesa ?  </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.textButton}>Buscar servicios</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.textButton}>Ofrecer servicios</Text>
                    </TouchableOpacity>
                    <Image source={require('../assets/FixHubSplash.png')} style={styles.image} />
                </View>

            </LinearGradient>




        </SafeAreaView>
    )
}

export default Landing

const styles = StyleSheet.create({
    containerPage: {
        flex: 1,
        backgroundColor: '#351A81',
        alignItems: 'center',
        justifyContent: "flex-end",
    },
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    linearGradient:{
flex:1,
width: "100%",

    },

    image: {
        width: 300,
        height: 200,
        marginTop: 100
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "900",
        marginBottom: 30

    },
    button: {
        width: "60%",
        height: "6%",
        margin: 10,
        backgroundColor: "#FF2D5A",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
        shadowColor: 'rgba(255, 195, 255,1)',


    },

    textButton: {
        fontWeight: "600",
        fontSize: 19,
        color: "white"
    }
});
