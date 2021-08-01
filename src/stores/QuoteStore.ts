import {types, flow} from 'mobx-state-tree';
import {Quote} from '../models/QuoteType';
import {getQuotes} from '../services/QuotesService';

export const QuoteStore = types
  .model({
    quotes: types.array(types.frozen<Quote>()),
    isLoading: types.boolean,
    autoRefreshActive: types.boolean,
    error: types.string,
  })

  .actions(self => {
    const refreshQuotes = flow(function* () {
      if (self.quotes.length <= 1) {
        self.isLoading = true;
      }
      try {
        const quotesObj = (yield getQuotes()).data;

        const quotesArr = Object.keys(quotesObj).map((key: string) => ({
          ...quotesObj[key],
          id: `${quotesObj[key].id}`,
          name: key,
        }));

        self.quotes = quotesArr;
        self.isLoading = false;
      } catch (error) {
        self.error = error.message;
        self.isLoading = false;
      }
    });

    return {refreshQuotes};
  })

  .actions(self => {
    let timeIntervalId: any;

    return {
      cancelTimeInterval() {
        if (timeIntervalId) {
          clearTimeout(timeIntervalId);
        }
        self.autoRefreshActive = false;
        timeIntervalId = null;
      },
      setupTimeInterval() {
        self.autoRefreshActive = true;

        timeIntervalId = setTimeout(function tick() {
          self.refreshQuotes();
          timeIntervalId = setTimeout(tick, 5000); // (*)
        }, 0);
      },
    };
  });

export default QuoteStore;
