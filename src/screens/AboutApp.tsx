import {observer} from 'mobx-react-lite';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

const AboutApp = () => {
  return (
    <View style={styles.сontainer}>
      <Header title="О приложении" />
      <View style={styles.textWrapp}>
        <Text style={styles.text}>Тестовое приложение</Text>
        <Text style={styles.text}>По тестовому заданию</Text>
        <Text style={styles.text}>для RN-разработчика</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
  },
  textWrapp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
});

export default observer(AboutApp);
