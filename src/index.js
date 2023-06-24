import React from 'react';
import ReactDOM from 'react-dom/client';
// Importing the Provider component from the react-redux library so that we can wrap our 
// app in it. We are doing this so we can provide our data store by passing it in as a 
// prop.
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
// Importing our store from the file in which we created it so that we can provide it to
// our app. We can then pass our store as a prop to the Provider component so that our
// whole app (and any child components within) can tap into that store in order to: get
// data from the store, set up a subscription to any store data updates, or dispatch
// actions in order to change the data within the store.
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
