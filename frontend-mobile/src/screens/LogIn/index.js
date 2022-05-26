import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import BotaoPadrao from '../../components/BotaoPadrao';
import EntradaDados from '../../components/EntradaDados';

export const LoginScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();


  const [user, setUser] = useState();
  const [senha, setSenha] = useState();

  const handleLogin = () => {
    // validacao
    navigation.navigate('Inicial')
  };

  const handleForgotten = () => {
    console.warn('Senha esquecida');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={(styles.logo, {height: height * 0.3, fontSize: 48, paddingTop: 50})}>EducaOnça</Text>

        <EntradaDados placeholder="Usuário" valor={user} setValor={setUser} />
        <EntradaDados
          placeholder="Senha"
          valor={senha}
          setValor={setSenha}
          tipoSenha={true}
        />

        <BotaoPadrao
          onPress={handleLogin}
          label="Entrar"
          bgCor="#1F8A70"
          fgCor="white"
        />
        <BotaoPadrao
          onPress={handleForgotten}
          label="Esqueceu sua senha?"
          fgCor="#333"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});
