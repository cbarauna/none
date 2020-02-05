import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Background from '../../../Components/Background';
import {
  Container,
  TextLabel,
  Save,
  TextButton,
  Cancel,
  ViewButton,
  Button,
  TextLabelBold,
  Input,
} from './styles';
import AsyncStorage from '@react-native-community/async-storage';

export default function Temporizador() {
  const [address_ip, setAddresIp] = useState('');

  useEffect(() => {
    async function getData() {
      await AsyncStorage.setItem('@addressIp', '212121212');

      setAddresIp((await AsyncStorage.getItem('@addressIp')) || null);
    }

    getData();
  });

  async function handleSaveIp() {
    await AsyncStorage.setItem('@addressIp', address_ip);
  }

  return (
    <Background>
      <Container>
        <TextLabel>
          Insira apenas números e pontos, conforme se encontra no display
        </TextLabel>
        <TextLabelBold>Não insira outras pontuações</TextLabelBold>

        <ViewButton>
          <Input
            placeholder="Insira aqui o Ip"
            placeholderTextColor="#999"
            keyboardType="number-pad"
            maxLength={15}
            value={address_ip}
            onChangeText={setAddresIp}
          />
        </ViewButton>
        <Button>
          <Cancel>
            <Icon name="cancel" size={40} color="#FFF" />
            <TextButton>Cancelar</TextButton>
          </Cancel>
          <Save>
            <Icon name="save" size={40} color="#FFF" />
            <TextButton onPress={handleSaveIp}>Salvar</TextButton>
          </Save>
        </Button>
      </Container>
    </Background>
  );
}

Temporizador.navigationOptions = ({navigation}) => ({
  title: 'Configurar IP',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
