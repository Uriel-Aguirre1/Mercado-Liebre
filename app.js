require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('public'));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))
app.get('/registrer.html', (req,res) => res.sendFile(path.join(__dirname, 'views', 'registrer.html')))
app.get('/login.html', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')))

app.listen(process.env.PORT||3030, ()=> console.log('Server running in http://localhost:' + process.env.PORT||3030));