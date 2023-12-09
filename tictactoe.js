// var a=1;

var winnerDiv = document.getElementById("winner")
var flag = true;
var state = [1, 0, 1, 1, 1, 0, 0, 1, 0]
document.getElementById('board').addEventListener('click', (event) => {
    // console.log(event.target);
    // console.log(event.target.id);

    // if(a%2==0){
    // document.getElementById(event.target.id).innerText = "X";
    // }
    // else{
    // document.getElementById(event.target.id).innerText = "O";
    // }
    // a++;


    // alternate way to bring in alternate way

    var Id = event.target.id

    setValue(Id);

})

function setValue(Id) {
    if (flag) {

        if (state[Id] == 1 || state[Id] == 0) {
            document.getElementById(Id).innerText = "X";
            state[Id] = "X";
            checkWinner(flag)
            flag = !flag;
        }
    }
    else {
        if (state[Id] == 1 || state[Id] == 0) {

            document.getElementById(Id).innerText = "O";
            state[Id] = "O";
            checkWinner(flag)
            flag = !flag;
        }
    }
    //console.log(state);
    
}

function checkWinner() {
    if (state[0] == state[3] && state[0] == state[6]) 
    {
        //alert("winner col-1")
        winnerDiv.innerHTML = flag ? "winner x": "winner o";
        setDisabled();
        setTimeout(resetGame,5000);
    
    }
    else if (state[1] == state[4] && state[1] == state[7]) 
    {
        //alert("winner col-2")
        winnerDiv.innerHTML = flag ? "winner x": "winner o";
        setDisabled();
        setTimeout(resetGame,5000);
    
    }
    else if (state[2] == state[5] && state[2] == state[8]) 
    {
        //alert("winner col-3")
        winnerDiv.innerHTML = flag ? "winner x": "winner o";
        setDisabled();
        setTimeout(resetGame,5000);
    
    }
    else if (state[0] == state[1] && state[0] == state[2]) 
    {
        //alert("winner row-1")
        winnerDiv.innerHTML = flag ? "winner x": "winner o";
        setDisabled();
        setTimeout(resetGame,5000);
    
    }
    else if (state[3] == state[4] && state[3] == state[5]) 
    {
        //alert("winner row-2")
        winnerDiv.innerHTML = flag ? "winner x": "winner o";
        setDisabled();
        setTimeout(resetGame,5000);
    
    }
    else if (state[6] == state[7] && state[6] == state[8]) 
    {
        //alert("winner row-3")
        winnerDiv.innerHTML = flag ? "winner x": "winner o";
        setDisabled();
        setTimeout(resetGame,5000);
    
    }
    else if (state[0] == state[4] && state[0] == state[8]) 
    {
        //alert("winner digonal-1")
        winnerDiv.innerHTML = flag ? "winner x": "winner o";
        setDisabled();
        setTimeout(resetGame,5000);
    
    }
    else if (state[2] == state[4] && state[2] == state[8]) 
    {
        //alert("winner digonal-2")
        winnerDiv.innerHTML = flag ? "winner x": "winner o";
        setDisabled();
        setTimeout(resetGame,5000);
    
    }
    else{
        var i;
        count=0
        for(i=0;i<9;i++)
        {
            if(state[i]==1 || state[1]==0)
            {
                count++;
            }
        }
        if(count==0)
        {
            winnerDiv.innerHTML="DRAW";
        }
    }
}
 function setDisabled()
 {
    var i;
    for(i=0;i<9;i++)
    if(state[i]==1 || state[i]==0)
    {
        state[i]=null;
    }
 }
 function restartGame()
 {
    var choice=confirm("Are u sure u want to restart the game?");
    if(choice)
    {
        location.reload();
    }
 }
function resetGame()
{
    var i;
    flag=true;
    state[1,0,1,1,1,0,0,1,0];
    for(i=0;i<9;i++)
    {
        document.getElementById(i).innerText="";
    }
    winner.innerHTML= "";
}
//setTimeout(resetGame,5000);

