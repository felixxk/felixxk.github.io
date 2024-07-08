// User at end of page?
window.onscroll = () => {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    consol.log("Your are at the end of the page.")
  }
}

// Scroll to top
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

function changeBackgroundColor() {
  const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF5',
    '#F3FF33', '#FF8333', '#33FFA1', '#FF5733', '#57FF33'
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
