import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//html 엘리먼트에 접근하고 있음.
//react로 개발한 APP react 엘리먼트를 전부 react dom render로 접근하여 
//html 엘리먼트에 넣어주겠다.
// 첫 번째 인자에 APP react 엘리먼트
// 두 번째 인자에는 원하는 html 엘리먼트 위치
/*ReactDOM.render(
    <App />,
  document.getElementById('root')
);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
