
const express = require('express')
const app = express()
var cors = require('cors');
const { readdirSync } = require("fs");
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

// Then use it before your routes are set up:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
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

// for test purposes
app.get('/test', (req, res) => {
  res.send('test is OK')
})


//routes import 
// routes middleware

var normalizedPath = require("path").join(__dirname, "routes");


// files in routes folder for rest API 
readdirSync(normalizedPath).forEach((file) => {app.use("/api", require("./routes/" + file))})