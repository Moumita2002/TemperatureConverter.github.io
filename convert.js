var cel=document.getElementById("cel");
var fah=document.getElementById("fah");

cel.addEventListener('input', clickCel);
fah.addEventListener('input', clickFah);

function clickCel()
{
    let c=this.value; // celsius me jo bhi user input dalega us input ko lene ke liye this.value use hota ha
    let f=(c*9/5)+32; // formula ha fahrenheit ka
    if(!Number.isInteger(f))
    {
        f=f.toFixed(4);
    }
    fah.value=f; // f me hi store ha fahrenheit ka value
}
function clickFah()
{
    // we will do the same thing here also
    let f=this.value;
    let c=(f-32)*5/9;
    if(!Number.isInteger(c))
    {
        c=c.toFixed(4);
    }
    cel.value=c;
}