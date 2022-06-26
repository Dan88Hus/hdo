# HDO Project 
HDO is a fictional company that serves mostly in the interior decoration sector. the purpose of the website is to display some past project pictures to introduce the company and can get an email from website visitors.

# To installation
Node.js must be installed on your machine. to download [Node.js](https://nodejs.org/en/)

## Build Setup

```bash
# to install dependencies
$ npm install

# serve with at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```
## Deployed address
   [Website Link](https://pjwd01.herokuapp.com/)


## Special Directories

### `assets`

The assets directory contains uncompiled assets such as Stylus or Sass files, images, or fonts.


### `components`

The components directory contains Vue.js components. Components make up the different parts of your page and can be reused and imported into pages, layouts and even other components.

### `pages`

This directory contains application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.


### `plugins`

The plugins directory contains JavaScript plugins that run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. when we need to use `Vue.use()`, we should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

### `static`

This directory contains static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.


### `store`

This directory contains Vuex store files. Creating a file in this directory automatically activates Vuex.

