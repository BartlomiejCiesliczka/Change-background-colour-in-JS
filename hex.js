const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
// get random number 0-3
    const randomNumber = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
    document.body.style.backgroundColor = randomNumber
    color.textContent = randomNumber
    console.log(randomNumber)
});