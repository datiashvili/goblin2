const b1 = document.querySelector('.b1')
console.log(b1)

const body = document.querySelector('body')

b1.addEventListener('click', () => {
    console.log('hello')
})

b1.addEventListener('click', () => {
    body.style.background = 'url(ghost.jpg)'
    body.style.backgroundRepeat = "no-repeat"
    body.style.height = "100vh"
    body.style.backgroundSize = "cover"

})
