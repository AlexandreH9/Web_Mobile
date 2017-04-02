//config : pour me connecter à la bdd
var dotenv = require('dotenv'); // correspond a .env
var mongoose = require('mongoose');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');

dotenv.config();

mongoose.connect('mongodb://' + process.env.DB_HOST +
                 ':' + process.env.DB_PORT +
                 '/' + process.env.DB_NAME);

module.exports = {

    'secret': 'ilovescotchyscotch'

};