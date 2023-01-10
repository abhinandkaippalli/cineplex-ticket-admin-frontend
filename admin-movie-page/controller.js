import Model from "./model.js"

class Controller{
    constructor() {
        this.model = new Model()
    }

    getMovieDetails() {

    }

    setMovieDetails() {
        return this.model.setMovieDetails()
    }
}

export default Controller