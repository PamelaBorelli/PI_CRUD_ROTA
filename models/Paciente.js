const mongoose = require('mongoose')

const pacienteSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "Informe um nome"]
        },
        cpf: {
            type: String,
            required: [true]
        },
        email: {
            type: String, 
            required: [true, "Informe um email"],
            unique: true
        },
        senha: {
            type: String,
            required: [true, "Informe uma senha"]
        },
        datanasc: {
            type: Date,
	    required: [true, "Informe sua data de nascimento"]
        },
        tipo: {
            type: String,
            enum: ['administrador', 'frentista', 'usuario'],
            default: 'usuario',
            required: true
        },
	contato: {
            type: String,
	    required: false
        },
	sexo: {
            type: String,
	    required: false
        },
	endereco: {
            type: String,
            required: false 
        },
	bairro: {
            type: String,
            required: false
        },
	cidade: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
)

const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;