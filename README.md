
# React JS - CoderHouse

  

## Comisión 75915

  

**Entrega final: Web App de e-commerce**    

Desarrolla el Front End de una Single Page Application de e-commerce, utilizando React como herramienta base para crear las distintas piezas (componentes) de la interfaz de usuario (UI). Implementa los diferentes patrones y conceptos específicos de React, como el Virtual DOM y los hooks. Para la interacción entre las mismas, incorpora manejo de eventos, navegación entre componentes, y administración de datos globales (por ejemplo: el estado del carrito de compras). Como herramienta de estilado podrás utilizar de forma opcional CSS, SASS, o librerías de estilos (Bootstrap) o de componentes (Material UI). Podrás seleccionar una temática a elección, creando tu propio catálogo de productos, o utilizando herramientas generadoras de datos o "mock data".Implementa la conexión a un servicio en la nube (Firebase) que te provea de una Base de Datos donde almacenar el listado de tus productos, y te permita guardar registros de las compras realizadas por los usuarios del e-commerce.

**Objetivos**
- Desarrollar el front-end de una webapp de tipo e-commerce con React.
- Incorporar Firestore como base de datos.

**Requisitos**
**Listado y Detalle de productos**
- Generación dinámica del listado de productos y acceso a la vista en detalle de cada uno (ItemListContainer y ItemDetailContainer)
- Separación en componentes contenedores y de presentación para separar responsabilidad de tareas en los mismos. (ItemListContainer
ItemList)
- Implementación de componente ItemCount que permita seleccionar cantidad de unidades a agregar al carrito y realice las validaciones necesarias (valor mínimo, límite por stock, etc.)
- Ocultar el componente ItemCount en ItemDetail luego de agregar un producto al carrito.

**Navegación**
- Navegación entre las secciones de catálogo, categorías, detalle, carrito y checkout, utilizando React Router y mediante enlaces en el componente NavBar.
- Navegación respetando el modelo Single Page App (sin que se generen recargas de la página del navegador)

**Criterios de compras**
- Almacenamiento del estado de carrito de compras mediante Context.
- Mostrar el contenido del carrito dentro del componente Cart (productos, cantidades, subtotales, totales, etc.)
- Mostrar un icono/imágen del carrito en el componente CartWidget. Debe mostrar el total de unidades agregadas al context

**Firebase**
- Implementación de Firestore como base de datos.
- Creación de una colección donde se almacene la información de todos los productos del e-commerce, y realizar las consultas desde React para mostrarlos en la app.
- Generación de un documento en Firestore al confirmar una compra, registrando los detalles de la misma.

**Experiencia de usuario**
- Utilizar renderizado condicional para mostrar loaders y mensajes condicionales, como “producto sin stock”, “carrito vacío”, etc.
- Como finalización de la experiencia de usuario, brindarle al usuario el id (o detalles adicionales) de la orden generada en Firestore

**Buenas prácticas y convenciones**
- Respetar las convenciones y consignas del curso para los nombres de variables funciones, componentes. eventos, y arquitectura de carpetas/archivos.
- Crear un documento en formato markdown documentando brevemente el proyecto

**Estructura de Componentes recomendada**

App
- NavBar
  - CartWidget

- ItemListContainer
  - ItemList
    - Item

- ItemDetailContainer
  - ItemDetail
    - ItemCount

- Cart
  - CartItem

CheckoutForm
