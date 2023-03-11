import React from "react";

const Navbar = () => {
  return (
    <ul>
      <li>
        <a href="/">Главная</a>
      </li>
      <li>
        <a href="/singin">Вход в кабинет</a>
      </li>
      <li>
        <a href="/posts">Записи</a>
      </li>
      <li>
        <a href="/contacts">Контакты</a>
      </li>
    </ul>
  );
};

export default Navbar;
