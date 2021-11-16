// guess chance variable declaration
var live = 3;
// variabel to repeat
var repeat = true;
while (repeat) {
  // capture player choice
  alert("Tebak angka dari 1 - 10\nKamu Punya 3 Kesempatan!");
  var player = prompt("Masukkan angka tebakan");
  // make ramdom computer choice 1 - 10
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  var computer = random(1, 10);
  console.log(computer);
}
