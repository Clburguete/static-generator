# Guía de Estilo CSS / Sass de Acilia

## Tabla de contenido

1. [Principios generales](#general-principles)
2. [Espacios en blanco](#whitespace)
3. [Comentarios](#comments)
4. [Formato](#format)
5. [Nomenclatura](#naming)
6. [JavaScript hooks](#javascript)
7. [Ejemplos prácticos](#example)
8. [Organización](#organization)
9. [Requisitos técnicos de los entregables](#requisitos)

<a name="general-principles"></a>
## 1. Principios generales

> "Parte de ser un buen desarrollador al crear un proyecto exitoso es darse
> cuenta que escribir código para uno mismo es una Mala Idea™. Si miles de
> personas están utilizando tu código, entonces escríbelo con la máxima
> claridad, no con tus preferencias personales de cómo ser inteligente con la
> especificación." - Idan Gazit

* Todo el código en una aplicación debe parecer como si sólo una persona lo
  hubiese escrito, no importa cuántas personas hayan contribuido.
* Es esencial que otros desarrolladores y diseñadores utilicen 
  las reglas estandarizadas. Desde el comienzo del proyecto sigue 
  las convenciones CSS, JS e incluso HTML desde el principio.
* Si tiene dudas utilice los patrones de uso común.
* El lenguaje HTML y CSS está en constante evolución por lo que el 
  desarrollador front de Acilia debe tratar de mantenerse siempre 
  al día de las nuevas características de estos. Si deseas trasladar 
  una nueva característica de CSS a un proyecto los únicos requisitos 
  que tiene el desarrollador es comprobar la compatibilidad de esta 
  y compartir el conocimiento con los compañeros.

Podemos comprobar la compatibilidad de las nuevas características 
de css usando la siguiente herramienta https://caniuse.com/ , 
siempre teniendo en cuanta los requisitos de compatibilidad del proyecto.

¿Que debemos buscar al escribir código CSS? Que sea:
* reusable
* menos especifico
* mas mantenible
* modulable
  
<a name="whitespace"></a>
## 2. Espacios en blanco

Sólo debe existir un estilo en el código de su proyecto. Siempre sea
consistente en el uso de los espacios en blanco. Utilice espacios en blanco
para mejorar la legibilidad.

* _Nunca_ mezcle espacios y tabulaciones para indentar.
* Usar “soft tabs” (4 espacios) de indentación.

Consejo: configure su editor para que "muestre los caracteres invisibles". Esto
le permitirá eliminar los espacios en blanco al final de las líneas, eliminar
espacios en blanco de líneas en blanco y evitar commits con basura.

Consejo: Utilice el editor [EditorConfig](http://editorconfig.org/) (o algún
equivalente) para ayudarse a mantener las convenciones básicas que han sido
acordadas en su proyecto.


<a name="comments"></a>
## 3. Comentarios

Un código bien comentado es muy importante. Tómate el tiempo necesario para
describir los componente, cómo trabajan, sus limitaciones y la forma en que
fueron construidos. No deje que otros miembros de su equipo tengan que adivinar
el propósito de un código poco común o poco obvio.

El estilo de los comentarios debe ser siempre simple y consistente con un mismo
código base.

* Coloque los comentarios en una línea nueva sobre cada objeto.
* Evite los comentarios al final de las líneas.
* Mantenga el largo de cada línea con un máximo razonable, por ejemplo, 80
  columnas.
* Realice comentarios que comiencen con una letra mayúscula y con indentación
  consistente.
* No realice comentarios de donde empieza o acaba o bloque o sección.

Consejo: configure su editor para que le ofrezca atajos para la creación de
comentarios comunes.

#### Ejemplo de CSS:

```css

/*
 * Pequeña descripción utilizando el formato de comentario Doxygen.
 *
 * La primer oración de una descripción larga comienza aquí y continúa en
 * esta linea durante un tiempo para finalmente terminar aquí al final de
 * este párrafo.
 *
 * Las descripciones largas son ideales para explicaciones de mayor detalle
 * y documentación. Pueden incluir ejemplos de HTML, URLs o cualquier otro
 * tipo de información que es considerada necesaria o útil.
 *
 * @tag Esto es una etiqueta llamada 'tag'
 *
 * @todo Esto es una declaración 'todo' ("a realizar") que describe una tarea
 *   atómica (específica) a realizar posteriormente. Continua luego de 80
 *   caracteres por lo que las lineas consecutivas son indentadas con dos
 *   espacios adicionales.
 */

// Comentario básico
```


<a name="format"></a>
## 4. Formato

El formato del código elegido debe asegurarse de que el código: es fácil de
leer, es fácil de comentar claramente, minimiza las posibilidades de introducir
errores accidentalmente, y facilita el hallazgo de diferencias y
responsabilidades.

* Cuando se utilizan varios selectores en una declaración de regla, poner cada selector en una línea
* Poner un espacio antes de la llave de apertura { en declaraciones de regla
* Incluya una declaración por línea en un bloque de declaraciones.
* Utilice un nivel de indentación para cada declaración.
* En las propiedades, poner un espacio después, y no antes, del caracter : (dos puntos)
* Utilice minúsculas y valores hexadecimales sin abreviar, ejemplo `#aaaaaa`.
* Utilice comillas simples o dobles pero de forma consistente. Se prefiere la
  utilización de comillas simples, ejemplo `content: ''`.
* Utilice comillas en los valores de los atributos de los selectores, ejemplo
  `input[type="checkbox"]`.
* Incluya un espacio luego de cada coma en las propiedades separadas por comas
  o en los valores de las funciones.
* Siempre incluya un punto y coma al final de la línea de la última declaración
  en un bloque de declaraciones.
* Coloque la llave de cierre de un conjunto de reglas en la misma columna que
  el primer carácter del conjunto y en una nueva línea.
* Separe cada conjunto de reglas con una línea en blanco.
* Para valores decimales menores que 1 se omitira el 0 a la izquierda de la coma, 0.5 = .5

```css
.selector-1,
.selector-2,
.selector-3[type="text"] {
    box-sizing: border-box;
    display: block;
    font-family: helvetica, arial, sans-serif;
    color: #333333;
    background: #ffffff;
    background: linear-gradient(#fff, rgba(0, 0, 0, .8));
}
```

#### Orden de las declaraciones

Las declaraciones deben ser ordenadas con un único principio. Mi preferencia es
que las propiedades relacionadas en varios grupos, seguiremos la siguiente estructura:

```css
.selector {
    // Layout
    @include position(absolute, 0, 0, 0, 0);
    z-index: 10;
    
    // Box Model
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    height: 100px;
    padding: 10px;
    margin: 10px;
    overflow: hidden;
    
    // Visual:
    background-color: $black;
    border-radius: .5rem;
    border: 10px solid #333333;
    color: $white
    opacity: .8;
    transition: all .3s ease;
    transform: rotate(45deg);
    
    // Texto
    font-size: 1rem;
    font-family: sans-serif;
    font-style: normal;
    letter-spacing: .2px;
    line-height: 1rem;
    text-align: center;
    
    
    // Breakpoints
    @media (min-width: $lg) {
        position: relative;
    }
}
```

* Layout: Posición del elemento en el espacio. Eg.: position, top, z-index.
* Box: El elemento. Eg.: display, overflow, box-sizing.
* Visual: Diseño del elemento. Eg.: color, border, background.
* Type: Propiedades de texto del elemento. Eg.: font-family, text-transform.

El ordenamiento alfabético es también muy popular, pero la desventaja es que
las propiedades relacionadas no se mantienen juntas. Por ejemplo, los
desplazamientos de posición no permanecen juntos y las propiedades de box-model
pueden ser esparcidas a través del bloque de declaraciones.

#### Excepciones y pequeñas desviaciones

Bloques grandes de una sola declaración pueden ser ligeramente diferentes,
utilizando el formato de una sola línea. En este caso, un espacio debe ser
incluido luego de la llave de apertura y antes de la llave de cierre.

```css
.selector-1 { width: 10%; }
.selector-2 { width: 20%; }
.selector-3 { width: 30%; }
```

Grandes propiedades de valores separados por coma -tal como una colección de
gradientes o sombras- pueden ser organizadas en múltiples líneas en un intento
de mejorar la legibilidad y producir visualizaciones de diferencias más
útiles.  Hay varios formatos que pueden ser utilizados: uno, por ejemplo, es
mostrado más abajo.

```css
.selector {
    background-image:
        linear-gradient(#fff, #ccc),
        linear-gradient(#f3c, #4ec);
    box-shadow:
        1px 1px 1px #000,
        2px 2px 1px 1px #ccc inset;
}
```

### Sass: consideraciones a formatos adicionales

* Siempre coloque las declaraciones `@extend` en la primer línea de los bloques
  declarativos.
* Dónde sea posible, agrupe las declaraciones `@include` en la parte superior
  del bloque declarativo, luego de las declaraciones `@extend`.
* Considere prefijar funciones personalizadas con `x-` u otro separador. Esto
  ayuda a evitar cualquier confusión potencial con una función nativa de CSS, o
  entrar en conflicto con una función de alguna librería.

```scss
.selector-1 {
    @extend .other-rule;
    @include position(absolute,0,0,0,0);
    width: 100%;
    // other declarations
}
```

### Anidación

**PROYECTOS SIN BEM**
**¡No anidar selectores más de 3 niveles de profundidad!**

```scss
nav {
    ul {
        li {
        // PARAR! a este nivel debemos pensar que estamos haciendo algo mal.
        }
    }
}
```

Cuando los selectores se vuelven muy largos, probablemente se está escribiendo CSS que es:

* Fuertemente acoplado al HTML (frágil) *—O—*
* Excesivamente específico (poderoso) *—O—*
* No reutilizable

**PROYECTOS BEM**
**¡No anidar selectores más de 1 nivel de profundidad!, Solo anidaremos cuando utilicemos --modificadores y sea necesario**

<a name="naming"></a>
## 5. Nomenclatura = BEM
Nuestro código debe ser fácil de leer, claro y coherente. Esto nos ayuda a trabajar más rápidamente y de manera eficiente.

BEM significa Modificador de Bloques de Elementos (Block Element Modifier) por sus siglas en inglés. Sugiere una manera estructura de nombrar tus clases, basado en las propiedades del elemento en cuestión.

```scss
/* Block */
.btn {}

/* Element */ 
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {} 
.btn--big {}
```

Consideraciones de BEM

* Al escribir HTML debemos mantener la estructura tan simple como sea posible
* Pensar en block como objetos o modulos que pueden extraerse de donde están y seguir funcionando. 
* Un bloque puede componerse de otros bloques, un buscador simple es un bloque simple, el header de una web es un bloque compuesto por otros bloques.
* Cada bloque será un componente en nuestra carpeta de componentes:
![Image of Components](https://drive.google.com/open?id=1u8p7GUn18mAtJs-_aFlspdx2H0jD8vYw)
* Todos los elementos son una clase y en nuestro CSS no se anidan. Eso hace que la especificidad de CSS sea muy plana y baja, lo que es una buena idea. Significa que no terminarás peleando contigo mismo por la especificidad.
* Al ser todos los elementos una clase nos aseguramos que los cambios en CSS no tienen efectos colaterales.

Lecturas recomendadas:
[Battling BEM CSS: 10 Common Problems And How To Avoid Them](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)
[A quick introduction to Block Element Modifiers (BEM)](https://medium.freecodecamp.org/a-quick-introduction-to-block-element-modifiers-bem-9df46d29b64c)
[A practical introduction to the BEM CSS methodology](https://medium.com/@ZeeCoder/a-practical-introduction-to-the-bem-css-methodology-eeef578bac8c)

### Variables
Nombra las variables basandote en su funcion en la página web, no en su apariencia. (ej., $primary-color en lugar de $red-color)
Preferentemente utilizar nombres de variable con guiones medios (ej. $mi-variable) en lugar de escritura de camello (camelCase) o guiones bajos (snake_case). Es aceptable utilizar como prefijo para nombres de variables que están pensados para ser utilizados solo dentro del mismo archivo con guión bajo (ej., $_mi-variable).

### Mixins
Se deben utilizar Mixins para no repetir código (principio DRY), agregar claridad o abstraer de complejidad de la misma manera que las funciones. Los Mixins que no aceptan argumentos pueden ser útiles para ello, pero notar que si no está comprimiendo su carga (ej. gzip), esto puede contribuir a la duplicación innecesaria de código en los estilos resultantes.
**¡No usar mixins para prefixes, autoprefixer realiza este trabajo!**

### Extend
@extend debe evitarse ya que tiene un comportamiento poco intuitivo y potencialmente peligroso, específicamente cuando se utiliza con selectores anidados. Incluso extender los selectores placeholder de nivel superior puede causar problemas si el orden de los selectores termina cambiando más tarde (ej. si se encuentran en otros archivos y el orden de los archivos cambia). Gzipping debe manejar la mayor parte de los ahorros que se habría obtenido mediante el uso de @extend, y se puede evitar la repetición de código 1 en las hojas de estilos muy bien con mixins.

<a name="javascripts"></a>
## 6. JavaScript hooks

Evitar la vinculación de la misma clase en tu CSS y JavaScript. 
Combinar los dos a menudo tiene consecuencias negativas, como mínimo, 
tiempo perdido durante la refactorización cuando un desarrollador debe 
hacer una referencia cruzada de cada clase que está cambiando, y peor aún, 
los desarrolladores temen hacer cambios por miedo a romper la funcionalidad.

Recomendamos crear clases específicas para JavaScript para vincular con CSS, con el prefijo .js-:

```css
<button class="btn btn--primary js-request-to-book">Request to Book</button>
```

<a name="organization"></a>
## 7. Organización

Debemos tratar de modularizar nuestro css todo lo posible haciendo que nuestros 
archivos scss estén ordenador y con pocas líneas de código. Para hacer esto nos 
podemos servir de la estructura de carpetas que tenemos en el proyecto base.

Esta estructura se basa en el Triángulo invertido CSS (ITCSS) con algunas modificaciones.

* Settings: guardaremos variables y métodos de los preprocesadores (vars.scss, fonts.scss)
* Tools: mixins y funciones del preprocesador (pxTOrem, mixin de clearfix, mixin hidden para ocultar elementos, mixin font-size)
* Generics: reset.scss de Eric Meyer, normalize.scss o algo genérico que afecte a todo el site (box-sizing)
* Elements: definimos el font-size y line-height por defecto de todo el proyecto, mínima definición, sólo para el tamaño de fuente, de los encabezados h1 a h6, estilos base de imágenes, estilos básicos de tablas estilados
* Objets: clases para la estructura de la página (wrapper, layout genérico del proyecto, media: objeto media -> imagen + texto)
* Components: componentes del propio site (buttons, etc...)
* Utilities: estilos más específicos que nos permite sobreescribir (!important sin romper la especificidad CSS), alineaciones, utilidades de flex, clearfix, widths,
headings

Namespaces:

nombrado de clases usaremos:
c- ​para Componente o- ​para Objetos
u- ​para Utilidades
is- / has- ​para Estados
l- layout
js-​ clases de javascript, no usar esta clase para dar estilos


<a name="build-and-deployment"></a>
## 8. Construcción y distribución

Los proyectos deben siempre intentar incluir algunos medios genéricos para que
el código pueda ser verificado, probado, comprimido y versionado para luego ser
utilizado en producción. Para esta tarea,
[gulp](https://gulpjs.com/)


Basado en github.com/necolas/idiomatic-css.
          https://github.com/airbnb/css

<a name="requisitos"></a>
## 9. Requisitos técnicos de los entregables

* Utilizar preprocesado de CSS en ​Sass
* No utilizar la directiva @extend de Sass, ​se utiliza @mixin en caso de ser
necesario, o combinación de clases en el elemento html.
* No utilizar bootstrap ​ni ningún otro framework que aporte más funcionalidad o
componentes de los necesarios.
* La ​estructura ​debe basarse en ​ITCSS​, utilizando la ​nomenclatura de BEM junto a
namespaces ​que vayan a la par con la estructura ITCSS. (por ejemplo
.c-component-block__element--modifier)
* Cada componente de estar separado en su parcial ​y debe ser independiente de su
contexto, adaptando los casos a través de modificadores en caso de ser necesario.
* No utilizar IDs en los CSS​. Se utiliza BEM para ​evitar en lo posible la anidación de
selectores ​y evitar igualmente el uso de IDs para dar estilo a los elementos.
* Utilizar clases a dar estilo al elemento directamente ​en el CSS (por ejemplo un H1
que pasa a ser un H2 debería verse igual cambiando la etiqueta html).
* Debe dar soporte a todos los navegadores y sistemas operativos principales
(Edge / Chrome / Firefox / Safari / iOS / Android).
* Utilizar el marcado semántico de ​HTML5​, utilizando las etiquetas correspondientes para los casos que se deban aplicar.
* Utilizar iconos en svg ​en lugar de icon fonts.
* Generar código accesible, ​utilizando los atributos necesarios para ello (alts en
imágenes, titles para los links, etc) y los elementos correspondientes para las interacciones (buttons para realizar acciones en la página -js- vs a href para enlaces -links-, elementos de formularios, etc).
* Debe poderse navegar con el teclado a través del sitio.
