console.log('You are at '+window.location);

let color_body = prompt("Какой будет фон у страницы?");
document.getElementById('body').style.backgroundColor = color_body;
let color_text = prompt ("Какой будет цвет текста на странице?");
document.getElementByClassName('page').style.backroundColor= color_text;
let man = prompt("Какой человек вас вдохновляет?");
document.getElementsByClassName('name');
let addr_pic = prompt('Введите адрес картинки', 'img/1.jpg');
let y = document.querySelector('.imageBlock');
y.innerHTML = '<img src = "' + addr_pic + '">';
let shortBio = document.querySelector('.shortBio');
shortBio.innerHTML = prompt('Введите текст страницы');
shortBio.className += ' animated';