
// Developed by Ahmed Raza

const questions = [{
	'que' : 'Which of the following is a markup language ?',
	'a' : 'HTML',
	'b' : 'CSS',
	'c' : 'JavaScript',
	'd' : 'PHP',
	'correct' : 'a'
},
{
	'que' : 'What was the JavaScript launched ?',
	'a' : '1996',
	'b' : '1995',
	'c' : '1994',
	'd' : 'None of the above',
	'correct' : 'b'
},
{
	'que' : 'What dose css stands for ?',
	'a' : 'Hyper text markup language',
	'b' : 'Cascading style sheet',
	'c' : 'Json object nation',
	'd' : 'Halicopters Terminal Motor boats Lamboghinis',
	'correct' : 'b'
}
];
// console.log('Developed by AhmedRaza');

let index = 0;
let total = questions.length;
let right = 0,
	wrong = 0;
const quesBox = document.getElementById('quesBox');
const optionInput = document.querySelectorAll('.options');
	// console.log(optionInput);
const loadQuestion = () => {
	if (index === total) {
		return endQuiz()
	}
	reset();
	const data = questions[index];
	quesBox.innerText = `${index+1}) ${data.que}`;
	optionInput[0].nextElementSibling.innerText = data.a;
	optionInput[1].nextElementSibling.innerText = data.b;
	optionInput[2].nextElementSibling.innerText = data.c;
	optionInput[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () => {
	const data = questions[index];
	const ans = getAnswer()
	if (ans === data.correct) {
		right++;
	}else{
		wrong++;
	}
	index++;
	loadQuestion();
	return;

}
// console.log('Developed by Ahmedraza');


const getAnswer = () => {
	let answer;
	optionInput.forEach( 
		(input) =>{
			if (input.checked) {
				answer = input.value;

			}

		}
	)
	return answer;

}

const reset = ()=>{
	optionInput.forEach( 
		(input) =>{
			input.checked = false;
		}
	)

}
// Ahmed Raza

const endQuiz = () => {
	document.getElementById("box").innerHTML = `
	<h3>Thank you for playing the Quiz.</h3>
	<h2>${right} / ${total} are correct</h2
	`
}


loadQuestion();