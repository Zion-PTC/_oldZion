import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from '@zionstate/react-router-dom';


function reactApp(children){
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}

