import React, {useEffect, useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Appointment from '../../components/Chanel';

import {Container, Title, List} from './styles';

const data = [
  {name: 'Canal 1', port: 1, _index: 1},
  {name: 'Canal 2', port: 2, _index: 2},
  {name: 'Canal 3', port: 3, _index: 3},
  {name: 'Canal 4', port: 4, _index: 4},
  {name: 'Canal 5', port: 5, _index: 5},
];

export default function Dashboard({navigation}) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      // const response = await api.get(``)
      setAppointments(data);
    }
    loadAppointments();
  }, []);

  async function handleEdit(item) {
    navigation.navigate('Chanel', {chanel_name: item});
  }
  return (
    <Container>
      <Title>Dashboard</Title>
      <List
        data={data}
        keyExtractor={item => String(item._index)}
        renderItem={({item}) => (
          <Appointment onEdit={() => handleEdit(item)} data={item} />
        )}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={30} color={tintColor} />,
};
