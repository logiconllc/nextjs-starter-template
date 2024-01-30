'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

interface IReduxProvider {
  children: ReactNode;
}

const ReduxProvider = ({ children }: IReduxProvider) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
