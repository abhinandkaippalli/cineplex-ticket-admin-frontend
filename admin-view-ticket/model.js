

class Model{
    constructor() {
        this.array = []
    }

    async loadTicketFromBackend() {
        const res = await fetch("http://localhost:3000/booking")
        const result = await res.json()
        console.log(result);
        
        return result
    }
}

export default Model