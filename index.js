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
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { COLOR } from './src/global/styles';
import { fontConfig } from './src/global/CONSTANTS';

const rootReducer = combineReducers({
  person: personReducer,
  information: informationReducer,
  slug: slugReducer,
});

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: COLOR.primary,
  },
};

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
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppStore);
