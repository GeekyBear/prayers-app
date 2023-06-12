import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const width = Dimensions.get('window').width; //full width

const prepareDate = (date) => {
    return date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(2, 4);
}

export default function Prayer({ item, title, deletePrayer, editPrayer }) {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{prepareDate(item.createdAt)}</Text>
            <Text style={styles.description}>{item.description.slice(0, 145)}{item.description.length > 145 ? '...' : ''}</Text>
            {title === 'fix' ? <Text style={styles.state}>{item.state}</Text> : null}
            <Text style={styles.state}>Respuesta: {item.answer}</Text>
            {title !== 'Church'
                ? <View style={styles.options}>
                    {show &&
                        <>
                            <TouchableOpacity style={styles.editBtn} onPress={() => {
                                editPrayer(item.id);
                                handleShow();
                            }}>
                                <MaterialCommunityIcons color={'#029666'} name="book-edit" size={24} />
                                <Text style={styles.textBtn}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteBtn} onPress={() => {
                                deletePrayer(item.id);
                                handleShow()
                            }}>
                                <MaterialCommunityIcons color={'#ff0398'} name="trash-can" size={24} />
                                <Text style={styles.textBtn}>Borrar</Text>
                            </TouchableOpacity>
                        </>
                    }
                    <TouchableOpacity style={styles.showBtn} onPress={handleShow}>
                        <MaterialCommunityIcons color={'grey'} name="dots-horizontal" size={24} />
                    </TouchableOpacity>
                </View>
                : null
            }
        </View >
    );
}

const styles = StyleSheet.create({
    flat: {
        flex: 1,
        width: width,
    },
    item: {
        padding: 16,
        gap: 8,
        marginHorizontal: 20,
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 17,
        color: '#060A18'
    },
    description: {
        fontStyle: 'normal',

        fontSize: 16,
        lineHeight: 17,
        color: '#060A18'
    },
    date: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 17,
        color: '#939191'
    },
    verse: {
        width: width - 40,
        height: 420,
        top: 130,
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        borderColor: '#CFE3E7',
    },
    options: {
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    showBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 48
    },
    editBtn: {
        alignItems: 'center',
        //        backgroundColor: 'green',
        padding: 10,
        width: 60
    },
    deleteBtn: {
        alignItems: 'center',
        //        backgroundColor: '#e8002a',
        padding: 10,
        width: 60
    },
    textBtn: {
        fontSize: 14
    }
});