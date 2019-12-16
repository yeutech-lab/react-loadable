import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from '@yeutech-lab/react-loadable';
import App from './components/App';

window.main = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(<App/>, document.getElementById('app'));
  });
};
