/**
 * Created by pierr on 04/04/2017.
 */
var http = require('http');

//info jeux 730:CSGO
getStats = function (id) {
    var request = http.get("http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=3AA41049746F933D064CC382A51CA258&steamid=" + id, function(reponse){

        var body = "";

        reponse.on('data', function(chunk){
            body += chunk;
        });

        reponse.on('end', function(){

            if(reponse.statusCode === 200){
                try{
                    var test = JSON.parse(body);
                    console.log(test.playerstats.stats[0]);
                }catch(error){
                    console.log(error);
                }
            }else{
                console.log({ message: "Impossible de recuperer les informations"});
            }
        });

        //console.log(test);
    });
}

// getStats('76561198182538293');
//t;