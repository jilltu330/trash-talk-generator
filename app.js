//include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting routes
app.get('/', (req, res) => {
  res.render('index')
})

//start the express server and listening for connection
app.listen(port, () => {
  console.log(`Express app listing on http://localhost:${port}`)
})