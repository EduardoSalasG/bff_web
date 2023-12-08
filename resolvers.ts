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
    }
}
export { resolvers };

