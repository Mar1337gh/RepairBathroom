const URLDB = 'mongodb://localhost:27017'
const PORT = 9001

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const app = express () 

app.use(cors()) 
app.use(express.json())
const generateAccessToken = (id) => { 
    const payload = {
        id      
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'}) }

    app.post('/feedback', async (req, res) => { 
        console.log (req.body) 
        const {name, phoneNumber, email} = req.body 
        const client = new Client({name, phoneNumber, email}) 
        await client.save() 
        res.json ({ 
            message: 'Вы успешно отправили данные!'
        })
    })
    const start = async () =>{ 
        try { 
            await mongoose.connect(URLDB, {authSource: "admin"}) 
            app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порте`)) 
    
        } catch (e) { 
            console.log(e) 
        }
    }
    start() 