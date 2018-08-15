const database = require('./database');
const gitUsers = require('./routes/gitUsers');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
database.initializeMongo();

app.use('/api/git', gitUsers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listen on port ' + port + '..'));

