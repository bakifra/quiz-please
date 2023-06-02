const router = require('express').Router();
const { Question } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { answer, theme_id, question_id } = req.body;
    const question = await Question.findOne({
      where: {
        theme_id,
        id: question_id,
      },
    });

    console.log(
      question.answer,
      answer,
      question.id,
      question_id,
      question.theme_id,
      theme_id
    );
    if (
      question.answer === answer &&
      question.id === +question_id &&
      question.theme_id === +theme_id
    ) {
      res.json({ message: 'Верно' });
    } else {
      res.json({ message: `неверно. правильный ответ ${question.answer}` });
    }
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
