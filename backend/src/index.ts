import express from 'express';

const app = express();
const port = 3000;

app.get('/',(reg,res) =>{
    res.send('Hello, Dear');
});

app.listen(port,() =>{
    console.log('Server is running on http://localhost:${port}');
} );