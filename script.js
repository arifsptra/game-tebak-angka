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
  // determine the rules
  // variable to determine the result
  var result = "";
  // repetition of answers for players up to 3 times
  for (live = 2; live > 0; live--) {
    if (player == computer) {
      result = "Anda Benar!";
      // code to display the result
      alert("Tebakan " + result + "\nAngka yang dicari adalah " + computer);
    } else if (player < computer) {
      result = "Anda terlalu RENDAH!";
      // warns the number of remaining player chances and catches another guess option
      player = parseInt(prompt("Tebakan " + result + "\nKesempatan Anda Masih " + live + " Lagi"));
    } else {
      result = "Anda terlalu TINGGI!";
      // warns the number of remaining player chances and catches another guess option
      player = parseInt(prompt("Tebakan " + result + "\nKesempatan Anda Masih " + live + " Lagi"));
    }
  }
  // alert the opportunity is up and the player loses
  if (live == 0 && player != computer) {
    alert("Kesempatan Anda sudah habis! \nAnda Kalah!");
  }
  // code to repeat the game
  repeat = confirm("Mau Bermain Lagi?");
}
// message after exiting the game
alert("Terima Kasih Sudah Bermain!");
