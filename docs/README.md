# Department Search

Componente customizado el cual crea una barra de busqueda customizada y un selector de busqueda por departamentos. 

![departmentSearch](https://user-images.githubusercontent.com/73150391/196803741-a190ec8b-7fb3-4371-9c91-f5ec8d91b8f3.PNG)

## Configuración 

### Paso 1 - Clonación del repositorio

Primero debemos crear un nuevo repositorio para nuestro componente customizdo. Para ello, usaremos el [template](https://github.com/vtex-apps/react-app-template).
Debemos hacer click en `Use this Template`   

![usethistemplate](https://user-images.githubusercontent.com/73150391/196229341-10371d6a-6517-4ee7-acb5-96776aeb5c4c.PNG)

Ahora le daremos un nombre a nuestro nuevo repositorio. 

![namerepository](https://user-images.githubusercontent.com/73150391/196229514-3b6257d2-28d1-451c-89b8-b0e588aa5cb5.PNG)

Ya estando en nuestro nuevo repositorio, clonaremos repertorio en nuestro editor de texto o consola de comando, utilizando el comando `$git clone` y la URL en Github de tu repertorio. 

![clonandorepo](https://user-images.githubusercontent.com/73150391/196231339-25a2fd3e-dd4a-431f-ac44-9f5e4557a9db.PNG)


### Paso 2 - Editar los archivos manifest.json. 

Ya clonado el repertorio, editaremos el archivos `manifest.json`, donde editaremos `vendor`, `name`, `title`, `version` y `description`, los cuales valores correspondientes con el componente customizado que estamos creando. En este caso seria:

```json
{
  "vendor": "itgloberspartnercl",
  "name": "custom-department-search",
  "version": "0.0.1",
  "title": "Search Bar Customizada",
  "description": "New option to choose department in search bar",
}
```
También debemos agregar `store` dentro `builders`, para que nuestro componente customizado funcione corecctamente.

```json
{
  "builders": {
  "react": "3.x",
  "messages": "1.x",
  "docs": "0.x",
  "store": "0.x"
  }
}
```

Por ultimo, agregaremos las dependencias necesarias para el componente que estamos creando. Estas pueden varias, ya que, van acorde con el componente que se esta creando. En este caso para department search, se utilizaron las siguientes:

```json
{
  "dependencies": {
    "vtex.css-handles": "0.x",
    "vtex.store-graphql": "2.x",
    "vtex.store-components": "3.x"
}
```

### Paso 3 - Editar los archivos package.json.

En package.json, editaremos `version` y `name`, ambos deben ser los mismos que hemos asignado en nuestro `manifest.json`

```json
{
  "version": "0.0.1",
  "name": "custom-department-search"
}
```

### Paso 4 - Instalar dependencias

En este caso instalaremos `yarn`, para lo cual accederemos a la carpeta de react que se encuentra dentro de nuestro repertorio, se puede hacer mediante nuestro editor de texto o consola de comando.

![yarn istall](https://user-images.githubusercontent.com/73150391/196275417-c3018be0-bdc5-4c52-bd5e-482a97f392ea.PNG)

### Paso 5 - Crear Store  

De manera general crearemos la carpeta `store`, donde agregaremos el archivo `interfaces.json`. Donde debemos crear un bloque con un componente, el cual se podrá renderizar desde cualquier `store-theme`.

```json
{
  "department-search": {
    "component": "DepartmentSearch",
    "composition": "children",
    "render": "client"
  }
}
```

### Paso 6 - Crear Componentes  

Crearemos dos componentes `component.tsx`, en este caso se llamaran `DepartmentSearch.tsx`. Uno se encontrara dentro de la carpeta `react`, y el otro dentro de la carpeta `components` la cual esta dentro de la carpeta `react`. Estos componentes se exportaran e inportran entre ellos, para encapsularlos y protegerlos de plagios. 

### Paso 7 - Ejecutar un preview de la tienda 

Siempre asegurarse de donde estammos trabajando, ya que, debemos evitar trabajar en master. para esto, utilice el comando `vtex whoami`.
Entonces ha llegado el momento de subir todos los cambios que hizo en sus archivos locales a la plataforma. Para eso, use el comando `vtex link`. 

## Contributors

Angela Rosas Venegas
