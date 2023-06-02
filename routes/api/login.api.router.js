const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');


function notFound(res) {
  return res.status(404).json({ mesage: 'User is not found' });
}

loginRouter.post('/', async (req, res) => {
  let user;
  try {
    user = await User.findOne({ where: { name: req.body.name } });
    console.log(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  if (!user) {
    notFound(res);
    return;
  }
  let isSamePassword;
  try {
    isSamePassword = await bcrypt.compare(req.body.password, user.password);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  if (!isSamePassword) {
    notFound(res);
    return;
  }
  req.session.user = user; // Логин, создание сессии, инициализация
  res.redirect('/');
});

module.exports = loginRouter;
