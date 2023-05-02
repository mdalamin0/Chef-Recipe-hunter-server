const express = require('express');
const chefData = require('./ChefData.json');
const cors = require('cors')


const app = express();
const port = 5000;
app.use(cors())
app.get('/', (req, res) => {
    res.send('this is server is running')
})
app.get('/chef', (req, res) => {
    res.send(chefData)
})
app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chef = chefData.find(chef => chef.id === id)
    res.send(chef)
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})