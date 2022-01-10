function a()
{
  var k = document.getElementsByClassName("demo");
  for(i=0;i<k.length;i++)
   {
       k[i].style.textDecoration="underline";
       k[i].style.color="#C411D6";
       k[i].style.backgroundColor="#0B662B";
   }
}

function on()
{
    document.querySelector("#h1").style.backgroundColor="green";
}

function onn()
{
    let a = document.getElementById("hc").innerHTML = "Subash";
    let b = document.getElementById("hd").innerHTML = "Vetri"; 
      let c=a+b;
      document.getElementById("d").innerHTML = c;
      document.getElementById("d").classList.add("c1","c2","c3");
      document.getElementById("hc").innerHTML = " ";
    document.getElementById("hd").innerHTML = " "; 

    
document.g
}

document.addEventListener('DOMContentLoaded',function(){
  loadHTMLTable([]);
});

function loadHTMLTable(data) {
  const table=document.querySelector('table tbody');

  if(data.length===0)
  {
    table.innerHTML = "<tr><td class ='no-data' colspan='5'>No Data</td></tr>";
  }
}