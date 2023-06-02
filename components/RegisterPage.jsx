const React = require('react');
const Layout = require('./Layout');

function RegisterPage() {
  return (
    <Layout>
      <h1> Регистраия </h1>
      <form name="RegistrationForm" action="/register" method="POST">
        <label htmlFor="username"> Введите имя </label>
        <br />
        <input
          id="username"
          type="text"
          name="username"
          placeholder="имя"
        />
        <br />
        <label htmlFor="password">Введите пароль</label>
        <br />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="пароль"
        />
        <br />
        <br />
        <button type="submit">
          Регистраия
        </button>
      </form>
    </Layout>
  );
}

module.exports = RegisterPage;
