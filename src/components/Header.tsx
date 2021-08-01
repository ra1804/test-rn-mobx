import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HeaderProps {
  title: string;
}

const Header = ({title}: HeaderProps) => (
  <View style={styles.wrapp}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const styles = StyleSheet.create({
  wrapp: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#d9e6fa',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(16, 67, 145, 0.3)',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#104391',
  },
});

export default Header;
