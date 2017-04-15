/**
 * Created by pierr on 04/04/2017.
 */
var router = require('express').Router();
var http = require('http');

router.get('/:id', function (req, res) {
    var id_game = req.url;
    id_game = id_game.substring(1);

    var request = http.get("http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid="+ id_game +"&key=3AA41049746F933D064CC382A51CA258&steamid=76561198182538293" , function(reponse){

        var body = "";

        reponse.on('data', function(chunk){
            body += chunk;
        });

        reponse.on('end', function(){

            if(reponse.statusCode === 200){
                try{
                    var test = JSON.parse(body);
                    console.log(test.playerstats.stats[0]);
                    console.log('%s %s %s', req.method, req.url, req.path);

                    console.log(id_game);
                    res.json(test);
                }catch(error){
                    console.log(error);
                }
            }else{
                console.log({ message: "Impossible de recuperer les informations"});
            }
        });

    });
});



// info jeux 730:CSGO
//H1Z: KotK : 433850 et JS : 295110
//dota 2 : 570
// rocket league : 252950
//ark : 346110

//joueur
//h1z1, cs, rocket,  : 76561198063137640
//dota 2, ark :76561198028968943

module.exports = router;
// getStats('76561198182538293');
