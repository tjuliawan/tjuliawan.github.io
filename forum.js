const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');

    btn1.addEventListener('click', function() {
    // Show div1 and hide other div elements
    div1.style.display = 'block';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';

  });
  
  // Add event listeners to the other buttons
  btn2.addEventListener('click', function() {
    // Show div2 and hide other div elements
    div1.style.display = 'none';
    div2.style.display = 'block';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
  });
  
  btn3.addEventListener('click', function() {
    // Show div3 and hide other div elements
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'block';
    div4.style.display = 'none';
    div5.style.display = 'none';
  });
  
  btn4.addEventListener('click', function() {
    // Show div4 and hide other div elements
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'block';
    div5.style.display = 'none';
  });

  btn5.addEventListener('click', function() {
    // Show div4 and hide other div elements
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'block';
  });