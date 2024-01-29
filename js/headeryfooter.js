let cad = `
<div class="user">
    <table>
        <thead>
            <tr>
                <th scope="col"><a href="login.html">Log in</a></th>
                <th scope="col"><a href="registro.html">Sign in</a></th>                
            </tr>
        </thead>
    </table>
</div>

<div class="logo">
    <a href="index.html"><img src="./images/header/logoheader.png" alt="Logo"></a>
</div>
        
<div class="contenedormenu">
    <input type="checkbox" id="menu-check">
    <label id="menu" for="menu-check">
        <span id="menu-abrir">&#9776;</span>
        <span id="menu-cerrar">X</span>
    </label>
                            
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li>
                <a href="productos.html">Productos</a>
                <ul class="dropdown">
                    <li><a href="almacen.html">Almacen</a></li>
                    <li><a href="bebidas.html">Bebidas</a></li>
                    <li><a href="limpieza.html">Limpieza</a></li>
                    <li><a href="frutasyverduras.html">Frutas y Verduras</a></li>
                </ul>
            </li>
            <li><a href="sucursales.html">Sucursales</a></li>
            <li><a href="contacto.html">Contacto</a></li>
            <li><a href="quienessomos.html">Quienes Somos</a></li>
            <li><a href="productos_lista.html">Editar</a></li>
            <li><a href="usuarios.html">Usuario</a></li>
        </ul>        
    </nav>
    
</div>
`

document.querySelector("header").innerHTML = cad

cad = `
<div id="content">
    <div class="c1">
        <p>Seguinos en las redes</p>
    
        <a href="https://www.facebook.com/" target="_blank"><img src="./images/footer/facebook.png" alt="facebook"></a>

        <a href="https://www.instagram.com/" target="_blank"><img src="./images/footer/instagram.png" alt="instagram"></a>

        <a href="https://twitter.com/" target="_blank"><img src="./images/footer/twitter.png" alt="twitter"></a>

        <a href="https://www.youtube.com/" target="_blank"><img src="./images/footer/youtube.png" alt="youtube"></a>
    </div>

    <div class="c2">        
        <p>Ventas y Postventas</p>
           
        <a href="#">0810-810-9994 -</a><a href="contacto.html">Contacto</a>       
    </div>
</div>

<hr>

<div class="grid">
    <ul class="list1">
        <li class="title">Mi Cuenta</li>
        <li>Ofertas exclusivas</li>
        <li>Tarjeta Codo ICBC</li>
        <li>Mis Compras</li>
        <li>Mi Perfil</li>
    </ul>
    <ul class="list2">
        <li class="title">Somos Super Codo</li>
        <li>FAQs</li>
        <li>Trabajá en Super Codo </li>
        <li><a href="quienessomos.html">Quienes somos</a></li>
        <li><a href="sucursales.html">Nuestras Sucursales</a></li>
    </ul>
    <ul class="list3">
        <li class="title">Confianza en tus compras</li>
        <li>Términos y condiciones - Ley N° 24.240 de Defensa del Consumidor</li>
        <li>Política de privacidad</li>
        <li>Promociones vigentes</li>
    </ul>
    <ul class="list4">
        <li class="title">Mas Información</li>
        <li>Metodos de pago</li>
        <li>Financiación</li>
        <li>Cambios y devoluciones</li>
    </ul>
</div>

<hr>

<div class="copyright">
    <p>Sitio desarrollado por @equipoCodo</p>
    <p>2023, <a href="https://rchirinoss.github.io/SuperCodo/">SuperCodo.com.ar</a> - Todos los derechos reservados</p>
</div>

`
document.querySelector("footer").innerHTML = cad       