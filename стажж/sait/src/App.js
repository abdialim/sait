import React from 'react';
import './index.css'; // Стили

const TestPage = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="status-bar">
          <span>5/20 вопросов по экономике</span>
          <span>У вас есть время: 130 мин</span>
          <span>Обязательный тест</span>
        </div>
        <h1>Экзаменационный тест по экономике</h1>
      </div>

      <div className="question-block">
        <h2>1. Какая из следующих характеристик является признаком рыночной экономики?</h2>
        <div className="options">
          <button className="option">Правительство контролирует производство и распределение товаров и услуг.</button>
          <button className="option">Цены устанавливаются на основе взаимодействия спроса и предложения</button>
          <button className="option">Частная собственность защищена законом.</button>
          <button className="option">Все вышеперечисленное.</button>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
