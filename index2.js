function display(num){

    document.getElementById('textarea').value+=num;
}
function calculate(){
    var screentext=document.getElementById('textarea').value; // 3+5-6
    var answer=eval(screentext);
    document.getElementById('textarea').value=answer
}
function clr(){
    document.getElementById('textarea').value='';
}