import Model from "./model.js";

class Controller {
    constructor() {
        this.model = new Model() 
    }

    setUserDetails() {
        return this.model.setProfile()
    }
}

export default Controller