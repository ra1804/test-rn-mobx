import {Instance, types} from 'mobx-state-tree';
import {createContext, useContext} from 'react';
import QuoteStore from './QuoteStore';

export const RootStore = types.model({
  quoteStore: QuoteStore,
});

let _store: any = null;

export function initializeStore() {
  _store = RootStore.create({
    quoteStore: {
      quotes: [],
      autoRefreshActive: true,
      isLoading: false,
      error: '',
    },
  });
  return _store;
}

export type RootInstance = Instance<typeof RootStore>;
const RootStoreContext = createContext<null | RootInstance>(null);
export const Provider = RootStoreContext.Provider;

export function useStore(): Instance<typeof RootStore> {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
