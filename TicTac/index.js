// Menu
// Переменные
let menu = document.getElementById('menu');
let start = document.getElementById('start-btn');
let exit = document.getElementById('exit-btn');
let btnSlOne = document.getElementById('btn1-game');
let btnSlTwo = document.getElementById('btn2-game');
let header = document.getElementById('header');
let body = document.getElementById('body');

// Код для начала игры
let st = () => {
    menu.classList.remove('hide');
    menu.classList.add('block');
};

start.addEventListener('click', st);
// Код для выхода из игры
function ex() {
    if (menu.classList.contains('hide') == false) 
    { menu.classList.add('hide');
    menu.classList.remove('block');
}};
exit.addEventListener('click', ex);

// Первая игра
let ticTac = document.getElementById('tic-tac');
let cells = document.querySelectorAll('#table td');
let endTicTac = document.getElementById('end-tic-tac');
let divTickTack = document.getElementById('div-tic-tac');
let resetTicTacPer = document.getElementById('reset-tic-tac');


if (localStorage.i == 'True') {
    header.classList.add('delete-menu');
    body.classList.remove('body');
    body.classList.add('body-theme-one');
    ticTac.style.display = 'block';
    divTickTack.style.display = 'block';
}

function oneGame() {
    header.classList.add('delete-menu');
    body.classList.remove('body');
    body.classList.add('body-theme-one');
    ticTac.style.display = 'block';
    divTickTack.style.display = 'block';
}
btnSlOne.addEventListener('click', oneGame)
// Работа крестиков ноликов
let isVictory = (argCells) => {
    let arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let comb of arr) {
        if (argCells[comb[0]].textContent === argCells[comb[1]].textContent &&
            argCells[comb[1]].textContent === argCells[comb[2]].textContent &&
            argCells[comb[0]].textContent != ''
            ) { 
                return true
        }
    }
    return false
};



let playTickTacks = (argCells) => {
    let i = 0;
    for (let cell of argCells) {
        cell.addEventListener('click', function podStart() {
            console.log(i)
            if (endTicTac.textContent === 'Победил X' || endTicTac.textContent === 'Победил O') {
                cells.removeEventListener('click', podStart);
             }
            if (i % 2 === 0) {
            cell.textContent = 'X';
            cell.removeEventListener('click', podStart);
            if (isVictory(argCells)) {
                setTimeout(() => {
                    endTicTac.textContent = 'Победил X'
                    
                });
          }
          else if (i === 8) { 
            endTicTac.textContent = 'Ничья'
            
        }}
          else if (i % 2 === 1) {
            cell.textContent = 'O';
            cell.removeEventListener('click', podStart);
            if (isVictory(argCells)) {
                setTimeout(() => {
                    endTicTac.textContent = 'Победил O'
                
                });
            }
            else if (i === 8) {
                endTicTac.textContent = 'Ничья'
            };
        } 
            i++
        });
    };
};

btnSlOne.addEventListener('click', playTickTacks(cells))

// Функции меню
function resetTicTac() {
    localStorage.setItem('i', 'True')
    resetTicTacPer.onclick = window.location.reload();
}

function backMenu() {
   localStorage.removeItem('i', 'True')
   window.location.reload();
}