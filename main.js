var colorName=document.getElementById("inupt-colorchange");
console.log(colorName);
function colorChange() {
    var color=colorName.value;
    console.log(color);
    colorName.style.backgroundColor=color;
}

var colName=document.getElementById("inupt-textcolorchange");
console.log(colName);
function textcolorChange() {
    var colo=colName.value;
    console.log(colo);
    colName.style.color=colo;
}




var para=document.getElementsByClassName("para");
console.log("para");

var a=["red","yellow","orange","blue","green"]

var number=(Math.floor(Math.random()*a.length));
console.log(number);
document.body.style.backgroundColor=a[number];