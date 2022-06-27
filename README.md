## HDO Project information 
HDO is a fictional company that serves mostly in the interior decoration sector. the purpose of the website is to display some past project pictures to introduce the company and can get an email from website visitors.

### `Requirements`
```bash
# Company owner is not satisfied to update the website frequently, to develop a more effective application, it must fetch past project pictures dynamically.
To solve the issue, a media server is used which is called Cloudinary which makes it easy to upload pictures like social media (Instagram), and the web application will fetch uploaded pictures to display, so the web application does not need to be updated frequently.
# Company owner wants potential customers can able to communicate with company e-mail on application.
To solve the issue, an SMTP (Simple Mail Transfer Protocol) provider is used which is called Sendgrid which is sending email by using a verified mail address, in this project a Gmail-free account is used as the verified sender.
```

### `Used Technology`
```
- JavaScript technologies are used for the front-end and back-end to develop of project.
  CSS (Cascading style sheet) framework is used to write clean code as it is component based which is called Vuetify and Bootstrap is used and it is class   based CSS library. 
- NodeJS for the server-side and JavaScript framework for the front-end which is named NuxtJs. NuxtJs is Server-side rendering (SSR) of VueJS.
- For communication interface, Rest API is used between the back-end and front-end
- NPM (Node package manager) is used to install libraries
```

## Installation
Node.js must be installed on your machine. To download [Node.js](https://nodejs.org/en/)

### `To run on terminal`
```bash
# 1st step is to install dependencies
$ npm install

# to run locally which serve with at localhost:3000
$ npm run dev

# commands to build for production and launch server
$ npm run build
$ npm run start
```
## `Deployed address`
   [Website Link](https://pjwd01.herokuapp.com/)

## `Test case data for contact form`
```bash
#Name
Can be any character
#LastName
can be any character
#Email
Email address that will receive email from website (project)
#Telephone
can be any character
#comments
can be any character
```
## `Sources of pictures that used on project`

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


## `Special Directories`

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

