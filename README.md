# Super Codo

Documentación TPO Desarrollo Web HTML, CSS y Javascript

• Integrantes del grupo:
Carolina Briguez, Estefania Leiba, Romina Schab y Renzo Chirinos.

• Objetivo:
El propósito de nuestro proyecto es promocionar y aumentar las ventas de un supermercado (ficticio) por medio del comercio electrónico. Decidimos hacer esto, como grupo, porque consideramos que este sistema ha tenido un crecimiento importante durante y después de la pandemia.


• Planificación:
La idea inicial arranco con un boceto presentado por uno de los integrantes, y sobre ese boceto se fue haciendo observaciones y modificaciones.
https://supercodo.netlify.app/images/main/boceto.png
 
Teniendo en cuenta la opinión de cada uno, pensamos un nombre, inventamos un logo, creamos un repositorio, y comenzamos a trabajar en simultaneo en distintas ramas.

En todo momento nos encontramos comunicados mediante un grupo de WhatsApp, donde organizamos el trabajo, compartimos cada modificación y despejamos dudas.


• Descripción del proyecto:
El sitio está armado de manera adaptable a distintos dispositivos, utilizando HTML, CSS y JS, en ningún momento se utilizó Bootstrap.

El sitio cuenta con cinco páginas a las cuales se puede acceder desde un menú de navegación horizontal ubicada en el “header” de todas las páginas. Este menú de navegación se transforma en menú hamburguesa al disminuir el tamaño de la pantalla. 

El logo también se muestra diferente según el tamaño de pantalla; en una pantalla grande (computadora) podemos observarlo fijo en la parte central del “header”, y en un dispositivo de pantalla chica (celular o tablet), lo vemos desplazarse hacia la derecha para darle espacio al menú hamburguesa.

El carrousel y las tarjetas selectoras de categoría que se encuentran en el “main” del “índex”, las tarjetas de todos los productos (almacén, bebidas, frutas-verduras, limpieza) y el logo de WhatsApp cambian de tamaño cuando el mouse pasa por encima de estas. Para estas animaciones se uso las animaciones predefinidas de CSS y solo para el logo de WhatsApp se usó una animación proporcionada por el sitio “animate.style”.

Se utiliza “QuerySelector” para alimentar el “header” y “footer” de todas las páginas, reutilizando el mismo código.
En la página de “Productos” se consume una API de todos los artículos que ofrecemos. Esta API esta 100% elaborada por nosotros. En esta misma página agregamos un carrito de compra, que por el momento no podemos hacerlo funcionar con VUE, pero si con “QuerySelector”, esto último se puede revisar en las páginas “Almacén, Bebidas, Frutas-Verduras y Limpieza; y agregamos un filtro según categoría y un ordenamiento según el precio del producto.

En la pagina de contacto, tenemos un formulario el cual al presionar el botón “Enviar” le llega por mail la información cargada, en este formulario, a uno de los integrantes del grupo.

Y por último en la página de “Quienes Somos” podemos encontrar la presentación de cada integrante del grupo.
