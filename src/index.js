import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
<<<<<<< HEAD

=======
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
>>>>>>> 7b1ad84ffeef7498b292aa55583ac409e00bcac9

import manageUsers from './reducers/manageUsers'


// add imports and code

const store = createStore(
<<<<<<< HEAD
manageUsers
=======
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
>>>>>>> 7b1ad84ffeef7498b292aa55583ac409e00bcac9
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
