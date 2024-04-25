let cart = JSON.parse(localStorage.getItem("cart")) || []
let fav = JSON.parse(localStorage.getItem("fav")) || []

function mostrarProductos(){
    const prodCont = document.getElementById("prod-cont")
    fetch('https://raw.githubusercontent.com/Bonya29/53940_JavaScript_Coderhouse_Berardost-Ventas/main/data/productos.json')
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach(producto => {
            prodCont.innerHTML += `
            <section class="card">
                <img src=${producto.Imagen}>
                <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
                <h3>$${producto.Precio}</h3>
                <button id="btn-comprar" class="btn-comp">Comprar</button>
                <button class="btn-fav">❤</button>
            </section>`
            añadirEventoBotones()
        })
    })
}

function mostrarTeclados() {
    const tecCont = document.getElementById("tec-cont")
    fetch('https://raw.githubusercontent.com/Bonya29/53940_JavaScript_Coderhouse_Berardost-Ventas/main/data/productos.json')
    .then((resp) => resp.json())
    .then((data) => {
        const tecFilter = data.filter(producto => producto.Categoria === "Teclado")
        tecFilter.forEach(producto => {
            tecCont.innerHTML += `
            <section class="card">
                <img src=${producto.Altimagen}>
                <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
                <h3>$${producto.Precio}</h3>
                <button id="btn-comprar" class="btn-comp">Comprar</button>
                <button class="btn-fav">❤</button>
            </section>`
            añadirEventoBotones()
        })
        window.onload = window.scrollTo(0, document.body.scrollHeight)
    })
}

function mostrarMouses() {
    const mouseCont = document.getElementById("mouse-cont")
    fetch('https://raw.githubusercontent.com/Bonya29/53940_JavaScript_Coderhouse_Berardost-Ventas/main/data/productos.json')
    .then((resp) => resp.json())
    .then((data) => {
        const mouseFilter = data.filter(producto => producto.Categoria === "Mouse")
        mouseFilter.forEach(producto => {
            mouseCont.innerHTML += `
            <section class="card">
                <img src=${producto.Altimagen}>
                <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
                <h3>$${producto.Precio}</h3>
                <button id="btn-comprar" class="btn-comp">Comprar</button>
                <button class="btn-fav">❤</button>
            </section>`
            añadirEventoBotones()
        })
        window.onload = window.scrollTo(0, document.body.scrollHeight)
    })
}

function mostrarAuriculares() {
    const aurCont = document.getElementById("aur-cont")
    fetch('https://raw.githubusercontent.com/Bonya29/53940_JavaScript_Coderhouse_Berardost-Ventas/main/data/productos.json')
    .then((resp) => resp.json())
    .then((data) => {
        const aurFilter = data.filter(producto => producto.Categoria === "Auriculares")
        aurFilter.forEach(producto => {
            aurCont.innerHTML += `
            <section class="card">
                <img src=${producto.Altimagen}>
                <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
                <h3>$${producto.Precio}</h3>
                <button id="btn-comprar" class="btn-comp">Comprar</button>
                <button class="btn-fav">❤</button>
            </section>`
            añadirEventoBotones()
        })
        window.onload = window.scrollTo(0, document.body.scrollHeight)
    })
}

function mostrarMonitores() {
    const monCont = document.getElementById("mon-cont")
    fetch('https://raw.githubusercontent.com/Bonya29/53940_JavaScript_Coderhouse_Berardost-Ventas/main/data/productos.json')
    .then((resp) => resp.json())
    .then((data) => {
        const monFilter = data.filter(producto => producto.Categoria === "Monitor")
        monFilter.forEach(producto => {
            monCont.innerHTML += `
            <section class="card">
                <img src=${producto.Altimagen}>
                <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
                <h3>$${producto.Precio}</h3>
                <button id="btn-comprar" class="btn-comp">Comprar</button>
                <button class="btn-fav">❤</button>
            </section>`
            añadirEventoBotones()
        })
        window.onload = window.scrollTo(0, document.body.scrollHeight)
    })
}

function mostrarRAM() {
    const ramCont = document.getElementById("ram-cont")
    fetch('https://raw.githubusercontent.com/Bonya29/53940_JavaScript_Coderhouse_Berardost-Ventas/main/data/productos.json')
    .then((resp) => resp.json())
    .then((data) => {
        const ramFilter = data.filter(producto => producto.Categoria === "Memoria RAM")
        ramFilter.forEach(producto => {
            ramCont.innerHTML += `
            <section class="card">
                <img src=${producto.Altimagen}>
                <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
                <h3>$${producto.Precio}</h3>
                <button id="btn-comprar" class="btn-comp">Comprar</button>
                <button class="btn-fav">❤</button>
            </section>`
            añadirEventoBotones()
        })
        window.onload = window.scrollTo(0, document.body.scrollHeight)
    })
}

function mostrarAlmacenamiento() {
    const almCont = document.getElementById("alm-cont")
    fetch('https://raw.githubusercontent.com/Bonya29/53940_JavaScript_Coderhouse_Berardost-Ventas/main/data/productos.json')
    .then((resp) => resp.json())
    .then((data) => {
        const almFilter = data.filter(producto => producto.Tipo === "Almacenamiento")
        almFilter.forEach(producto => {
            almCont.innerHTML += `
            <section class="card">
                <img src=${producto.Altimagen}>
                    <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
                <h3>$${producto.Precio}</h3>
                <button id="btn-comprar" class="btn-comp">Comprar</button>
                <button class="btn-fav">❤</button>
            </section>`
            añadirEventoBotones()
        })
        window.onload = window.scrollTo(0, document.body.scrollHeight)
    })
}

function mostrarGraficas() {
    const grafCont = document.getElementById("graf-cont")
    fetch('https://raw.githubusercontent.com/Bonya29/53940_JavaScript_Coderhouse_Berardost-Ventas/main/data/productos.json')
    .then((resp) => resp.json())
    .then((data) => {
        const grafFilter = data.filter(producto => producto.Categoria === "Placa de Video")
        grafFilter.forEach(producto => {
            grafCont.innerHTML += `
            <section class="card">
                <img src=${producto.Altimagen}>
                <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
                <h3>$${producto.Precio}</h3>
                <button id="btn-comprar" class="btn-comp">Comprar</button>
                <button class="btn-fav">❤</button>
            </section>`
            añadirEventoBotones()
        })
        window.onload = window.scrollTo(0, document.body.scrollHeight)
    })
}

function mostrarMotherboards() {
    const motherCont = document.getElementById("mother-cont")
    fetch('https://raw.githubusercontent.com/Bonya29/53940_JavaScript_Coderhouse_Berardost-Ventas/main/data/productos.json')
    .then((resp) => resp.json())
    .then((data) => {
        const motherFilter = data.filter(producto => producto.Categoria === "Motherboard")
        motherFilter.forEach(producto => {
            motherCont.innerHTML += `
            <section class="card">
                <img src=${producto.Altimagen}>
                <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
                <h3>$${producto.Precio}</h3>
                <button id="btn-comprar" class="btn-comp">Comprar</button>
                <button class="btn-fav">❤</button>
            </section>`
            añadirEventoBotones()
        })
        window.onload = window.scrollTo(0, document.body.scrollHeight)
    })
}

function mostrarProcesadores() {
    const procCont = document.getElementById("proc-cont")
    fetch('https://raw.githubusercontent.com/Bonya29/53940_JavaScript_Coderhouse_Berardost-Ventas/main/data/productos.json')
    .then((resp) => resp.json())
    .then((data) => {
        const procFilter = data.filter(producto => producto.Categoria === "Procesador")
        procFilter.forEach(producto => {
            procCont.innerHTML += `
            <section class="card">
                <img src=${producto.Altimagen}>
                <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
                <h3>$${producto.Precio}</h3>
                <button id="btn-comprar" class="btn-comp">Comprar</button>
                <button class="btn-fav">❤</button>
            </section>`
            añadirEventoBotones()
        })
        window.onload = window.scrollTo(0, document.body.scrollHeight)
    })
}

let ind = 0
function comprobarId() {
    if (document.getElementById("prod-cont")) {
        ind = 0
        mostrarProductos()
    } else if (document.getElementById("tec-cont")) {
        ind = 0
        mostrarTeclados()
    } else if (document.getElementById("mouse-cont")) {
        ind = 3
        mostrarMouses()
    } else if (document.getElementById("aur-cont")) {
        ind = 6
        mostrarAuriculares()
    } else if (document.getElementById("mon-cont")) {
        ind = 9
        mostrarMonitores()
    } else if (document.getElementById("ram-cont")) {
        ind = 12
        mostrarRAM()
    } else if (document.getElementById("alm-cont")) {
        ind = 15
        mostrarAlmacenamiento()
    } else if (document.getElementById("graf-cont")) {
        ind = 18
        mostrarGraficas()
    } else if (document.getElementById("mother-cont")) {
        ind = 21
        mostrarMotherboards()
    } else if (document.getElementById("proc-cont")) {
        ind = 24
        mostrarProcesadores()
    }
}

function agregarCarrito(index) {
    fetch('https://raw.githubusercontent.com/Bonya29/53940_JavaScript_Coderhouse_Berardost-Ventas/main/data/productos.json')
    .then((resp) => resp.json())
    .then((data) => {
        const producto = data[index + ind]
        const {Categoria, Fabricante, Modelo, Precio, Cantidad} = producto
        const cartItem = {Categoria, Fabricante, Modelo, Precio, Cantidad}
        cart.push(cartItem)
        let cartJSON = JSON.stringify(cart)
        localStorage.setItem("cart", cartJSON)
    })
    Toastify({
        text: "Producto añadido al carrito",
        duration: 3000,
        gravity: "top",
        stopOnFocus: false
        }).showToast()
}

function agregarFavorito(index) {
    fetch('https://raw.githubusercontent.com/Bonya29/53940_JavaScript_Coderhouse_Berardost-Ventas/main/data/productos.json')
    .then((resp) => resp.json())
    .then((data) => {
        const producto = data[index + ind]
        const {Categoria, Fabricante, Modelo, Precio, Cantidad} = producto
        const favItem = {Categoria, Fabricante, Modelo, Precio, Cantidad} 
        fav.push(favItem)
        let favJSON = JSON.stringify(fav)
        localStorage.setItem("fav", favJSON)
    })
    Toastify({
        text: "Producto añadido a favoritos",
        duration: 3000,
        gravity: "top",
        stopOnFocus: false
        }).showToast()  
}

function añadirEventoBotones(){
    const botonComprar = document.querySelectorAll(".btn-comp")
    botonComprar.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            agregarCarrito(index)
        })
    })

    const botonFavorito = document.querySelectorAll(".btn-fav")
    botonFavorito.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            agregarFavorito(index)
        })
    })
}

comprobarId()