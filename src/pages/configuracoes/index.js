import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  ListConfig,
  Container,
  TextButton,
  TextInfo,
  Left,
  Info,
  ContainerItem,
} from './styles';

export default function Settings({navigation}) {
  return (
    <Container>
      <ListConfig>
        <ContainerItem onPress={() => navigation.navigate('Ipconfig')}>
          <Left>
            <Icon name="wifi" size={30} color="#566573" />
          </Left>
          <Info>
            <TextButton>Configurar IP</TextButton>
            <TextInfo>Configurar Ip para conexão com a placa</TextInfo>
          </Info>
          <Icon name="keyboard-arrow-right" size={30} color="#566573" />
        </ContainerItem>
        <ContainerItem>
          <Left>
            <Icon name="alarm" size={30} color="#566573" />
          </Left>
          <Info>
            <TextButton>Temporizador</TextButton>
            <TextInfo>Configurar data e hora da placa</TextInfo>
          </Info>
          <Icon name="keyboard-arrow-right" size={30} color="#566573" />
        </ContainerItem>
      </ListConfig>
    </Container>
  );
}

Settings.navigationOptions = ({navigation}) => ({
  title: 'Configurações',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}>
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
