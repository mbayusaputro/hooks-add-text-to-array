import RootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
   timeout: 10000,
   key: 'root',
   storage: storage,
   stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);