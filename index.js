import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import personReducer from './src/store/reducers/person';
import informationReducer from './src/store/reducers/information';
import slugReducer from './src/store/reducers/slug';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  person: personReducer,
  information: informationReducer,
  slug: slugReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : noop => noop,
  ),
);

const AppStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppStore);
