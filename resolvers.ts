import axios from 'axios';

const resolvers = {
    Query: {
        tipo_usuarioById: async (parent: any, { id }) => {
            const response = await axios.get(`http://localhost:8080/tipo_usuarios/${id}`)
            console.log(response)
            const tipo_usuarioData = response.data.data;

            return tipo_usuarioData
        },
        todosTiposUsuarios: async (root: any) => {
            const response = await axios.get(`http://localhost:8080/tipo_usuarios/`)
            const allTipoUsuarios = response.data.body;
            return allTipoUsuarios

        }
    }
}

export { resolvers };

