import Controller from "./controller.js";

const controller = new Controller()

const form = document.getElementById('form')
const name = document.getElementById('name')
const dName= document.getElementById('dName')
const type = document.getElementById('type')
const time = document.getElementById('time')
const image = document.getElementById('image')
const about = document.getElementById('about')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    controller.setMovieDetails(name.value, dName.value,type.value,time.value,image.value,about.value)
    form.reset()
})