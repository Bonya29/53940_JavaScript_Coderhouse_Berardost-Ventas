const favprod = JSON.parse(localStorage.getItem("fav")) || []

function cargarFavortios() {
    const favoritos = document.getElementById("favoritos")
    favprod.forEach((favprod, index) => {
        favoritos.innerHTML += `
        <div class="tabla">
            <span class="prod-name">${favprod.Categoria} ${favprod.Fabricante} ${favprod.Modelo}</span>
            <span class="precio">$${favprod.Precio}</span>
            <button class="btn-add">Añadir al Carrito</button>
            <button class="btn-delete">✖</button>
        </div>`
    })
}

cargarFavortios()