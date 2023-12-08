import { gql } from "apollo-server-express";

const typeDefs = gql`

  type TipoUsuario {
    TUS_ID: ID!
    TUS_NOMBRE: String!
    TUS_DESCRIPCION: String!
    TUS_ESTADO: Boolean!
  }

  type Usuario{
    USU_ID: ID!
    USU_NOMBRE: String!
    USU_APELLIDO_PAT: String!
    USU_APELLIDO_MAT: String!
    USU_RUT: String!
    USU_GENERO: Boolean!
    USU_CORREO: String!
    USU_CONTRASENA: String!
  }

  type PreguntaSeguridad {
    PSE_ID: ID!
    PSE_ENUNCIADO: String!
  }

  type Query{
    tipo_usuarioById(TUS_ID:ID): TipoUsuario
    todosTiposUsuarios: [TipoUsuario]
    usuario_ById(USU_ID:ID) : Usuario
    getUsuarios: [Usuario]
    getPreguntasSeguridad: [PreguntaSeguridad]
    getPreguntaSeguridadById(PSE_ID:ID): PreguntaSeguridad
  }
`


export { typeDefs }