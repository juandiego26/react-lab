# React+Redux-project
Practica con React.js: Hasta el momento actualizado con React 16, React-Router 4 y Webpack 3.6.

## Cómo correrlo en desarrollo:
1. Instalar dependencias con `npm install`
2. Instalar Webpack de manera global con `npm i -g webpack`
3. Correr Webpack con `npm webpack -w`
4. Abrir otra terminal para correr el servidor de render con `npm run bff`
5. Abrir otra terminal para correr el servidor de archivos estaticos con `npm run sfs`
6. Abrir la pagina en http://localhost:3000

## Correr en producción utilizando los servicios de NOW:
1. Instalar [now](https://now.sh)
2. Empaquetar los modulos con webpack en windows `npm run build:windows` o en sistemas UNIX `npm run build`
3. Hacer deploy del servidor de render con Now `npm run deploy`
4. Hacer deploy del servidor de los archivos estaticos `npm run deploy:sfs`
5. Hacer deploy del servidor de los archivos estaticos `npm run deploy:sfs`
6. Configurar el alias del servidor de render con la url proporcionada por Now `now alias <deployment> <target domain>`
7. Configurar el alias del servidor de staticos con la url proporcionada por Now `now alias <deployment> <target domain>`
8. Abrir la APP con el alias del server render.

Proyecto en produccion [App](https://juan-reactlab-bff.now.sh)

Redux logic is applied in redux branch

Skills applied: https://platzi.com/cursos/react/

Any question? contact me silgajuandiego@gmail.com
