const React = require('react');
const Layout = require('./Layout');

function LoginForm() {
  return (
    <Layout>
      <h1> Log In </h1>
      <form name="LoginForm" action="/login" method="POST">
        <label htmlFor="name">E-mail:</label>
        <br />
        <input
          id="name"
          type="text"
          placeholder="enter name"
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="enter password"
        />
        <br />
        <br />
        <button type="submit">
          Log In
        </button>
      </form>
    </Layout>
  );
}

module.exports = LoginForm;
