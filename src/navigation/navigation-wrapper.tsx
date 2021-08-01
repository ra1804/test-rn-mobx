import React from 'react';
import RootNavigation from './root-navigation';
import {initializeStore, Provider} from '../stores';

const store = initializeStore();

const NavigationWrapper = () => {
  return (
    <Provider value={store}>
      <RootNavigation />
    </Provider>
  );
};

export default NavigationWrapper;
