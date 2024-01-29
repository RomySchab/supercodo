const miAplicacion = Vue.createApp({
    components: {
        'mapa1': componente1,
        'mapa2': componente2,
        'mapa3': componente3
    },
    data(){
        return{
            mapa1_visible: false,
            mapa2_visible: false,
            mapa3_visible: false
        }
    },
    mounted(){
        this.mapa1_visible = true
    },
    methods:{
        show(componente){
            this.mapa1_visible = false
            this.mapa2_visible = false
            this.mapa3_visible = false
            console.clear()
            console.log(componente)
            if (componente == "mapa1"){
                this.mapa1_visible = true
            } else if (componente == "mapa2"){
                this.mapa2_visible = true
            } else if (componente == "mapa3"){
                this.mapa3_visible = true
            }
        }
    }
}).mount("#locale")