import express from 'express';
import mongoose from 'mongoose';
import Product from './models/Product.js';


const app = express();
const PORT = 5000; 


await mongoose.connect('mongodb://localhost:27017/test');

app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.get("/api/products", async (req, res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products)
        
    }
    catch(e){
        res.status(500).json({shaman: "Ошибка при получении товаров"})
    }
});

app.post("/api/products", async (req, res) => {

    try{
        const { name, description, price, image } = req.body;
       const pr = await Product.create({name,price,description,image})
       res.status(201).json(pr)

    }
    catch(e) {
        res.status(400).json({shaman: "Товар не добавился"})
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





app.get("/api/products/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({shaman: "Товар не найден"})
        }
        res.status(200).json(product)
    }
    catch(e){
        res.status(500).json({shaman: "Ошибка при получении товара"})
    }
});

app.delete("/api/products/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).json({shaman: "Товар не найден"})
        }
        res.status(200).json({shaman: "Товар удалён"})
    }
    catch(e){
        res.status(500).json({shaman: "Ошибка при удалении товара"})
    }
});


app.put("/api/products/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const { name, description, price, image } = req.body;
        const product = await Product.findByIdAndUpdate(req.params.id, {name, description, price, image}, {new: true});
        if(!product){
            return res.status(404).json({shaman: "Товар не найден"})
        }
        res.status(200).json(product)
    }
    catch(e){
        res.status(500).json({shaman: "Ошибка при обновлении товара"})
    }
}); 


app.patch("/api/products/:id", async (req, res) => {
  
    try{
        const {id} = req.params;
        const updates = req.body;
        const product = await Product.findByIdAndUpdate(req.params.id, updates, {new: true});
        if(!product){
            return res.status(404).json({shaman: "Товар не найден"})
        }
        res.status(200).json(product)
    }
    catch(e){
        res.status(500).json({shaman: "Ошибка при обновлении товара"})
    }
});     
