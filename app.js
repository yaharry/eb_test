const express = require('express')

const app = express()

app.use('/', (req, resp, next) => {
    resp.status(200);
    resp.write(JSON.stringify({
        success: true,
        message: "this is working"
    }))
    resp.end()
})

app.listen(3000, () => {
    console.log("express api up on port 3000")
})