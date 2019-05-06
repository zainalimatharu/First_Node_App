const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const passport = require('passport');
const cokieSession = require('cookie-session');
require('./models/user');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cokieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);




// client ID: 339119811871-3n8uqrpdk3ivqluf3p7s4scikcn76q72.apps.googleusercontent.com
// Client Secret: If7TmCloQi4ByLXMhgjhSN8E
const PORT = process.env.PORT || 5000;
app.listen(PORT);