// import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export const CartaoAula = (props) => {

  return (
    <Pressable style={styles.cartao} onPress={console.warn('teste')}>
      <View style={styles.image}></View>
      <View style={styles.descricao}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>{props.nome}</Text>
        <Text style={{color: '#fff'}}>{props.condicao}</Text>
      </View>
    </Pressable>
  );
}

export default CartaoAula;

const styles = StyleSheet.create({
  cartao: {
    marginVertical: 20,
    height: 100,
    alignSelf: 'center',
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
  },

  image: {
    height: 60,
  },
  descricao: {
    alignItems: 'right',
    paddingHorizontal: 30,
    backgroundColor: '#004358',
  }
})