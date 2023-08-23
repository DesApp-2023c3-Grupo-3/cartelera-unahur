# magistrades-dto

Este package contiene los DTOs (_data transfer objects_) que se utilizan tanto en la API como en el frontend de la aplicación.

## 📦 Instalación del paquete en otro proyecto

El despliegue se hace en un registry privado de GitLab y por lo tanto es necesario configurar algunas cosas para poder descargarlo.

La forma recomendada de hacerlo es crear un archivo `.npmrc` en el proyecto donde se quiera instalar el paquete, con este contenido:

```shell
@min-jus-gba-informatica-global:registry=https://gitlab.com/api/v4/projects/42101814/packages/npm/
//gitlab.com/api/v4/projects/42101814/packages/npm/:_authToken=${NPM_TOKEN}
```

Este archivo ya está creado en el **backend** y el **frontend**, y por lo tanto lo único que hay que hacer es configurar la variable de entorno `NPM_TOKEN` con el valor correspondiente (ver canal #docs en Discord). 

⚠️ **OJO**: no funciona si se define en el `.env`, porque el `npm install` no le da bola a ese archivo. Hay que setearla a nivel sistema operativo.

## 🚀 Publicación del paquete

Como dijimos en la sección anterior, la publicación se hace en un registry privado en GitLab y está configurada para realizarse automáticamente cuando se pushea un nuevo tag.

Para disparar una publicación, hay que hacer lo siguiente:

1. Asegurarse de que se cuenta con la última versión de `main`, haciendo un `pull` para bajarse todos los cambios.
2. Ejecutar el comando `npm run bump`.
3. Elegir la versión correspondiente, según [semver](https://semver.org/lang/es/).

Este comando modificará los archivos correspondientes, creará un commit y un tag y realizará el push correspondiente. Luego, el CI de GitLab se encargará de hacer la publicación propiamente dicha.

⚠️ **Advertencia:** si se trabaja con un _pull request_, primero hay que mergearlo y luego ejecutar los pasos descriptos más arriba.

## :woman_technologist: :man_technologist: Comandos útiles para el día a día

A continuación, algunos comandos necesarios para el desarrollo diario en este proyecto.

```shell
# Compila el paquete, útil para comprobar que nada se rompa.
npm run build

# Ejecuta los tests una sola vez.
npm test

# Publica el paquete.
npm run bump
```
