const favprod = JSON.parse(localStorage.getItem("fav")) || []
const cart = JSON.parse(localStorage.getItem('cart')) || []

function cargarFavoritos() {
    const favoritos = document.getElementById("favoritos")
    favoritos.innerHTML = ""
    favprod.forEach((favprod, index) => {
        favoritos.innerHTML += `
        <div class="tabla">
            <span class="prod-name">${favprod.Categoria} ${favprod.Fabricante} ${favprod.Modelo}</span>
            <span class="precio">$${favprod.Precio}</span>
            <button class="btn-add" data-index="${index}">Añadir al Carrito</button>
            <button class="btn-delete" data-index="${index}">✖</button>
        </div>`
    })

    const botonEliminar = document.querySelectorAll(".btn-delete")
    botonEliminar.forEach(boton => {
        boton.addEventListener("click", function() {
            const index = parseInt(this.getAttribute("data-index"))
            eliminarFavorito(index)
        })
    })

    const botonAdd = document.querySelectorAll(".btn-add")
    botonAdd.forEach(boton => {
        boton.addEventListener("click", function() {
            const index = parseInt(this.getAttribute("data-index"))
            agregarCarrito(index)
        })
    })
}

function eliminarFavorito(index) {
    favprod.splice(index, 1)
    localStorage.setItem("fav", JSON.stringify(favprod))
    Toastify({
        text: "Producto Eliminado",
        duration: 2000,
        gravity: "top",
        stopOnFocus: false
        }).showToast()
    cargarFavoritos()
}

function agregarCarrito(index) {
    const favorito = favprod[index]
    cart.push(favorito)
    let cartJSON = JSON.stringify(cart)
    localStorage.setItem("cart", cartJSON)
    Toastify({
        text: "Producto añadido al carrito",
        duration: 2000,
        gravity: "top",
        stopOnFocus: false
        }).showToast()
}

cargarFavoritos()