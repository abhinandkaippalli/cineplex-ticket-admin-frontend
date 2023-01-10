import Model from "./model.js";

class Controller {
    constructor() {
        this.model = new Model()
    }

    setScreening() {
        return this.model.setScreening()
    }
}

export default Controller