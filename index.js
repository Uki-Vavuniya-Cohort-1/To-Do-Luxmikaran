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
   const UserId = req.params.id;
   const User = Id.find(User => User.id === parseInt(1));
   if (Id) {
      res.send(`Product Details: ${JSON.stringify(Id)}`);
   } else {
      res.status(404).send('Product not found');
   }
});
   
   app.listen(3000, () => {
      console.log('Server is running on port 3000');
   });

// Update a product
app.put('/Note/:id', async (req, res) => {
   try {
       const {id} = req.params;
       await Product.findByIdAndUpdate(id, req.body);
       const product = await Product.findById(id)
       if(!product) {
           return res.status(404).json({message: "Product not found"})
       }
       res.status(200).json(product);
   }
   catch (err) {
       console.log(err)
   }
}
)
app.delete('/Note/:id', async (req, res) => {
   try {
       const {id} = req.params;
       const product = await Product.findByIdAndDelete(id)
       if(!product) {
           return res.status(404).json({message: "Note not found"})
       }
       res.status(200).json(product)
       console.log("Deleted")
       
   }
   catch (err) {
       console.log(err)
   }
}
)