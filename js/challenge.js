let counter = document.querySelector('#counter')
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let heart = document.querySelector('#heart')
let pause = document.querySelector('#pause')
let likes = document.querySelector('.likes')
let lis = document.querySelector('#list')
let comment = document.querySelector('#comment-form')
let submit = document.querySelector('#submit')
let text = document.querySelector('#comment-input')
let arr = []

plus.addEventListener('click', function (event) {
    event.preventDefault()
    // let counterPlus = counter.innerHTML
    
    counter.textContent ++
})

minus.addEventListener('click', function (event) {
    event.preventDefault()
    counter.textContent --
})

submit.addEventListener('click', function (event) {
    event.preventDefault()
    const p = document.createElement('p')
    p.innerHTML = text.value
    lis.appendChild(p)
})
let countClicks = 0

heart.addEventListener('click', function (event) {
    event.preventDefault()
    list = document.createElement('li')
    list.textContent = `${counter.textContent} has been liked ${event++} time`
    likes.appendChild(list)

})



function timer() {
    const count= setInterval(()=> counter.textContent++, 1000)
    return count
}
const counting = timer()
counting ;

pause.addEventListener('click', function (event) {
    event.preventDefault()
    if (timer) {
        event.target.textContent = 'resume'
        clearInterval(counting)
    }
    else if(!timer){
        event.target.textContent= 'pause'
    }
    else{
        event.target.textContent = 'hello'
    }
})