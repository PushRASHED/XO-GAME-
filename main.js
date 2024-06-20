let title = document.querySelector('.title')
let turn = 'X';
let squares =[];

function winner(){
for(let i = 1; i<10;i++){
  squares[i]= document.getElementById('item' + i).innerHTML;

}
// vertical Prospect
 if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){

}

else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != ''){

}

else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != ''){

}

// horziantial Prospect
else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){

}

else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[8] != ''){

}

else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[9] != ''){

}

// cross Prospect
else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[7] != ''){

}

else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[9] != ''){

}












}



 
function game(id){
let element = document.getElementById(id)
if(turn === 'X' && element.innerHTML == ''){
    element.innerHTML = 'X'
    turn = 'O'
    title.innerHTML = 'O'
}
else if(turn === 'O' && element.innerHTML == ""){

    element.innerHTML = 'O'
    turn = 'X'
    title.innerHTML = 'X'

}

winner();
}