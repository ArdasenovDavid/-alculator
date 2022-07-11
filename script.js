const numbers = document.querySelector('.numbers');
let windo = document.querySelector('.window')
let arrow = document.querySelector('.arrow')
let equal = document.querySelector('.equal')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let umnoj = document.querySelector('.umnoj')
let delit = document.querySelector('.delit')

// Это готовый продукт!

let value;
let value2;
let equa;
numbers.addEventListener('click', function some(event){
	let cifra1 = event.target.closest('.number')
	value = +cifra1.textContent
	console.log(value)
	numbers.removeEventListener('click', some)
	windo.innerHTML = value;
})



plus.addEventListener("click", pluser);

function pluser() {
	numbers.addEventListener('click', function come(event){
	let cifra = event.target.closest('.number');
	value2 = +cifra.textContent
	console.log(value2)
	windo.innerHTML = value2;
	equa = value + value2
	numbers.removeEventListener('click', come)
	});
}

minus.addEventListener("click", minuser);

function minuser() {
	numbers.addEventListener('click', function xome(event){
	let cifral = event.target.closest('.number');
	value3 = +cifral.textContent
	console.log(value3)
	windo.innerHTML = value3;
	equa = value - value3
	numbers.removeEventListener('click', xome)
	});
}

umnoj.addEventListener("click", umno);

function umno() {
	numbers.addEventListener('click', function dome(event){
	let cifra = event.target.closest('.number');
	value2 = +cifra.textContent
	console.log(value2)
	windo.innerHTML = value2;
	equa = value * value2
	numbers.removeEventListener('click', dome)
	});
}

delit.addEventListener("click", deli);

function deli() {
	numbers.addEventListener('click', function fome(event){
	let cifra = event.target.closest('.number');
	value2 = +cifra.textContent
	console.log(value2)
	windo.innerHTML = value2;
	equa = value / value2
	numbers.removeEventListener('click', fome)
	});
}

arrow.addEventListener('click', function (){
	 window.location.reload();
})

equal.addEventListener("click", equ);
function equ() {
		console.log(equa)
		windo.innerHTML = equa;
}

