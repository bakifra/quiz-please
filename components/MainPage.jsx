const React = require('react');
const Layout = require('./Layout');
const Themes = require('./Themes');

function MainPage({title, themes}) {
  return(
  <Layout title= {title}>
    <Themes header = {'Выберите тему'} themes = {themes}/>
  </Layout>
  )
};
module.exports = MainPage;
