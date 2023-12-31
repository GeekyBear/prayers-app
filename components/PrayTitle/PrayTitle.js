import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function PrayTitle({ title }) {
    return (
        <View style={styles.titleItem}>
            <TouchableOpacity style={styles.touchable}>
                <Text style={styles.title}>{title}</Text>
                <MaterialCommunityIcons name="chevron-right" size={24} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    titleItem: {
        flex: 1,
        paddingVertical: 16,
    },
    title: {
        fontFamily: 'Lora-Regular',
        fontSize: 16
    },
    touchable: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});