function RegisterCode() {
if (localStorage.ArcadeCoins == null || localStorage.ArcadeCoins == "NaN") {
  localStorage.ArcadeCoins = 0;
}
var Code;
Code = document.getElementById("CodeInput").value;
if (Code == "000 0000 000") {
  localStorage.ArcadeCoins = 0;
  alert('Set Coin.Value to 0');
  window.location.reload();
}
if (Code == "000 0000 001") {
  alert('Coin.Value = '+localStorage.ArcadeCoins);
  window.location.reload();
}
if (Code == "222 0100 345") {
  localStorage.ArcadeCoins = Number(localStorage.ArcadeCoins) + 100;
  alert('Added 100 Coins to your account');
  window.location.reload();
}
}
