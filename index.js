const URL = "mongodb+srv://luxmikaran:luxmi1234@cluster0.fusqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongoose = require('mongoose')
const express = require('express')
const Model = require('./Model/Note')

const app = express()
app.use(express.json())

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
   .then(()=>{
      console.log('Connected MongoDB Database')
   })

   app.post("/Note", async(req, res)=>{
      try{
         const createData = new Model(req.body);
         const result = await createData.save();
         res.send(result);
         console.log(result)
      }
      catch (error){
         console.log(error);
      }
   })


app.get('/Note/:Id', (req, res) => {
   const productId = req.params.id;
   const product = products.find(product => product.id === parseInt(1));
   if (product) {
      res.send(`Product Details: ${JSON.stringify(product)}`);
   } else {
      res.status(404).send('Product not found');
   }
});
   
   app.listen(3000, () => {
      console.log('Server is running on port 3000');
   });