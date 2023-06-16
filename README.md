# Markdown Links

## Índice

* [1. MDLINKS LITE](#1-MDLINKS-LITE)
* [2.  ¿Cómo se ejecuta?](#2-¿Cómo-se-ejecuta?)
* [3. Diagrama de flujo de mdLinks Lite](#3-Diagrama-de-flujo-de-mdLinks-Lite)


***

## 1. MDLINKS LITE
MdLinks-Lite es una librería que te permitirá verificar el estatus de los links en un archivo MarkDown.

### ¿Porqué mdLinks Lite?
Los archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) quemuchas veces están rotos o ya no son válidos y eso perjudica mucho el valor dela información que se quiere compartir.
mdLinks te permitirá leer y extraer los los links de un archivo MarkDown, una vez que se han extraídos los links mdLinks ejecutará una función que validará los links extraídos, si los links son validos nos traerá una respuesta "Ok", junto con el texto relacionado al link y la ruta del archivo .md donde se encuentre el enlace., mientras que si el Link esta roto o su enlace es inexistente nos regresará una respuesta "Fail".

Aquí un ejemplo de una validación exitosa.

en caso de que alguno de nuestros Links esté roto, se vería de esta manera. 



## 2. ¿Cómo se ejecuta?
Para ejecutar mdLinks-Lite lo único que necesita hacer es tener una carpeta dentro de su proyecto con el archivo MarkDown que se desea leer y agregar la ruta de su archivo en la carpeta cli.js del repositorio, como se muestra a continuación , por último solo ejecute el comando `node cli.js`.
![52e5b347-2609-480f-87ee-d97386071640](https://github.com/MarianaMagallanestb/DEV005-md-links-lite/assets/124655049/ff6b4044-b56d-4aa4-8e29-90c66a809d85)


## 3. Diagrama de flujo de mdLinks Lite


