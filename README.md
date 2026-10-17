
 
 # <span style="color:green">vue-ts-project</span>
 
![Texto alternativo](/public/images.jpg)
 



## <span style="color:green">Te explico cómo publicar tu proyecto Vue 3 + TypeScript + Vite + Vue Router + Tailwind CSS en GitHub, paso a paso, desde tu carpeta de Windows.</span>


 

> ###  Hay dos objetivos diferentes:

1. GitHub: guardar y compartir el código fuente de tu proyecto.

2. GitHub Pages: publicar tu web para que cualquier persona pueda visitarla mediante una URL.

> ### Primero subiremos el código a GitHub y después, si quieres que la web esté accesible por Internet,

> ### la publicaremos con GitHub Pages



- # <span style="color:yellow">GitHub: guardar y compartir el código fuente de tu proyecto.</span>

## 1. Prepara tu proyecto


Abre la terminal en la carpeta de tu proyecto:

 
> cd E:\E_2026\VUE-VITE\VUE-ROUTER\vue-ts-project

Comprueba que Git está instalado:


```bash
git --version
```
## 2. Crea un repositorio en GitHub
 
1. Entra en GitHub .

2. Inicia sesión.

3. Pulsa el botón + y selecciona New repository.

4. Escribe un nombre, por ejemplo vue-ts-project.

5. Elige Public si quieres que cualquiera pueda ver el código, o Private si prefieres restringir el acceso.

> ### Pulsa Create repository.

 
## 3. Prepara Git en tu proyecto


En la terminal de VS Code, dentro de la carpeta vue-ts-project, ejecuta:


```bash
git init
git branch -M main
```

Comprueba que tienes un archivo .gitignore en la raíz del proyecto. Si no existe, créalo con este contenido:


```text
node_modules
dist
.env
.env.*
!.env.example
```


Así evitarás subir las dependencias instaladas, los archivos generados y las variables de entorno privadas.

Ahora guarda tu proyecto en Git:


```bash
git add .
git commit -m "Primer commit: proyecto Vue"
```
Si Git te pide configurar tu identidad, puedes hacerlo con:


```bash
git config --global user.name "Tu nombre"
git config --global user.email "tu-correo@example.com"
```
> Sustituye esos valores por tu nombre y el correo que quieras asociar a tus commits.

 
## 4. Sube el proyecto a GitHub

En la página del repositorio recién creado, copia la URL HTTPS. Será parecida a:

https://github.com/TU-USUARIO/vue-ts-project.git

En la terminal, ejecuta lo siguiente, sustituyendo la URL por la tuya:


```bash
git remote add origin https://github.com/TU-USUARIO/vue-ts-project.git
git push -u origin main

```

---
   
- # <span style="color:yellow">GitHub Pages: publicar tu web para que cualquier persona pueda visitarla mediante una URL.</span>

##   (Opcional) Publica también tu web con GitHub Pages

Subir el código no publica automáticamente la web. Para desplegarla, sigue la guía oficial de Vite para GitHub Pages 

https://vite.dev/guide/static-deploy.html?utm_source=chatgpt.com


### Los pasos principales son:

1. Ajusta base en vite.config.ts al nombre del repositorio. Si el repositorio se llama vue-ts-project, utiliza:


```ts
export default defineConfig({
  base: '/vue-ts-project/',
  // Conserva aquí tus plugins y demás configuración
})
```

2. Crea el flujo de GitHub Actions en .github/workflows/deploy.yml, siguiendo la plantilla oficial de Vite.

  >  Crea el archivo deploy.yml

En la raíz de tu proyecto, crea esta estructura de carpetas:


```text
vue-ts-project/

 .github/workflows/deploy.yml

  src/

  public/

  package.json

  vite.config.ts

  index.html
``` 
###   Código completo de deploy.yml



El flujo instala las dependencias, compila tu aplicación y publica la carpeta dist automáticamente cada vez que haces push a main.

 Está basado en la guía oficial de Vite para GitHub Pages. 

 https://vite.dev/guide/static-deploy.html?utm_source=chatgpt.com

Copia este contenido.

````yaml

name: Deploy Vue App to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Descargar código
        uses: actions/checkout@v6

      - name: Configurar Node.js
        uses: actions/setup-node@v6
        with:
          node-version: lts/*
          cache: npm

      - name: Instalar dependencias
        run: npm ci

      - name: Compilar Vue y Vite
        run: npm run build

      - name: Configurar GitHub Pages
        uses: actions/configure-pages@v5

      - name: Subir archivos compilados
        uses: actions/upload-pages-artifact@v4
        with:
          path: ./dist

      - name: Publicar en GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
````

### 3. Configura vite.config.ts
Si tu repositorio se llama vue-ts-project, configura base con ese nombre:


````typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/vue-ts-project/',
  plugins: [vue(), tailwindcss()],
})
````
Conserva los plugins que ya tengas. Si el repositorio tiene otro nombre, sustituye vue-ts-project por el nombre real. 

Esta configuración es necesaria para que los archivos CSS y JavaScript se carguen correctamente desde GitHub Pages. 

# Activa GitHub Pages

  1. Sube los cambios a GitHub:


```sh
git add .
git commit -m "Configurar despliegue con GitHub Pages"
git push origin main
```

2. Abre tu repositorio en GitHub.

3. Ve a Settings → Pages.

4. En Build and deployment, selecciona GitHub Actions como fuente.

5. Abre la pestaña Actions y espera a que termine el flujo de despliegue.

Cuando termine correctamente, tu web estará disponible en una dirección similar a:

https://TU-USUARIO.github.io/vue-ts-project/

Sustituye TU-USUARIO por tu usuario real de GitHub.

 - # <span style="color:yellow">Perfecto. Vamos a mantener las URLs limpias, sin #, en tu proyecto Vue 3 + TypeScript + Vite + Vue Router, y solucionar los errores 404 al recargar páginas en GitHub Pages.</span>


Por ejemplo, tendrás estas direcciones:

https://TU-USUARIO.github.io/vue-ts-project/

https://TU-USUARIO.github.io/vue-ts-project/servicios

https://TU-USUARIO.github.io/vue-ts-project/contacto

> ## Seguiremos utilizando createWebHistory().


### 1. Configura vite.config.ts
Asegúrate de que base coincide con el nombre de tu repositorio.


````typescript

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/vue-ts-project/',
  plugins: [vue(), tailwindcss()],
})
````
> Sustituye vue-ts-project por el nombre real de tu repositorio.


### 2. Configura src/router/index.ts
Mantén createWebHistory() y configura las rutas así:


````typescript

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/servicios',
      component: () => import('../views/ServiciosView.vue'),
    },
    {
      path: '/proyectos',
      component: () => import('../views/ProyectosView.vue'),
    },
    {
      path: '/nosotros',
      component: () => import('../views/NosotrosView.vue'),
    },
    {
      path: '/contacto',
      component: () => import('../views/ContactoView.vue'),
    },
  ],

  scrollBehavior() {
    return { top: 0, left: 0 }
  },
})

export default router

````

### 3. Crea public/404.html
Este archivo permitirá recuperar la ruta cuando GitHub Pages no encuentre directamente una página solicitada.

> #### Crea public/404.html con este contenido:

````html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Redirigiendo...</title>
  </head>
  <body>
    <script>
      const base = '/vue-ts-project/'
      const path = window.location.pathname
      const query = window.location.search
      const hash = window.location.hash

      const route = path.startsWith(base)
        ? path.slice(base.length)
        : path.replace(/^\/+/, '')

      const target =
        base +
        '?/' +
        route +
        query.replace(/&/g, '~and~') +
        hash

      window.location.replace(target)
    </script>
  </body>
</html>
````

- ## <span style="color:red">   Importante: sustituye /vue-ts-project/ por la ruta real de tu repositorio.</span>
 Este archivo utiliza el mecanismo de redirección de la SPA, por lo que necesitaremos completar el siguiente paso para restaurar la URL original.


### 4. Modifica index.html
En el archivo index.html de la raíz del proyecto,
 añade este script dentro de la etiqueta  <span style="color:red">    head  </span>, antes de cargar la aplicación:

````js
<script>
  (function () {
    const search = window.location.search

    if (search.startsWith('?/')) {
      const restored = search
        .slice(2)
        .replace(/~and~/g, '&')

      const queryIndex = restored.indexOf('&')
      const path = queryIndex === -1
        ? restored
        : restored.slice(0, queryIndex)

      const query = queryIndex === -1
        ? ''
        : '?' + restored.slice(queryIndex + 1)

      const base = '/vue-ts-project/'

      window.history.replaceState(
        null,
        '',
        base + path + query + window.location.hash
      )
    }
  })()
</script>

````
> ### Mantén el resto de tu index.html,
> especialmente el elemento div con id="app" y el script de entrada de Vite. Usa el mismo valor de base en ambos archivos.



- # <span style="color:yellow">Para subir los últimos cambios de tu proyecto Vue + TypeScript + Tailwind CSS a GitHub</span>

>  abre la terminal de VS Code en la carpeta del proyecto y ejecuta estos comandos:

```sh
git add .
git commit -m "Actualizar proyecto Vue"
git push origin main
```
 