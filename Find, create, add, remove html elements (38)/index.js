// craeating html element

var heading3 = document.createElement("h1");
var text = document.createTextNode("This is Heading : 3");
heading3.appendChild(text);

var mydiv = document.getElementById("my-div");
mydiv.appendChild(heading3);

// remove element

var heading2 = document.getElementsByTagName("h1")[1];
mydiv.removeChild(heading2)


var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is Heading : 0");
heading0.appendChild(text0);
var heading1 = document.getElementsByTagName("h1")[0];
mydiv.insertBefore(heading0, heading1);