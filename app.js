require('@babel/register');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const ssr = require('./middleware/ssr');
const mainRouter = require('./routes/views/main.routes');
const registerRouter = require('./routes/views/register.router');
const loginRouter = require('./routes/views/login.router');
const registerApiRouter = require('./routes/api/register.api.router');
const loginApiRouter = require('./routes/api/login.api.router');
const themesRouter = require('./routes/api/theme.router');
const answerApiRouter = require('./routes/api/answer.api.router');


const app = express();
const PORT = 3000;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(ssr);
app.use(express.json());

app.use('/', mainRouter);
app.use('/themes',themesRouter);
app.use('/answer', answerApiRouter );
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/api/register', registerApiRouter);
app.use('/api/login', loginApiRouter);

app.use(session(
    {
      store: new FileStore(),
      name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
      secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
      resave: false, // Пересохранять ли куку при каждом запросе
      saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
      cookie: {
        maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
        httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
      },
    },
  ));

  app.listen(PORT, () => {
    console.log(`server started PORT: ${PORT}`);
  });
