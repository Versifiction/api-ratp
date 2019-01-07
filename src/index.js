import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Site from './Site';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Site />, document.getElementById('root'));
registerServiceWorker();