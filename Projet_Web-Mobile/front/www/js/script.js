/**
 * Created by pierr on 11/04/2017.
 */

function displayRegister() {
  var reg = document.getElementById("registerPlayer");
  var connect = document.getElementById("loginPlayer");
  var bReg = document.getElementById("buttonRegister");
  var bConnect = document.getElementById("buttonConnexion");

  reg.style.display = "inline";
  connect.style.display = "none";

  // //button
  // bReg.style.backgroundColor = "#886aea";
  // bReg.style.color = "#ffffff";
  // bConnect.style.backgroundColor = "#f8f8f8";
  // bConnect.style.color= "#585858";

}

function displayConnection() {
  var reg = document.getElementById("registerPlayer");
  var connect = document.getElementById("loginPlayer");
  var bReg = document.getElementById("buttonRegister");
  var bConnect = document.getElementById("buttonConnexion");;

  reg.style.display = "none";
  connect.style.display = "inline";

  //button
  // bConnect.style.backgroundColor = "#886aea";
  // bReg.style.backgroundColor = "#f8f8f8";

}
