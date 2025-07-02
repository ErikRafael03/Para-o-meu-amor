let btn = document.getElementById('button');
let btn2 = document.getElementById('button2');
let res = document.getElementById('res');
let text = document.getElementsByClassName('text');

btn.addEventListener('click', function () {
  btn.style.display = 'none';
  btn2.style.display = 'block';  
  text.style.display = 'block';  
  res.innerHTML = '<p>Eu te amo 💖</p>';
});
