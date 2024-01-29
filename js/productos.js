const { createApp } = Vue
createApp({
    data() {
        return {
            url: './json/productos.json',
            error: false,
            productos: [],
            datosFinales: [],
            datos: [],
            tipos: [],
            seccion: ""
        }
    },
    methods: {
        fetchdata(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    
                    this.datos = data.productos
                    this.datosFinales = data.productos
                    for (elemento of this.datos) {
                        if (this.tipos.indexOf(elemento.seccion) < 0)
                            this.tipos.push(elemento.seccion)
                    }
                    console.log(this.tipos)
                }
                );
        },

        filtrarDatos() {
            seccion = document.querySelector("select").value
            this.datosFinales = this.datos.filter(x => x.seccion === seccion)
        },

        ordenarDatos() {
            if (document.querySelector("#ordenPrecioAsc").checked)
                this.datosFinales.sort((a, b) => a.precio - b.precio)
            else if (document.querySelector("#ordenPrecioDesc").checked)
                this.datosFinales.sort((a, b) => b.precio - a.precio)

            console.log(this.datosFinales)
        }
    },

    created() {
        this.fetchdata(this.url)

    }

}).mount('#app')