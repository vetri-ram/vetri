function a()
{
    var t = document.getElementById("p1");
    t.style.backgroundColor="red";
    t.style.fontSize="50px";
}
function b()
{
    
    var t = document.getElementById("p2");
    t.style.backgroundColor="#11D611";
    t.style.fontSize="50px";
}
function c()
{
    var t = document.getElementById("p3");
    t.style.backgroundColor="#D66011";
    t.style.fontSize="50px";
}
function d()
{
    var t = document.getElementById("p4");
    t.style.backgroundColor="#11D680";
    t.style.fontSize="50px";
}
function e()
{
    var t = document.getElementById("p5");
    t.style.backgroundColor="#11BCD6";
    t.style.fontSize="50px";
}
function f()
{
    var t1 =23+23;
    var t2 =2-23;
    var t3 =3*23;
    var t4 =2/220;
    var k = document.getElementsByTagName("h3");
    k[0].innerHTML=t1;
    k[1].innerHTML=t2;
    k[2].innerHTML=t3;
    k[3].innerHTML=t4;
    k[0].style.backgroundColor="#11D611";
    k[1].style.backgroundColor="#D66011";
    k[2].style.backgroundColor="#11D680";
    k[3].style.backgroundColor="#11BCD6";
}