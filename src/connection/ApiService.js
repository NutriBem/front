import * as patient from './patientPaths'
import * as person from './personPaths'
import * as recepcionist from './recepcionistPaths'
import * as nutricionist from './nutritionistPaths'
import * as appointment from './appointmentPaths'
import * as agenda from './AgendaPaths'
// Objeto que centraliza todos os serviços
const ApiService = {
    person,
    patient,
    recepcionist,   
    nutricionist,
    appointment,
    agenda
}

export default ApiService;