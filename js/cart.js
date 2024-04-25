const cartprod = JSON.parse(localStorage.getItem("cart")) || []

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
                Toastify({
                    text: "Cantidad minima alcanzada",
                    duration: 2000,
                    gravity: "bottom",
                    stopOnFocus: false
                    }).showToast();
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
    let sesionIniciadaLS = localStorage.getItem("sesionIniciada") || "false"

    if (cartprod.length === 0) {
        Swal.fire({
            title: "Tu carrito esta vacio.",
            text: "Añade por lo menos un producto al carrito para poder realizar una compra.",
            icon: "warning"
        })
    } else if (!prov || !ciu || !cp || !dir || !tit || !num || !exp || !ccv) {
        Swal.fire({
            title: "Faltan Datos.",
            text: "Completa todos los campos obligatorios para realizar la compra.",
            icon: "warning"
        })
    } else if (sesionIniciadaLS === "false") {
        Swal.fire({
            title: "Inicia Sesión.",
            text: "Debes iniciar sesión para realizar la compra.",
            icon: "warning"
        })
    } else {
        Swal.fire({
            title: "Compra realizada, muchas gracias.",
            text: "En las proximas 48hs enviaremos tu pedido. Por cualquier inconveniente con la compra puedes contactarte con nosotros en nuestra pagina principal, en el apartado 'Contactanos'",
            icon: "success"
        })
        .then(() => {
            localStorage.removeItem("cart")
        location.reload()
        })
    }
}

function eliminarCarrito(index) {
    cartprod.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cartprod))
    Toastify({
        text: "Producto Eliminado",
        duration: 2000,
        gravity: "bottom",
        stopOnFocus: false
        }).showToast();
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