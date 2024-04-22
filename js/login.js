let sesionIniciada

function verificarSesionIniciada() {
    let sesionIniciadaLS = localStorage.getItem("sesionIniciada")
    if (sesionIniciadaLS === "true") {
        cerrarSesion()
    }
}

function iniciarSesion() {
    const loginMain = document.getElementById("login-main")
    loginMain.innerHTML = `
        <div class="first-div-login">
            <h1>Inicia Sesión</h1>
            <a href="">Volver Atras</a>
        </div>
        <div class="login-register" style="flex-direction: column;">
            <input type="text" placeholder="Nombre y Apellido" id="login-name">
            <input type="password" placeholder="Contraseña" id="login-pass">
            <button id="login" class="btn-login-register">Iniciar Sesión</button>
        </div>`

    const login = document.getElementById("login")
    login.addEventListener("click", () => {
        validarDatos()
    })
}

function registrarse() {
    const loginMain = document.getElementById("login-main")
    loginMain.innerHTML = `
        <div class="first-div-login">
            <h1>Crea una Cuenta</h1>
            <a href="">Volver Atras</a>
        </div>
        <div class="login-register" style="flex-direction: column;">
            <input type="text" placeholder="Nombre y Apellido*" id="reg-name">
            <input type="email" placeholder="Email*" id="reg-email">
            <input type="tel" placeholder="Telefono (Opcional)" id="reg-tel">
            <input type="number" placeholder="Año de Nacimiento*" id="reg-byear">
            <input type="number" placeholder="Documento*" id="reg-document">
            <input type="text" placeholder="Crear Contraseña*" id="reg-pass">
            <button id="register" class="btn-login-register">Crear Cuenta</button>
        </div>`

    const register = document.getElementById("register")
    register.addEventListener("click", () => {
        guardarDatos()
    })
}

function cerrarSesion() {
    const UsuariosCreados = JSON.parse(localStorage.getItem("UsuariosCreados"))
    const loginMain = document.getElementById("login-main")
    loginMain.innerHTML = `
        <div class="first-div-login">
            <h1 style="margin-bottom: 2rem;">Sesión Iniciada</h1>
        </div>
        <div class="login-register" style="flex-direction: column;">
            <p>Hola ${UsuariosCreados[0].Nombre}.</p>
            <p>¿Quieres cerrar la sesión?</p>
            <button id="logout" class="btn-login-register">Si, cerrar sesión</button>
        </div>`
    
    const logout = document.getElementById("logout")
    logout.addEventListener("click", () => {
        localStorage.removeItem("sesionIniciada")
        sesionIniciada = false
        localStorage.setItem("sesionIniciada", sesionIniciada)
        location.reload()
    })
}

function guardarDatos() {
    const regUser = document.getElementById("reg-name").value
    const regEmail = document.getElementById("reg-email").value
    const regTelephone = document.getElementById("reg-tel").value
    const regBirthYear = document.getElementById("reg-byear").value
    const regDocument = document.getElementById("reg-document").value
    const regPassword = document.getElementById("reg-pass").value
    let verification = parseInt(regBirthYear)
    if (!regUser || !regEmail || !regBirthYear || !regDocument || !regPassword) {
        alert("Completa todos los campos marcados con *")
    } else if (2024 - verification >= 18) {
        let usuarios = []
        let datos = {Nombre: regUser, Email: regEmail, Telefono: regTelephone, Nacimiento: verification, Documento: regDocument, Contraseña: regPassword}
        usuarios.push(datos)
        let UsuariosJSON = JSON.stringify(usuarios)
        localStorage.setItem("UsuariosCreados", UsuariosJSON)
        alert("Cuenta creada, ahora puedes iniciar sesión en tu nueva cuenta")
        iniciarSesion()
    } else {
        alert("Lo sentimos, no tienes la edad suficiente para crearte una cuenta.")
        document.getElementById("reg-name").value = ""
        document.getElementById("reg-email").value = ""
        document.getElementById("reg-tel").value = ""
        document.getElementById("reg-byear").value = ""
        document.getElementById("reg-document").value = ""
        document.getElementById("reg-pass").value = ""
    }        
}

function validarDatos() {
    const user = document.getElementById("login-name").value
    const password = document.getElementById("login-pass").value

    const UsuariosCreados = JSON.parse(localStorage.getItem("UsuariosCreados")) || []
    let userFound = UsuariosCreados.find(usuario => usuario.Nombre === user && usuario.Contraseña === password)

    if (userFound) {
        localStorage.removeItem("sesionIniciada")
        sesionIniciada = true
        localStorage.setItem("sesionIniciada", sesionIniciada)
        cerrarSesion()
    } else {
        alert("El usuario no existe o la contraseña es incorrecta.")
        document.getElementById("login-name").value = ""
        document.getElementById("login-pass").value = ""
    }
}

const botonLogin = document.getElementById("btn-log")
botonLogin.addEventListener("click", () => {
    iniciarSesion()
})

const botonRegister = document.getElementById("btn-reg")
botonRegister.addEventListener("click", () => {
    registrarse()
})

verificarSesionIniciada()