const express = require('express');
const app = express();
const router = express.Router();
const bodyparser = require('body-parser');
var logger = require('morgan');
const cors = require('cors');
//const passport = require('passport');
//const { bearerStrategy, isAuthenticated } = require('./authorize');
const fs = require('fs');

const routesInfo = JSON.parse(
  fs.readFileSync('routes.json').toString()
);

const BranchManager = require('./api/routes/branch_route.js');

app.use(cors((origin = '*')));
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());
app.use(express.json());
app.use(cors('*'));

app.use(logger('dev'));
app.disable('etag');

//app.use(passport.initialize());
//passport.use(bearerStrategy);
//app.use(isAuthenticated);

app.use(routesInfo.API, BranchManager);

app.listen(3000, () => {
  console.log('listening on 3000');
});

module.exports = router;
