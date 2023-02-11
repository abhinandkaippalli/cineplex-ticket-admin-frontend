import Model from "./model.js"

class Controller{
    constructor() {
        this.model = new Model()
    }

    getMovieDetails() {
        return this.model.getMovieDetails();
    }

    setMovieDetails(name,dName,type,time,image,about) {
        const data = {
            name: name,
            director: dName,
            type: type,
            duration: time,
            image: image,
            about: about
        }
        this.model.setMovieDetails(data)
    }
}

export default Controller