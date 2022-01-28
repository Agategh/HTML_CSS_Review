// NODE_ENV is an internal function that tells you which environment you are in (we only downloaded development env, so shouldn't have production)
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

console.log(stripeSecretKey, stripePublicKey)

const express = require('express')
const app = express()
const fs = require('fs') //allows you to read different files

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/store.html', function(req, res) { // function takes request parameter and response parameter and does the rest of the stuff
    fs.readFile('items.json', function(error) {
        if (error) {
            res.status(500).end()
        }else {
            res.render('store.ejs', { //".ejs" allows you to use values from server to use templating language
                items: JSON.parse(data) //everything created in this res.render live in "views"
            })
        }
    })
})

app.listen(3000)