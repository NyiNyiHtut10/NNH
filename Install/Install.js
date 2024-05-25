var modal = document.getElementById('id01');
let installBox = document.querySelector('.installBox');
let stick = document.querySelector('.stick');
let installBtn = document.getElementById('install');
let installTxt = document.querySelector('.install');
let cancelTxt = document.querySelector('.cancel');
let p = document.createElement('p');
let cancelBtn = document.getElementById('refuse');

let deny = document.createElement('button');
deny.classList.add('deny');
deny.innerHTML = 'Cancel';
installBox.appendChild(deny);
let denyBtn = document.querySelector('.deny');



window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function installArea() {

    p.classList.add('request');
    p.innerHTML = 'Do you want to install this app?';

    installBox.appendChild(p);
    denyBtn.classList.add('hidden');


}
installArea();
installBtn.addEventListener('click', function () {
    document.getElementById('id01').style.opacity = 1;

    let line = document.createElement('span');
    let inform = document.createElement('span');
    let increase = document.createElement('span');

    line.classList.add('line');
    line.innerHTML = '';
    installBox.appendChild(line);

    increase.classList.add('increase');
    increase.innerHTML = '';
    line.appendChild(increase);


    inform.classList.add('inform');
    inform.innerHTML = 'Installing';
    installBox.appendChild(inform);


    stick.classList.add('hidden');
    p.classList.add('hidden');
    installTxt.classList.add('hidden');
    cancelTxt.classList.add('hidden');
    denyBtn.classList.remove('hidden');





})

function refuse() {
    document.getElementById('id01').style.opacity = 0;

}
denyBtn.addEventListener('click', function () {
    document.getElementById('id01').style.opacity = 0;


})
