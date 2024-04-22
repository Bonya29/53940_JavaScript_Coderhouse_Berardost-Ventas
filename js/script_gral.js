let cart = JSON.parse(localStorage.getItem("cart")) || [];
let fav = JSON.parse(localStorage.getItem("fav")) || [];

function mostrarProductos(){
    const prodCont = document.getElementById("prod-cont")
    productos.forEach(productos => {
        prodCont.innerHTML += `
        <section class="card">
            <img src=${productos.Imagen}>
            <h2>${productos.Categoria} ${productos.Fabricante} ${productos.Modelo}</h2>
            <h3>$${productos.Precio}</h3>
            <button id="btn-comprar" class="btn-comp">Comprar</button>
            <button class="btn-fav">❤</button>
        </section>`
    })
}

function mostrarTeclados() {
    const tecFilter = productos.filter(producto => producto.Categoria === "Teclado")
    const tecCont = document.getElementById("tec-cont")
    tecFilter.forEach(producto => {
        tecCont.innerHTML += `
        <section class="card">
            <img src=${producto.Altimagen}>
            <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
            <h3>$${producto.Precio}</h3>
            <button class="btn-comp">Comprar</button>
            <button class="btn-fav">❤</button>
        </section>`
    })
}

function mostrarMouses() {
    const mouseFilter = productos.filter(producto => producto.Categoria === "Mouse")
    const mouseCont = document.getElementById("mouse-cont")
    mouseFilter.forEach(producto => {
        mouseCont.innerHTML += `
        <section class="card">
            <img src=${producto.Altimagen}>
            <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
            <h3>$${producto.Precio}</h3>
            <button class="btn-comp">Comprar</button>
            <button class="btn-fav">❤</button>
        </section>`
    })
}

function mostrarAuriculares() {
    const aurFilter = productos.filter(producto => producto.Categoria === "Auriculares")
    const aurCont = document.getElementById("aur-cont")
    aurFilter.forEach(producto => {
        aurCont.innerHTML += `
        <section class="card">
            <img src=${producto.Altimagen}>
            <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
            <h3>$${producto.Precio}</h3>
            <button class="btn-comp">Comprar</button>
            <button class="btn-fav">❤</button>
        </section>`
    })
}

function mostrarMonitores() {
    const monFilter = productos.filter(producto => producto.Categoria === "Monitor")
    const monCont = document.getElementById("mon-cont")
    monFilter.forEach(producto => {
        monCont.innerHTML += `
        <section class="card">
            <img src=${producto.Altimagen}>
            <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
            <h3>$${producto.Precio}</h3>
            <button class="btn-comp">Comprar</button>
            <button class="btn-fav">❤</button>
        </section>`
    })
}

function mostrarRAM() {
    const ramFilter = productos.filter(producto => producto.Categoria === "Memoria RAM")
    const ramCont = document.getElementById("ram-cont")
    ramFilter.forEach(producto => {
        ramCont.innerHTML += `
        <section class="card">
            <img src=${producto.Altimagen}>
            <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
            <h3>$${producto.Precio}</h3>
            <button class="btn-comp">Comprar</button>
            <button class="btn-fav">❤</button>
        </section>`
    })
}

function mostrarAlmacenamiento() {
    const almFilter = productos.filter(producto => producto.Tipo === "Almacenamiento")
    const almCont = document.getElementById("alm-cont")
    almFilter.forEach(producto => {
        almCont.innerHTML += `
        <section class="card">
            <img src=${producto.Altimagen}>
            <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
            <h3>$${producto.Precio}</h3>
            <button class="btn-comp">Comprar</button>
            <button class="btn-fav">❤</button>
        </section>`
    })
}

function mostrarGraficas() {
    const grafFilter = productos.filter(producto => producto.Categoria === "Placa de Video")
    const grafCont = document.getElementById("graf-cont")
    grafFilter.forEach(producto => {
        grafCont.innerHTML += `
        <section class="card">
            <img src=${producto.Altimagen}>
            <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
            <h3>$${producto.Precio}</h3>
            <button class="btn-comp">Comprar</button>
            <button class="btn-fav">❤</button>
        </section>`
    })
}

function mostrarMotherboards() {
    const motherFilter = productos.filter(producto => producto.Categoria === "Motherboard")
    const motherCont = document.getElementById("mother-cont")
    motherFilter.forEach(producto => {
        motherCont.innerHTML += `
        <section class="card">
            <img src=${producto.Altimagen}>
            <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
            <h3>$${producto.Precio}</h3>
            <button class="btn-comp">Comprar</button>
            <button class="btn-fav">❤</button>
        </section>`
    })
}

function mostrarProcesadores() {
    const procFilter = productos.filter(producto => producto.Categoria === "Procesador")
    const procCont = document.getElementById("proc-cont")
    procFilter.forEach(producto => {
        procCont.innerHTML += `
        <section class="card">
            <img src=${producto.Altimagen}>
            <h2>${producto.Categoria} ${producto.Fabricante} ${producto.Modelo}</h2>
            <h3>$${producto.Precio}</h3>
            <button class="btn-comp">Comprar</button>
            <button class="btn-fav">❤</button>
        </section>`
    })
}

if (document.getElementById("prod-cont")) {
    mostrarProductos()
} else if (document.getElementById("tec-cont")) {
    mostrarTeclados()
} else if (document.getElementById("mouse-cont")) {
    mostrarMouses()
} else if (document.getElementById("aur-cont")) {
    mostrarAuriculares()
} else if (document.getElementById("mon-cont")) {
    mostrarMonitores()
} else if (document.getElementById("ram-cont")) {
    mostrarRAM()
} else if (document.getElementById("alm-cont")) {
    mostrarAlmacenamiento()
} else if (document.getElementById("graf-cont")) {
    mostrarGraficas()
} else if (document.getElementById("mother-cont")) {
    mostrarMotherboards()
} else if (document.getElementById("proc-cont")) {
    mostrarProcesadores()
}

function agregarCarrito(index) {
    const producto = productos[index]
    const {Categoria, Fabricante, Modelo, Precio, Cantidad} = producto
    const cartItem = {Categoria, Fabricante, Modelo, Precio, Cantidad}
    cart.push(cartItem)
    let cartJSON = JSON.stringify(cart)
    localStorage.setItem("cart", cartJSON)
    Toastify({
        text: "Producto añadido al carrito",
        duration: 3000,
        gravity: "top",
        stopOnFocus: false
        }).showToast();
}

function agregarFavorito(index) {
    const producto = productos[index]
    const {Categoria, Fabricante, Modelo, Precio, Cantidad} = producto
    const favItem = {Categoria, Fabricante, Modelo, Precio, Cantidad} 
    fav.push(favItem)
    let favJSON = JSON.stringify(fav)
    localStorage.setItem("fav", favJSON)
    Toastify({
        text: "Producto añadido favoritos",
        duration: 3000,
        gravity: "top",
        stopOnFocus: false
        }).showToast();    
}

const botonComprar = document.querySelectorAll(".btn-comp")
botonComprar.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        agregarCarrito(index);
    })
})

const botonFavorito = document.querySelectorAll(".btn-fav")
botonFavorito.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        agregarFavorito(index);
    })
})