const { createApp } = Vue
  createApp({
    data() {
      return {
        usuarios:[],
        //url:'http://localhost:5000/usuarios', 
   // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
        url:'https://rchirinoss.pythonanywhere.com/usuarios',   // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /*atributos para el guardar los valores del formulario */
        id:0,
        nombre:"",
        apellido:"",
        correo:"",
        password:"", 
        rol:"",
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(id) {
            const url = this.url+'/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
			 alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar(){
            let usuario = {
                nombre:this.nombre,
                apellido:this.apellido,
                correo:this.correo,
                password:this.password,
                rol:this.rol
            }
            var options = {
                body:JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./productos.html";  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })                
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')

  
  
// Función para manejar el cambio de tipo de campo de entrada
function mostrarContraseña() {
    var checkbox = document.getElementById("mostrar-contraseña");
    var password = document.getElementById("password");
    var cambiartexto = document.getElementById("cambiartexto");

    // Si el checkbox está marcado, cambia a tipo texto
    if (checkbox.checked) {
    password.type = "text";
    cambiartexto.textContent = "Ocultar Contraseña"
    } else {
    // Si el checkbox no está marcado, cambia a tipo password
    password.type = "password";
    cambiartexto.textContent = "Mostrar Contraseña"
    }
}
// Asocia la función al evento de cambio del checkbox
var checkbox = document.getElementById("mostrar-contraseña");
checkbox.addEventListener("change", mostrarContraseña);

  