let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let block1 = document.querySelector('.block1')
let block2 = document.querySelector('.block2')
let block3 = document.querySelector('.block3')
let boxes = document.querySelectorAll('.box')
let blocks = document.querySelectorAll('.block')
let selectedBlock = boxes[0].children[0]
console.log(selectedBlock)
if (selectedBlock) {
    boxes[1].prepend(selectedBlock)
    boxes[2].prepend(selectedBlock)
}
box1.appendChild(block1)
box1.appendChild(block2)
box1.appendChild(block3)


//Only one disk can move at a time 
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
    box2.appendChild(selector[0])
    box2.prepend(block)
    selector = []
    console.log('placed' + selector + 'in box2')
})

box3.addEventListener('click', function () {
    box3.appendChild(selector[0])
    selector = []
    console.log('placed' + selector + 'in box3')
})


if (selectedBlock === boxes[1]) {
    box1.prepend(selectedBlock)

}
// block = document.querySelector('.block1')
// <div class=​"blocks block1" id=​"one">​</div>​
// boxes = document.querySelectorAll('.box')
// NodeList(3) [div.box.box1, div.box.box2, div.box.box3]
// boxes[1].appendChild(block)
// <div class=​"blocks block1" id=​"one">​</div>​
// boxes[2].append(block)
// undefined
// boxes[0].append(block)
// undefined
// boxes[2].prepend(block)
// undefined
// boxes[0].prepend(block)
// undefined
// (anonymous) @ script.js:90
// boxes[2].prepend(boxes[0].children[0])
// undefined


// electedBlock = boxes[0].children[0]
// if (selectedBlock) {
// 	boxes[1].prepend(selectedBlock)
// }
// undefined
// selectedBlock = ''
// ""
// if (selectedBlock) {
// 	boxes[1].prepend(selectedBlock)
// }
// undefined

// selectedBlock = boxes[1].children[0]
// if (selectedBlock) {
// 	boxes[2].prepend(selectedBlock)
// }
// undefined
// selectedBlock = ''
// ""