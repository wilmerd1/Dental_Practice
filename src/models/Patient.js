const { Schema, model} = require ('mongoose')

const PatientsSchema = new Schema({
    tipoPaciente: {
      type: String,
      enum: ['Primera vez', 'Retorno'], // agregar más opciones si es necesario
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    apellidos: {
      type: String,
      required: true
    },
    tipoIdentificacion: {
      type: String,
      enum: ['Cédula de Ciudadanía', 'Pasaporte', 'Cedula de Extranjería', 'Otro'], // agregar más opciones si es necesario
      required: true
    },
    numeroIdentificacion: {
      type: String,
      required: true
    },
    fechaNacimiento: {
      type: Date,
      required: true
    },
    sexo: {
      type: String,
      enum: ['Masculino', 'Femenino', 'Otro'],
      required: true 
  
    },
    email: {
      type: String,
      required: true
    },
    direccion: {
      type: String,
      required: true
    },
    pais: {
      type: String,
      required: true
    },
    estadoCivil:{
        type: String,
        enum: ['Soltero', 'Casado', 'Divorciado', 'Viudo', 'Otro'],
        required: true
    },
    observaciones: {
      type: String
    },

   /*  // ... otros campos básicos del paciente
    direccion: String,
    telefono: String,
    correo: String,
    estadoCivil: String,
    ocupacion: String,
    eps: String,
    // ... otros campos adicionales
   
    observaciones: String */
  });
  module.exports = model('Patient', PatientsSchema);