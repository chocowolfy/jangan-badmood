const title = document.querySelector('.title')
const text = 'I Have Something'.split('')

text.forEach((char) => {
  const span = document.createElement('span')
  if (char === ' ') {
    span.style.marginRight = '20px'
  } else {
    span.textContent = char
  }
  // delay acak antara 0 sampai 3 detik
  span.style.animationDelay = `${Math.random() * 3}s`
  title.appendChild(span)
})
