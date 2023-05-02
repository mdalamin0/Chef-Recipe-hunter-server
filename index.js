const express = require('express');
const chefData = require('./ChefData.json');
const cors = require('cors')


const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('this is server is running')
})
app.get('/chef', (req, res) => {
    res.send(chefData)
})

app.use(cors())


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})