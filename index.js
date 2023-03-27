const colors = ['green', 'red', 'white', 'purple', ];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
// get random number 0-3
    const randomNumber = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
});

