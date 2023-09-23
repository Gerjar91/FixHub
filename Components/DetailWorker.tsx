import React from 'react'
import { View, StyleSheet, Button, Text, Image, TouchableOpacity } from 'react-native'
import { Linking } from 'react-native';

function DetailWorker({ setModalVisible, dataWorker }: any) {
    const toggleModal = () => {
        console.log("siiiiiii");

        setModalVisible(false);
    };

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




    const openWhatsAppChat = () => {
        const phoneNumber = '+5492615911334'; // Reemplaza con el número de teléfono al que quieres enviar el mensaje.
        const message = `Hola, ¿cómo estás? vi tu publicacion en FixHub , necesito contratar un ${dataWorker.job}`; // Reemplaza con el mensaje que deseas enviar.
      
        const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
      
        Linking.canOpenURL(whatsappUrl)
          .then((supported) => {
            if (!supported) {
              console.error("No se puede abrir WhatsApp. Asegúrate de tener la aplicación instalada.");
            } else {
              return Linking.openURL(whatsappUrl);
            }
          })
          .catch((error) => console.error("Error al intentar abrir WhatsApp:", error));
      };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleModal} style={styles.buttonClose}>
                <Text style={{ color: "white", fontSize: 18 }}>X</Text>
            </TouchableOpacity>
            <Image source={{ uri: dataWorker.image }} style={styles.carouselimage} />

            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center", alignContent: "center" }}>
                <Text style={styles.title}>{dataWorker.name} {dataWorker.lastName}</Text>
                <Text style={{}}>{renderStars(dataWorker)} </Text>
            </View>
            <View style={styles.horizontalLine} />
            <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%", alignItems: "flex-end", alignContent: "center" }}>

                <Text style={{fontWeight:"900"}}>Profesion: </Text>
                <Text style={{}}>{dataWorker.job}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%", alignItems: "flex-end", alignContent: "center" }}>

                <Text style={{fontWeight:"900"}}>Edad: </Text>
                <Text style={{}}>{dataWorker.age} años</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%", alignItems: "flex-end", alignContent: "center" }}>

                <Text style={{fontWeight:"900"}}>Experiencia: </Text>
                <Text style={{}}>{dataWorker.experience} años</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%", alignItems: "flex-end", alignContent: "center" }}>

                <Text style={{fontWeight:"900"}}>Ubicación: </Text>
                <Text style={{}}>{dataWorker.location} km</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%", alignItems: "flex-end", alignContent: "center" }}>

                <Text style={{fontWeight:"900"}}>Precio aprox: </Text>
                <Text style={{}}>$ {dataWorker.hourlyRate} /hs</Text>
            </View>
            <View style={styles.horizontalLine} />
            <View style={{ flexDirection: "row", justifyContent: "center", width: "100%", alignItems: "flex-end", alignContent: "center" }}>

                <Text style={{}}>{dataWorker.description} </Text>

            </View>


            <View style={styles.horizontalLine} />
            <View style={{ flexDirection: "row", justifyContent: "center", width: "100%", alignItems: "flex-end", alignContent: "center" }}>
                <TouchableOpacity onPress={openWhatsAppChat} style={styles.buttoncontact}>
                <Image source={require("../assets/iconoWhatsap.png")} style={styles.iconImage} />
                    <Text style={{ color: "white", fontSize: 18 }}>  Contactar </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default DetailWorker

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: "column",
        width: "90%",
        height: "80%",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "white",
        borderRadius: 8,
        padding: 20,
        borderWidth: .5,
        borderBlockColor: "#FF2D5A",
        borderRightColor: "#FF2D5A",
        borderLeftColor: "#FF2D5A",
        elevation: 23


    },
    image: {
        width: 1000,
        height: "90%",

    },
    iconImage:{
        width:30,
        height:30
    },
    title: {
        color: "#351A81",
        fontSize: 19,
        fontWeight: "900",
        marginTop: 15

    }, carouselimage: {
        width: "100%",
        height: 160,
        borderRadius: 10,
    },
    horizontalLine: {
        borderBottomColor: '#DEDDE1',
        width: "100%", // Color de la línea
        borderBottomWidth: 1,      // Ancho de la línea
        marginVertical: 6,        // Espacio vertical alrededor de la línea
    },
    buttonClose: {
        width: 35,
        height: 35,
        position:"absolute",
        zIndex:100,
        left:270,
        backgroundColor: "#FF2D5A",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginTop:5,
        elevation:3
    },
    buttoncontact: {
        width: "80%",
        height: 50,
        backgroundColor: "#351A81",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        marginTop: 15,
        elevation:4,
        flexDirection:"row"
    }

});
