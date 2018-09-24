let o=+prompt('Сколько у вас с собой есть денег?')
let y=+prompt('Сколько вы купили яблок?')
let m=+prompt ('Сколько вы купили батонов хлеба?')
let d=+prompt('Сколько стоит одно яблоко?')
let g=y*d
let h=+prompt('Сколько стоит один батон хлеба?')
let k=m*h
let l=o >=(h+k)
document.body.innerHTML=l