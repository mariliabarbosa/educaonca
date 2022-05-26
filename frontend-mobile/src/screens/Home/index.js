import React from 'react';

import {Text, ScrollView, View} from 'react-native';

import Navbar from '../../layout/Navbar';
import CartaoDisciplina from '../../components/CartaoDisciplina'
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const navMatematica = () => {
    navigation.navigate('Matematica')
  }

  const navIndisponivel = () => {
    navigation.navigate('Indisponivel')
  }

  return (
    <ScrollView>
      <Navbar />

      <View style={{padding: 15}}>
        <Text style={{fontSize: 24, alignSelf: 'left', color: '#004358'}}>Suas Disciplinas</Text>
        <CartaoDisciplina nome='Matemática' turma='7 Ano' onPress={navMatematica} />
        <CartaoDisciplina nome='Português' turma='7 Ano' onPress={navIndisponivel}/>
        <CartaoDisciplina nome='Geografia' turma='7 Ano' onPress={navIndisponivel} />
      </View>
    </ScrollView>
  )
}

export default HomeScreen;