import { Image, SafeAreaView, Text, TouchableOpacity, View, StyleSheet, ScrollView, TextInput, Dimensions, TouchableWithoutFeedback } from "react-native"
import CardsMenu from "../Components/CardsMenu";
import data from "../Data/data.json"
import Carousel from 'react-native-reanimated-carousel';


function Home({ navigation }:any ) {


    return (
        <SafeAreaView style={styles.containerPage}>
            <View style={{ backgroundColor: "#351A81", width: "100%", height: 110, justifyContent: "center", alignItems: "center" }}>
                <Image source={require('../assets/FixHubSplash.png')} style={styles.image} />
            </View>
            <ScrollView>
                <View style={styles.container}>

             






                    <TextInput
                        style={styles.input}
                        placeholder="Buscar...">
                    </TextInput>
                    <Text style={styles.title}>Nuestros rubros mas contratados.</Text>
                    {data.jobs.map(el =>
                        <View key={el.id}>
                            <CardsMenu
                                image={el.image}
                                name={el.name}
                                navigation={navigation}
                            />
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home


const styles = StyleSheet.create({
    containerPage: {
        flex: 1,
        backgroundColor: '#F1EFE9',
        alignItems: 'center',
        justifyContent: "flex-end",
        paddingBottom:30
    },
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        width: 300,
        height: 200,
    },
    input: {
        backgroundColor: "white",
        width: "95%",
        height: 40,
        borderRadius: 20,
        paddingLeft: 20,
        marginTop: 20,
        elevation: 8,
        shadowColor: 'rgba(0, 0, 0,1)',
    },
    title: {
        fontSize: 20,
        marginTop: 30,
        color: "#FF2D5A",
        fontWeight: "700"
    },
    buttonSearch: {
        backgroundColor: "white",
        width: 90,
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        marginTop: 15,
        elevation: 3,
        shadowColor: 'rgba(0, 0, 0,1)',
    }
});
