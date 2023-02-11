import Model from "./model.js";

class Controller {
    constructor() {
        this.model = new Model()
        
    }

    setScreen(textScreening) {
        const data = {
            screening : textScreening
        }
        console.log(data);
        this.model.setScreen(data)
    }

    setScreening(textScreen,textMovie,date,time) {
        const data = {
            screen : textScreen,
            movie : textMovie,
            date : date,
            time : time
        }
        console.log(data);
        this.model.setScreening(data)
    }
}

export default Controller