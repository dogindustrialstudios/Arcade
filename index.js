var GamePass = localStorage.getItem("GamePass");
if (typeof(Storage) !== "undefined") {
  if (GamePass == null) {
    localStorage.setItem("GamePass", "Basic");
  }
}
var DevPass = localStorage.getItem("InDevPass");
if (DevPass == null) {
  localStorage.setItem("InDevPass", "0");
}
