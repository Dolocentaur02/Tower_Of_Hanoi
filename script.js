
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let block1 = document.querySelector('.block1')
let block2 = document.querySelector('.block2')
let block3 = document.querySelector('.block3')

box1.appendChild(block1)
box1.appendChild(block2)
box1.appendChild(block3)

let selector = []
console.log(selector)
block1.addEventListener('click', () => {
    selector = []
    selector.push(block1)
    console.log('selected' + selector)
})
// block2.addEventListener('click', () => {
//     selector = []
//     selector.push(block2)
//     console.log('selected' + selector)
// })
// block3.addEventListener('click', () => {
//     selector = []
//     selector.push(block3)
//     console.log('selected2' + selector)
// })

// box1.addEventListener('click', function () {
//     box2.appendChild(selector)
//     selector = []
//     console.log('placed' + selector + 'in box2')
// })

box2.addEventListener('click', function () {
    box2.appendChild(selector[0])
    selector = []
    console.log('placed' + selector + 'in box2')
})

// box3.addEventListener('click', function () {
//     box3.appendChild(selector)
//     selector = []
//     console.log('placed' + selector + 'in box3')
// })

