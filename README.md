
# React JS - CoderHouse

  

## Comisión 75915

  

**Pre-entrega Nº2:**

  

Implementa una herramienta de routing, la cual permitirá navegar a través de las diferentes vistas para tu tienda: catálogo principal de productos, catálogo de productos filtrados por categorías, y vista en detalle de un producto. Crea la funcionalidad necesaria para que los usuarios puedan:

- Seleccionar desde el menú las distintas categorías disponibles.
- Visualizar el listado, filtrando según esa elección.
- Seleccionar un producto del listado y acceder a una vista en detalle del mismo, donde además contarán con una interfaz que posteriormente les permita agregar unidades al carrito.

  

**Objetivos**

- Implementar la funcionalidad de navegación entre las diferentes vistas utilizando enlaces y rutas.
- Desarrollar la navegabilidad básica de la aplicación, permitiendo navegar desde el catálogo al detalle de cada item.

  

**Requisitos**

- Implementación de React Router y creación de las distintas rutas necesarias para mostrar las vistas de nuestra app.
- División entre componentes contenedores encargados de manejar el estado y los efectos (ItemListContainer, ItemDetailContainer) y componentes de presentación, encargados del apartado visual (estructura de elementos, estilos, classNames, etc.).
- Los componentes contenedores harán un llamado asíncrono a "Promises" que resuelvan luego de un breve retardo los datos solicitados (listado de productos, un producto).
- Uso del método Array.map() y la prop "key" para listar todos los productos en el catálogo.
- Uso del hook useParams() de react router para leer el segmento actual de la URL y mostrar el contenido correspondiente.