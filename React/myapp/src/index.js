import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
//sending prop into our app component
ReactDOM.render(<App appTitle="Person Manager"/>, document.getElementById('root'));
//Default react rendering
//ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
