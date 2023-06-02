const React = require('react');

function Navbar({ title, header }) {
  return (
<>
<h1>{header}</h1>
      <button href="/registration">Регистрация</button>
      <button href="/login">Войти</button>
      <button href="/home">Домой</button>
</>
  );
}

module.exports = Navbar;
