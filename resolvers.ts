import axios from 'axios';

const resolvers = {
    Query: {
        tipo_usuarioById: async (parent: any, { TUS_ID }) => {
            const tipoUsuarioId = TUS_ID
            const response = await axios.get(`http://localhost:8080/tipo_usuarios/${tipoUsuarioId}`)
            const tipo_usuarioData = response.data.body;
            console.log(response.data)

            return tipo_usuarioData
        },
        todosTiposUsuarios: async (root: any) => {
            const response = await axios.get(`http://localhost:8080/tipo_usuarios/`)
            const allTipoUsuarios = response.data.body;
            return allTipoUsuarios

        },
        usuario_ById: async (parent: any, { USU_ID }) => {
            const usuarioId = USU_ID
            const response = await axios.get(`http://localhost:8080/usuarios/${usuarioId}`)
            const usuarioData = response.data.body;
            console.log(response.data)

            return usuarioData
        },
        getUsuarios: async (root: any) => {
            const response = await axios.get(`http://localhost:8080/usuarios/`)
            const usuarios = response.data.body;
            return usuarios

        },
        getPreguntasSeguridad: async () => {
            const response = await axios.get(`http://localhost:8080/preguntas_seguridad/`)
            const allPreguntaSeguridad = response.data.body;
            return allPreguntaSeguridad

        },
        getPreguntaSeguridadById: async (parent: any, { PSE_ID }) => {
            const preguntaSeguridadId = PSE_ID
            const response = await axios.get(`http://localhost:8080/preguntas_seguridad/${preguntaSeguridadId}`)
            const preguntaSeguridadData = response.data.body;
            return preguntaSeguridadData
        },

    }
}
export { resolvers };

