// setInterval(() => {
//    console.log(123)
// }, 2000)
//
// const handleInterval = setInterval(() => {
//    console.log('its interval')
// },2000)
//
// const hanleClear = () => {
//    clearInterval(handleInterval)
// }
//
// setTimeout(() => {
//    hanleClear()
// },10000)
//
// console.log(333)
// console.log('hello')
// console.log('world')

// const name = document.querySelector('#name')
// const color = document.querySelector('#color')
//
// fetch('http://swapi.dev/api/people/1')
// .then(res => res.json())
// .then(json => {
//    name.InnerHTMl = json.name
//    color. InnerHTMl = json.hair_color
// })
const  name = document.querySelector('#name')
const color = document.querySelector('#color')
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
const vehicle = document.querySelector('#vehicle')
const nodel = document.querySelector('#nodel')
const manufacture = document.querySelector('#manufacturer')
submit.addEventListener('click',() => {
   let value = input.value
   fetch(`http://swapi.dev/api/people/${value}`)
   .then( res => res.json())
       . then(json => {
          name.innerHTML = json.name
         color .innerHTML = json.hair_color
       })
})
    submit.addEventListener('click', () => {
    let value = input.value
    fetch(`http://swapi.dev/api/people/${value}`)
        .then(res =>res.json())
        .then(json=>{
            console.log(json)
            name.innerHTML=json.name
            color.innerHTML=json.hair_color
            let value1 = input.value
            fetchUrl = json.vehicles[0]
            fetch(fetchUrl)
                .then(res => res.json())
                .then(json=>{
                    vehicle.innerHTML=json.name
                    model.innerHTML = json.model
                    manifactures.innerHTML=json.manifactures
                })
        })
})