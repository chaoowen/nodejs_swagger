const express = require('express')
const app = express()
const port = 7700

app.use(express.json())

app.listen(port, () => console.log(`running on ${port}`))

app.get('/users', function (req, res) {
  res.send('Hello')
})

app.post('/users', function (req, res) {
  console.log('req', req.body)
  if (req.body.name && req.body.phone) {
    res.status(200)
    res.json({data: req.body})
    // res.send('Hello')
  } else {
    res.status(400)
    res.send('lack data')
  }
})

// 引用 swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));