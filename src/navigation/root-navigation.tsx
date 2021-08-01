import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutApp from '../screens/AboutApp';
import Quotes from '../screens/Quotes';

const Tab = createBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#104391',
          labelStyle: {
            fontSize: 16,
            fontWeight: '600',
          },
        }}>
        <Tab.Screen name="О приложении" component={AboutApp} />
        <Tab.Screen name="Котировки" component={Quotes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
