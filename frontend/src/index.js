// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
// import store from './redux/configureStore';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Router>
//         <App />
//       </Router>
//     </Provider>    
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { AppState } from './AppState';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <AppState>
        <Provider store={store}>
          <App />
        </Provider>
      </AppState>
    </Router>,
    document.body.appendChild(document.createElement('root')),
  )
})