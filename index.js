const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`server runing on ${port}`)
})

app.get('/', (req, res) => {
    res.send("Hi mom!")
})

module.exports = app;