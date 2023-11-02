# E-commerce con React - Ana Random Store

<img src="github-img/Screenshot 2023-11-02 at 11.19.56.png">

## Introducción:
Este trabajo se realizó como proyecto final del curso de React de Coderhouse.
Se programó un simulador de una tienda de suecos ficticia. Ninguno de los productos existen, simplemente son imágenes creadas con inteligencia artificial.

## Datos generales:

### Sobre la alumna
- Nombre: Analía Acosta
- [LinkedIn](https://www.linkedin.com/in/analia-acosta-engineer/)
- [GitHub](https://github.com/analiaacosta2023/)

### Sobre el curso
- React - Coderhouse
- Comisión: 43305
- Profesor: Santiago Salkin
- Tutor: Enzo Gustavo Agú

## Deploy
Se puede visualizar e interactuar con la aplicación desde el [link](https://react43305-acosta-analia.vercel.app/).

## Como correr el proyecto
Este proyecto fue iniciado con [Create React App](https://github.com/facebook/create-react-app).
1. Clonar el repositorio.
2. En el directorio del proyecto, correr en la CLI:
```bash
npm start
```
3. Abrir http://localhost:3000 para visualizar en el navegador.

## Recorrido por la tienda

### Inicio
Al ingresar a la tienda, nos encontramos primero con una barra de navegación que nos permite recorrer las diferentes secciones:
- Inicio
- Productos
    - Colección flamingo
    - Colección crocodile
    - Colección dinosaur
    - Colección watermelon
    - Colección orange
- Nosotros *(en construcción)*
- Contacto *(en construcción)*
- Carrito

En **inicio**, visualizamos una lista de productos, y a partir del botón *Mostrar más*, aumenta la cantidad de productos visibles.
Se creó un pie de página a modo ilustrativo.

### Categorías
Desde la barra de navegación, presionando en *productos*, se puede acceder a las distintas **categorías** de productos. Cada categoría corresponde a una colección de los distintos diseños.

<img src="github-img/Screenshot 2023-11-02 at 11.24.35.png">

### Detalle de producto
Presionando en la tarjeta de cualquier producto, se puede acceder a su **descripción**.
Desde allí, se puede continuar con la compra o bien regresar desde el botón *Volver al inicio*.

<img src="github-img/Screenshot 2023-11-02 at 11.25.08.png">

#### Inicio de compra
1. Seleccionar talle.
2. Si hay stock, aparecerá el contador. De no haber, se notificará y se podrá seleccionar otro talle o *Volver al inicio*. 
3. Seleccionar la cantidad deseada y *Agregar al carrito*.
4. Una notificación indicará que se añadió el producto correctamente.
5. Se podrá *comprar más* del mismo producto, *volver a inicio* o *ir al carrito*.

### Carrito
Se puede acceder al **carrito** desde la barra de navegación, o bien  desde *ir al carrito* en el detalle de algún producto añadido.
En caso de no existir productos cargados, se notificará y se podrá *ir a la tienda* nuevamente.
Pero de existir productos en él, se podrá *seguir comprando*, *limpiar carrito*, borrar ítems o *finalizar compra*.

<img src="github-img/Screenshot 2023-11-02 at 11.26.02.png">

### Checkout
Presionando en *finalizar compra*, se redirigirá al **checkout**.
Se podrá revisar la compra y luego cargar el formulario de datos.
Cuando se completan todos los espacios del formulario, se puede visualizar *completar orden*.
>Nota: En esta etapa del desarrollo del proyecto, no se verifican los datos ingresados, simplemente se chequea que esten todos completos.

<img src="github-img/Screenshot 2023-11-02 at 11.27.12.png">

### Confirmación de orden
Presionando en *completar orden*, si la orden se procesa correctamente, se redirige hacia la **confirmación de la compra**.
Se podrá ver el id de la orden de compra y el detalle de los productos comprados.
<div align="right">Fin del recorrido.</div>

<img src="github-img/Screenshot 2023-11-02 at 11.27.22.png">

## Librerías externas utilizadas

- **[Sass](https://www.npmjs.com/package/sass)** para las hojas de estilo.

- **[Fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome)** para los íconos.

- **[Material UI](https://www.npmjs.com/package/@mui/material)** para el loader

- **[Toastify](https://www.npmjs.com/package/react-toastify)** para las notificaciones

## Base de datos
Firestore de [Firebase](https://firebase.google.com/).
