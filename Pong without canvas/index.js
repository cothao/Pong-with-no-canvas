const one = document.querySelector('.one')
const two = document.querySelector('.two')
const ball = document.querySelector('.ball')
const flex = document.querySelector('.flex')

let intervals = []
let i = 230
let o = 230
document.body.addEventListener('keydown', (e) => {
    console.log(e)
    if (e.key === 's') {
    if (i === 410) return;
        i += 20;
    one.style.marginTop = `${i}px`
    }
    if (e.key === 'w') {
        if (i === -10) return;
        i += -20;
        one.style.marginTop = `${i}px`
    }
    console.log(ball.getBoundingClientRect())
})

document.body.addEventListener('keydown', (e) => {
    // console.log(e)
    if (e.key === 'ArrowDown') {
        if (o === 410) return;
    o += 20;
    two.style.marginTop = `${o}px`
    }
    if (e.key === 'ArrowUp') {
        if (o === -10) return;
        o += -20;
        two.style.marginTop = `${o}px`
    }
    console.log(ball.getBoundingClientRect())
})

let k = 0
let j = 0

let int1
let int2

const borders = function() {

const moveLeft = function() {
    
        j++
        k--
        ball.style.top = `${j}px`
        ball.style.left = `${k}px`
        if (ball.getBoundingClientRect().x === 34 && ball.getBoundingClientRect().y > one.getBoundingClientRect().y && ball.getBoundingClientRect().y < (one.getBoundingClientRect().y + one.getBoundingClientRect().height))
{
    clearInterval(int1)
    int1 = setInterval(paddleLeft, 10)
}
        if (ball.getBoundingClientRect().y === 615 && ball.getBoundingClientRect().x < (window.innerWidth/2)) {
            clearInterval(int1)
            int1 = setInterval(bottomLeftBounce, 10)
            console.log('hello world')
        }
        if (ball.getBoundingClientRect().x === flex.style.paddingLeft || ball.getBoundingClientRect().x === 0) {
            j = 0
            k = 0
            clearInterval(int1)
            int1 = setInterval(moveLeft, 10)
        }
}
const bottomLeftBounce = function  () {
    j--
    k--
    ball.style.top = `${j}px`
    ball.style.left = `${k}px`
    if (ball.getBoundingClientRect().x === 34 && ball.getBoundingClientRect().y > one.getBoundingClientRect().y && ball.getBoundingClientRect().y < (one.getBoundingClientRect().y + one.getBoundingClientRect().height))
{
    if (ball.getBoundingClientRect().y > one.getBoundingClientRect().y && ball.getBoundingClientRect().y < (one.getBoundingClientRect().y + (one.getBoundingClientRect().height/2)))
             {clearInterval(int1)
            int1 = setInterval(paddleLeft, 10)
             }
             if (ball.getBoundingClientRect().y > (one.getBoundingClientRect().y + (two.getBoundingClientRect().height/2))) {
                clearInterval(int1)
                int1 = setInterval(bottomLeftPad, 10)
             }
}
if (ball.getBoundingClientRect().y === 9 && ball.getBoundingClientRect().x <= (window.innerWidth/2)) {
    clearInterval(int1)
    int1 = setInterval(bounceRight, 10)
}
if (ball.getBoundingClientRect().x === 1010 || ball.getBoundingClientRect().x === 0) {
    j = 0
    k = 0
    clearInterval(int1)
    int1 = setInterval(moveLeft, 10)
}
}
const bounceRightCorner = function() {
    j--
    k++
    ball.style.top = `${j}px`
    ball.style.left = `${k}px`
    if (ball.getBoundingClientRect().x === 974 && ball.getBoundingClientRect().y > two.getBoundingClientRect().y && ball.getBoundingClientRect().y < (two.getBoundingClientRect().y + two.getBoundingClientRect().height))
 {  
    if (ball.getBoundingClientRect().y > two.getBoundingClientRect().y && ball.getBoundingClientRect().y < (two.getBoundingClientRect().y + (two.getBoundingClientRect().height/2))) {
        clearInterval(int1)
        console.log('hey')
        int1 = setInterval(padTopRight, 10)
    }
    if (ball.getBoundingClientRect().y > (two.getBoundingClientRect().y + (two.getBoundingClientRect().height/2)))
    {
    clearInterval(int1) 
    int1 = setInterval(padLeft, 10)
 }
 }
 if (ball.getBoundingClientRect().y === 9) {
    clearInterval(int1)
    int1 = setInterval(topLeft ,10)
}
if (ball.getBoundingClientRect().x === 1010 || ball.getBoundingClientRect().x === 0) {
    j = 0
    k = 0
    clearInterval(int1)
    int1 = setInterval(moveLeft, 10)
}
}
const padTopRight = function() {
    j--
    k--
    ball.style.top = `${j}px`
    ball.style.left = `${k}px`
    if (ball.getBoundingClientRect().y === 9) {
        clearInterval(int1)
        int1 = setInterval(bounceRight, 10)
    }
    if (ball.getBoundingClientRect().x === 1010 || ball.getBoundingClientRect().x === 0) {
        j = 0
        k = 0
        clearInterval(int1)
        int1 = setInterval(moveLeft, 10)
    }
}
const bounceRight = function() {
    j++
    k--
    ball.style.top = `${j}px`
    ball.style.left = `${k}px`
    if (ball.getBoundingClientRect().x === 34 && ball.getBoundingClientRect().y > one.getBoundingClientRect().y && ball.getBoundingClientRect().y < (one.getBoundingClientRect().y + one.getBoundingClientRect().height))
{
    if (ball.getBoundingClientRect().y > one.getBoundingClientRect().y && ball.getBoundingClientRect().y < (one.getBoundingClientRect().y + (one.getBoundingClientRect().height/2)))
             {clearInterval(int1)
            int1 = setInterval(paddleLeft, 10)
             }
             if (ball.getBoundingClientRect().y > (one.getBoundingClientRect().y + (two.getBoundingClientRect().height/2))) {
                clearInterval(int1)
                int1 = setInterval(bottomLeftPad, 10)
             }
}
if (ball.getBoundingClientRect().y === 615) {
    clearInterval(int1)
    int1 = setInterval(bounceRightCorner, 10)
}
if (ball.getBoundingClientRect().y === 615 && ball.getBoundingClientRect().x < (1010/2)) {
    clearInterval(int1)
    int1 = setInterval(bottomLeftBounce, 10)
    console.log('hello world')
}
if (ball.getBoundingClientRect().x === 1010 || ball.getBoundingClientRect().x === 0) {
    j = 0
    k = 0
    clearInterval(int1)
    int1 = setInterval(moveLeft, 10)
}
}
const paddleLeft = function() {
    j--
    k++
        ball.style.top = `${j}px`
        ball.style.left = `${k}px`
        if (ball.getBoundingClientRect().y === 9) {
            clearInterval(int1)
            int1 = setInterval(topLeft ,10)
        }
        if (ball.getBoundingClientRect().y === 615) {
            clearInterval(int1)
            int1 = setInterval(bounceRightCorner, 10)
        }
        if (ball.getBoundingClientRect().x === 1010 || ball.getBoundingClientRect().x === 0) {
            j = 0
            k = 0
            clearInterval(int1)
            int1 = setInterval(moveLeft, 10)
        }
}

const bottomLeftPad = function() {
    j++
    k++
    ball.style.top = `${j}px`
    ball.style.left = `${k}px`
    if (ball.getBoundingClientRect().y === 615) {
        clearInterval(int1)
    int1 = setInterval(bounceRightCorner, 10)
    }
    if (ball.getBoundingClientRect().x === 1010 || ball.getBoundingClientRect().x === 0) {
        j = 0
        k = 0
        clearInterval(int1)
        int1 = setInterval(moveLeft, 10)
    }
}

const topLeft = function() {
    j ++
    k ++
    ball.style.top = `${j}px`
    ball.style.left = `${k}px`
        if (ball.getBoundingClientRect().x === 34 && ball.getBoundingClientRect().y > one.getBoundingClientRect().y && ball.getBoundingClientRect().y < (one.getBoundingClientRect().y + one.getBoundingClientRect().height))
        {   
            if (ball.getBoundingClientRect().y > one.getBoundingClientRect().y && ball.getBoundingClientRect().y < (one.getBoundingClientRect().y + (one.getBoundingClientRect().height/2)))
             {clearInterval(int1)
            int1 = setInterval(paddleLeft, 10)
             }
             if (ball.getBoundingClientRect().y > (one.getBoundingClientRect().y + (two.getBoundingClientRect().height/2))) {
                clearInterval(int1)
                int1 = setInterval(bottomLeftPad, 10)
             }
        }
        if (j === 450) {
            clearInterval(int1)
            int1 = setInterval(bottomLeftBounce, 10)
            console.log(j)
        }
        if (ball.getBoundingClientRect().y === 9) {
            clearInterval(int1)
            int1 = setInterval(topLeft ,10)
        }
    if (ball.getBoundingClientRect().x === 974 && ball.getBoundingClientRect().y > two.getBoundingClientRect().y && ball.getBoundingClientRect().y < (two.getBoundingClientRect().y + two.getBoundingClientRect().height))
 {
    if (ball.getBoundingClientRect().y > two.getBoundingClientRect().y && ball.getBoundingClientRect().y < (two.getBoundingClientRect().y + (two.getBoundingClientRect().height/2))) {
        clearInterval(int1)
        console.log('hey')
        int1 = setInterval(padTopRight, 10)
    }
    if (ball.getBoundingClientRect().y > (two.getBoundingClientRect().y + (two.getBoundingClientRect().height/2)))
    {
    clearInterval(int1) 
    int1 = setInterval(padLeft, 10)
 }}
 if (ball.getBoundingClientRect().y === 615) {
    clearInterval(int1)
    int1 = setInterval(bounceRightCorner, 10)
}
if (ball.getBoundingClientRect().x === 1010 || ball.getBoundingClientRect().x === 0) {
    j = 0
    k = 0
    clearInterval(int1)
    int1 = setInterval(moveLeft, 10)
}
}

const padLeft = function() {
    j++
    k--
    ball.style.top = `${j}px`
    ball.style.left = `${k}px`
    if (ball.getBoundingClientRect().y === 615) {
    clearInterval(int1)
    int1 = setInterval(bottomLeftBounce, 10)
    }
        // if (ball.getBoundingClientRect().x === 34 && ball.getBoundingClientRect().y > one.getBoundingClientRect().y && ball.getBoundingClientRect().y < (one.getBoundingClientRect().y + one.getBoundingClientRect().height))
        // {   
        //     clearInterval(int1)
        //     int1 = setInterval(paddleLeft, 10)
        //     console.log('me')
        // }
    //     if (ball.getBoundingClientRect().y === 615) {
    //         j--
    //         k--
    // ball.style.top = `${j}px`
    // ball.style.left = `${k}px`
    //         clearInterval(int1)

    //         int1 = setInterval(bottomLeftBounce, 10)
    //         console.log('me2')
    //         console.log(int1)
    //         clearInterval(int1)
    //     }
    //     if (ball.getBoundingClientRect().y === 0) {
    //         clearInterval(int1)
    //         int1 = setInterval(topLeft ,10)
    //         console.log('me3')
    //     }
    if (ball.getBoundingClientRect().x === 1010 || ball.getBoundingClientRect().x === 0) {
        j = 0
        k = 0
        clearInterval(int1)
        int1 = setInterval(moveLeft, 10)
    }
}

// LOGIC
console.log(ball.getBoundingClientRect().y)
console.log((two.getBoundingClientRect().height))
int1 = setInterval(moveLeft, 10)

// if (ball.getBoundingClientRect().x === 34 && ball.getBoundingClientRect().y > one.getBoundingClientRect().y && ball.getBoundingClientRect().y < (one.getBoundingClientRect().y + one.getBoundingClientRect().height))
// {
//     int1 = setInterval(paddleLeft, 10)
// }
// if (j === 450) {
//     clearInterval(int1)
//     int1 = setInterval(bottomLeftBounce, 10)
//     console.log(j)
// }
// if (ball.getBoundingClientRect().y === 0) {
//     clearInterval(int1)
//     int1 = setInterval(topLeft ,10)
// }
}

borders()

const moveBallLeftUp = function() {
    j--
    k--
        ball.style.top = `${j}px`
        ball.style.left = `${k}px`
        if (ball.getBoundingClientRect().x === 34 && ball.getBoundingClientRect().y > one.getBoundingClientRect().y && ball.getBoundingClientRect().y < (one.getBoundingClientRect().y + one.getBoundingClientRect().height)) {
            clearInterval(int2)
            int3 = setInterval(padContact, 10)
        }
}

console.log(flex.style)

// console.log(ball.getBoundingClientRect().x < (window.innerWidth/2))


// const leftSide = function() {
//     j++
//     k--
//         ball.style.top = `${j}px`
//         ball.style.left = `${k}px`
        
//             clearInterval(int5)
//             // int1 = setInterval(moveBallLeftDown, 10)
// }


// ball.style.top = `0px`
// console.log(ball.getBoundingClientRect())
// console.log(one.getBoundingClientRect())



console.log(window.innerHeight, window.innerWidth)
console.log(getComputedStyle(flex))