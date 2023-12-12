import { gql } from "apollo-server-express";
//FIXME: agregar tabla intermedia de tipousuario_usuario
const typeDefs = gql `

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
    TipoUsuario: [TipoUsuario!]!
  }

  type PreguntaSeguridad {
    PSE_ID: ID!
    PSE_ENUNCIADO: String!
  }

  type Cotizacion{
    COT_ID: ID!
    COT_FECHA: String!
    COT_RESPONDIDA: Boolean!
    COT_FECHA_RESPUESTA: String!
    COT_MENSAJE: String!
    COT_CANTIDAD_PARTICIPANTES: Int!
    CUR_ID: Int!
    USU_ID: Int!
  }

  type EstadoTransaccion{
    ETR_ID: ID!
    ETR_NOMBRE: String!
  }

  type EstadoVenta{
    EVE_ID: ID!
    EVE_NOMBRE: String!
  }

  type MetodoPago{
    MPA_ID: ID!
    MPA_NOMBRE: String!
  }

  type TipoDt{
    TDT_ID: ID!
    TDT_NOMBRE: String!
  }

  type Transaccion{
    TRA_ID: ID!
    TRA_FECHA: String!
    ETR_ID: Int!
    EstadoTransaccion: EstadoTransaccion!
    MPA_ID:Int!
    MetodoPago: MetodoPago!
    VEN_ID:Int!
    Venta: Venta!
  }

  type Venta{
    VEN_ID:ID!
    VEN_MONTO: Int!
    VEN_RUT_DT: String!
    EVE_ID:Int!
    EstadoVenta: EstadoVenta!
    TDT_ID:Int!
    TipoDt: TipoDt!
    USU_ID:Int!
    Usuario: Usuario!
    PRO_ID:Int!
    Producto: Producto!
  }
  
  type CategoriaCurso{
    CCU_ID: ID!
    CCU_NOMBRE: String!
    Subcategorias: [SubcategoriaCurso]
  }
  
  type CategoriaLead{
    CLE_ID: ID!
    CLE_NOMBRE: String!
    Subcategorias: [SubcategoriaLead]
  }

  type CursoProducto{
    PRO_ID: ID!
    Curso: Producto!
    CUR_DIRIGIDO_A: String!
    CUR_OBJETIVOS: String!
    CUR_ESTRUCTURA: String!
    CUR_IMAGEN_1: String!
    CUR_IMAGEN_2: String!
    CUR_VIDEO_PROMOCIONAL: String!
    CUR_FECHA_INICIO: String!
    CUR_CANTIDAD_MIN_PARTICIPANTES: Int!
    CUR_CANTIDAD_MAX_PARTICIPANTES: Int!
    CUR_CODIGO_SENCE: String!
    CUR_DURACION: Int!
    CUR_INCLUYE_CERTIFICACION: Boolean!
    USU_ID: Int!
    Usuario: Usuario!
    TDU_ID: Int!
    TipoDeDuracion: TipoDeDuracion
    MOD_ID: Int!
    Modalidad: Modalidad!
    SCU_ID:Int!
    SubcategoriaCurso: SubcategoriaCurso!
  }

  type LeadProducto{
    PRO_ID: ID!
    Lead: Producto!
    LEA_URL_DIR: String!
    SLE_ID: Int!
    SubcategoriaLead: SubcategoriaLead!
  }

  type Modalidad {
    MOD_ID: ID!
    MOD_NOMBRE: String!
  }

  type Producto{
    PRO_ID: ID!
    PRO_NOMBRE: String!
    PRO_DESCRIPCION: String!
    PRO_DESCRIPCION_CORTA: String!
    PRO_PRECIO: Int!
    PRO_PRECIO_DESCUENTO: Int!
    PRO_DESTACADO: Boolean!
  }

  type Promocion{
    PRM_ID: ID!
    PRM_NOMBRE: String!
    PRM_DESCUENTO: Int!
    PRM_CANTIDAD_PARTICIANTES: Int!
    PRO_ID: Int!
    Producto: Producto!
  }

  type SubcategoriaCurso{
    SCU_ID: ID!
    SCU_NOMBRE: String!
    CCU_ID:Int
    CategoriaCurso: CategoriaCurso
  }

  type SubcategoriaLead{
    SLE_ID: ID!
    SLE_NOMBRE: String!
    CLE_ID:Int
    CategoriaLead: CategoriaLead
  }

  type TipoDeDuracion{
    TDU_ID: ID!
    TDU_NOMBRE: String!
    TDU_DESCRIPCION: String!
  }

  type Valoracion{
    VAL_ID: ID!
    VAL_FECHA: String!
    VAL_PUNTAJE: Float!
    VAL_COMENTARIO: String!
    USU_ID:Int!
    Usuario: Usuario!
    PRO_ID:Int!
    Producto:Producto!
  }

  type RespuestaLogin{
    ok: Boolean!
    status: Int!
    msg: String
    token: String
  }

  type RespuestaMercadoPago{
    init_point: String
  }
  
  type Query{
    getTipoUsuarioById(TUS_ID:ID): TipoUsuario
    getTiposUsuarios: [TipoUsuario]

    getUsuarioById(USU_ID:ID) : Usuario
    getUsuarios: [Usuario]
    
    getPreguntasSeguridad: [PreguntaSeguridad]
    getPreguntaSeguridadById(PSE_ID:ID): PreguntaSeguridad
    
    getCotizaciones:[Cotizacion]
    getCotizacionById(COT_ID:ID): Cotizacion
    
    getEstadosTransaccion:[EstadoTransaccion]
    getEstadoTransaccionById(EVE_ID:ID): EstadoTransaccion
    
    getEstadosVenta:[EstadoVenta]
    getEstadoVentaById(COT_ID:ID): EstadoVenta

    getMetodosPago:[MetodoPago]
    getMetodoPagoById(MPA_ID:ID): MetodoPago

    getTiposDt:[TipoDt]
    getTipoDtById(TDT_ID:ID): TipoDt

    getTransacciones:[Transaccion]
    getTransaccionById(TRA_ID:ID): Transaccion

    getVentas:[Venta]
    getVentaById(VEN_ID:ID): Venta
    
    getCategoriasCurso:[CategoriaCurso]
    getCategoriaCursoById(CCU_ID:ID): CategoriaCurso

    getCategoriasLead:[CategoriaLead]
    getCategoriaLeadById(CLE_ID:ID): CategoriaLead

    getCursosProducto:[CursoProducto]
    getCursoProductoById(PRO_ID:ID): CursoProducto

    getLeadsProducto:[LeadProducto]
    getLeadProductoById(PRO_ID:ID): LeadProducto

    getModalidades:[Modalidad]
    getModalidadById(MOD_ID:ID): Modalidad

    getProductos:[Producto]
    getProductoById(PRO_ID:ID): Producto

    getPromociones:[Promocion]
    getPromocionById(PRM_ID:ID): Promocion

    getSubcategoriasCurso:[SubcategoriaCurso]
    getSubcategoriaCursoById(SCU_ID:ID): SubcategoriaCurso

    getSubcategoriasLead:[SubcategoriaLead]
    getSubcategoriaLeadById(SLE_ID:ID): SubcategoriaLead

    getTiposDeDuracion:[TipoDeDuracion]
    getTipoDeDuracionById(TDU_ID:ID): TipoDeDuracion

    getValoraciones:[Valoracion]
    getValoracionById(VAL_ID:ID): Valoracion
  }

  type Mutation{
    login(
    USU_CORREO: String!
    USU_CONTRASENA: String!
    ): RespuestaLogin

    newCurso(
      PRO_NOMBRE: String!
      PRO_DESCRIPCION: String!
      PRO_DESCRIPCION_CORTA: String!
      PRO_PRECIO: Int!
      PRO_PRECIO_DESCUENTO: Int!
      CUR_DIRIGIDO_A: String!
      CUR_OBJETIVOS: String!
      CUR_ESTRUCTURA: String!
      CUR_IMAGEN_1: String!
      CUR_IMAGEN_2: String!
      CUR_VIDEO_PROMOCIONAL: String!
      CUR_FECHA_INICIO: String!
      CUR_CANTIDAD_MIN_PARTICIPANTES: Int!
      CUR_CANTIDAD_MAX_PARTICIPANTES: Int!
      CUR_CODIGO_SENCE: String!
      CUR_DURACION: Int!
      CUR_INCLUYE_CERTIFICACION: Boolean!
      USU_ID: Int!
      TDU_ID: Int!
      MOD_ID: Int!
      SCU_ID: Int!
    ):Boolean

    newPagoMercadoPago(
      VEN_MONTO: Int!
      VEN_RUT_DT: String!
      TDT_ID: Int!
      USU_ID: Int!
      PRO_ID: Int!
      USU_CORREO: String!
      PRO_NOMBRE: String!
    ):RespuestaMercadoPago
  }
`;
export { typeDefs };
