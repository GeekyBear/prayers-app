import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

export default function MyProfile() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/icons/pray.png')} style={styles.icon} />
                <Text style={styles.sectionTitle}>Mi Perfil</Text>
                <Text> Seccion en construccion</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        backgroundColor: 'white',
        width: '100%',
        height: '20%',
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionTitle: {
        fontSize: 32,
        fontWeight: 400,
        color: 'black',
    },
    icon: {
        width: 50,
        height: 50,
    }
});