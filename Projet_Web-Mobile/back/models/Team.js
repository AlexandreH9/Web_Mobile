/**
 * Created by user on 28/03/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
    teamname: String,
    email: String,
    password: String,
    players: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Team', teamSchema);