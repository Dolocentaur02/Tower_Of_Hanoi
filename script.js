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


// // addEventListeners as well as move the blocks from box1 through box2 and box3
// let selector = []
// console.log(selector)
// block1.addEventListener('click', () => {
//     selector = []
//     selector.push(block1)
//     console.log('selected' + selector)
// })

// block2.addEventListener('click', () => {
//     selector = []
//     selector.push(block2)
//     console.log('selected' + selector)
// })

// block3.addEventListener('click', () => {
//     selector = []
//     selector.push(block3)
//     console.log('selected' + selector)
// })

// box2.addEventListener('click', function () {
//     box2.appendChild(selector[0]) 
//     selector = []
//     console.log('placed' + selector + 'in box2')
// })

// box3.addEventListener('click', function () {
//     box3.appendChild(selector[0])
//     selector = []
//     console.log('placed' + selector + 'in box3')
// })


// to Add EventListeners to boxes 
for (let x = 0; x < boxes.length; x++) {
    boxes[x].addEventListener('click', function (evt) {
        evt.preventDefault()
        console.log("we're working")

        function moveBlocks() {
            if ((box1.blocks[0]) && (box1 !== 0)) {
                box2.append(boxes[0]) || box3.append(boxes[0])
            } else {
                console.log("false")
            }
        }
    })
}



// boxes[1].appendChild(block)
// boxes[2].append(block)
// boxes[0].append(block)
// boxes[2].prepend(block)
// boxes[0].prepend(block)
// boxes[2].prepend(boxes[0].children[0])



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