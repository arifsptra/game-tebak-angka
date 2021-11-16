// variabel to repeat
var repeat = true;
while (repeat) {
  // guess chance variable declaration
  var live;
  // capture player choice
  alert("Tebak angka dari 1 - 10\nKamu Punya 3 Kesempatan!");
  var player = parseInt(prompt("Masukkan angka tebakan"));
  // make ramdom computer choice 1 - 10
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  var computer = random(1, 10);
}
