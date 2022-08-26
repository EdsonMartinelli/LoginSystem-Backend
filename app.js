const express = require('express')
const cors= require('cors')
const helmet = require('helmet')
const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 3000

app.get('/health', (req, res) => {
  res.status(200).json({message: "Server is running!"})
})

app.post('/login', (req, res) => {
    email = req.body.email
    password = req.body.password
    
    if(email=="123@123.com" && password=="12345678"){
        res.status(200).json({message: "Login realizado"})
    } else {
        res.status(404).json({error: "Login incorreto"})
    }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})