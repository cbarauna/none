import React, {useState} from 'react';
import {Container, Left, Info, Name} from './styles';

import {TouchableOpacity, StyleSheet, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Apointaments({data, onEdit}) {
  state = {switchValue: false};
  const [switchValue, setSwitchValue] = useState(false);

  toggleSwitch = value => {
    setSwitchValue(value);

    if (switchValue == false) {
      api.get(`?${data.port}`);
    }
  };
  return (
    <Container>
      <Left>
        <Switch
          size={20}
          onValueChange={this.toggleSwitch}
          value={switchValue}
        />
      </Left>
      <Info>
        <Name>{`${data.name} - ${switchValue}- ${data.port}`}</Name>
      </Info>
      <TouchableOpacity onPress={onEdit}>
        <Icon name="edit" size={30} color="#000" />
      </TouchableOpacity>
    </Container>
  );
}

const styles = Object.assign(
  {},
  StyleSheet.create({
    toggleText: {
      fontSize: 16,
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: '#616161',
    },
    switch: {
      marginTop: 2,
      // marginBottom: 5,
    },
    appleSwitch: {
      marginTop: 7,
      marginBottom: 7,
    },
  }),
);
