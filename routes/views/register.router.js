const registerRouter = require('express').Router();
const bcrypt = require('bcrypt');
const RegisterPage = require('../../components/RegisterPage');
const { User } = require('../../db/models');

registerRouter.get('/', (req, res) => {
  res.send(res.renderComponent(RegisterPage, { title: 'Registration' }));
});


module.exports = registerRouter;
