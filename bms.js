function videourl(a)
{
    document.getElementById("slider1").src = a;
}
function imgurl(a)
{
    document.getElementById("wimg").src=a;
}
var counter = 1;
setInterval(function()
{
    document.getElementById('radio'+ counter).checked=true;
    counter++;
    if(counter > 4){
        counter = 1;
    }   
},5000);