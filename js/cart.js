const cartprod = JSON.parse(localStorage.getItem("cart")) || []
let sesionIniciadaLS = localStorage.getItem("sesionIniciada")
console.log(sesionIniciadaLS)

function cargarCarrito() {
    const carrito = document.getElementById("carrito")
    let total = 0
    carrito.innerHTML = ""
    cartprod.forEach((cartprod, index) => {
        precio = parseInt(cartprod.Precio) * cartprod.Cantidad
        total += precio 
        carrito.innerHTML += `
        <div class="tabla">
            <span class="ord">${index + 1}</span>
            <span class="prod-name">${cartprod.Categoria} ${cartprod.Fabricante} ${cartprod.Modelo}</span>
            <div class="cant">
                <button class="btn-sumar" data-index="${index}">+</button>
                <span>${cartprod.Cantidad}</span>
                <button class="btn-restar" data-index="${index}">-</button>
            </div>
            <span class="precio">$${cartprod.Precio * cartprod.Cantidad}</span>
            <button class="btn-delete" data-index="${index}">✖</button>
        </div>`
    })

    const totalMain = document.getElementById("total")
    totalMain.innerHTML = `
        <h4>Total del Carrito: $${total}</h4>`

    const botonEliminar = document.querySelectorAll(".btn-delete")
    botonEliminar.forEach(boton => {
        boton.addEventListener("click", function() {
            const index = parseInt(this.getAttribute("data-index"))
            eliminarCarrito(index)
        })
    })

    const botonSumar = document.querySelectorAll(".btn-sumar")
    botonSumar.forEach(boton => {
        boton.addEventListener("click", () => {
            const index = parseInt(boton.getAttribute("data-index"))
            cartprod[index].Cantidad++
            localStorage.setItem("cart", JSON.stringify(cartprod))
            cargarCarrito()
        })
    })

    const botonRestar = document.querySelectorAll(".btn-restar")
    botonRestar.forEach(boton => {
        boton.addEventListener("click", () => {
            const index = parseInt(boton.getAttribute("data-index"))
            if(cartprod[index].Cantidad === 1) {
                alert("Cantidad minima alcanzadoa")
            } else {
                cartprod[index].Cantidad--
                localStorage.setItem("cart", JSON.stringify(cartprod))
                cargarCarrito()
            }
        })
    })
}

function realizarCompra() {
    const prov = document.getElementById("prov").value
    const ciu = document.getElementById("ciu").value
    const cp = document.getElementById("cp").value
    const dir = document.getElementById("dir").value
    const tit = document.getElementById("tit").value
    const num = document.getElementById("num").value
    const exp = document.getElementById("exp").value
    const ccv = document.getElementById("ccv").value

    if (cartprod.length === 0) {
        alert("Tu carrito esta vacio. \nAñade por lo menos un producto al carrito para poder realizar una compra.")
    } else if (!prov || !ciu || !cp || !dir || !tit || !num || !exp || !ccv) {
        alert("Por favor, completa todos los campos obligatorios para realizar la compra.")
    } else if (sesionIniciadaLS === "false") {
        alert("Debes iniciar sesión para realizar la compra")
    } else {
        alert("Compra realizada, muchas gracias.\nEn los proximos 2 dias habiles enviaremos tu pedido al destino que nos indicaste. \nPor cualquier inconveniente con la compra puedes contactarte con nosotros en nuestra pagina principal, en el apartado 'Contactanos'")
        localStorage.removeItem("cart")
        location.reload()
    }
}

function eliminarCarrito(index) {
    cartprod.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cartprod))
    cargarCarrito()
}

const botonSumar = document.querySelectorAll("sumar")
botonSumar.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        sumar(index);
    })
})

const botonRestar = document.querySelectorAll("restar")
botonRestar.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        restar(index);
    })
})

const botonComprarCarrito = document.getElementById("btn-comprar")
botonComprarCarrito.addEventListener("click", () => {
    realizarCompra()
})

cargarCarrito()