const express = require('express');
const loginRouter = require('./routes/loginRouter');
const userRouer = require('./routes/userRouter');
const categoryRouter = require('./routes/categoryRouter');
const postRouter = require('./routes/postRouter');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// routers
app.use('/login', loginRouter);
app.use('/user', userRouer);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

app.use(require('./middlewares/errorHandler'));
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

// commit