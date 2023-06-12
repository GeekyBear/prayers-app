import React from "react";
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
const newNote = '../../assets/icons/newNote.png';
const width = Dimensions.get('window').width; //full width

export default function CreateButton({ setModalVisible }) {
    return (
        <TouchableOpacity style={styles.fab} onPress={(() => setModalVisible())}>
            <Image source={require(newNote)} style={styles.fabIcon} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fab: {
        width: width / 6,
        height: width / 6,
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        left: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fabIcon: {
        width: width / 4.5,
        height: width / 4.5,
    }
});