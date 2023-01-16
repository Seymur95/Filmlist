const FORM = document.getElementById('film-form')
const titlelement = document.getElementById('title')
const directorelement = document.getElementById('director')
const urlelement = document.getElementById('url')
const cardBody2 = document.querySelectorAll('.card-body')[1]
const Clear = document.getElementById('clear-films')

eventlisteners()

function eventlisteners() {
    FORM.addEventListener('submit',addFilm)
    document.addEventListener('DOMContentLoaded',function() {
        const Films = Storage.getStr()
        UI.loadToUI(Films)
    })
    cardBody2.addEventListener('click',removeList)
    Clear.addEventListener('click',clearAll)
}

function addFilm(e) {
const title = titlelement.value.trim()
const director = directorelement.value.trim()
const url = urlelement.value.trim()

if(title === '' || director === '' || url === '') {
    UI.showAlert('please fill all inputs','danger')
}else {
    const newFilm = new Film(title,director,url)
    UI.addToUi(newFilm)
    UI.showAlert('Film added','primary')
    Storage.addToStr(newFilm)
    UI.emptyInputs(titlelement,directorelement,urlelement)
}


    e.preventDefault()
}

function removeList(e) {
    if (e.target.className === 'btn btn-danger') {
        UI.removeListFromUI(e.target.parentElement.parentElement)
    }
}
function clearAll(e) {
UI.clearAllFromUI(e.target.previousElementSibling.previousElementSibling.lastElementChild)

Storage.clearFromStr()
}
