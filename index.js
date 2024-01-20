const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use('/assets', express.static(__dirname+'/pages_react/dist/assets'))
app.listen(port, () => {
    console.log(`server runing on ${port}`)
})

app.get('/', (req, res) => {
    res.sendfile(__dirname+'/pages_react/dist/index.html')
})

module.exports = app;