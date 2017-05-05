import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import firebaseConfig from '../firebase-config.json';

let config = firebaseConfig;

firebase.initializeApp(config);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
