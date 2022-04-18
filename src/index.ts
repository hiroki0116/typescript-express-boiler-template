import express from 'express';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res)=>{
    res.send('Yappiiii')
})


const port = process.env.PORT || 8000;

app.listen(port);
console.log('Express WebApi listening on port ' + port);