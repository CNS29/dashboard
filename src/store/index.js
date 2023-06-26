import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './common/commonSlice';
import { api } from './apis';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const store = configureStore({
  reducer: { common: commonReducer, [api.reducerPath]: api.reducer },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
