import axios from 'axios';

const resolvers = {
    Query: {
        getTipoUsuarioById: async (parent: any, { TUS_ID }) => {
            const tipoUsuarioId = TUS_ID
            const response = await axios.get(`http://localhost:8080/tipo_usuarios/${tipoUsuarioId}`)
            const tipo_usuarioData = response.data.body;
            return tipo_usuarioData
        },
        getTiposUsuarios: async (root: any) => {
            const response = await axios.get(`http://localhost:8080/tipo_usuarios/`)
            const allTipoUsuarios = response.data.body;
            return allTipoUsuarios

        },
        getUsuarioById: async (parent: any, { USU_ID }) => {
            const usuarioId = USU_ID
            const response = await axios.get(`http://localhost:8080/usuarios/${usuarioId}`)
            const usuarioData = response.data.body;
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
        getCotizaciones: async () => {
            const response = await axios.get(`http://localhost:8081/cotizaciones/`)
            const allCotizaciones = response.data.body;
            return allCotizaciones

        },
        getCotizacionById: async (parent: any, { COT_ID }) => {
            const cotizacionId = COT_ID
            const response = await axios.get(`http://localhost:8081/cotizaciones/${cotizacionId}`)
            const cotizacionData = response.data.body;
            return cotizacionData
        },
        getEstadosTransaccion: async () => {
            const response = await axios.get(`http://localhost:8081/estados-transaccion/`)
            const allEstadosTransaccion = response.data.body;
            return allEstadosTransaccion

        },
        getEstadoTransaccionById: async (parent: any, { ETR_ID }) => {
            const estadoTransaccionId = ETR_ID
            const response = await axios.get(`http://localhost:8081/estados-transaccion/${estadoTransaccionId}`)
            const estadoTransaccionData = response.data.body;
            return estadoTransaccionData
        },
        getEstadosVenta: async () => {
            const response = await axios.get(`http://localhost:8081/estados-venta/`)
            const allEstadosVenta = response.data.body;
            return allEstadosVenta

        },
        getEstadoVentaById: async (parent: any, { EVE_ID }) => {
            const estadoVentaId = EVE_ID
            const response = await axios.get(`http://localhost:8081/estados-venta/${estadoVentaId}`)
            const estadoVentaData = response.data.body;
            return estadoVentaData
        },
        getMetodosPago: async () => {
            const response = await axios.get(`http://localhost:8081/metodos-pago/`)
            const allMetodosPago = response.data.body;
            return allMetodosPago

        },
        getMetodoPagoById: async (parent: any, { MPA_ID }) => {
            const metodoPagoId = MPA_ID
            const response = await axios.get(`http://localhost:8081/metodos-pago/${metodoPagoId}`)
            const metodoPagoData = response.data.body;
            return metodoPagoData
        },
        getTiposDt: async () => {
            const response = await axios.get(`http://localhost:8081/tipos-dt/`)
            const allTiposDt = response.data.body;
            return allTiposDt

        },
        getTipoDtById: async (parent: any, { TDT_ID }) => {
            const tipoDtId = TDT_ID
            const response = await axios.get(`http://localhost:8081/tipos-dt/${tipoDtId}`)
            const tipoDtData = response.data.body;
            return tipoDtData
        },
        getTransacciones: async () => {
            const response = await axios.get(`http://localhost:8081/transacciones/`)
            const allTransacciones = response.data.body;
            return allTransacciones

        },
        getTransaccionById: async (parent: any, { TRA_ID }) => {
            const transaccionId = TRA_ID
            const response = await axios.get(`http://localhost:8081/transacciones/${transaccionId}`)
            const transaccionData = response.data.body;
            return transaccionData
        },
        getVentas: async () => {
            const response = await axios.get(`http://localhost:8081/ventas/`)
            const allVentas = response.data.body;
            return allVentas

        },
        getVentaById: async (parent: any, { VEN_ID }) => {
            const ventaId = VEN_ID
            const response = await axios.get(`http://localhost:8081/ventas/${ventaId}`)
            const ventaData = response.data.body;
            return ventaData
        },
        getCategoriasCurso: async () => {
            const response = await axios.get(`http://localhost:8082/categorias-curso/`)
            const allCategoriasCurso = response.data.body;
            return allCategoriasCurso

        },
        getCategoriaCursoById: async (parent: any, { CCU_ID }) => {
            const categoriaCursoId = CCU_ID
            const response = await axios.get(`http://localhost:8082/categorias-curso/${categoriaCursoId}`)
            const categoriaCursoData = response.data.body;
            return categoriaCursoData
        },
        getCategoriasLead: async () => {
            const response = await axios.get(`http://localhost:8082/categorias-lead/`)
            const allCategoriasLead = response.data.body;
            return allCategoriasLead

        },
        getCategoriaLeadById: async (parent: any, { CLE_ID }) => {
            const categoriaLeadId = CLE_ID
            const response = await axios.get(`http://localhost:8082/categorias-lead/${categoriaLeadId}`)
            const categoriaLeadData = response.data.body;
            return categoriaLeadData
        },
        getCursosProducto: async () => {
            const response = await axios.get(`http://localhost:8082/cursos/`)
            const allCursosProducto = response.data.body;
            return allCursosProducto

        },
        getCursoProductoById: async (parent: any, { PRO_ID }) => {
            const cursoProductoId = PRO_ID
            const response = await axios.get(`http://localhost:8082/cursos/${cursoProductoId}`)
            const cursoProductoData = response.data.body;
            return cursoProductoData
        },
        getLeadsProducto: async () => {
            const response = await axios.get(`http://localhost:8082/leads/`)
            const allLeadsProducto = response.data.body;
            return allLeadsProducto

        },
        getLeadProductoById: async (parent: any, { PRO_ID }) => {
            const leadProductoId = PRO_ID
            const response = await axios.get(`http://localhost:8082/leads/${leadProductoId}`)
            const leadProductoData = response.data.body;
            return leadProductoData
        },
        getModalidades: async () => {
            const response = await axios.get(`http://localhost:8082/modalidades/`)
            const allModalidades = response.data.body;
            return allModalidades

        },
        getModalidadById: async (parent: any, { MOD_ID }) => {
            const modalidadId = MOD_ID
            const response = await axios.get(`http://localhost:8082/modalidades/${modalidadId}`)
            const modalidadData = response.data.body;
            return modalidadData
        },
        getProductos: async () => {
            const response = await axios.get(`http://localhost:8082/productos/`)
            const allProductos = response.data.body;
            return allProductos

        },
        getProductoById: async (parent: any, { PRO_ID }) => {
            const productoId = PRO_ID
            const response = await axios.get(`http://localhost:8082/productos/${productoId}`)
            const productoData = response.data.body;
            return productoData
        },
        getPromociones: async () => {
            const response = await axios.get(`http://localhost:8082/promociones/`)
            const allPromociones = response.data.body;
            return allPromociones

        },
        getPromocionById: async (parent: any, { PRM_ID }) => {
            const promocionId = PRM_ID
            const response = await axios.get(`http://localhost:8082/promociones/${promocionId}`)
            const promocionData = response.data.body;
            return promocionData
        },
        getSubcategoriasCurso: async () => {
            const response = await axios.get(`http://localhost:8082/subcategorias-curso/`)
            const allSubcategoriasCurso = response.data.body;
            return allSubcategoriasCurso

        },
        getSubcategoriaCursoById: async (parent: any, { SCU_ID }) => {
            const subcategoriaCursoId = SCU_ID
            const response = await axios.get(`http://localhost:8082/subcategorias-curso/${subcategoriaCursoId}`)
            const subcategoriaCursoData = response.data.body;
            return subcategoriaCursoData
        },
        getSubcategoriasLead: async () => {
            const response = await axios.get(`http://localhost:8082/subcategorias-lead/`)
            const allSubcategoriasLead = response.data.body;
            return allSubcategoriasLead

        },
        getSubcategoriaLeadById: async (parent: any, { SLE_ID }) => {
            const subcategoriaLeadId = SLE_ID
            const response = await axios.get(`http://localhost:8082/subcategorias-lead/${subcategoriaLeadId}`)
            const subcategoriaLeadData = response.data.body;
            return subcategoriaLeadData
        },
        getTiposDeDuracion: async () => {
            const response = await axios.get(`http://localhost:8082/tipos-duracion/`)
            const allTiposDuracion = response.data.body;
            return allTiposDuracion

        },
        getTipoDeDuracionById: async (parent: any, { TDU_ID }) => {
            const tipoDuracionId = TDU_ID
            const response = await axios.get(`http://localhost:8082/tipos-duracion/${tipoDuracionId}`)
            const tipoDuracionData = response.data.body;
            return tipoDuracionData
        },
        getValoraciones: async () => {
            const response = await axios.get(`http://localhost:8082/valoraciones/`)
            const allValoraciones = response.data.body;
            return allValoraciones

        },
        getValoracionById: async (parent: any, { TDU_ID }) => {
            const valoracionId = TDU_ID
            const response = await axios.get(`http://localhost:8082/valoraciones/${valoracionId}`)
            const valoracionData = response.data.body;
            return valoracionData
        },
    },
    CursoProducto: {
        Curso: async (parent: any) => {
            const productoId = parent.PRO_ID
            const response = await axios.get(`http://localhost:8082/productos/${productoId}`)
            const productoData = response.data.body;
            return productoData
        },
        Usuario: async (parent: any) => {
            const usuarioId = parent.USU_ID
            const response = await axios.get(`http://localhost:8080/usuarios/${usuarioId}`)
            const usuarioData = response.data.body;
            return usuarioData
        },
        TipoDeDuracion: async (parent: any) => {
            const tipoDuracionId = parent.TDU_ID;
            const response = await axios.get(`http://localhost:8082/tipos-duracion/${tipoDuracionId}`);
            const tipoDuracionData = response.data.body;
            return tipoDuracionData;
        },
        Modalidad: async (parent: any) => {
            const modalidadId = parent.MOD_ID
            const response = await axios.get(`http://localhost:8082/modalidades/${modalidadId}`)
            const modalidadData = response.data.body;
            return modalidadData
        },
        SubcategoriaCurso: async (parent: any) => {
            const subcategoriaCursoId = parent.SCU_ID
            const response = await axios.get(`http://localhost:8082/subcategorias-curso/${subcategoriaCursoId}`)
            const subcategoriaCursoData = response.data.body;
            return subcategoriaCursoData
        }
    },
    Usuario: {
        TipoUsuario: async (parent: any) => {
            const usuarioId = parent.USU_ID
            const getTipoUsuarioById = await axios.get(`http://localhost:8080/tipo_usuario_usuarios/get-by-user/${usuarioId}`)
            const tipo_usuarioData = getTipoUsuarioById.data.body;

            const tipoUsuarioInfoPromises = tipo_usuarioData.map(async (tipoUsuario) => {
                const tipoUsuarioId = tipoUsuario.TUS_ID;
                const response = await axios.get(`http://localhost:8080/tipo_usuarios/${tipoUsuarioId}`);
                return response.data.body;
            });
            return tipoUsuarioInfoPromises
        }
    },
    Transaccion: {
        EstadoTransaccion: async (parent: any) => {
            const estadoTransaccionId = parent.ETR_ID
            const response = await axios.get(`http://localhost:8081/estados-transaccion/${estadoTransaccionId}`)
            const estadoTransaccionData = response.data.body;
            return estadoTransaccionData
        },
        MetodoPago: async (parent: any) => {
            const metodoPagoId = parent.MPA_ID
            const response = await axios.get(`http://localhost:8081/metodos-pago/${metodoPagoId}`)
            const metodoPagoData = response.data.body;
            return metodoPagoData
        },
        Venta: async (parent: any) => {
            const ventaId = parent.VEN_ID
            const response = await axios.get(`http://localhost:8081/ventas/${ventaId}`)
            const ventaData = response.data.body;
            return ventaData
        }
    },
    Venta: {
        EstadoVenta: async (parent: any) => {
            const estadoVentaId = parent.EVE_ID
            const response = await axios.get(`http://localhost:8081/estados-venta/${estadoVentaId}`)
            const estadoVentaData = response.data.body;
            return estadoVentaData
        },
        TipoDt: async (parent: any) => {
            const tipoDtId = parent.TDT_ID
            const response = await axios.get(`http://localhost:8081/tipos-dt/${tipoDtId}`)
            const tipoDtData = response.data.body;
            return tipoDtData
        },
        Usuario: async (parent: any) => {
            const usuarioId = parent.USU_ID
            const response = await axios.get(`http://localhost:8080/usuarios/${usuarioId}`)
            const usuarioData = response.data.body;
            return usuarioData
        }
    },
    LeadProducto: {
        Curso: async (parent: any) => {
            const productoId = parent.PRO_ID
            const response = await axios.get(`http://localhost:8082/productos/${productoId}`)
            const productoData = response.data.body;
            return productoData
        },
        SubcategoriaLead: async (parent: any) => {
            const subcategoriaLeadId = parent.SLE_ID
            const response = await axios.get(`http://localhost:8082/subcategorias-lead/${subcategoriaLeadId}`)
            const subcategoriaLeadData = response.data.body;
            return subcategoriaLeadData
        }
    },
    Promocion: {
        Producto: async (parent: any) => {
            const productoId = parent.PRO_ID
            const response = await axios.get(`http://localhost:8082/productos/${productoId}`)
            const productoData = response.data.body;
            return productoData
        }
    },
    SubcategoriaCurso: {
        CategoriaCurso: async (parent: any) => {
            const categoriaCursoId = parent.CCU_ID
            const response = await axios.get(`http://localhost:8082/categorias-curso/${categoriaCursoId}`)
            const categoriaCursoData = response.data.body;
            return categoriaCursoData
        }
    },
    SubcategoriaLead: {
        CategoriaLead: async (parent: any) => {
            const categoriaLeadId = parent.CLE_ID
            const response = await axios.get(`http://localhost:8082/categorias-lead/${categoriaLeadId}`)
            const categoriaLeadData = response.data.body;
            return categoriaLeadData
        }
    },
    Valoracion: {
        Usuario: async (parent: any) => {
            const usuarioId = parent.USU_ID
            const response = await axios.get(`http://localhost:8080/usuarios/${usuarioId}`)
            const usuarioData = response.data.body;
            return usuarioData
        },
        Producto: async (parent: any) => {
            const productoId = parent.PRO_ID
            const response = await axios.get(`http://localhost:8082/productos/${productoId}`)
            const productoData = response.data.body;
            return productoData
        }
    }
}
export { resolvers };

