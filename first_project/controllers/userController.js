class UserController {
    user(req, res) {
        res.render('../views/user.hbs');
    }
}

module.exports = new UserController;