const router = require('express').Router();

router.get('/', (req, res) => {
    res.send(res.renderComponent(MainPage, { title: 'Main page' }));
  });

module.exports = router;