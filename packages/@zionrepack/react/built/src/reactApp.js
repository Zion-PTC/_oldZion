import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from '@zionstate/react-router-dom';
function reactApp(children) {
    ReactDOM.render(React.createElement(React.StrictMode, null,
        React.createElement(BrowserRouter, null, children)), document.getElementById('root'));
}
