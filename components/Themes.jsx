const React = require('react');
const ThemeCard = require('./ThemeCard');

function Themes({ header, themes = [] }) {
  return (
    <>
      <h1>{header}</h1>
      <div className="themes_list">
        {themes.map((theme) => (
          <ThemeCard theme={theme} key={theme.id} />
        ))}
      </div>
    </>
  );
}

module.exports = Themes;
