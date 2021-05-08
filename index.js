function Add() {
    var exist = document.getElementById('output').innerHTML;
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (!num1 && !num2) {
        document.getElementById("output").innerHTML = "<br><br/><b><font color='red'>Both the fields are entered blank!</font></b>" + exist;
    } else if (!num1 || !num2) {
        document.getElementById("output").innerHTML = "<br><br/><b><font color='red'>You need to fill both of the fields!</font></b>"  + exist;
        document.getElementById("num1").value = '';
        document.getElementById("num2").value = '';
    } else {
        var sum = num1 + num2;
        document.getElementById("output").innerHTML = "<br><br/><b>Sum of " + num1 + " and " + num2 + " is " + sum + '</b>' + exist;
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
        document.getElementById("output").innerHTML = '<br/><br/><b><font color="red">No Values Entered!</font></b>' + exist;
    }else if (!celcius && !faren){
        var convert_cel = kelvin - 273;
        // document.getElementById("celcius").value = convert_cel;
        var convert_faren = ((9*convert_cel)/5) + 32;
        // document.getElementById("faren").value = convert_faren;
        document.getElementById("output").innerHTML = "<br/><br/><b>For Temperature of " + kelvin + " K, <br/> Temperature in Celcius is " + convert_cel + "<br/> Temperature in Fahrenheit is " + convert_faren + '</b>' + exist;
        document.getElementById("kelvin").value = '';
    } else if (!celcius && !kelvin) {
        var convert_cel = ((faren - 32)/9)*5
        // document.getElementById("celcius").value = convert_cel;
        var convert_kelvin = convert_cel + 273;
        // document.getElementById("kelvin").value = convert_kelvin;
        document.getElementById("output").innerHTML = "<br/><br/><b>For Temperature of " + faren + " degree Fahrenheit, <br/>Temperature in Celcius is " + convert_cel + '<br/> Temperature in Kelvin is ' + convert_kelvin + '</b>' + exist;
        document.getElementById("faren").value = '';
    } else if (!faren && !kelvin) {
        var convert_faren = ((9*celcius)/5) + 32;
        // document.getElementById("faren").value = convert_faren;
        var convert_kelvin = celcius + 273;
        // document.getElementById("kelvin").value = convert_kelvin;
        document.getElementById("output").innerHTML = "<br/><br/><b>For Temperature of " + celcius + ' degree Celcius, <br/> Temperature in Fahrenheit is ' + convert_faren + "<br/> Temperature in Kelvin is " + convert_kelvin + '</b>' + exist;
        document.getElementById("celcius").value = '';
    /*} else if (!faren && !kelvin && !celcius){
        document.getElementById("tester").innerHTML = exist + '<br/><br/><b><font color="red">No Values Entered!</font>';
    */
        } else {
        document.getElementById("output").innerHTML = '<br/><br/><b><font color="red">You need to Enter Values only in one field!</font></b>' + exist;
        document.getElementById("celcius").value = '';
        document.getElementById("faren").value = '';
        document.getElementById("kelvin").value = '';
    }
}

function multiply() {
    var exist = document.getElementById('output').innerHTML;
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (!num1 && !num2) {
        document.getElementById("output").innerHTML = "<br/><br/><b><font color='red'>Both the fields are entered blank!</font></b>" + exist;
    } else if (!num1 || !num2) {
        document.getElementById("output").innerHTML = "<br><br/><b><font color='red'>You need to fill both of the fields!</font></b>" + exist;
        document.getElementById("num1").value = '';
        document.getElementById("num2").value = '';
    } else {
        var product = num1 * num2;
        document.getElementById("output").innerHTML = "<br><br/><b>Multiplication of " + num1 + " and " + num2 + " is " + product + '</b>' + exist;
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
    }
}
function table() {
    var exist = document.getElementById("output").innerHTML;
    result = '';
    var a = document.getElementById("num1").value;
    if (!a){
        document.getElementById("output").innerHTML = '<br/><b><font color="red">No Number Entered!</font></b><br/>' + exist;
    } else {
        var i = 1;
        for (i = 1 ; i < 11 ; i++) {
            var c = parseFloat(a) * parseInt(i);
            result += a + " x " + i + " = " + c + '</br>';
        }
        document.getElementById("output").innerHTML = '<br/><b>Multiplication Table of ' + a +' is:</b><br/><b>' + result + '</b>' + exist;
        document.getElementById("num1").value = '';
    }
    
}
function divide() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var exist = document.getElementById("output").innerHTML;
	if (!num1 && !num2){
		document.getElementById("output").innerHTML = '<br/><b><br/><font color="red">No Values Entered</font></b>' + exist;
	} else if (num2 == 0) {
		document.getElementById("output").innerHTML = '<br/><br/><b><font color="red">Cannot divide a number by 0</font></b>' + exist;
	} else if (num1 == 0) {
        document.getElementById("output").innerHTML = '<br/><br/><b>' + num1 + ' / ' + num2 + ' gives:<br/>Quotient: 0'  + '<br/>Remainder: 0 </b>' + exist;
        document.getElementById("num1").value = '';
		document.getElementById("num2").value = '';
    }else if (!num1 || !num2) {
		document.getElementById("output").innerHTML = '<br/><br/><b><font color="red">You need to enter values in both the fields</font></b>' + exist;
		document.getElementById("num1").value = '';
		document.getElementById("num2").value = '';
	} else {
		var quotient = num1 / num2;
		var remainder = num1 % num2;
		document.getElementById("output").innerHTML = '<br/><br/><b>' + num1 + ' / ' + num2 + ' gives:<br/>Quotient: ' + quotient + '<br/>Remainder: ' + remainder + '</b>' + exist;
		document.getElementById("num1").value = '';
		document.getElementById("num2").value = '';
	}
} function subtract() {
    var exist = document.getElementById('output').innerHTML;
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (!num1 && !num2) {
        document.getElementById("output").innerHTML = "<br><br/><b><font color='red'>Both the fields are entered blank!</font></b>" + exist;
    }else if (!num1 || !num2) {
        document.getElementById("output").innerHTML = "<br><br/><b><font color='red'>You need to fill both of the fields!</font></b>"  + exist;
        document.getElementById("num1").value = '';
        document.getElementById("num2").value = '';
    } else {
        var difference = num1 - num2;
        document.getElementById("output").innerHTML = "<br><br/><b>Difference of " + num1 + " and " + num2 + " is " + difference + '</b>' + exist;
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
    } 
    
}  function calc_rect() {
    var l = parseFloat(document.getElementById("length").value);
    var b = parseFloat(document.getElementById("breadth").value);
    var exist = document.getElementById("output").innerHTML;
    if (!l && !b) {
        document.getElementById("output").innerHTML = "<br><br/><b><font color='red'>Both the fields are entered blank!</font></b>" + exist;
    } else if (!l || !b) {
        document.getElementById("output").innerHTML = "<br><br/><b><font color='red'>You need to fill both of the fields!</font></b>"  + exist;
        document.getElementById("length").value = '';
        document.getElementById("breadth").value = '';
    } else if ((l < b) || (l==b)) {
        document.getElementById("output").innerHTML = "<br/><br/><b><font color='red'>Length is always greater than breadth!<br/>You entered Length " + l + " and breadth " + b+ "</font></b>" + exist;
        document.getElementById("length").value = '';
        document.getElementById("breadth").value = '';
    } else {
        var diagnol = Math.sqrt((l*l) + (b*b));
        document.getElementById("output").innerHTML = "<br/><br/><b>For rectangle of length " + l + " and breadth " + b + "<br/>Area: " + l*b + " square units<br/>Perimeter: " + 4*(l+b) + " units<br/>Length of a diagnol: " + diagnol +" units</b>" + exist;
        document.getElementById("length").value = '';
        document.getElementById("breadth").value = '';
    }
}
function calc_sq() {
    var side = parseFloat(document.getElementById("side").value);
    var exist = document.getElementById("output").innerHTML;
    if (!side) {
        document.getElementById("output").innerHTML = '<br/><b><br/><font color="red">No Values Entered</font></b>' + exist;
    } else {
        var sq_perm = 4*side;
        var sq_area = side*side;
        var diagnol = Math.sqrt((side*side)+(side*side));
        document.getElementById("output").innerHTML = "<b><br/><br/>For a square of side " + side + " units:<br/>Perimeter is: " + sq_perm + " units<br/>Area is: " + sq_area + " square units<br/>Length of a diagnol is: " + diagnol + " units</b>" + exist;
        document.getElementById("side").value = "";
    }
}
function calc_cir() {
    var dividepi = document.getElementById("defpii").checked;
    var normalpii = document.getElementById("secpii").checked;
    var exist = document.getElementById("output").innerHTML;
    var r = parseFloat(document.getElementById("radius").value);
    var diam = 2*r;
    if (!r) {
        document.getElementById("output").innerHTML = '<br/><b><br/><font color="red">Value of radius not entered!</font></b>' + exist;
        document.getElementById("defpii").checked = false;
        document.getElementById("secpii").checked = false;
    } else if (dividepi == true){
        var twentyarea = (22*r*r)/7;
        var twentycircum = (2*22*r)/7;
        document.getElementById("output").innerHTML = "<br/><br/><b>When Radius of circle is " + r + " units and the value of pii is 22/7:<br/>Diameter: " + diam + " units<br/>Area of the circle: " + twentyarea + " sq. units<br/>Circumference of the circle is: " + twentycircum + " units</b>" + exist;  
        document.getElementById("radius").value = '';
        document.getElementById("defpii").checked = false;
    } else if (normalpii == true){
        var twentyarea = (3.14*r*r);
        var twentycircum = (3.14*2*r);
        document.getElementById("output").innerHTML = "<br/><br/><b>When Radius of circle is " + r + " units and the value of pii is 22/7:<br/>Diameter: " + diam + " units<br/>Area of the circle: " + twentyarea + " sq. units<br/>Circumference of the circle is: " + twentycircum + " units</b>" + exist;  
        document.getElementById("radius").value = '';
        document.getElementById("secpii").checked = false;
    } else {
        document.getElementById("output").innerHTML = '<br/><b><br/><font color="red">Value of pii not choosen!</font></b>' + exist;
        document.getElementById("radius").value = '';
    }
}   