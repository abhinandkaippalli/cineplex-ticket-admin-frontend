import Model from "./model.js";

class Controller {
    constructor() {
        this.model = new Model()
    }

    getScreen() {

    }

    setScreen() {
        return this.model.setScreen()
    }
}

export default Controller()
