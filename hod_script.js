var myText = 'HOD: Hero Of The Day!';
var myArray = myText.split("");
var loopTimer;
function frameLooper() {
    if(myArray.length > 0){
        document.getElementById("type_text").innerHTML += myArray.shift();
    } else {
        clearTimeout(loopTimer);
        return false;
    }
    loopTimer = setTimeout('frameLooper()', 100);
}
frameLooper();