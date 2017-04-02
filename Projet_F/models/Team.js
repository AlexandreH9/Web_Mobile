/**
 * Created by user on 28/03/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
    teamname: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Team', teamSchema);