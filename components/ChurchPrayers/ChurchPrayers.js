import React from "react";
import { Text, View, StyleSheet, Dimensions, StatusBar, Image } from 'react-native';

import List from "../List/List";

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

export default function ChurchPrayers({ data }) {
    console.log(data)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>Motivos de la iglesia</Text>
            </View>
            {data.length === 0 && <Text>Cargando...</Text>}
            {data && <List data={data} title={'Church'} />}
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#f6f5f4',
        width: '100%',
        height: '10%',
        marginTop: 16,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    sectionTitle: {
        paddingLeft: 16,
        fontWeight: 400,
        color: 'black',
        fontFamily: 'Lora-Regular',
        fontSize: 30
    },
    howMany: {
        fontSize: 15,
        fontWeight: 400,
        color: '#939191',
    },
    icon: {
        width: 50,
        height: 50,
    }
});