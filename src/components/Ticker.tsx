import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {Quote} from '../models/QuoteType';

interface TicketProps {
  value: Quote;
}

const Ticker = ({
  value: {name, last, highestBid, percentChange},
}: TicketProps) => (
  <View style={styles.tckerWrap}>
    <View style={styles.name}>
      <Text style={styles.nameText}>{name}</Text>
    </View>
    <View style={styles.quote}>
      <Text style={styles.quoteText}>{last}</Text>
    </View>
    <View style={styles.quote}>
      <Text style={styles.quoteText}>{highestBid}</Text>
    </View>
    <View style={styles.quote}>
      <Text style={styles.quoteText}>{percentChange}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  name: {
    borderRightWidth: 1,
    borderColor: 'grey',
    padding: 3,
    flex: 1,
  },
  nameText: {
    fontSize: 10,
    fontWeight: '800',
  },
  tckerWrap: {
    borderColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 5,
  },
  quote: {
    padding: 3,
    flex: 1,
  },
  quoteText: {
    fontSize: 10,
    fontWeight: '400',
  },
});

export default observer(Ticker);
