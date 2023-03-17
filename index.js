var imgarr=["2x.gif","3x.gif"]
var indval=0;
function inc()
{
    indval++;
    document.getElementById("fights").style.backgroundImage="url("+imgarr[indval]+")"
}
function dec()
{
    indval--;
    document.getElementById("fights").style.backgroundImage="url("+imgarr[indval]+")"
}
