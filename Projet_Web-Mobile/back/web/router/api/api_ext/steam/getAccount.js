/**
 * Created by pierr on 04/04/2017.
 */
var router = require('express').Router();
var http = require('http');

router.get('/', function (req, res) {
    var request = http.get("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?format=json&key=3AA41049746F933D064CC382A51CA258&steamids=76561198124141110", function(reponse){

        var body = "";

        reponse.on('data', function(chunk){
            body += chunk;
        });

        reponse.on('end', function(){
            if(reponse.statusCode === 200){
                try{
                    var info = JSON.parse(body);
                    console.log(info.response.players[0].personaname);
                    res.json(info);
                }catch(error){
                    console.log(error);
                }
            }else{
                console.log({ message: "Impossible de recuperer les informations"});
            }
        });
    });

});


//
// //info utilisateur
// function getAccount(){//id, callback) {
//     var request = http.get("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?format=json&key=3AA41049746F933D064CC382A51CA258&steamids=76561198124141110", function(reponse){
//
//         var body = "";
//
//         reponse.on('data', function(chunk){
//             body += chunk;
//         });
//
//         reponse.on('end', function(){
//             if(reponse.statusCode === 200){
//                 try{
//                     var info = JSON.parse(body);
//                     console.log(info.response.players[0].personaname);
//                     return info;
//                 }catch(error){
//                     console.log(error);
//                 }
//             }else{
//                 console.log({ message: "Impossible de recuperer les informations"});
//             }
//         });
//     });
// }

// getAccount('76561198182538293', function(resultat){
//     console.log(resultat.response.players[0].steamid);
// });

module.exports = router;