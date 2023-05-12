//carregar as variaveis de ambiente a partir do arquivo .env
const express = require('express')
const mongoose= require('mongoose')
const app = express()


// ler JSON-middleware
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

//rotas
const agendamentosRouter = require('./routes/agendamentos')
app.use('/agendamentos', agendamentosRouter)
const clinicasRouter = require('./routes/clinicas')
app.use('/clinicas', clinicasRouter)
const medicosRouter = require('./routes/medicos')
app.use('/medicos', medicosRouter)
const pacientesRouter = require('./routes/pacientes')
app.use('/pacientes', pacientesRouter)

//conecção com banco
mongoose.connect('mongodb+srv://Pamela:DfsIQnKZPK33hoY4@cluster0.war321k.mongodb.net/bancodaapi?retryWrites=true&w=majority')
// entregar uma porta
.then(()=>{

    console.log("Conectado ao MongoDB!");
    app.listen(3000)
})
.catch((err)=> console.log(err))