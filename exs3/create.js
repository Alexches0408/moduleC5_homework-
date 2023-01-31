
const button = document.querySelector('button');

button.addEventListener('click', () =>{
	let value = document.querySelector('input').value;
	if (Number(value) <= 10){
		console.log(button)
	}
	else {
        document.querySelector('#output').textContent  = "число вне диапазона от 1 до 10"
    }
});
