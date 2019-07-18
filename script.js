let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let block1 = document.querySelector('.block1')
let block2 = document.querySelector('.block2')
let block3 = document.querySelector('.block3')
let selector = []
let size=''
block1.size = 1
block2.size = 2
block3.size = 3

if (selector = []) {
    box1.addEventListener('click', function () {
        console.log("Yay")
        if (box1.innerHTML === "") {
            selector = [box1.firstElementChild]
            console.log("first child")
        } if (selector[0].size < (box1.innerHTML.firstElementChild.size)|| (box1.innerHTML === "")) {
            box1.insertBefore(box1.firstElementChild)
        } else {
            alert("too big")
        }

    })

    box2.addEventListener('click', function () {
        console.log("Yay")
        if (box2.innerHTML === "") {
            selector = [box2.firstElementChild]
        } else {
            box2.insertBefore(box2.firstElementChild)
        }

    })

    box3.addEventListener('click', function () {
        console.log("Yay")
        if (box3.innerHTML === "") {
            selector = [box3.firstElementChild]
        } else {
            box3.insertBefore(box3.firstElementChild)
        }

    })

}

// // function to prevent larger items from being placed over smaller items 
// function placeBlock(){
// if( selector[0].size<(box1.innerHTML.firstElementChild.size)||(box1.innerHTML === "")){
//     box1.insertBefore(box1.firstElementChild)
// } else{ alert ("Too big") 
// }
// }







// box1.appendChild(block1)
// box1.appendChild(block2)
// box1.appendChild(block3)


// //Only one disk can move at a time 
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

// //To see if there are items in that box if and if yes prepends 
// function moveAround() {
//     if (box1.firstElementChild !== 0 || box2.firstElementChild !== 0 || box3.firstElementChild !== 0) {
//         compare()
//     } else {
//         addChildOnTop()
//     }
// console.log("does this work")
// }








