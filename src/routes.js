import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Dashboard from './pages/dashboard';
import Config from './pages/configuracoes';

export default (ipConfig = false) =>
  createAppContainer(
    createBottomTabNavigator(
      {
        Config,
        Dashboard,
      },
      {
        initialRouteName: 'Dashboard',
      },
    ),
  );
