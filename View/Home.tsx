import React from "react";
import {
    Image,
    SafeAreaView,
    Text,
    TextInput,
    View,
    StyleSheet,
    ScrollView,
    Dimensions,
} from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import CardsMenu from "../Components/CardsMenu";
import data from "../Data/data.json";

const Home = ({ navigation }: any) => {
    const width = Dimensions.get('window').width;

    return (
        <SafeAreaView style={styles.containerPage}>
            <View style={styles.header}>
                <Image source={require('../assets/FixHubSplash.png')} style={styles.image} />
                <TextInput
                    style={styles.input}
                    placeholder="Buscar..."
                />
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <Carousel
                        loop
                        width={width}
                        height={150}
                        autoPlay={true}
                        data={data.review}
                        scrollAnimationDuration={5000}
                        renderItem={(el) => (
                            <View style={styles.carouselItem}>
                                <View style={styles.carouselCard}>
                                    <View style={{display:"flex",flexDirection:"row",marginBottom:10,alignItems:"flex-end"}}>
                                    <Image source={{ uri: el.item.image }} style={styles.carouselimage} />
                                    <Text style={styles.carouselName}>{el.item.name}:</Text>
                                    </View>
                                    <Text style={styles.carouselReview}>{el.item.review}</Text>
                                </View>
                            </View>
                        )}
                    />
                    <Text style={styles.title}>Nuestros rubros más contratados.</Text>
                    {data.jobs.map((el) => (
                        <View key={el.id}>
                            <CardsMenu
                                image={el.image}
                                name={el.name}
                                navigation={navigation}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    containerPage: {
        flex: 1,
        backgroundColor: '#DEDDE1',
        alignItems: 'center',
        justifyContent: "flex-end",
        paddingBottom: 30
    },
    header: {
        backgroundColor: "#351A81",
        width: "100%",
        height: 160,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 200,
        height: 100,
        marginTop:-0
    
    },
    input: {
        backgroundColor: "white",
        width: "75%",
        height: 40,
        borderRadius: 20,
        paddingLeft: 20,
        marginTop: -10,
        elevation: 4,
        shadowColor: 'rgba(255, 255, 255,1)',
    },
    title: {
        fontSize: 20,
        
        color: "#FF2D5A",
        fontWeight: "700"
    },
    carouselItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", padding: 15
    },
    carouselCard: {
        width: "100%",
        backgroundColor: "white",
        height: 120,
        padding: 15,
        borderRadius: 20,
        textAlign: "center",
        justifyContent: "center",
        elevation:3
    },

    carouselName: {
        textAlign: "left",
        justifyContent: "flex-start",
        fontSize: 20,
        fontWeight: "700",
        color: "#FF2D5A"
    },
    carouselReview: {
        fontSize: 14,
        fontWeight: "700"
    },
    carouselimage: {
        width: 40,
        height: 40,
        borderRadius:10,
        marginRight:10
    }
});

export default Home;
