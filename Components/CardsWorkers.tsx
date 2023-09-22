import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView, StyleSheet } from 'react-native'
import DetailWoker from './DetailWorker';
import DetailWorker from './DetailWorker';

function CardsWorkers({ dataWorker , setModalVisible,setDataWorker}: any) {

    const renderStars = (dataWorker: any) => {
        const stars = [];
        for (let i = 0; i < dataWorker.valoracion; i++) {
            stars.push(
                <Text key={i} style={{ fontSize: 20, color: '#FF2D5A' }}>
                    ★
                </Text>
            );
        }
        return stars;
    };

    const handleOpenModal = () => {
        setModalVisible(true);
        setDataWorker(dataWorker)
      };

    return (
        <SafeAreaView style={styles.containerPage}>
            <TouchableOpacity
                onPress={handleOpenModal}
            >
                <View style={styles.container}>
                    <Image source={{ uri: dataWorker.image }} style={styles.carouselimage} />

                    <View style={{ flexDirection: "column", justifyContent: "flex-end" }}>
                        <Text style={styles.title}>{dataWorker.name} {dataWorker.lastName}</Text>
                        <View style={styles.horizontalLine} />
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: 220 }}>

                            <Text style={{}}>{dataWorker.job} </Text>
                            <Text style={{}}>{renderStars(dataWorker)} </Text>
                        </View>
                        <Text style={{ fontWeight: "800", fontSize: 17, color: "#FF2D5A" }}>{dataWorker.hourlyRate}.00 $ hs </Text>
                        <Text style={{ fontWeight: "800" }}>{dataWorker.experience} contrataciones en la app</Text>
                        <Text style={{ fontWeight: "500" }}>{dataWorker.location} km de distancia</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default CardsWorkers

const styles = StyleSheet.create({
    containerPage: {
        marginTop: 14,
        width: "100%",
        borderRadius: 20,
        height: 140,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "flex-end",
        elevation: 4




    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: "row",
        width: 350,
        alignItems: "center",
        justifyContent: "flex-start",


    },
    image: {
        width: 900,
        height: "90%",

    },
    title: {
        color: "#351A81",
        fontSize: 19,
        fontWeight: "900",

    }, carouselimage: {
        width: 110,
        height: 110,
        borderRadius: 10,
        marginRight: 10
    },
    horizontalLine: {
        borderBottomColor: '#DEDDE1',
        width: "100%", // Color de la línea
        borderBottomWidth: 1,      // Ancho de la línea
        marginVertical: 1,        // Espacio vertical alrededor de la línea
    },


});
