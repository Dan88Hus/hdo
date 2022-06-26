# hdo Project 

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
## Deployed address

    [Preoject website](https://pjwd01.herokuapp.com/ "HDO Project website")

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

