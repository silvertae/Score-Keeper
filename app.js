// 중복되는 코드를 줄이기 위해 입력받는 데이터를 객체로 만들어줌
const p1 = {
	score: 0,
	button: document.querySelector('#p1Btn'),
	display: document.querySelector('#p1Display'),
};
const p2 = {
	score: 0,
	button: document.querySelector('#p2Btn'),
	display: document.querySelector('#p2Display'),
};
// const p1Btn = document.querySelector('#p1Btn');
// const p2Btn = document.querySelector('#p2Btn');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
const imgs = document.querySelectorAll('img');
// let p1Score = 0;
// let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

// 점수 업데이트를 함수로 정리
function updateScores(player, opponent) {
	if (!isGameOver) {
		player.score++;
		if (player.score === winningScore) {
			isGameOver = true;
			player.display.classList.add('has-text-success');
			opponent.display.classList.add('has-text-danger');
			player.button.disabled = true;
			opponent.button.disabled = true;
			startConfetti();
			// 4초만 내리고 멈추게 설정
			setTimeout(stopConfetti, 4000);
			for (let img of imgs) {
				img.classList.toggle('hidden');
			}
		}
		player.display.textContent = player.score;
	}
}

p1.button.addEventListener('click', () => {
	updateScores(p1, p2);
});

p2.button.addEventListener('click', () => {
	updateScores(p2, p1);
});

// 주의) 화살표 함수 사용시 this.value는 undefined 나옴
winningScoreSelect.addEventListener('change', function () {
	winningScore = parseInt(this.value);
	reset();
});

resetBtn.addEventListener('click', reset);

// 길어진 코드는 재사용을 위해 함수로 빼주기
function reset() {
	// 반복문으로 중복 줄이기
	isGameOver = false;
	for (let p of [p1, p2]) {
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove('has-text-success', 'has-text-danger');
		p.button.disabled = false;
		stopConfetti();
	}
	for (let img of imgs) {
		img.classList.toggle('hidden');
	}
	// p1.score = 0;
	// p2.score = 0;
	// p1.display.textContent = 0;
	// p2.display.textContent = 0;
	// p1.display.classList.remove('has-text-success', 'has-text-danger');
	// p2.display.classList.remove('has-text-success', 'has-text-danger');
	// p1.button.disabled = false;
	// p2.button.disabled = false;
}
