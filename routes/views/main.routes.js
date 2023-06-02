const router = require('express').Router();
const MainPage = require('../../components/MainPage');
const { Theme } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll({ raw: true });
console.log(themes);
    res.send(res.renderComponent(MainPage, { title: 'Main page', themes }));
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
