import './components/Header.css'
import React from 'react'

function Header({setPage}) {

  return (
    <div className="Header">
      <h1>Мастерская Ванных</h1>
      <ul>
        <li onClick = { () => setPage('Main')}>Главная</li>
        <li onClick = { () => setPage('AboutUs')}>О нас</li>
        <li onClick = { () => setPage('Uslugy')}>Услуги</li>
        <li onClick = { () => setPage('Calculator')}>Калькулятор</li>
        <li onClick = { () => setPage('Contacts')}>Контакты</li>
        <li onClick = { () => setPage('Gallery')}>Галерея</li>
        <li onClick = { () => setPage('Blog')}>Блог</li>
      </ul>
    </div>
  );
}

export default Header;
