
function cal(num){
    var a=document.getElementById("scr");
    a.value +=num;
}
function result(){
    var input = document.getElementById("scr");
    scr.value = eval(scr.value);
}
function clearValue(){
    var a = document.getElementById("scr");
    scr.value = "";
}


