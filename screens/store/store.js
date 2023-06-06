import {configureStore} from '@reduxjs/toolkit';
// configure store = created store to store actions

import colorSlice from './colorSlice';
import switchSlice from './switchSlice';
import featureSlice from './getUsersSlice';

export const ReduxStore = configureStore({
  reducer: {
    color: colorSlice,
    switchButton: switchSlice,
    feature: featureSlice,
  },
});
