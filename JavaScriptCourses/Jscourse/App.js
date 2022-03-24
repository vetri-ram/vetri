function v() {
    document.getElementById("h1").innerHTML = "HelloWorld !";
}
function text() {
    let s = document.getElementById("text");
    s.style.color="red";
    s.style.fontSize="40px";
    s.style.textAlign="center"
    s.style.backgroundColor="green";
    
}
function add(){
    let t = 5 + 3;
   
    let k = document.getElementById("add");
    k.innerHTML= t;
    k.style.textAlign="center";
    k.style.backgroundColor="violet";
    k.style.fontSize = "20px";
 
}
function add() {
    let v = 13 + 17;
    document.getElementById("add").innerHTML = v;
}
function sub() {
    let v = 13 - 17;
    document.getElementById("sub").innerHTML = v;
}
function Multiply() {
    let v = 13 * 17;
    document.getElementById("Multiply").innerHTML = v;
}
function Divi() {
    let v = 13 / 17;
    document.getElementById("Divi").innerHTML = v;
}

function result(){
    let s1 = 13+17;
    let s2 = 13-17;
    let s3 = 13*17;
    let s4 = 13/17;

    let k = document.getElementsByTagName("h4");
    k[0].innerHTML = s1;
    k[1].innerHTML = s2;
    k[2].innerHTML = s3;
    k[3].innerHTML = s4;
    k[0].style.textAlign="center";
    k[0].style.backgroundColor="darkblue";
    k[0].style.color = "white";
    k[1].style.textAlign="center";
    k[1].style.backgroundColor="darkblue";
    k[1].style.color = "white";
    k[2].style.textAlign="center";
    k[2].style.backgroundColor="darkblue";
    k[2].style.color = "white";
    k[3].style.textAlign="center";
    k[3].style.backgroundColor="darkblue";
    k[3].style.color = "white";

}

function ve(){
   let k = document.getElementsByClassName("v");
   k[0].style.color="black";
   k[0].style.fontSize="20px";
   k[0].style.textAlign="center";
   k[0].style.backgroundColor="green";
   k[1].style.color="blue";
   k[1].style.fontSize="20px";
   k[1].style.textAlign="center";
   k[1].style.backgroundColor="skyblue";
   k[2].style.color="white";
   k[2].style.fontSize="20px";
   k[2].style.textAlign="center";
   k[2].style.backgroundColor="red";
   k[3].style.color="yellow";
   k[3].style.fontSize="20px";
   k[3].style.textAlign="center";
   k[3].style.backgroundColor="grey";
}