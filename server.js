const routes = require("./routes");
const express = require('express');
const mongoose = require('mongoose');
const passport = require('./services/passport');
const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets (usually on heroku)

    app.use(express.static("client/build"));



app.use(passport.initialize());
app.use(passport.session());
app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/passportExampleDb", { useNewUrlParser: true }, function () {
    console.log("Mongo is connected sir!");
    app.listen(PORT, function () {
        console.log(`Our app is listening! be quite...Ostentatious ${PORT}`);
    })
});

