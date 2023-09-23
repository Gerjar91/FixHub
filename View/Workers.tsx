import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, Button } from 'react-native'
import CardsWorkers from '../Components/CardsWorkers';
import data from "../Data/data.json";
import Modal from "react-native-modal";
import DetailWoker from '../Components/DetailWorker';
import DetailWorker from '../Components/DetailWorker';

function Workers() {

    const route = useRoute();
    const { params }: any | undefined = route.params;
    const [isModalVisible, setModalVisible] = useState(false);
    const [dataWorker, setDataWorker] = useState();
console.log(isModalVisible);

    let workersData = data.users.filter(el => el.job == params)
    let imageJob = data.jobs.find(el => el.name == params)


    return (
        <ScrollView>

            <View style={styles.containerPage}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title}>Hay {workersData.length} {params}S </Text>
                        <Text style={styles.title2}>cerca de tu ubicación !! </Text>
                    </View>
                    <Image source={{ uri: imageJob?.image }} style={styles.image} />
                </View>

                <Modal isVisible={isModalVisible}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <DetailWorker
                            setModalVisible={setModalVisible}
                            dataWorker={dataWorker}
                            />
                    </View>
                </Modal>
                {workersData.map((data) => (
                    <View key={data.id}>
                        <CardsWorkers
                            dataWorker={data}
                            setModalVisible={setModalVisible}
                            setDataWorker={setDataWorker}
                        />
                    </View>
                )

                )}
            </View>
        </ScrollView>
    )
}

export default Workers


const styles = StyleSheet.create({
    containerPage: {
        flex: 1,
        backgroundColor: '#DEDDE1',
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingBottom: 30
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        color: "#FF2D5A",
        fontWeight: "400",
        fontFamily: 'Montserrat',

    },
    title2: {
        fontSize: 17,
        marginTop: 1,
        color: "white",
        fontWeight: "700"
    },
    header: {
        backgroundColor: "#351A81",
        width: "100%",
        height: 100,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingRight: 30,
        paddingLeft: 30

    },
    image: {
        width: 75,
        height: 75
    }
})