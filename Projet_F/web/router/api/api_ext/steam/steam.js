// var http = require('http');
//
// function get(id, callback) {
// 	var request = http.get("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?format=json&key=75B7029F7E2BE1CDCD463FE803416AB3&steamids=" + id, function(reponse){
//
// 		var body = "";
//
// 		reponse.on('data', function(chunk){
// 			body += chunk;
// 		});
//
// 		reponse.on('end', function(){
// 		if(reponse.statusCode === 200){
// 			try{
// 				var info = JSON.parse(body);
// 				console.log(info.response.players[0].personaname);
// 				callback(info);
// 			}catch(error){
// 				console.log(error);
// 			}
// 		}else{
// 				console.log({ message: "Impossible de recuperer les informations"});
// 			}
// 		});
// 	});
// }
//
// get('76561197997737990', function(resultat){
// 	console.log(resultat.response.players[0].steamid);
// });
//
// module.exports.get = get;
//
//  getStats = function (id) {
// 	var request = http.get("http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=75B7029F7E2BE1CDCD463FE803416AB3&steamid=" + id, function(reponse){
//
// 		var body = "";
//
// 		reponse.on('data', function(chunk){
// 			body += chunk;
// 		});
//
// 		reponse.on('end', function(){
//
// 		if(reponse.statusCode === 200){
// 			try{
// 				var test = JSON.parse(body);
// 				console.log(test.playerstats.stats[0]);
// 			}catch(error){
// 				console.log(error);
// 			}
// 		}else{
// 				console.log({ message: "Impossible de recuperer les informations"});
// 			}
// 		});
//
// 		//console.log(test);
// 	});
// }
//
// getStats('76561197997737990');