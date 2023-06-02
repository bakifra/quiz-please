const answerBtn = document.querySelector('#answer-btn');
const forma = document.querySelector('.formQuestion');
// console.log(answerBtn);

if (forma) {
  forma.addEventListener('submit', async (e) => {
    // console.log('------------------------------');
    // console.log(e.target.dataset);
    e.preventDefault();
    const res = await fetch('/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answer: e.target.answertInput.value,
        theme_id: e.target.dataset.theme,
        question_id: e.target.dataset.id,
      }),
    });
    const data = await res.json();
    if (data.message.includes('неверно')) {
      alertMessage = data.message;
      alert(alertMessage);
    }
    else {
        alert('ОГОНЬ!')
    }
    //    console.log(data);
    //    alertMessage = data.message;
    //    alert(alertMessage);
  });
}
// `/themes/${e.target.dataset.theme}/questions/${e.target.dataset.id}`
