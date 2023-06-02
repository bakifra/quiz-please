const loginRouter = require('express').Router();
const LoginPage = require('../../components/LoginPage');

loginRouter.get('/', (req, res) => {
  res.send(res.renderComponent(LoginPage, { title: 'Login' }));
});


module.exports = loginRouter;
