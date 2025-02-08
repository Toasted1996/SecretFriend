# SecretFriend
A JavaScript game to Secret Friend


# Amigo Secreto

Este proyecto implementa el juego del Amigo Secreto en JavaScript y HTML. Permite a los usuarios ingresar una lista de nombres y luego sortear aleatoriamente quién será el amigo secreto de quién.

## Cómo ejecutar el juego

1.  Asegúrate de tener un navegador web moderno (como Chrome, Firefox o Edge).
2.  Descarga o clona este repositorio.
3.  Abre el archivo `index.html` en tu navegador.

## Instrucciones de uso

1.  **Ingresar nombres:** En la sección "Digite el nombre de sus amigos", escribe el nombre de un amigo en el campo de texto y haz clic en el botón "Añadir". Repite este paso para todos los participantes.
2.  **Sortear amigos:** Una vez que hayas ingresado todos los nombres, haz clic en el botón "Sortear amigo". El resultado del sorteo se mostrará debajo de la lista de nombres.

## Características

*   **Interfaz intuitiva:** La interfaz es simple y fácil de usar.
*   **Validación de entrada:** Se verifica que el campo de nombre no esté vacío.
*   **Lista de participantes:** Los nombres ingresados se muestran en una lista.
*   **Sorteo aleatorio:** El sorteo se realiza de forma aleatoria para garantizar la equidad.
*   **Evita autoasignación:** El algoritmo asegura que nadie se elija a sí mismo como amigo secreto.
*   **Optimización de memoria:** La lista de amigos sorteados se borra una vez que todos han sido asignados, optimizando el uso de memoria para futuras rondas.

## Estructura del código

*   **`index.html`:** Contiene la estructura HTML del juego, incluyendo los campos de entrada, botones y listas para mostrar los nombres y resultados.
*   **`app.js`:** Contiene la lógica del juego en JavaScript. Esto incluye las funciones para agregar nombres, realizar el sorteo y actualizar la interfaz.

## Decisiones de diseño

*   **Almacenamiento de nombres:** Se utiliza un array (`listaAmigos`) para almacenar los nombres de los participantes.
*   **Sorteo aleatorio:** Se utiliza la función `Math.random()` para generar un índice aleatorio y seleccionar un amigo secreto de la lista.
*   **Evitar autoasignación:** Se implementa un bucle `do...while` para asegurar que nadie se elija a sí mismo.
*   **Optimización de memoria:** Se limpia la lista de amigos sorteados (`amigosSorteados`) una vez que todos han sido asignados para liberar memoria.

## Próximas mejoras

*   **Estilos CSS:** Se pueden agregar estilos CSS para mejorar la apariencia del juego.
*   **Persistencia de datos:** Se podría implementar la funcionalidad de guardar los nombres en el almacenamiento local del navegador para que no se pierdan al recargar la página.
*   **Más validaciones:** Se podrían agregar más validaciones, como evitar nombres duplicados.
*   **Interfaz más dinámica:** Se podría mejorar la interfaz para que sea más interactiva y muestre los resultados de forma más visual.

## Créditos

Este proyecto fue desarrollado por Giorthy López.
