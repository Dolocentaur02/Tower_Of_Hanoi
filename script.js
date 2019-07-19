let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let block1 = document.querySelector('.block1')
let block2 = document.querySelector('.block2')
let block3 = document.querySelector('.block3')
let boxes = document.querySelectorAll('.box')
let blocks = document.querySelectorAll('.block')

//Append block Elements to the first box
box1.appendChild(block1)
box1.appendChild(block2)
box1.appendChild(block3)


// to Add EventListeners to boxes 
for (let x = 0; x < boxes.length; x++) {

    boxes[x].addEventListener('click', function (evt) {
        evt.preventDefault()
        console.log("we're working")
    })
}

//addEventListeners as well as move the blocks from box1 through box2 and box3
let selector = []
console.log(selector)
block1.addEventListener('click', () => {
    selector = []
    selector.push(block1)
    console.log('selected' + selector)
})

block2.addEventListener('click', () => {
    selector = []
    selector.push(block2)
    console.log('selected' + selector)
})

block3.addEventListener('click', () => {
    selector = []
    selector.push(block3)
    console.log('selected' + selector)
})

box2.addEventListener('click', function () {
    box2.appendChild(selector[0]) && box2.insertBefore(selector[0]) && box2.removeChild(selector[0], blocks[1])
    selector = []
    console.log('placed' + selector + 'in box2')
})

box3.addEventListener('click', function () {
    box3.appendChild(selector[0]) && insertBefore(selector[0], box1.firstElementChild) || box3.removeChild(selector[0], blocks[2])
    selector = []
    console.log('placed' + selector + 'in box3')
})



function first() {

    if ((box1 = blocks[1])&&(box1 = blocks[2])){
      Console.log("Really")

    }
}


