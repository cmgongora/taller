# Boostrapping

Plataforma de arranque para los cursos de *Formación Docente* a partir de una plantilla **HTML** y el motor de _render_ en **NodeJS**.

---

## Boilerplate

Como estructura de partida para el desarrollo de este **template** se ha empleado [html5 boilerplate](https://html5boilerplate.com/) que ofrece las siguientes ventajas:

- Uso de [Normalize.css](https://necolas.github.io/normalize.css/) como hoja de estilo de partida.
- Integración de [Modernizr](https://modernizr.com/) como una herramienta que garantiza la correcta funcionalidad en un mayor número de navegadores y sus diferentes versiones.
- Manejo de configuraciones de [Apache](https://httpd.apache.org/docs/2.4/howto/htaccess.html) a través del archivo `.htaccess`.

El correcto manejo de la estructura **boilerplate** permite no pasar por alto elementos que mejoran la experiencia del usuario.

## Elementos de la estructura Boilerplate

### <!--[if lt IE 7]>
Es un selector que identifica la versión del navegador en el que se está visualizando el curso. Tiene especial énfasis en _Internet Explorer_ ya que es el que mayores dificultades presenta, incluso para actualizar.

### meta name="description"
Nos permite declarar una pequeña descripción del proyecto que se desarrolla, permitiendo que el buscador y la integración de algunos _widgets_ utilice esta información.

### meta name="viewport"
Garantiza la correcta funcionalidad de las nreglas declaradas para _Responsive Web Design_.

### Favicon
Para garantizar la integración de la identidad del curso, ya sea al moment de guardarla como _favorito_ o cuando se utiliza como un widget de _Windows_ se integra el siguiente fragmento de código:

```
    <link rel="apple-touch-icon" href="apple-touch-icon-precomposed.png">
    <link rel="icon" href="favicon.ico">
    <!--[if IE]><link rel="shortcut icon" href="favicon.ico"><![endif]-->
    <!-- or, set /favicon.ico for IE10 win -->
    <meta name="msapplication-TileColor" content="#D83434">
    <meta name="msapplication-TileImage" content="apple-touch-icon-precomposed.png">
```

Donde el archivo `apple-touch-icon-precomposed.png` y `favicon.ico` deberán reemplazarse por los que se generan como parte de la identidad del curso.

### Browse happy
**Boilerplate** integra el siguiente fragmento de código, donde garantiza que **si** el navegador donde se visualiza el curso no cumple con lo mínimo necesario se lo informará al usuario a través de una invitación a actualizar su navegador en el sitio [browsehappy.com](http://browsehappy.com/).

```
    <!--[if lt IE 7]>
        <p class="browsehappy">Estás utilizando un navegador que <strong>no se ha actualizado</strong>. Por favor <a href="http://browsehappy.com/">actualiza tu navegador</a> para mejorar tu experiencia.</p>
    <![endif]-->
```

## AngularJS

Para la funcionalidad de carga de contenido se utiliza [AngularJS](https://angularjs.org/) en su versión **1.6.6** y el modulo [ngRoute](https://docs.angularjs.org/api/ngRoute) para establecer las rutas hacia los contenidos y las _plantillas_ que debe cargar para visualizar los contenidos correctamente.

### indexController

Cargará el contenido de la primer pantalla del curso, la pantalla de presentación, generalmente.

El _controlador_ solicitará el archivo `templates/index.html` para su _renderizado_.

### contentController

Este _controlador_ utiliza como parámetros `:theme` que equivale al _tema/unidad_ y `:page` que corresponde a la página a visualizar.

El _controlador_ utiliza como _plantilla_ el archivo `templates/content.html`.

### 404Controller

Garantizando que no se visualicen errores en pantalla, en esta versión, se integró la funcionalidad **404** por lo que será _divertido_ diseñar una pantalla para notificarle al usuario cuando la página solicitada no existá.

Como _plantilla_ le corresponde el archivo `templates/404.html`.
