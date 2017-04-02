var http = require('http');

//info utilisateur
function get(id, callback) {
	var request = http.get("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?format=json&key=3AA41049746F933D064CC382A51CA258&steamids=" + id, function(reponse){

		var body = "";

		reponse.on('data', function(chunk){
			body += chunk;
		});

		reponse.on('end', function(){
		if(reponse.statusCode === 200){
			try{
				var info = JSON.parse(body);
				console.log(info.response.players[0].personaname);
				callback(info);
			}catch(error){
				console.log(error);
			}
		}else{
				console.log({ message: "Impossible de recuperer les informations"});
			}
		});
	});
}

get('76561198182538293', function(resultat){
	console.log(resultat.response.players[0].steamid);
});

module.exports.get = get;

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

getStats('76561198182538293');

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

getGames('76561198182538293');