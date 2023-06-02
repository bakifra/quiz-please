const React = require('react');
const Layout = require('./Layout');

function QuestionCard ({title, question}) {
        return (
            <Layout title={title} question  = { question } >
          <div className="card-container">
          <img src={question.q_img} className="card-img" alt="quest_image"/>
          <p>{question.q_text}</p>

          <form className="formQuestion" action="" data-id={question.id} data-theme={question.theme_id}> 
          <input name="answertInput" type="text" placeholder="Введите текст" />
          <button type="submit" id="answer-btn"> Ответить </button>
          {/* <button type="submit" className="next-btn"> Следующий вопрос </button> */}
           <a href= {`./${question.id+1}`} className="next-btn" > Следующий вопрос</a>
           </form>
          </div>
          </Layout>
        )
};

module.exports = QuestionCard;
