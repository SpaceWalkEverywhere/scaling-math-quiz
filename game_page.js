function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    ans= parseInt(number1)*parseInt(number2)
    qno= "<h4>"+number1+" X "+number2+"</h4>";
    ansbox="<br>Answer:<input type='text'id='checkbox'>";
    checkbutt="<br><br><button class='btn btn-info' onclick='check();'>check</button>";
    row=qno+ansbox+checkbutt;
    document.getElementById("output").innerHTML+=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";    
    document.getElementById("number1").style.display="none";
    document.getElementById("number2").style.display="none";
}
player1sc=0;
player2sc=0;
qturn="player1"
aturn="player2"
function check(){
    gans=document.getElementById("checkbox").value;
    if (gans==ans){
        updplsc=player1sc+1
    }
    else {
        document.getElementById("output").innerHTML="";
    }
}
function loaded(){
    name1=localStorage.getItem("player1");
    name2=localStorage.getItem("player2");
    document.getElementById("player1name").value=name1;
    document.getElementById("player2name").value=name2;
}
