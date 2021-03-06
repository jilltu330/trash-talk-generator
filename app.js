//include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const generateTrashTalk = require('./generate_trashtalk')
const app = express()
const port = 3000

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting body-parser
app.use(express.urlencoded({ extended: true }))

//setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body
  const trashTalk = generateTrashTalk(option)
  res.render('index', { trashTalk })
})

//start the express server and listening for connection
app.listen(port, () => {
  console.log(`Express app listing on http://localhost:${port}`)
})