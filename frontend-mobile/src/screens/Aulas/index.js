import { useNavigation } from '@react-navigation/native';
import {Text, ScrollView, Pressable, View} from 'react-native';

import Navbar from '../../layout/Navbar';
// import CartaoAula from '../../components/CartaoAula'

export const AulasScreen = () => {
  const navigation = useNavigation();
  
  const goBack = () => {
    navigation.navigate('Inicial')
  }


  return (
    <ScrollView >
      <Navbar/>
      <View style={{padding: 15}}>

        <Text style={{fontSize: 24, alignSelf: 'left', color: '#004358'}}>Aulas</Text>
        <Text>Aulas não disponíveis</Text>
        <Pressable onPress={goBack}>
          <Text style={{color: 'blue', textDecorationStyle: 'dashed'}}>Retornar</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default AulasScreen;