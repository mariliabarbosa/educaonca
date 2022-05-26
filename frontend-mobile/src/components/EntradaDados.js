import React from 'react';

import {View, TextInput, StyleSheet} from 'react-native';

export const EntradaDados = ({valor, setValor, placeholder, tipoSenha}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={valor}
        onChangeText={setValor}
        style={styles.input}
        secureTextEntry={tipoSenha}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: 'white',
    width: '100%',
    
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 75,

    paddingVertical: 10,
    paddingHorizontal: 15,

    marginVertical: 10,
  },
  input: {},
});

export default EntradaDados;
