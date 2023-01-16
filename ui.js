class UI {

    static addToUi(newFilm) {
      const tBody = document.getElementById('films')
    
    tBody.innerHTML += `
    <tr>
    <td><img src="${newFilm.url}" style='height:100px;width:100px' class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    `
    }
    
    static showAlert(message,color) {
    const cardBody = document.querySelector('.card-body')
    const div = document.createElement('div')
    div.className = `alert alert-${color}`
    div.textContent = message
    cardBody.appendChild(div)
    
    setTimeout (function() {
      div.remove()
    },1500)
    }
    
    static emptyInputs(title,director,url) {
    title.value = ''
    director.value = ''
    url.value = ''
    }
    
    static loadToUI(Films) {
      const tBody = document.getElementById('films')
    Films.forEach(film => {
      
      tBody.innerHTML += `
      <tr>
    <td><img src="${film.url}" style='height:100px;width:100px' class="img-fluid img-thumbnail"></td>
    <td>${film.title}</td>
    <td>${film.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
      `
    });
    }
    
    static removeListFromUI(element) {
    
    while (element.firstElementChild !== null) {
        element.firstElementChild.remove()
    }
    }
    
    static clearAllFromUI(element) {
    while(element.firstElementChild !== null) {
      element.firstElementChild.remove()
    }
    }
    }