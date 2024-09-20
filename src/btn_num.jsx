import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default Comp = ({ num, ...rest }) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <TouchableOpacity
            style={isActive ? styles.btnActive : styles.btn}
            {...rest}
            onPressIn={() => {
                isActive ? setIsActive(false) : setIsActive(true);
                console.log(num);
            }}
            onPress={() => {
                console.log(isActive);
            }}
        >
            <Text style={styles.btnText}>
                {num}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderColor: 'gray',
        borderWidth: 1,
    },

    btnActive: {
        width: 40,
        height: 40,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderColor: 'gray',
        borderWidth: 1,
    },

    btnText: {
        fontSize: 20,
    }
});