import React from "react";
import { Provider } from "react-redux";
import { createStackNavigator } from "react-navigation";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers";

import { Welcome, Detail } from "./containers";
import ReduxNavigation from "./ReduxNavigation";

const AppNavigator = createStackNavigator(
  {
    Welcome: Welcome,
    Detail: Detail
  },
  {
    initialRouteName: "Welcome"
  }
);

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  nav: navReducer
});

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

export const App = reduxifyNavigator(AppNavigator, "root");

const store = createStore(appReducer, applyMiddleware(middleware));

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxNavigation />
      </Provider>
    );
  }
}
