var DevPass = localStorage.getItem("InDevPass");
if (DevPass == null) {
  localStorage.setItem("InDevPass", "0");
}
//if (DevPass == "1" || localStorage.GamePass == "Developer") {
alert('Game Is in development.  There may be bugs and errors in the game that we have no control of.');
//} else { window.location.href = "/Arcade/Server/MissingInDevPass.html"; }
