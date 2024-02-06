const express = require('express')
const costomerroutes = require ('./routes/costomerroutes')
const productrouter = require('./routes/productroute')
const userrouter = require('./routes/userroute')

 const app = express()


 app.use(express.json())
// app.use(express.urlencoded({extended:false}))
app.use('/customer',costomerroutes)
app.use('/product', productrouter)
app.use('/user', userrouter)


// app.get('/',(req,res)=>{
//     res.sendFile('./views/user.html',{root : __dirname})

// })
// app.get('/',(req,res)=>{
//     res.sendFile('./views/production.html',{root : __dirname})

// })
// app.get('/',(req,res)=>{
//     res.sendFile('./views/customer.html',{root : __dirname})

// })


app.listen(5000,()=>{
    console.log('listning on port 3000')
})