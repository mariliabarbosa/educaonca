import React from 'react';

import {Text, Pressable, StyleSheet} from 'react-native';

export const BotaoPadrao = ({
  onPress,
  label,
  type = 'PRIMARIO',
  bgCor,
  fgCor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgCor ? {backgroundColor: bgCor} : {},
      ]}>
      <Text
        style={[
          styles.texto,
          styles[`texto_${type}`],
          fgCor ? {color: fgCor} : {},
        ]}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 15,
    marginVertical: 5,

    alignItems: 'center',

    borderRadius: 30,
  },

  texto: {
    fontWeight: 'bold',
  },

  texto_navbar: {
    fontWeight: 'regular',
    color: 'white'
  }
});

export default BotaoPadrao;
