let title = document.querySelector('.title')
let turn = 'X';
let squares =[];

function winner(){
for(let i = 1; i<10;i++){
  squares[i]= document.getElementById('item' + i).innerHTML;

}
if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
    console.log('winner')
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