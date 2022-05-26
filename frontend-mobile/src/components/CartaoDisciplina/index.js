// import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';


export const CartaoDisciplina = (props) => {
  const navigation = useNavigation();

  const navMatematica = () => {
    navigation.navigate('Matematica')
  }
  return (
    <Pressable style={styles.cartao} onPress={navMatematica}>
      <View style={styles.image}></View>
      <View style={styles.descricao}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>{props.nome}</Text>
        <Text style={{color: '#fff'}}>{props.turma}</Text>
      </View>
    </Pressable>
  );
}

export default CartaoDisciplina;

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