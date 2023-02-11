import Controller from "./controller.js";

const controller = new Controller()


const form = document.getElementById('form')
const screening = document.getElementById('available')
const screen = document.getElementById('screen')
const movie = document.getElementById('movie') 
const date = document.getElementById('date')
const time = document.getElementById('time')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const valueScreening = screening.value;
    const valueScreen = screen.value
    const textScreening = screening.options[screening.selectedIndex].text;
    const textScreen = screen.options[screen.selectedIndex].text;
    const textMovie = movie.options[movie.selectedIndex].text
    console.log(valueScreening, textScreening);
    console.log(valueScreen, textScreen);
    controller.setScreen(valueScreening)
    controller.setScreening(valueScreen,textMovie,date.value,time.value)
    form.reset()
})