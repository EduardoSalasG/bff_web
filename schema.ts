import { gql } from "apollo-server-express";

const typeDefs = gql`

  type TipoUsuario {
    TUS_ID: ID!
    TUS_NOMBRE: String!
    TUS_DESCRIPCION: String!
    TUS_ESTADO: Boolean!
  }

  type PreguntaSeguridad {
    PSE_ID: ID!
    PSE_ENUNCIADO: String!
  }

  type Query{
    tipo_usuarioById(TUS_ID:ID): TipoUsuario
    todosTiposUsuarios: [TipoUsuario]
    getPreguntasSeguridad: [PreguntaSeguridad]
    getPreguntaSeguridadById(PSE_ID:ID): PreguntaSeguridad
  }
`


export { typeDefs }