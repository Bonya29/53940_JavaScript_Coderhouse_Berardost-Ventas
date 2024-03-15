let fullname
let age
let doc
let typeProdSelected
let typeProd
let productList = ""
let prodSelected = 4
let cart = []
let prod
let productListCart = ""
let total = 0

alert("Bienvenido a Berardo Soluciones Tecnologicas, tienda de productos gamers y tecnologicos.\nPor favor, ingrese los siguientes datos.")
function ingresoInfo() {
    while (!fullname) {
        fullname = prompt("Nombre y apellido:")
    }
    while (!age || isNaN(age)) {
        age = parseInt(prompt("Edad:"))
    }
    while (!doc || isNaN(doc)) {
        doc = prompt("Documento:")
    }
}

function verificacion() {
    if (age < 18) {
        alert("Lo sentimos, usted no tiene la edad suficiente para realizar compras en nuestra pagina.")
    } else {
        alert("Bienvenido, " + fullname)
        elegirTipoProducto()
    }
}

function elegirTipoProducto() {
    while (typeProdSelected != "0" && typeProdSelected != "1" && typeProdSelected != "2" && typeProdSelected != "3" && typeProdSelected != "4" && typeProdSelected != "5" && typeProdSelected != "6" && typeProdSelected != "7" && typeProdSelected != "8") {
        typeProdSelected = prompt("¿Qué tipo de producto estas buscando? Tenemos los siguientes: \n0: Teclados\n1: Mouses\n2: Auriculares\n3: Monitores\n4: RAM\n5: Almacenamiento\n6: Graficas\n7: Motherboards\n8: Procesadores")
        switch (typeProdSelected) {
            case "0":
                typeProd = Teclados
                break;
            case "1":
                typeProd = Mouses
                break;
            case "2":
                typeProd = Auriculares
                break;
            case "3":
                typeProd = Monitores
                break;
            case "4":
                typeProd = RAM
                break;
            case "5":
                typeProd = Almacenamiento
                break;
            case "6":
                typeProd = Graficas
                break;
            case "7":
                typeProd = Motherboards
                break;
            case "8":
                typeProd = Procesadores
                break;
            default:
                alert("No ha elegido ninguno de nuestros productos disponibles")
        }
    }
    elegirProducto()
}

function mostrarProductos(typeProd) {
    typeProd.forEach((producto, i) => {
        productList += `${i + 1}: ${producto.Fabricante} ${producto.Modelo} $${producto.Precio}\n`
    })
    return productList;
}

function elegirProducto() {
    prodSelected = 4
    while (prodSelected != 0 && prodSelected != 1 && prodSelected != 2 && prodSelected != 3) {
        prodSelected = parseInt(prompt("De ese tipo de producto tenemos los siguientes disponibles:\n" + mostrarProductos(typeProd) + "\nIngrese el numero del producto que desea añadir al carrito. \nSi desea volver atras, ingrese 0"))
        productList = ""
    }
    if (prodSelected == 0) {
        typeProdSelected = ""
        elegirTipoProducto()
    } else {
        prod = typeProd[prodSelected - 1]
        cart.push(prod)
        continuarCompra()
    }
}

function armadoCarrito() {
    cart.forEach((producto, i) => {
        productListCart += `${i + 1}: ${producto.Fabricante} ${producto.Modelo} $${producto.Precio}\n`
        total += producto.Precio
    })
}

function continuarCompra() {
    if (confirm("El producto a sido añadido al carrito.\n¿Le gustaria comprar algun otro producto?")) {
        typeProdSelected = ""
        elegirTipoProducto()
    } else {
        armadoCarrito()
        confirmarCompra()
    }
}

function confirmarCompra(){
    if (confirm("Productos en carrito:\n" + productListCart + "\nTotal a pagar: $" + total + "\n¿Quiere confirmar la compra?")) {
        alert("Compra realizada, muchas gracias.")
    } else {
        alert("Compra cancelada, hasta luego.")
    }
}

ingresoInfo()
verificacion()