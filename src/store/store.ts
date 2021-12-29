import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer, { RootState } from "./reducers/rootReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer<RootState, any>(
  persistConfig,
  rootReducer
);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

// RESET STORAGE WITH THIS
// persistor.purge();

export { store, persistor };
