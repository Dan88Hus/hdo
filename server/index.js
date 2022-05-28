//  this file is entry point to run project

const express = require('express')
// exxpress is assigned as "app"
const app = express()
/* cors is used allow server and client can communicate freely with allowed proxy, 
otherwise most browser restrict to data transferring for security reason.
*/
var cors = require('cors');
const { readdirSync } = require("fs");
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

// cors is used as middleware to wrap application
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// Nuxt has global configs so we should Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Initialize Nuxt.js object which takes confog parameters.
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

// for test purposes, its get method so test can be done on browsers
app.get('/test', (req, res) => {
  res.send('test is OK')
})


// joins the specified path segments into one path.
var normalizedPath = require("path").join(__dirname, "routes");

/* files in routes folder for rest API that maybe more than 1 file can be added later, so we dont need to indicate each file path 
 "/api" is added rest end point
*/

readdirSync(normalizedPath).forEach((file) => {app.use("/api", require("./routes/" + file))})