require('dotenv').config()
const express = require('express')
const app = express()

const PORT= process.env.PORT

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('home')
})

// GET /places
app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
    }]      
    res.render('places/index', {places})
  })
  

app.get('*', (req, res) => {
  res.render('error')
})

app.listen(process.env.PORT)
