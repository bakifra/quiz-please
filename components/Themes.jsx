const React = require('react');
const Layout = require('./Layout');

function Themes({ title, header, themes = [] }) {
  return (
    <Layout title={title}>
      <h1>{header}</h1>
      {themes.map((theme) => {
        return <div>{theme}</div>;
      })}
    </Layout>
  );
}

module.exports = Themes;
