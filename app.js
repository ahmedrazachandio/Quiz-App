
// Developed by Ahmed Raza

const questions = [{
	'que' : "What is the total area of Punjab Province?",
	'a' : "74,521 Km",
	'b' : "347,190 Sq Km",
	'c' : "205,344 Sq Km",
	'd' : "208,354 Sq Km",
	'correct' : 'c'
},
{
	'que' : 'Defence day is observed on ___________ ?',
	'a' : '14 Feb',
	'b' : '14 August',
	'c' : '6 September',
	'd' : 'None of the above',
	'correct' : 'c'
},
{
	'que' : "Who is the current Test Captain of Pakistani Team",
	'a' : "Asif Ali",
	'b' : 'M. Rizwan',
	'c' : 'Baber Azam',
	'd' : 'Hassan Ali',
	'correct' : 'c'
},
{
'que' : "The third largest city of Pakistan is",
'a' : "Karachi",
'b' : 'Lahore',
'c' : 'Faisalabad',
'd' : 'Sukkur',
'correct' : 'c'
},
{
	'que' : "National code of Pakistan is ?",
	'a' : "Pak",
	'b' : 'PK',
	'c' : 'Pti',
	'd' : 'None of Them',
	'correct' : 'b'
},
{
	'que' : 'Who is the current Prime Minister of Pakistan? ',
	'a' : 'Imran Khan',
	'b' : 'Shahbaz Shareef',
	'c' : 'Altaf Hussain',
	'd' : 'Asif ALi Zardari',
	'correct' : 'b'
},
{
	'que' : 'How many provinces Pakistan have ?',
	'a' : '6',
	'b' : '5',
	'c' : '4',
	'd' : 'None of the above',
	'correct' : 'b'
},
{
	'que' : 'Who was the founder of Daily English Newspaper Dawn ?',
	'a' : 'Liaquat Ali Khan',
	'b' : 'Quid-e-Azam',
	'c' : 'Dr. Allama Iqbal',
	'd' : 'None of them',
	'correct' : 'a'
},
{
	'que' : 'The 1962 Constitution of Pakistan was passed during the regime of?"',
	'a' : 'Ayoub Khan',
	'b' : 'Sikandar Mirza',
	'c' : 'Ahmed Raza',
	'd' : 'None of the above',
	'correct' : 'a'
},
{
	'que' : 'Who was the hero of Pak India 1965 war ?',
	'a' : 'Waqa Zaka',
	'b' : 'Tahira Bhatti',
	'c' : 'Major Raja Aziz Bhatti',
	'd' : 'Raja Muham Serwar',
	'correct' : 'c'
}
];
// console.log('Developed by AhmedRaza');

//time function
(() => {
	const dateTimeDiv = document.querySelector('#dateDiv');
	const dateDiv = document.createElement('div')
	const time = document.createElement('div')
	let tim = moment().format("h:mm a");
	setInterval(() => {
	        tim = moment().format("h:mm:ss a");
	}, 1000);
	// console.log(tim)
	dateDiv.appendChild(document.createTextNode(`${moment().format("D MMM YYYY")}`))
	time.appendChild(document.createTextNode(`${tim}`))
	dateTimeDiv.appendChild(dateDiv)
	dateTimeDiv.appendChild(time)
	// console.log(TODAY)
})();






let index = 0;
let total = questions.length;
let right = 0,
	wrong = 0;
const quesBox = document.getElementById('quesBox');
const optionInput = document.querySelectorAll('.options');
const themeSelector = document.querySelector('.theme_mode')

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
	document.getElementById("box").innerHTML = `<h2>Result .</h2>`
	document.getElementById("box").innerHTML = `
	<h3>Thank you for playing the Quiz.</h3>
	<h2>${right} / ${total} are correct</h2
	`
}

// on load 


(function () {
    localStorage.setItem('ispwainstalled',false)
    const value = localStorage.getItem('theme')
    if (value === 'Dark Mode') {
        darkMode()
    }
    else if (value === 'Light Mode') {
        return null
    }
    else {
        localStorage.setItem('theme', 'Light Mode')
    }
})()


// on load end 






// dark mode start

function darkMode() {
    document.body.classList.toggle("dark");
    document.querySelector('.right_btn')
    document.querySelector('.left_btn')
    document.querySelector('.container')

    localStorage.setItem('theme', themeSelector.textContent)
    const value = localStorage.getItem('theme')


    value === 'Dark Mode' ? themeSelector.textContent = "Light Mode" : themeSelector.textContent = "Dark Mode"
    document.querySelector(".form").classList.toggle("dark");
}
// dark mode end

loadQuestion();


function resetData  () {
	location.reload();
}
