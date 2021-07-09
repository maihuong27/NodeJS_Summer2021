const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;
const router = require('./routers/index');

app.engine('hbs', hbs({
    extname: 'hbs'
}))

app.set('view engine', '.hbs');

router(app);

app.listen(port, () => console.log(`Listen port http://localhost:${port}`));