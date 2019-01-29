const router = require("express").Router();
const userController = require('./../../controllers/userController');
const passport = require('./../../services/passport');
const axios = require('axios');
const dotenv = require("dotenv").config()

const APIkey = process.env.API_Key;

router
    .route('/create')
    .post(userController.createUser);

router
    .route('/login', passport.authenticate('local'))
    .post(userController.logInUser);

router
    .route("/personality")
    .put(userController.editPersonality)

router
    .route("/hobbies")
    .put(userController.saveHobbies)

router
    .route("/activateUser")
    .put(userController.activateUser)
    
router
    .route("/users")
    .get(userController.checkUser)

router
    .route("/getMeetUp/:zipcode/:hobbylink")
    .get((req, res) => {
        const { zipcode } = req.params;
        const { hobbylink } = req.params;
        const URL = `https://api.meetup.com/find/groups?key=${APIkey}&sign=true&photo-host=public&zip=${zipcode}&fallback_suggestions=true&text=${hobbylink}&radius=25.0&page=5`;
        console.log(URL);
        axios.get(URL)
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                console.log(err)
                res.json(err);
            });

    })
module.exports = router;