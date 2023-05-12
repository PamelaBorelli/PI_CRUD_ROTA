const mongoose = require('mongoose')

const clinicaSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: false
        },
        descricao: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true,
    }
)

const Clinica = mongoose.model('Clinica', clinicaSchema);

module.exports = Clinica;