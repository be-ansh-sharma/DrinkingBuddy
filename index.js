import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import personReducer from './src/store/reducers/person';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  person: personReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const AppStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppStore);
