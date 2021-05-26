var ramdomNumber1=Math.random();
ramdomNumber1=ramdomNumber1 * 6;
ramdomNumber1=Math.floor(ramdomNumber1) + 1;

var randomImage1="images/dice"+ramdomNumber1+".png";//getting a random images

var image1=document.querySelector(".img1").setAttribute("src",randomImage1);

var ramdomNumber2=Math.random();
ramdomNumber2=ramdomNumber2*6;
ramdomNumber2=Math.floor(ramdomNumber2)+1;

var randomImage2="images/dice"+ramdomNumber2+".png";//getting a random images

var image2=document.querySelector(".img2").setAttribute("src",randomImage2);


function whoWins(){
  if(ramdomNumber1>ramdomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
  }
  else if (ramdomNumber1===ramdomNumber2) {
    document.querySelector("h1").innerHTML="it's a draw lads";
  }
  else{
    document.querySelector("h1").innerHTML="player 2 wins";
  }
}
whoWins();
