import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Если у тебя есть какие-либо глобальные стили
import App from './App'; // Импорт твоего компонента App (в данном случае это TestPage)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Рендерим приложение в элемент с id "root" в index.html
);
