const express = require ('express')
const morgan = require ('morgan')
const cors = require ('cors')
const bodyParser = require ('body-parser')

const app = express();
    
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended : false}))
app.use(express.json())
app.use(cors())

// valores default
let db = [
    {
        id: 1, // NUMBER
        name: 'Clean Code', // STRING
        price: 12, // NUMBER
        formattedPrice: `R$ 12,00` // STRING
    }
]

// get - receber
// post - enviar 
// put - atualizar
// delete - apagar
app.get("/", (req, res) => {
    return res.json(db)
})

app.get("/books/:id", function(req, res){
    db.map(data => (
        data.id == req.params.id ? res.json(data) : false
    ))
    return res.send(`Não há um item com o id informado`)
});

app.post("/books", function(req, res){
    new1 = {
        id: req.body.id, // NUMBER
        name: req.body.name, // STRING
        price: req.body.price, // NUMBER
        formattedPrice: `R$ ${req.body.price.toFixed(2)}`
        // STRING
    }
      db.push(new1)
      return res.json(db)
 });

 app.put("/books/:id", function(req, res){
     db.map(data => {
        if(data.id == req.body.id){
            data.name = req.body.name
            data.price = req.body.price, // NUMBER
            data.formattedPrice =  `R$ ${req.body.price.toFixed(2)}` // STRING
        }else{
            return false;
        }
    })
     return res.json(db)
 });

 app.delete("/books/:id", function(req, res){
     db.map(data => {return })
 });
 
// id no final pois irá atualizar e deletar apenas um em especifico
// req(pegar informação) e ress(responder informação) 


// books resources
app.listen(21262, () => {
    console.log('Express started at http://localhost:21262')  
    // endpoint uri
})


// material base: https://www.youtube.com/watch?v=Q9oVStZ1DJA
//material base antigo professor da faculdade : https://github.com/XandyGomes
