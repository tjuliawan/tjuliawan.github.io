const text = document.querySelector('.text');
const showToggleBtn = document.querySelector('#show-toggle');

let isHalfShown = true;

showToggleBtn.addEventListener('click', () => {
  if (isHalfShown) {
    text.classList.remove('show');
    text.style.height = 'auto';
    showToggleBtn.textContent = 'Sembunyikan';
    isHalfShown = false;
  } else {
    text.classList.add('show');
    text.style.height = '100px';
    showToggleBtn.textContent = 'Tampilkan';
    isHalfShown = true;
  }
});

const text1 = document.querySelector('.text1');
const showToggleBtn1 = document.querySelector('#show-toggle1');

let isHalfShown1 = true;

showToggleBtn1.addEventListener('click', () => {
  if (isHalfShown1) {
    text1.classList.remove('show');
    text1.style.height = 'auto';
    showToggleBtn1.textContent = 'Sembunyikan';
    isHalfShown1 = false;
  } else {
    text1.classList.add('show');
    text1.style.height = '100px';
    showToggleBtn1.textContent = 'Tampilkan';
    isHalfShown1 = true;
  }
});

const text2 = document.querySelector('.text2');
const showToggleBtn2 = document.querySelector('#show-toggle2');

let isHalfShown2 = true;

showToggleBtn2.addEventListener('click', () => {
  if (isHalfShown2) {
    text2.classList.remove('show');
    text2.style.height = 'auto';
    showToggleBtn2.textContent = 'Sembunyikan';
    isHalfShown2 = false;
  } else {
    text2.classList.add('show');
    text2.style.height = '100px';
    showToggleBtn2.textContent = 'Tampilkan';
    isHalfShown2 = true;
  }
});
