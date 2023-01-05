const btn1 = document.querySelector('#btn1');
const h1 = document.querySelector('h1');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
let endScore = document.querySelector('#endScore');

btn1.addEventListener('click', () => {
	if (p1.innerText >= endScore.value - 1) {
		btn1.setAttribute('disabled', 'true');
		btn2.setAttribute('disabled', 'true');
		p1.classList.add('winner');
		p2.classList.add('loser');
	}
	p1.innerText = parseInt(p1.innerText) + 1;
});

btn2.addEventListener('click', () => {
	if (p2.innerText >= endScore.value - 1) {
		btn1.setAttribute('disabled', 'true');
		btn2.setAttribute('disabled', 'true');
		p1.classList.add('loser');
		p2.classList.add('winner');
	}
	p2.innerText = parseInt(p2.innerText) + 1;
});
// classList는 한번에 여러개 추가,제거 가능!
btn3.addEventListener('click', () => {
	p1.innerText = 0;
	p2.innerText = 0;
	p1.classList.remove('winner', 'loser');
	p2.classList.remove('winner', 'loser');
	btn1.removeAttribute('disabled');
	btn2.removeAttribute('disabled');
});
