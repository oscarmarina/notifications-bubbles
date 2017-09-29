
# Manejar los estilos con Polymer


### Básicamente tenemos 3 sitios para hacerlo: ( _A día de hoy_ )  

_El primer lugar_ es en los propios estilos del componente, aquí vamos a<br /> 
generar las variables y mixins que luego usaremos para poder cambiar su aspecto.<br /> 

```css
:host {
  will-change: transform;
  font-family: var(--fontDefault, sans-serif);
  position: relative;
  display: block;
  @apply --notifications-bubbles; }

:host([hidden]) {
  display: none; }
```

_La segunda parte_ es el uso de la [etiqueta style is="custom-style"](https://www.polymer-project.org/1.0/docs/devguide/styling#custom-style), con la que<br /> 
podremos manejar las variables y mixins de nuestros componentes.<br /> 
Para ellos usaremos un “tema”. <br /> <br /> 
Para este caso estan en la __carpeta /theme/__ de nuestro componente, en "cells-theme-base.html" descomentamos el codigo.<br /> 

```html
<style is="custom-style">
  notifications-bubbles {
    --notifications-bubbles-background-color: var(--light-green-300);
    --notifications-bubbles-border-color: var(--light-green-600);
    --notifications-bubbles-color: var(--light-green-700);
  }
</style>
```

_Y por último_, tenemos los [shared-style](https://www.polymer-project.org/1.0/docs/devguide/styling#style-modules) no es para la definición de estilos tal cual, si no que lo usamos en el momento <br /> 
que necesitemos realizar algún cambio que no es posible desde una etiqueta custom-style, se trata<br /> 
de un cambio muy específico de nuestra APP, que no pueden ir como propios del componente. <br /> 
Para este caso estan la __carpeta /theme/__ de nuestro componente en "cells-theme-base-shared.html"<br /> <br />

En la __carpeta /demo/__ en archivo *index.html* quitamos el atributo hidden a:<br /> 

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="notifications-bubbles.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
 <button hidden>Motion Notification</button>
```

## notifications-bubbles
Lanzar con "polymer serve" añadir a la ruta *?dom=shadow&lazyRegister="max"&useNativeCSSProperties=true*

```html
<notifications-bubbles></notifications-bubbles>
  ```