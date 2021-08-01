/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {observer} from 'mobx-react';
import {useStore} from '../stores';
import {useFocusEffect} from '@react-navigation/native';
import {Ticker, Header} from '../components';

const Quotes = () => {
  const {quoteStore} = useStore();

  useFocusEffect(
    React.useCallback(() => {
      quoteStore.setupTimeInterval();
      return () => quoteStore.cancelTimeInterval();
    }, []),
  );

  return (
    <View style={styles.conteiner}>
      <Header title="Котировки" />

      {quoteStore.isLoading ? (
        <View style={styles.loaderWrapp}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <ScrollView>
          {quoteStore.error ? (
            <View style={styles.errorWrap}>
              <Text style={styles.error}>{quoteStore.error}</Text>
            </View>
          ) : null}
          {quoteStore.quotes.map(value => {
            return <Ticker key={value.id} value={value} />;
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  loaderWrapp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorWrap: {
    height: 30,
    padding: 5,
  },
  error: {
    color: 'red',
  },
});

export default observer(Quotes);
