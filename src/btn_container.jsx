import React from "react";
import { StyleSheet, View } from "react-native";
import Btn_num from "./btn_num";

export default Comp => {

    var btns = [];

    for (let i = 1; i <= 60; i++) {
        btns.push(<Btn_num key={i} num={i} />
        );
    }

    return (
        <View style={styles.container}>
            {btns}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 5
    },
});