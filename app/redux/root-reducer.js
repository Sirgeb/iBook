import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import user from './user/user-reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  user
});

export default persistReducer(persistConfig, rootReducer);
