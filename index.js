// import required modules
const express = require('express')

// create instance of express app
const app = express()
const PORT = 8000

// define some routes
// landing page
app.get('/', (req, res) => {
    res.send('ello world')
})

// add two numbers
app.get('/add/:x/:y', (req, res) => {
    console.log(`x = ${req.params.x} y = ${req.params.y}`)
    res.send(`${req.params.x} + ${req.params.y} = ${Number(req.params.x) + Number(req.params.y)}`)
})

// subtract two numbers
app.get('/subtract/:x/:y', (req, res) => {
    console.log('x', req.params.x, 'y', req.params.y)
    res.send(`${req.params.x} - ${req.params.y} = ${Number(req.params.x) - Number(req.params.y)}`)
})

// multiply two numbers
app.get('/multiply/:x/:y', (req, res) => {
    res.send(`${req.params.x} * ${req.params.y} = ${Number(req.params.x) * Number(req.params.y)}`)
})

// divide two numbers
app.get('divide/:x/:y', (req, res) => {
    res.send(`${req.params.x} / ${req.params.y} = ${Number(req.params.x) / Number(req.params.y)}`)
})

// perform math on any ammount of numbers
app.get('/*', (req, res) => {
    // splits string into an array
    let myParams = req.params[0].split('/')
    // addition
    if(req.query.math === 'add') {
        // adds each number in the array
        let result = myParams.reduce((total, num) => {
            return total + Number(num)
        }, 0) // initial value of 0
        res.send(`The answer is ${result}`)
    // subtraction
    } else if (req.query.math === 'subtract') {
        let result = myParams.reduce((total, num) => {
            return total - Number(num)
        })
        res.send(`The answer is ${result}`)
    // multiplication
    } else if (req.query.math === 'multiply') {
        let result = myParams.reduce((total, num) => {
            return total * Number(num)
        })
        res.send(`The answer is ${result}`)
    // division
    } else if (req.query.math === 'divide') {
        let result = myParams.reduce((total, num) => {
            return total / Number(num)
        })
        res.send(`The answer is ${result}`)
    }
})

// listen on a port
app.listen(PORT, () => {
    console.log(`express is up on port ${PORT}`)
})