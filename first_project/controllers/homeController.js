class HomeController {
    home(req, res) {
        res.render('../views/home');
    }
}

module.exports = new HomeController;