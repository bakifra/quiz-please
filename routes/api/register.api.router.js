const registerRouter = require('express').Router();
const bcrypt = require('bcrypt');
const RegisterPage = require('../../components/RegisterPage');
const { User } = require('../../db/models');


registerRouter.post('/', async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 5);
  const user = await User.create(req.body);
  try {
    await user.save();
  } catch (err) {
    res.send(res.renderComponent(ErrorPage, { title: 'Error', err }));
  }
  res.status(200).json({ message: 'Регистрация прошла успешно' });
});

module.exports = registerRouter;
