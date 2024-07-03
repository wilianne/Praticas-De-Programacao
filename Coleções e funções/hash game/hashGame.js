let board;
let table;
let warning;
let player;
let line;
let column;


function start(){
    board = [];
    table = document.getElementById("table");
    warning = document.getElementById("alert");
    player = 1;


    for(let i = 0; i < 3; i++){
        board[i] = [];
        for(let j = 0;j < 3; j++){
            board[i][j] = 0;
        }
    }
    console.table(board);
    display();
}

function display(){
    let chart ='<table cellpadding="10" border="1">'
    for(i = 0; i< 3; i++){
        chart += '<tr>'

        for(j = 0; j< 3;j++){
            
            switch(board[i][j]){
                case -1: marck = 'X';break;
                case 1: marck = 'O';break;
                default: marck = '_'

            }
            chart += '<td>'+ marck +'</td>'
        }
        chart += '</tr>'
    }
    
    chart += '</table>'

    table.innerHTML = chart
} 

function play(){
    warning.innerHTML = "Player "+numberPlayer()+"’s turn";
    line = document.getElementById('line').value - 1;
    column = document.getElementById('column').value - 1;

    if(board[line][column] == 0){
        board[line][column] =  numberPlayer() == 1? 1: -1;
    }else{
        warning.innerHTML = "This field has already been marked";
    }
    

    console.table(board);
    player++;

    display();
    check();
}

function check(){
    //lines
    for(let i =0;i < 3;i++){
        let soma = 0
        soma = board[i][0] + board[i][1] + board[i][2]

        if(soma == 3 || soma == -3){
            warning.innerHTML = "The Player "+ numberPlayer() + " Winner!!";
        }
    }
    //columns
    for(let i =0;i < 3;i++){
        let soma = 0
        soma = board[0][i] + board[1][i] + board[2][i]

        if(soma == 3 || soma == -3){
            warning.innerHTML = "The Player "+ numberPlayer() + " Winner!!";
        }
    }
    //diagonal
    soma = board[0][0] + board[1][1] + board[2][2]
    if(soma == 3 || soma == -3){
        warning.innerHTML = "The Player "+ numberPlayer() + " Winner!!";
    }
}
function numberPlayer(){
    return player%2 +1;
}