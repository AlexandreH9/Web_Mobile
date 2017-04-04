/**
 * Created by pierr on 04/04/2017.
 */
var http = require('http');

getGames = function (id) {
    var request =  http.get("http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=3AA41049746F933D064CC382A51CA258&format=json&include_appinfo=1&steamid=" + id, function (reponse) {

        var body = "";

        reponse.on('data', function(chunk){
            body += chunk;
        });

        reponse.on('end', function(){

            if(reponse.statusCode === 200){
                try{
                    var test = JSON.parse(body);
                    console.log(test.game_count);
                    console.log(test.games[0].name)
                }catch(error){
                    console.log(error);
                }
            }else{
                console.log({ message: "Impossible de recuperer les informations"});
            }
        });

    })

}

// getGames('76561198182538293');

//module.exports.get = get;