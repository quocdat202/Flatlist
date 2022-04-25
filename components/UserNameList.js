
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import user from "../Images/user.png";
export default function UserNameList({ name }) {
    return (
        <View style={styles.items}>
            <Text style={styles.itemText}>{name}</Text>
            <Image style={styles.itemImage} source={user}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    items: {
        display: 'flex', flexDirection: 'column',
        alignItems: "center",
        padding: 16,
        borderRadius: 4,
        backgroundColor: "#fd79a8",
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        height: 50,
        marginBottom: 130,
    },
    itemText: {
        color: "white",
    },
    itemImage: {
        width: 100,
        height: 100,
        marginTop: 25,
    }
});