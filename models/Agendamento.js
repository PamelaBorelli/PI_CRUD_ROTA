const mongoose = require('mongoose')

const agendamentoSchema = mongoose.Schema(
    {
        dataagenda: {
            type: Date,
            required: [true, "Informe uma data"]
        },
        horaagenda: {
            type: String,
            required: [true, "Informe uma hora"]
        },
        clinica: {
            type: String, 
            required: false
        },
        especialidade: {
            type: String,
            required: [true, "Informe uma especialidade"]
        },
        medico: {
            type: String,
	    required: [true, "Informe um medico"]
        },
    },
    {
        timestamps: true,
    }
)

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

module.exports = Agendamento;