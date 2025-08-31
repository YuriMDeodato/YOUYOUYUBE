// Scroll com roda do mouse na sidebar
let currentIndex = 0;
const buttons = document.querySelectorAll('.nav-btn');

function focusButton(index) {
  if (index >= 0 && index < buttons.length) {
    buttons[index].focus();
  }
}

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    currentIndex = Math.min(currentIndex + 1, buttons.length - 1);
  } else {
    currentIndex = Math.max(currentIndex - 1, 0);
  }
  focusButton(currentIndex);
});

// Trocar imagem por GIF ao passar o mouse
const thumbs = document.querySelectorAll('.video-thumb');

thumbs.forEach(img => {
  const staticSrc = img.src;
  const gifSrc = img.getAttribute('data-gif');

  img.addEventListener('mouseenter', () => {
    img.src = gifSrc;
  });

  img.addEventListener('mouseleave', () => {
    img.src = staticSrc;
  });
});

// Tags ativas
const tags = document.querySelectorAll('.tag');
tags.forEach(tag => {
  tag.addEventListener('click', () => {
    tags.forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
  });
});
function scrollTags(direction) {
  const tagsBar = document.getElementById('tagsBar');
  const scrollAmount = 200;
  tagsBar.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  });
}
