import React from "react";
import { FlatList, StyleSheet, Dimensions } from 'react-native';
import PrayTitle from "../PrayTitle/PrayTitle";
import Separator from "../Separator/Separator";

const width = Dimensions.get('window').width; //full width

export default function List({ data, title, deletePrayer, editPrayer }) {
    return (
        <>
            <FlatList style={styles.flat}
                data={data}
                ItemSeparatorComponent={Separator}
                renderItem={({ item }) => item.state === 'approved' && <PrayTitle title={item.title} />}
                keyExtractor={item => item.id}
            />
        </>
    )
}
//<Prayer item={item} title={title} deletePrayer={deletePrayer} editPrayer={editPrayer}
const styles = StyleSheet.create({
    flat: {
        flex: 1,
        width: width,
        paddingHorizontal: 16
    }
});