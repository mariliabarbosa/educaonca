import { View, StyleSheet, Pressable, Text } from "react-native";
import { MdDownload, MdLogout, MdPlayCircleFilled } from 'react-icons/md';
import { useNavigation } from "@react-navigation/native";


import { BarraSuperior } from "./style";

const Navbar = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login')
  }

  return (
    <BarraSuperior>
        
      <Pressable onPress={handleLogout}>
        <Text style={styles.logout}><MdLogout /></Text>
      </Pressable>

      <Text style={styles.header}>
        Olá, aluno
      </Text>

      <View style={styles.botoes}>
        <Pressable style={styles.botao}>
        <Text style={{fontSize: 22, color: '#1F8A70'}}><MdPlayCircleFilled /></Text>
        <Text style={{fontSize: 14, color: '#1F8A70'}}>Assistir Aula</Text>
        </Pressable>

        <Pressable style={styles.botao}>
          <Text style={{fontSize: 24, color: '#1F8A70'}}><MdDownload /></Text>
          <Text style={{fontSize: 14, color: '#1F8A70'}}>Baixar Aula</Text>
        </Pressable>
      </View>
    </BarraSuperior>
  )
}

export default Navbar;

const styles = StyleSheet.create({
  botoes: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
    marginTop: 20,
  },
  botao: {
    maxWidth: '40%',
    maxHeight: 60,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },

  logout: {
    color: 'white',
    textAlign: 'right',
    fontSize: 16
  },

  header: {
    color: 'white',
    fontSize: 28,
  },


})