import Model from "./model.js";

class Controller {
    constructor() {
        this.model = new Model()
    }
    loadTicketFromBackend() {
        console.log("hi");
        return this.model.loadTicketFromBackend()
    }
}

export default Controller
