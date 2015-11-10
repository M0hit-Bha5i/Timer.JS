
function start(nd,nh,nm,ns)
{ 
    document.getElementById("seconds").innerHTML=Math.round(Math.abs(ns)); 
    document.getElementById("days").innerHTML=Math.round(Math.abs(nd));
    document.getElementById("hours").innerHTML=Math.round(Math.abs(nh));
    document.getElementById("minutes").innerHTML=Math.round(Math.abs(nm));  
}
function updateClock()
{
    if (document.getElementById("seconds").innerHTML==0) 
    {
	document.getElementById("seconds").innerHTML=60;
	document.getElementById("minutes").innerHTML-=1;
    }
    if (document.getElementById("minutes").innerHTML==0) 
    {
	document.getElementById("minutes").innerHTML=59;
	document.getElementById("hours").innerHTML-=1;
    }
    if (document.getElementById("hours").innerHTML==0) 
    {
	document.getElementById("hours").innerHTML=59;
	document.getElementById("days").innerHTML-=1;
    }
    document.getElementById("seconds").innerHTML-=1;
}
setInterval(updateClock,1000);
