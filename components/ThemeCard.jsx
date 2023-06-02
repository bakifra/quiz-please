const React = require('react');

function ThemeCard ({theme}) {
  return (
    <div className="card-container">
      <h2>{theme.theme_name}</h2>
    <img src={theme.theme_img} className="card-img" alt="theme_image"/>
    {/* <div className="card-body"> */}
     <a href= {`/themes/${theme.id}`} className="card-title" > начать </a>
    </div>
  )
};

module.exports = ThemeCard;
