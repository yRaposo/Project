import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Btn_container from "./src/btn_container";
import Selected_num from "./src/selected_num";

export default () => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <Text style={styles.Titulo}>Megasena</Text>
      <Text style={styles.SubTitulo}>Escolha 6 numeros</Text>

      <View style={styles.Container}>
        <Btn_container />
        <Selected_num />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
  },

  Titulo: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },

  SubTitulo: {
    fontSize: 15,
    textAlign: 'center',
  },

  Container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});