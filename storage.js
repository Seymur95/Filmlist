class Storage {

    static addToStr(newFilm) {
let films = this.getStr()

films.push(newFilm)
localStorage.setItem('films',JSON.stringify(films))
    }
    static getStr() {
        let films 

        if(localStorage.getItem('films') === null) {
            films = []
        } else {
            films = JSON.parse(localStorage.getItem('films'))
        }
    return films
    }

    static clearFromStr() {

        localStorage.removeItem('films')

    }
}