const home = require('./homeRouter');
const user = require('./userRouter');

function router(app) {

    app.use('/user', user);
    app.use('/', home);
}

module.exports = router;