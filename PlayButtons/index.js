// Menu
// Переменные
let menu = document.getElementById('menu');
let start = document.getElementById('start-btn');
let exit = document.getElementById('exit-btn');
let btnSlTwo = document.getElementById('btn2-game');
let header = document.getElementById('header');
let body = document.getElementById('body');
let menuImg = document.getElementById('menu-img');

// Код для начала игры
let st = () => {
    menu.classList.remove('hide');
    menu.classList.add('block');
    
};

start.addEventListener('click', st);
// Код для выхода из игры
function ex() {
    menu.classList.add('hide');
    menu.classList.remove('block');
};
exit.addEventListener('click', ex);

// Вторая игра
let divEnd = document.getElementById('end-div');
let trueBtn = document.getElementById('true-btn');
let footerGame2 = document.getElementById('footer-game-2');
let menuBtnGame2 = document.getElementById('menu-btn-game2');
let endBtn = document.getElementById('end-btn');
let EndBtnsTwo = document.getElementById('btns');
let secondbtns = document.getElementById('end-btns-second');
let selectorBtn = document.querySelectorAll('#btns button');
let menuDivEnd = document.getElementById('pod-end-div');
let menuBtnEnd = document.getElementById('menu-btn-end');
let backEnd = document.getElementById('back-end');
let puskEnd = document.getElementById('pusk-end');
let scoreBtns = document.getElementById('score-btns');
let time = document.getElementById('time');
let resultGameTwo = document.getElementById('rez-score');
let main = document.getElementById('main');
let numScore = 0;
let n = 60;

function btns() {
    header.classList.add('delete-menu');
    divEnd.classList.remove('end-div');
    body.classList.remove('body');
    divEnd.classList.add('end-div-style');
    body.classList.add('body-theme-two');
    EndBtnsTwo.classList.add('buttons');   
}

btnSlTwo.addEventListener('click', btns);

// Для мобильных устройств
const heightScreen = window.screen.height;
const widthScreen = window.screen.width;
if (heightScreen > widthScreen) {
    document.body.remove();

    function rotateScreen() {
    let fragment = new DocumentFragment();
    let general = document.createElement('body');
    general.style.backgroundImage = 'url(mobile.jpg)';
    general.style.backgroundSize = 'cover';
    general.style.backgroundPosition = 'fixed';
    general.style.backgroundRepeat = 'no-repeat';
    fragment.append(general);
    return fragment
    }
    document.head.after(rotateScreen())
}
// Для работы кнопок и записи счета, отсчет времени
function playosu() {
let select;
let selectorTwo;
function frag() {
    let fragment = new DocumentFragment()
    let h2 = document.createElement('h2')
    h2.id = 'h-second'
    fragment.append(h2)
    return fragment
    }

    main.prepend(frag())

let hSecondEnd = document.getElementById('h-second')
// Начало
    setTimeout(() => {
        menuBtnEnd.classList.add('end-div');
        endBtn.classList.add('end-div');
        hSecondEnd.textContent = 'Приготовьтесь';
    }, 100)
    setTimeout(() => {

        hSecondEnd.textContent = '3';
    }, 1000);
    setTimeout(() => {
        hSecondEnd.textContent = '2';
    }, 2000);
    setTimeout(() => {
        hSecondEnd.textContent = '1';
    }, 3000);
    setTimeout(() => {
        hSecondEnd.textContent = 'Пошло, поехало';
    }, 4000);
    setTimeout(() => {
        hSecondEnd.remove()
        backEnd.style.display = 'block';
    }, 4100)

    setTimeout(() => {
     let name = setInterval(() => {
        if (backEnd.classList == 'class-name') {
            if (n != 0) {
                n -= 1
            }}
            if (backEnd.style.display == 'none') {
                clearInterval(name);
                backEnd.classList.remove('class-name');
                }
            time.textContent = n
            if (time.textContent == 0) {
                divEnd.classList.remove('end-div-style');
                divEnd.classList.add('end-div');
                footerGame2.style.display = 'block';
                clearInterval(name);
            }
         }, 1000)
    }, 4000)

    const randomNum = (max, min) => 
    Math.floor(Math.random() * (max - min) + min);
    let i = randomNum(0, selectorBtn.length);
    let playBtn = selectorBtn[i];
    select = i
    selectorTwo = playBtn

        setTimeout(() => {
        playBtn.style.visibility = null;
        hSecondEnd.textContent = '';
    }, 4200);

//Работа кнопок
    function playGo() {
        if (backEnd.classList == 'class-name') {
        let selector;
    const randomNum = (max, min) => 
    Math.floor(Math.random() * (max - min) + min);
    let i = randomNum(0, selectorBtn.length);
    let playBtn =  selectorBtn[i];
    selector = i;
    if (selector == select) {
        playBtn.style.visibility = null;
    }
    else {
        playBtn.style.visibility = null;
        selectorTwo.style.visibility = 'hidden';
        select = i
        selectorTwo = playBtn 
    }}
  }
  for (let GoGo of selectorBtn) {
    GoGo.addEventListener('click', playGo);
    GoGo.addEventListener('click', score);
    if (footerGame2.style.display == 'block'){
        GoGo.removeEventListener('click', playGo)
    }  
}
};

endBtn.addEventListener("click", playosu);

// Функция записи счета

let score = () => {
    if (backEnd.classList == 'class-name') {
    numScore += 1
    scoreBtns.textContent = numScore
    resultGameTwo.textContent = numScore
}}

// Функции меню
function backEndFunc() {
    menuBtnEnd.classList.remove('end-div');
    puskEnd.style.display = 'block';
    backEnd.style.display = 'none';
}

function pusk() {
    backEnd.classList.remove('class-name');
    menuBtnEnd.classList.add('end-div');
    puskEnd.style.display = 'none';
    backEnd.style.display = 'block'; 
    backEnd.classList.add('class-name')
    let name = setInterval(() => {
        if (backEnd.style.display == 'none') {
            clearInterval(name);
            backEnd.classList.remove('class-name');
            }

        if (backEnd.classList == 'class-name') {
            if (n != 0) {
                n -= 1
            }
        }
        time.textContent = n
        if (time.textContent == 0) {
            divEnd.classList.remove('end-div-style');
            divEnd.classList.add('end-div');
            footerGame2.style.display = 'block';
            clearInterval(name);
        }
    }, 1000)
    }

function back2() {
    header.classList.remove('delete-menu');
    footerGame2.classList.add('footer-dop2');
    body.classList.remove('body-theme-one');
    body.classList.add('body');
    selectorBtn.forEach(el => el.style.visibility = 'hidden')
    endBtn.classList.remove('end-div');
    puskEnd.style.display = 'none';
}

menuBtnEnd.addEventListener('click', back2);

// Конец игры
function endGameTwo() {
    menuBtnGame2.onclick = ''
    menuBtnGame2.onclick = window.location.reload()
}
