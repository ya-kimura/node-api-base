const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Olá, Nodezin!')
})

app.listen(port, () => {
    console.log(`Server is alive at http://localhost:${port}`)
})