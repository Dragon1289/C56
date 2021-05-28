function spanelem() {
    window.alert("This is a Span element.");
}

function divelem() {
    window.alert("This is a Div element.");
    document.getElementById("audio").play();
}

function stop() {
    document.getElementById("audio").pause();
}
function add(){
  var result=Number(document.getElementById("firstno").value)+Number(document.getElementById("secondno").value);
window.alert(result);
}
function sub(){
var result2=Number(document.getElementById("firstno").value)-Number(document.getElementById("secondno").value);
window.alert(result2);
}
function multi(){
    var result3=Number(document.getElementById("firstno").value)*Number(document.getElementById("secondno").value);
window.alert(result3);
}
function divi(){
    var result4=Number(document.getElementById("firstno").value)/Number(document.getElementById("secondno").value);
window.alert(result4);
}
