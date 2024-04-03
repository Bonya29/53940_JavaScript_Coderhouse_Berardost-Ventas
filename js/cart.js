const cartprod = JSON.parse(localStorage.getItem("cart")) || []

function cargarCarrito() {
    const carrito = document.getElementById("carrito")
    let total = 0
    cartprod.forEach((cartprod, index) => {
        precio = parseInt(cartprod.Precio)
        total += precio
        carrito.innerHTML += `
        <div class="tabla">
            <span class="ord">${index + 1}</span>
            <span class="prod-name">${cartprod.Categoria} ${cartprod.Fabricante} ${cartprod.Modelo}</span>
            <span class="precio">$${cartprod.Precio}</span>
        </div>`
    })

    const totalMain = document.getElementById("total")
    totalMain.innerHTML = `
        <h4>Total del Carrito: $${total}</h4>`
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
        alert("Por favor, completa todos los campos para realizar la compra.")
    } else {
        alert("Compra realizada, muchas gracias.\nEn los proximos 2 dias habiles enviaremos tu pedido al destino que nos indicaste. \nPor cualquier inconveniente con la compra puedes contactarte con nosotros en nuestra pagina principal, en el apartado 'Contactanos'")
        localStorage.removeItem("cart")
        location.reload()
    }
}

const botonComprarCarrito = document.getElementById("btn-comprar")
botonComprarCarrito.addEventListener("click", () => {
    realizarCompra()
})

cargarCarrito()