/* eslint-disable prettier/prettier */
const express = require('express');

const productRoutes = require('./app/Routes/products-route')


// const statement = ;
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE, PUT');
});

if (req.method == "OPTIONS")
{
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end();
}
// app.use("/api", (req, res, next) => {
//     res.status(200).json({
//         message: 'Hello to the api'
//     })
// })
app.use("/api/products", productRoutes);


module.exports = app;