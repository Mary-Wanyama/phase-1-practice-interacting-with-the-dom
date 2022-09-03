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
let count =0
let obj = {}

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
    if(obj.hasOwnProperty(counter.textContent)){
        obj[counter.textContent]++
    }
    else{
        obj[counter.textContent]=1
    }
    obj[counter.textContent]
    list.textContent = `${counter.textContent} has been liked ${obj[counter.textContent]} time`
    likes.appendChild(list)
    console.log(obj)
})



function timer() {
    count= setInterval(()=> counter.textContent++, 1000)
    return count
}
let counting = timer()

pause.addEventListener('click', function (event) {
    event.preventDefault()
    console.log(event.target.value)
    if (event.target.value==='pause') {
        event.target.textContent = 'resume'
        event.target.value = 'resume'
        clearInterval(counting)
    }
    else if(event.target.value === 'resume'){
        event.target.textContent= 'pause'
        event.target.value= 'pause'
        counting = timer()
    }
    else{
        event.target.textContent = 'hello'
    }
})