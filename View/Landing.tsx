import React from 'react'
import { Image, SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

function Landing({ navigation }: any) {


    return (
        <SafeAreaView style={styles.containerPage}>
            <LinearGradient
                colors={['#351A81', '#1F1146']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.linearGradient}
            >
                <View style={styles.container}>
                    <Text style={styles.title2}>Bienvenido a </Text>
                    <Image source={require('../assets/FixHubSplash.png')} style={styles.image} />
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
        marginTop: 10
    },
    title: {
        color: "white",
        fontSize: 25,
        fontWeight: "400",
        marginBottom: 30,
        marginTop:100,
        fontFamily: 'Montserrat',

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
        fontWeight: "500",
        fontSize: 19,
        color: "white",
        fontFamily: 'Montserrat',

    },
    title2:{
        color:"white",
        marginBottom:-60,
right:90,
fontFamily: 'Montserrat',

    }
});
