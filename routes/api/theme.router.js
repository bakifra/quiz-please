const router = require('express').Router();
const QuestionCard = require('../../components/QuestionCard')
const { Theme, Question } = require('../../db/models');

router.get('/:themeId', async (req, res) => {
  try {
    const { themeId } = req.params;
    const theme = await Theme.findOne({ where: { id: themeId }, include: Question });
    const a = theme.Questions[0].id;
    res.redirect(`/themes/${themeId}/questions/${a}`);
  } catch ({ message }) {
    res.json(message);
  }
});

router.get('/:themeId/questions/:questionId', async (req, res) => {
  try {
    const { themeId, questionId } = req.params;
    const question = await Question.findOne({ where: { id:questionId , theme_id: themeId } });
    // console.log(question);
    res.send(res.renderComponent(QuestionCard, { title: 'Карточка вопроса', question }));
  } catch ({ message }) {
    res.json(message);
  }
});
  
module.exports = router;