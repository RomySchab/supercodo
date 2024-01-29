console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        productos:[],
        datos:[],
        tipos:[],
        id:0,
        descripcion:"",
        seccion:"",
        imagen:"",
        stock:0,
        precio:0,        
        url:'https://rchirinoss.pythonanywhere.com/productos/'+id,
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id
                    this.descripcion = data.descripcion;
                    this.seccion=data.seccion                    
                    this.imagen=data.imagen
                    this.stock=data.stock
                    this.precio=data.precio                                        
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },

        modificar() {
            let producto = {
                descripcion:this.descripcion,
                seccion:this.seccion,
                precio: this.precio,
                stock: this.stock,
                imagen: this.imagen
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./productos_lista.html"; // navega a productos.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
