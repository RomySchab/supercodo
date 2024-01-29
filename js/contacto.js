cad=`
<div id="contacto">
    <div class="con1">
        <h2>Comunicate con nosotros<h2>        
        <p>Nuestros horarios de atención</p>              
        <p><img src="./images/main/reloj.webp" alt="reloj">Lunes a Viernes de 8hs a 22:00hs.</p>
        <p>Sábados de 8hs a 19:00hs.</p>
        <p><img src="./images/main/telefono.webp" alt="telefono">0810-810-9994</p>
        <p><img src="./images/main/email.webp" alt="mail">contacto@supercodo.com.ar</p>  
    </div>

    <div class="formulario">            
        <form action="https://formsubmit.co/rchirinos@live.com.ar" method="POST">
            <h3>Contacto</h3>
            <div class="input-group">
                <label for="name">Nombre</label>
                <input type="text" name="name" id="name" placeholder="Nombre">

                <label for="phone">Telefono</label>
                <input type="tel" name="phone" id="phone" placeholder="Telefono">

                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email">

                <label for="message">Mensaje</label>
                <textarea name="message" id="message" cols="30" rows="5" placeholder="Mensaje"></textarea>

                <div class="form-txt">
                    <a href="#">Politicas de privacidad</a>
                    <a href="#">Terminos y condiciones</a>
                </div>

                <input class="btn" type="submit" value="Enviar">

                <input type="hidden" name="_next" value="https://supercodo.netlify.app/contacto.html">
                <input type="hidden" name="_captcha" value="false">
            </div>
        </form>            
    </div>
</div>
`

document.querySelector("main").innerHTML = cad