let player = "x";
let dash = document.querySelector(".dash");
let squares = [];

function end (num1, num2, num3){
    if(num1 == num2 && num2 == num3 && num1 && num1 != ""){
        dash.innerHTML = `${num1} is the winner`;
        setTimeout(function(){
            location.reload();
        }, 1000);

        setInterval(function(){
            dash.innerHTML += `.`;
        }, 300);
        return true;
    }
}




function winner(){
    for(let i = 1; i < 10; i++){
        squares[i] = document.getElementById("item" + i)
    }
    if(end(squares[1].innerHTML, squares[2].innerHTML, squares[3].innerHTML)&& squares[1].innerHTML != ""){
        squares[1].style.backgroundColor = "#131313";
        squares[2].style.backgroundColor = "#131313";
        squares[3].style.backgroundColor = "#131313";
    }
    else if(end(squares[4].innerHTML, squares[5].innerHTML, squares[6].innerHTML)&& squares[4].innerHTML != ""){
        squares[4].style.backgroundColor = "#131313";
        squares[5].style.backgroundColor = "#131313";
        squares[6].style.backgroundColor = "#131313";
    }
    else if(end(squares[7].innerHTML, squares[8].innerHTML, squares[9].innerHTML)&& squares[7].innerHTML != ""){
        squares[7].style.backgroundColor = "#131313";
        squares[8].style.backgroundColor = "#131313";
        squares[9].style.backgroundColor = "#131313";
    }
    else if(end(squares[1].innerHTML, squares[4].innerHTML, squares[7].innerHTML)&& squares[1].innerHTML != ""){
        squares[1].style.backgroundColor = "#131313";
        squares[4].style.backgroundColor = "#131313";
        squares[7].style.backgroundColor = "#131313";
    }
    else if(end(squares[2].innerHTML, squares[5].innerHTML, squares[8].innerHTML)&& squares[2].innerHTML != ""){
        squares[2].style.backgroundColor = "#131313";
        squares[5].style.backgroundColor = "#131313";
        squares[8].style.backgroundColor = "#131313";
    }
    else if(end(squares[3].innerHTML, squares[6].innerHTML, squares[9].innerHTML)&& squares[3].innerHTML != ""){
        squares[3].style.backgroundColor = "#131313";
        squares[6].style.backgroundColor = "#131313";
        squares[9].style.backgroundColor = "#131313";
    }
    else if(end(squares[1].innerHTML, squares[5].innerHTML, squares[9].innerHTML)&& squares[1].innerHTML != ""){
        squares[1].style.backgroundColor = "#131313";
        squares[5].style.backgroundColor = "#131313";
        squares[9].style.backgroundColor = "#131313";
    }
    else if(end(squares[3].innerHTML, squares[5].innerHTML, squares[7].innerHTML)&& squares[3].innerHTML != ""){
        squares[3].style.backgroundColor = "#131313";
        squares[5].style.backgroundColor = "#131313";
        squares[7].style.backgroundColor = "#131313";
    }
    else if( squares[1].innerHTML != "" && squares[2].innerHTML != "" && squares[3].innerHTML != "" && squares[4].innerHTML != "" && squares[5].innerHTML != "" && squares[6].innerHTML != "" && squares[7].innerHTML != "" && squares[8].innerHTML != "" && squares[9].innerHTML != ""){
        dash.innerHTML = `It's a tie`;
        setTimeout(function(){
            location.reload();
        },1000);
    }
}

function game(id){
    let cell = document.getElementById(id);
    if(cell.innerHTML == ""){
        cell.innerHTML = player;
        
        if(player === "x"){
            player = "o";
            dash.innerHTML = `Next Player ${player}`;
        }else{
            player = "x";
            dash.innerHTML = `Next Player ${player}`;
        }
    }    
        winner();
    }



