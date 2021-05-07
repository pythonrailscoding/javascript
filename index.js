function Add() {
    var exist = document.getElementById('output').innerHTML;
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (!num1 && !num2) {
        document.getElementById("output").innerHTML = exist + "<br><br/><b><font color='red'>Both the fields are entered blank!</font>";
    } else if (!num1 || !num2) {
        document.getElementById("output").innerHTML = exist + "<br><br/><b><font color='red'>You need to fill both of the fields!</font>";
        document.getElementById("num1").value = '';
        document.getElementById("num2").value = '';
    } else {
        var sum = num1 + num2;
        document.getElementById("output").innerHTML = exist + "<br><br/><b>Sum of " + num1 + " and " + num2 + " is " + sum + '</b>';
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
    }
    
}
function Clear() {
    document.getElementById('output').innerHTML = '';
}
function Calculate() {
    var exist = document.getElementById("output").innerHTML
    var celcius = parseFloat(document.getElementById("celcius").value);
    var faren = parseFloat(document.getElementById("faren").value);
    var kelvin = parseFloat(document.getElementById("kelvin").value);
    if (!faren && !kelvin && !celcius){
        document.getElementById("output").innerHTML = exist + '<br/><br/><b><font color="red">No Values Entered!</font>';
    }else if (!celcius && !faren){
        var convert_cel = kelvin - 273;
        // document.getElementById("celcius").value = convert_cel;
        var convert_faren = ((9*convert_cel)/5) + 32;
        // document.getElementById("faren").value = convert_faren;
        document.getElementById("output").innerHTML = exist + "<br/><br/><b>For Temperature of " + kelvin + " K, <br/> Temperature in Celcius is " + convert_cel + "<br/> Temperature in Fahrenheit is " + convert_faren + '</b>';
        document.getElementById("kelvin").value = '';
    } else if (!celcius && !kelvin) {
        var convert_cel = ((faren - 32)/9)*5
        // document.getElementById("celcius").value = convert_cel;
        var convert_kelvin = convert_cel + 273;
        // document.getElementById("kelvin").value = convert_kelvin;
        document.getElementById("output").innerHTML = exist + "<br/><br/><b>For Temperature of " + faren + " degree Fahrenheit, <br/>Temperature in Celcius is " + convert_cel + '<br/> Temperature in Kelvin is ' + convert_kelvin + '</b>';
        document.getElementById("faren").value = '';
    } else if (!faren && !kelvin) {
        var convert_faren = ((9*celcius)/5) + 32;
        // document.getElementById("faren").value = convert_faren;
        var convert_kelvin = celcius + 273;
        // document.getElementById("kelvin").value = convert_kelvin;
        document.getElementById("output").innerHTML = exist + "<br/><br/><b>For Temperature of " + celcius + ' degree Celcius, <br/> Temperature in Fahrenheit is ' + convert_faren + "<br/> Temperature in Kelvin is " + convert_kelvin + '</b>';
        document.getElementById("celcius").value = '';
    /*} else if (!faren && !kelvin && !celcius){
        document.getElementById("tester").innerHTML = exist + '<br/><br/><b><font color="red">No Values Entered!</font>';
    */
        } else {
        document.getElementById("output").innerHTML = exist + '<br/><br/><b><font color="red">You need to Enter Values only in one field!</font></b>';
        document.getElementById("celcius").value = '';
        document.getElementById("faren").value = '';
        document.getElementById("kelvin").value = '';
    }
}
