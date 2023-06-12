import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Modal, Pressable, TextInput, ScrollView } from 'react-native';

export default function CreateModal({ handleVisibility, modalVisible, createPrayer, editing, closeEditing, prayerToEdit }) {
    const [title, onChangeTitle] = useState('');
    const [description, onChangeDescription] = useState('');
    const [answer, onChangeAnswer] = useState('');
    const [id, setId] = useState('');

    const updateValues = (prayer) => {
        if (prayer.id) {
            console.log('Entre a update values con prayer id');
            onChangeTitle(prayer.title);
            onChangeDescription(prayer.description);
            onChangeAnswer(prayer.answer);
            setId(prayer.id);
        } else {
            console.log('Entre al else por no tener prayer id');
            onChangeTitle('');
            onChangeDescription('');
            onChangeAnswer('');
            setId('');
        }
    };

    useEffect(() => {
        updateValues(prayerToEdit);
    }, [editing]);

    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                handleVisibility();
                closeEditing();
            }}
        >
            <ScrollView contentContainerStyle={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>Crear motivo de oracion</Text>
                    <Text style={styles.modalText}>Titulo</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeTitle}
                        value={title}
                        placeholder="Orar por los misioneros"
                    />
                    <Text style={styles.modalText}>Descripcion</Text>
                    <TextInput
                        multiline={true}
                        style={styles.input}
                        onChangeText={onChangeDescription}
                        value={description}
                        placeholder="Se encuentran alrededor del mundo..."
                    />
                    <Text style={styles.modalText}>Respuesta</Text>
                    <TextInput
                        multiline={true}
                        style={styles.input}
                        onChangeText={onChangeAnswer}
                        value={answer}
                        placeholder="Respuesta de Dios. Opcional."
                    />
                    <View style={styles.options}>
                        <Pressable
                            style={[styles.button, styles.buttonCancel]}
                            onPress={() => {
                                handleVisibility();
                                onChangeTitle('');
                                onChangeDescription('');
                                onChangeAnswer('');
                                setId('');
                                closeEditing();
                            }}>
                            <Text style={styles.textClose}>Cancelar</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonCreate]}
                            onPress={() => {
                                if (prayerToEdit.id) {
                                    console.log('entre a edit')
                                    createPrayer(title, description, answer, id);
                                } else {
                                    console.log('entre a nuevo')
                                    createPrayer(title, description, answer);
                                }
                                handleVisibility();
                                onChangeTitle('');
                                onChangeDescription('');
                                setId('');
                                closeEditing();
                            }}>
                            <Text style={styles.textStyle}>Guardar oracion</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </Modal>

    )
}

const styles = StyleSheet.create({
    modalView: {
        width: '90%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginVertical: 16,
    },
    textClose: {
        color: 'red',
    },
    options: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonCreate: {
        width: '45%',
        backgroundColor: 'green',

    },
    buttonCancel: {
        width: '45%',
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    modalText: {
        padding: 8,
        alignSelf: 'flex-start'
    },
    input: {
        width: '100%',
        padding: 8,
        borderRadius: 8,
        borderColor: '#D1D1D1',
        borderWidth: 1
    }
});