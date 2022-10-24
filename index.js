
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req)
    res.send(JSON.stringify({headers: req.headers, query: req.query, body: req.body}))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

