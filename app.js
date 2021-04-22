// Importem mòduls Nodejs (express framework).
const express = require('express');

// Creem el servidor. Aplicació que escolti al port 5001.
const app = express();
const port = 5001;

app.listen(port, () => {
    console.log(`Servidor escoltant port ${port}`)
});

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});