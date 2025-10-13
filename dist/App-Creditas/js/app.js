const slides = document.getElementById('slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const total = 3;
let index = 0;

function goTo(i) {
  index = (i + total) % total;
  slides.style.transform = `translateX(-${index * (100 / total)}%)`;
}

prev.onclick = () => goTo(index - 1);
next.onclick = () => goTo(index + 1);

goTo(0);

