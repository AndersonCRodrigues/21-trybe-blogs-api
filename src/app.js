const express = require('express');
const loginRouter = require('./routes/loginRouter');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// routers
app.use('/login', loginRouter);

app.use(require('./middlewares/errorHandler'));
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

// commit