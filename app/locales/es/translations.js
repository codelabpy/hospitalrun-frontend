export default {
  dashboard: {
    title: '¿Qué desea hacer?'
  },
  errors: {
    inclusion: 'no se encuentra incluído(a) en la lista',
    exclusion: 'está reservado(a)',
    invalid: 'es inválido(a)',
    confirmation: 'no coincide {{attribute}}',
    accepted: 'debe aceptarse',
    empty: 'no puede ser vacío',
    blank: 'no puede estar en blanco',
    present: 'debe estar en blanco',
    tooLong: 'es muy largo (el máximo es {{count}} caracteres)',
    tooShort: 'es muy corto (el mínimo es {{count}} caracteres)',
    wrongLength: 'se encuentra con tamaño incorrecto (debe ser {{count}} caracteres)',
    notANumber: 'no es un número',
    notAnInteger: 'debe ser un número entero',
    greaterThan: 'debe ser mayor a {{count}}',
    greaterThanOrEqualTo: 'debe ser mayor o igual a {{count}}',
    equalTo: 'debe ser igual a {{count}}',
    lessThan: 'debe ser menor a {{count}}',
    lessThanOrEqualTo: 'debe ser menor o igual a {{count}}',
    otherThan: 'debe ser diferente a {{count}}',
    odd: 'debe ser par',
    even: 'debe ser impar',
    invalidNumber: 'no es un número válido',
    result: 'Por favor, ingrese un resultado antes de completar'
  },
  dates: {
    long: '{{years}} años {{months}} meses {{days}} días',
    longPlural: '{{years}} años {{months}} meses {{days}} días',
    longOmitYears: '{{months}} meses {{days}} días',
    longOmitDays: '{{years}} años {{months}} meses',
    longOmitDaysPlural: '{{years}} años {{months}} meses',
    longOmitDaysYears: '{{months}} meses',
    shortOmitYears: '{{months}}m {{days}}d',
    short: '{{years}}a {{months}}m {{days}}d'
  },
  navigation: {
    imaging: 'Radiografía',
    inventory: 'Inventario',
    patients: 'Pacientes',
    scheduling: 'Agendamiento',
    medication: 'Recetas médicas',
    labs: 'Laboratorio',
    billing: 'Facturas',
    administration: 'Administración',
    incident: 'Incident',
    subnav: {
      actions: 'Acciones',
      requests: 'Pedidos',
      items: 'Items',
      completed: 'Completado',
      newRequest: 'Nuevo pedido',
      inventoryReceived: 'Inventario recibido',
      reports: 'Reportes',
      patientListing: 'Lista de pacientes',
      newPatient: 'Nuevo paciente',
      appointmentsThisWeek: 'Citas de esta Semana',
      "today'sAppointments": 'Citas de hoy',
      appointmentSearch: 'Búsqueda de Citas',
      addAppointment: 'Nueva cita',
      dispense: 'Dispensar',
      returnMedication: 'Devolver medicamento',
      invoices: 'Facturas',
      newInvoice: 'Nueva factura',
      prices: 'Precios',
      priceProfiles: 'Perfil de precios',
      lookupLists: 'Lista de busuedas',
      addressFields: 'Campos de dirección',
      loadDB: 'Cargar base de datos',
      users: 'Usuarios',
      newUser: 'Nuevo usuario',
      admittedPatients: 'Pacientes Admitidos',
      missedAppointments: 'Citas Perdidas',
      userRoles: 'Roles',
      workflow: 'Flujo de Trabajo',
      outpatient: 'Ambulatorio',
      customForms: 'Formularios Personalizados',
      appointmentsCalendar: 'Calendario de Citas',
      theaterSchedule: 'Agendamiento de Quirófano',
      scheduleSurgery: 'Agendar Cirugía',
      printHeader: 'Imprimir Cabecera',
      currentIncidents: 'Incidentes Actuales',
      newIncident: 'Nuevo Incidente',
      history: 'Historial',
      incidentCategories: 'Categorias de Incidentes'
    },
    actions: {
      logout: 'Salir',
      login: 'Ingresar'
    },
    about: 'Información de HospitalRun'
  },
  user: {
    plusNewUser: '+ nuevo usuario',
    usersPageTile: 'Listado de usuarios'
  },
  admin: {
    addressOptions: 'Opciones de direcciones',
    lookupLists: 'Lista de busqueda',
    loadDb: 'Cargar Base de datos',
    userRoles: 'Roles',
    users: 'Usuarios',
    address: {
      address1Label: 'Texto direccion 1',
      address2Label: 'Texto direccion 2',
      address3Label: 'Texto direccion 3',
      address4Label: 'Texto direccion 4',
      include1Label: 'Incluir 1',
      include2Label: 'Incluir 2',
      include3Label: 'Incluir 3',
      include4Label: 'Incluir 4',
      titles: {
        optionsSaved: 'Opciones guardadas'
      },
      messages: {
        addressSaved: 'las opciones de dirección han sido guardadas'
      },
      newTitle: 'Opciones de dirección',
      editTitle: 'Opciones de dirección',
      addressLabel: 'Dirección'
    },
    header: {
      facilityName: 'Nombre de Establecimiento',
      headerLine1: 'Encabezado Line 1',
      headerLine2: 'Encabezado Line 2',
      headerLine3: 'Encabezado Line 3',
      logoURL: 'URL del Logo',
      includeFacilityName: 'Include Facility Name',
      includeHeaderLine1: 'Include Header Line 1',
      includeHeaderLine2: 'Include Header Line 2',
      includeHeaderLine3: 'Include Header Line 3',
      includeLogoURL: 'Include Logo URL',
      titles: {
        optionsSaved: 'Opciones Guardadas'
      },
      messages: {
        headerSaved: 'Las opciones de cabecera and sido guardadas'
      },
      newTitle: 'Opciones de Cabecera',
      editTitle: 'Opciones de Cabecera',
      headerLabel: 'Cabecera'
    },
    customForms: {
      buttons: {
        addField: 'Agregar Campo',
        moveDown: 'Mover Abajo',
        moveUp: 'Mover Arriba',
        newForm: '+ nuevo formulario',
        preview: 'Previsualizar'

    },
      labels: {
        alwaysInclude: 'Incluir siempre',
        checkbox: 'Checkbox',
        columns: 'Columnas',
        colSpan: 'Número de Columnas a Expandir',
        customForm: 'Formulario Personalizado',
        formName: 'Nombre Formulario',
        formType: 'Tipo Formulario',
        includeOtherOption: 'Incluir otra opción',
        incidentFormType: 'Incidente',
        label: 'Etiqueta',
        newForm: 'Nuevo Formulario',
        operativePlanFormType: 'Plan Operativo y Reportes',
        otherOptionLabel: 'Eiqueta Otra Opcion',
        patientFormType: 'Paciente',
        property: 'Propiedad',
        radio: 'Radio',
        select: 'Dropdown',
        socialworkFormType: 'Trabajo Social',
        text: 'Texto',
        textarea: 'Texto Largo',
        visitFormType: 'Consulta',
        opdReportFormType: 'Reporte Ambulatorio',
        dischargeReportFormType: 'Reporte Alta'
      },
      messages: {
        deleteForm: '¿Está seguro que desea borrar este formulario personalizado?',
        formSaved: 'El formulario {{name}} ha sido guardado.'
      },
      titles: {
        customForms: 'Formularios Personalizados',
        deleteForm: 'Borrar Formulario Personalizado',
        editCustomForm: 'Editar Formulario Personalizado',
        fields: 'Campos',
        formSaved: 'Formulario Guardado',
        checkboxValues: 'Valores Checkbox',
        dropDownValues: 'Valores Dropdown',
        newCustomForm: 'Nuevo Formulario Personalizado',
        radioValues: 'Valores Radio'
      },
    },
    loaddb: {
      progressMessage: 'Por favor espere mientras la base de datos es cargada.',
      progressTitle: 'Cargando base de datos',
      displayAlertTitle: 'Seleccione un archivo para cargar',
      displayAlertMessage: 'Por favor seleccione un archivo para ser cargado.',
      errorDisplayAlertTitle: 'Error cargando',
      errorDisplayAlertMessage: 'La base de datos no fue cargada el error fue: {{error}}',
      editTitle: 'Cargar bd'
    },
    lookup: {
      alertImportListTitle: 'Seleccione un archivo para importar',
      alertImportListMessage: 'Por favor seleccione un archivo para importar.',
      alertImportListSaveTitle: 'Lista importada',
      alertImportListSaveMessage: 'Lista de busqueda importada.',
      alertImportListUpdateTitle: 'Lista guardada',
      alertImportListUpdateMessage: 'La lista de busqueda ha sido guardada.',
      pageTitle: 'Listas de busqueda',
      edit: {
        template: {
          addTitle: 'Agregar valor',
          editTitle: 'Editar valor',
          updateButtonTextAdd: 'Agregar',
          updateButtonTextUpdate: 'Actualizar',
          labelTitle: 'Valor'
        }
      },
      anesthesiaTypes: 'Tipos de anestesia',
      anesthesiologists: 'Anestesiologo',
      billingCategories: 'Categorias de facturacion',
      clinicList: 'Ubicacion de las clinicas',
      countryList: 'Paises',
      diagnosisList: 'Diagnosticos',
      cptCodeList: 'Codigos CPT',
      expenseAccountList: 'Cuentas de gastos',
      aisleLocationList: 'Ubicacion de inventario de pasillo',
      warehouseList: 'Ubicacciones de inventarios',
      incidentDepartments: 'Departamentos de Incidentes',
      inventoryTypes: 'Tipos de inventarios',
      imagingPricingTypes: 'Tipos de precios de radiografias',
      labPricingTypes: 'Precios de laboratorio',
      patientStatusList: 'Lista de estado de pacientes',
      physicianList: 'Medicos',
      procedureList: 'Procedimientos',
      procedureLocations: 'Ubicacion de los procedimientos',
      procedurePricingTypes: 'Tipos de procedimientos y precios',
      radiologists: 'Radiologos',
      unitTypes: 'Tipos de unidad',
      vendorList: 'Proveedor',
      visitLocationList: 'Lugares de consulta',
      visitTypes: 'Tipos de consulta',
      wardPricingTypes: 'Tipos de tarifas',
      messages: {
        deleteLookupValue: '¿Está seguro que desea borrar el valor {{value}}?'
      },
      titles: {
        deleteLookupValue: 'Borrar Valor'
      }
    },
    roles: {
      capability: {
        admin: 'Administracion',
        loadDb: 'Cargar base de datos',
        updateConfig: 'Actualizar configuracion',
        appointments: 'Citas',
        addAppointment: 'Adicionar cita',
        billing: 'Facturacion',
        addCharge: 'Adicionar cargo (valor)',
        addPricing: 'Adicionar precio',
        addPricingProfile: 'Adicionar perfil de precios',
        addInvoice: 'Adicionar factura',
        addPayment: 'Adicionar pago',
        deleteInvoice: 'Eliminar factura',
        deletePricing: 'Eliminar precio',
        deletePricingProfile: 'Eliminar perfil de precio',
        editInvoice: 'Editar factura',
        invoices: 'Facturas',
        overrideInvoice: 'Sobreescribir factura',
        pricing: 'Precio',
        patients: 'Pacientes',
        addDiagnosis: 'Adicionar diagnostico',
        addPhoto: 'Adicionar foto',
        addPatient: 'Adicionar paciente',
        addProcedure: 'Adicionar procedimiento',
        addVisit: 'Adicionar consulta',
        addVitals: 'Adicionar partes vitales',
        admitPatient: 'Admitir paciente',
        deletePhoto: 'Eliminar foto',
        deletePatient: 'Eliminar paciente',
        deleteAppointment: 'Eliminar cita',
        deleteDiagnosis: 'Eliminar diagnostico',
        deleteProcedure: 'Eliminar procedimiento',
        deleteSocialwork: 'Eliminar trabajo social',
        deleteVitals: 'Eliminar organo vital',
        deleteVisit: 'Eliminar consulta',
        dischargePatient: 'Dar de Alta paciente',
        patientReports: 'Reportes por paciente',
        visits: 'Consultas',
        medication: 'Medicación',
        addMedication: 'Adicionar medicación',
        deleteMedication: 'Eliminar medicación',
        fulfillMedication: 'Cumplir la medicación',
        labs: 'Laboratorios',
        addLab: 'Adicionar laboratorio',
        completeLab: 'Completar laboratorio',
        deleteLab: 'Eliminar laboratorio',
        imaging: 'Radiografia',
        addImaging: 'Adicionar radiografia',
        completeImaging: 'Completar radiografia',
        deleteImaging: 'Eliminar radiografia',
        inventory: 'Inventario',
        addInventoryRequest: 'Agregar Pedido de inventario',
        addInventoryItem: 'Adicionar elemento al inventario',
        addInventoryPurchase: 'Adicionar compra',
        adjustInventoryLocation: 'Ajustar lugar elemento en el inventario',
        deleteInventoryItem: 'Eliminar elemento del inventario',
        deleteInventoryPurchase: 'Eliminar compra del inventario',
        fulfillInventory: 'Cumplimiento de inventario',
        defineUserRoles: 'Roles de usuario',
        addBillingDiagnosis: 'Agregar Facturación de Diagnóstico',
        addNote: 'Agregar Nota',
        addSocialwork: 'Agrear Trabajo Social',
        deleteNote: 'Borrar Nota',
        addOperativePlan: 'Agregar Plan Operativo',
        addAllergy: 'Agregar Alergia',
        addOperationReport: 'Agregar Informa de Operación',
        incident: 'Incidente',
        addIncident: 'Agregar Incidente',
        addIncidentCategory: 'Agregar Categoría de Incidentes',
        deleteIncident: 'Borrar Incidente',
        deleteIncidentCategory: 'Borrar Categoría de Incidentes',
        generateIncidentReport: 'Generar Informe de Incidentes',
        manageIncidents: 'Administrar Incidentes'
      },
      messages: {
        roleSaved: 'El rol {{roleName}} ha sido guardado.'
      },
      titles: {
        roleSaved: 'Role guardado'
      }
    },
    visitForms: {
      labels: {
        followup: 'Seguimiento',
        form: 'Formulario',
        initial: 'Inicial',
        visitType: 'Tipo de Consulta'
      },
      titles: {
        visitForms: 'Formularios de Consulta'
      }
    },
    workflow: {
      admissionDepositLabel: 'Requiere Depósito de Admisión',
      clinicPrepaymentLabel: 'Requiere Prepago Clínico',
      followupPrepaymentLabel: 'Requiere Prepago de Seguimiento',
      outpatientLabLabel: 'Requiere Prepago de Laboratorio para Ambulatorio',
      outpatientImagingLabel: 'Requiere Prepago de Radiografía para Ambulatorio',
      outpatientMedicationLabel: 'Requiere Prepago de Medicación para Ambulatorio',

      titles: {
        optionsSaved: 'Opciones Guardadas'
      },
      messages: {
        optionsSaved: 'Las opciones de Flujo de trabajo han sido guardadas'
      },

      newTitle: 'Opciones de Flujo de Trabajo',
      editTitle: 'Opciones de Flujo de Trabajo',
      workflowLabel: 'FLujo de Trabajo'

    }
  },
  labels: {
    cptcode: 'Codigo CPT',
    loading: 'Cargando',
    name: 'Nombre',
    note: 'Nota',
    patient: 'Paciente',
    prescriber: 'Médico',
    quantity: 'Cantidad',
    requestedOn: 'Solicitado en',
    date: 'Fecha',
    dateOfBirth: 'Fecha de nacimiento',
    dateOfBirthShort: 'FDN',
    dateRequested: 'Fecha de pedido',
    dateCompleted: 'Fecha completada',
    description: 'Descripción',
    requestedBy: 'Pedido por|',
    fulfill: 'Cumplimiento',
    fulfillRequest: 'Pedido de cumplimiento',
    fulfillRequestNow: 'Pedido de cumplimiento ahora',
    actions: 'Acciones',
    action: 'Acción',
    notes: 'Notas',
    edit: 'Editar',
    imageOrders: 'Ordenes de radiografias',
    labOrders: 'Ordenes de laboratorio',
    imagingType: 'Tipo de radiografia',
    result: 'Resultado',
    results: 'Resultados',
    visit: 'Consulta',
    requests: 'Pedido',
    completed: 'Completado',
    id: 'Id',
    on: 'on',
    type: 'Tipo',
    sex: 'Genero',
    age: 'Edad',
    search: 'Búsqueda',
    username: 'Nombre de usuario',
    email: 'Email',
    role: 'Rol',
    delete: 'Eliminar',
    userCanAddNewValue: 'Los usuarios pueden agregar nuevos valores',
    value: 'Valor',
    lookupType: 'Tipo de busqueda',
    importFile: 'Importar archivo',
    fileLoadSuccessful: 'Archivo cargado exitosamente',
    fileToLoad: 'Archivo cargado',
    startTime: 'Hora de inicio',
    startDate: 'Fecha de inicio',
    endTime: 'Hora de finalización',
    endDate: 'Fecha final',
    docRead: 'Leer documento',
    docWritten: 'Documento escrito',
    displayName: 'Nombre para mostrar',
    password: 'Contraseña',
    editUser: 'Editar usuario',
    newUser: 'Nuevo usuario',
    deleteUser: 'Eliminar usuario',
    medication: 'Medicación',
    status: 'Estado',
    addNewOutpatientVisit: '--Nueva consulta ambulatoria--',
    prescription: 'Receta medica',
    prescriptionDate: 'Fecha de la receta medica',
    billTo: 'Facturar a',
    pullFrom: 'Traer de',
    fulfilled: 'Cumplido',
    deleteRequest: 'Eliminar pedido',
    location: 'Ubicacion',
    provider: 'Proveedor',
    with: 'con',
    allDay: 'Todo el día',
    physician: 'Médico',
    assisting: 'Asistencia',
    anesthesia: 'Anestesia',
    procedures: 'Procedimiento',
    number: 'Número',
    billDate: 'Fecha de Factura',
    balanceDue: 'Saldo Vencido',
    amount: 'Monto',
    datePaid: 'Fecha de Pago',
    creditTo: 'Crédito a',
    invoiceId: 'ID de Factura',
    lineItems: 'Artículos',
    discount: 'Descuento',
    excess: 'Exceso',
    price: 'Precio',
    total: 'Total',
    expenseTo: 'Gasto a',
    grandTotal: 'Monto Total',
    remarks: 'Observaciones',
    payments: 'Pagos',
    category: 'Categoría',
    department: 'Departamento',
    address: 'Dirección',
    country: 'País'
  },
  messages: {
    noItemsFound: 'Elementos no encontrados.',
    noHistoryAvailable: 'Historia no disponible.',
    createNewRecord: '¿Crear un nuevo registro?',
    createNewUser: '¿Crear un nuevo usuario?',
    noUsersFound: 'Ningun usuario encontrado.',
    areYouSureDelete: '¿Está seguro que desea eliminar el usuario {{user}}?',
    userHasBeenSaved: 'El usuario ha sido guardado.',
    userSaved: 'Usuario guardado',
    onBehalfOf: 'a nombre de',
    newPatientHasToBeCreated: 'Un nuevo paciente debe ser creado...Por favor espere..',
    noNotesAvailable: 'Notas clínicas adicionales no disponibles para esta consulta.',
    sorry: 'Lo sentimos, un error ha ocurrido...',
    forAuthorizedPersons: 'Este informe es sólo para personas autorizadas.',
    requiredFieldsCorrectErrors: 'Por favor complete los campos requeridos (marcados con *) y corrija los errores antes de guardar.',
    saveActionException: 'Ha ocurrido un error al intentar guardar: {{message}}',
    reportError: 'Se ha encontrado un error al generar el reporte solicitado. Por favor notifique a su administrador sobre el mismo.'
  },
  alerts: {
    pleaseWait: 'Por favor espere',
    warningExclamation: 'Advertencia!!!!',
    errorExclamation: 'Error!!!!',
    reportError: 'Error Generando Reporte'
  },
  headings: {
    chargedItems: 'Artículos Facturados',
  },
  buttons: {
    addItem: 'Agregar Item',
    complete: 'Completado',
    cancel: 'Cancelar',
    close: 'Cerrar',
    returnButton: 'Regresar',
    barcode: 'Código de barras',
    add: 'Agregar',
    update: 'Actualizar',
    ok: 'Ok',
    fulfill: 'Cumplimiento',
    remove: 'Remover',
    delete: 'Eliminar',
    newUser: 'Nuevo usuario',
    addValue: 'Agregar valor',
    newNote: 'Nueva nota',
    import: 'Importar',
    loadFile: 'Cargar archivo',
    newRequest: 'Nueva solicitud',
    allRequests: 'Todas las solicitudes',
    dispense: 'Dispensar',
    newItem: '+ nuevo elemento',
    newRequestPlus: '+ nuevo pedido',
    addVisit: 'Agregar consulta',
    search: 'Buscar',
    filter: 'Filtro',
    clear: 'Limpiar',
    edit: 'Editar',
    addLineItem: 'Agregar Artículo',
    showFewer: 'Mostrar Menos',
    showAll: 'Mostrar Todos'
  },
  login: {
    messages: {
      signIn: 'por favor ingrese',
      error: 'Nombre de usuario o clave incorrectos.'
    },
    labels: {
      password: 'Clave',
      username: 'Nombre de usuario',
      signIn: 'Ingresar'
    }
  },
  loading: {
    progressBar: {
      progress: '{{progressBarValue}}% Completado'
    },
    messages: {
      0: 'La velocidad máxima de una mariposa en vuelo es de 19 km/h. Algunas polillas pueden volar hasta 40 km/h!',
      1: 'Los Búos son las únicas aves que pueden ver el color azul.',
      2: 'Los gatos tienen más de 100 sonidos vocales; los perros solo tienen 10.',
      3: 'El ser humano usa un total de 72 músculos diferentes al hablar.',
      4: 'Más de 1000 lenguajes diferentes son hablados en el continente Africano.',
      5: 'La Eritrofobia es el miedo de una persona a ruborizarse.',
      6: 'La fobia más común en el mundo es la odynofobia, que es el miedo al dolor.',
      7: 'Tu cuerpo usa 300 músculos para balancearse cuando estás parado.',
      8: 'Ciertos tipos de sapos pueden seguir vivos incluso si son congelados completamente y luego descongelados.',
      9: 'Nuestros ojos son siempre del mismo tamaño desde el nacimiento, pero nuestra nariz y oidos nunca paran de crecer.',
      10: 'La lengua es el único músculo del cuerpo que se encuentra adjunto de sólo un lado.',
      11: 'Los camellos tienen 3 párpados por cada ojo para protejerse de las arenas del desierto.'
    }
  },
  inventory: {
    edit: {
      cost: 'Costo por unidad:',
      delivered: 'Enviado A:',
      location: 'Cambio de ubicación:',
      prescription: 'Recetado por:',
      pulled: 'Retirado de:',
      quantity: 'Cantidad al Completarse:',
      reason: 'Razón:',
      returned: 'Regresado del paciente:',
      transferredFrom: 'Transferido De:',
      transferredTo: 'Transferido A:'
    },
    labels: {
      action: 'Acción',
      add: 'Adicionar',
      adjust: 'Ajustar',
      adjustmentDate: 'Fecha de ajuste',
      adjustmentFor: 'Ajustado para',
      adjustmentType: 'Tipo de ajuste',
      aisle: 'Pasillo',
      aisleLocation: 'Ubicación pasillo',
      allInventory: 'Todo el inventario',
      availableQuantity: '{{quantity}} disponible',
      billTo: 'Facturao a',
      consumePurchases: 'Compras de Consumo',
      consumptionRate: 'Tasa de consumo',
      cost: 'Costo',
      costPerUnit: 'Costo por Unidad',
      crossReference: 'Referencia cruzada',
      currentQuantity: 'Cantidad actual',
      dateCompleted: 'Fecha completado',
      dateEffective: 'Fecha efectiva',
      dateEnd: 'Fecha final',
      dateStart: 'Fecha inicial',
      dateReceived: 'Fecha recibido',
      dateTranferred: 'Fecha transferencia',
      daysLeft: 'Dias restantes',
      deliveryAisle: 'Enviado a pasillo',
      deliveryLocation: 'Ubicación del envio',
      distributionUnit: 'Unidad de distribución',
      deleteItem: 'Eliminar elemento',
      details: 'Detalles',
      editItem: 'Editar elemento',
      expense: 'Gastos a',
      expirationDate: 'Fecha de vencimiento',
      fulfillRequest: 'Pedido de cumplimiento',
      fulfillRequestNow: 'Pedido de incumplimiento para hoy',
      gift: 'Regalo en amabilidad',
      giftUsage: 'Uso del regalo en amabilidad',
      giftInKindNo: 'N',
      giftInKindYes: 'Y',
      inventoryConsumed: 'Inventario consumido',
      inventoryItem: 'Elemento del inventario',
      inventoryObsolence: 'Obsolescencia de inventario',
      invoiceItems: 'Articulos de factura',
      invoiceLineItem: 'Artículo',
      invoiceNumber: 'Factura numero',
      item: 'Elemento',
      items: 'Elementos',
      itemNumber: 'Numero de elemento',
      location: 'Ubicación',
      locations: 'Ubicaciones',
      name: 'Nombre',
      markAsConsumed: 'Marcar como consumido',
      newItem: 'Nuevo elemento',
      allItems: 'Todos los Elementos',
      originalQuantity: 'Cantidad original',
      print: 'Imprimir',
      printBarcode: 'Imprimir codigo de  barras',
      printer: 'Impresora',
      pullFrom: 'Traido de',
      purchases: 'Compras',
      purchaseCost: 'Costo de compra',
      purchaseInfo: 'Informacion de la compra',
      quantity: 'Cantidad ({{unit}})',
      quantityAvailable: 'Cantidad disponible',
      quantityOnHand: 'Cantidad a mano',
      quantityRequested: 'Cantidad pedida',
      rank: 'Ranking',
      reason: 'Razón',
      remove: 'Remover',
      reorderPoint: 'Reordenar punto',
      requestedItems: 'Elementos solicitados',
      salePricePerUnit: 'Costo de venta por unidad',
      save: 'Guardar',
      serialNumber: 'Serial/Numero de lote',
      total: 'Total',
      totalCost: 'Costo total',
      totalReceived: 'Total Recibido: {{total}}',
      transaction: 'Transaccion',
      transactions: 'Transacciones',
      transfer: 'Translados',
      transferFrom: 'Translado desde',
      transferTo: 'Translado a ubicación',
      transferToAisle: 'Translado a pasillo',
      unit: 'Unidad',
      unitCost: 'Unidad Costo',
      vendor: 'Proveedor',
      vendorItemNumber: 'Proveedor numero de elemento',
      xref: 'XRef'
    },
    messages: {
      adjust: 'Por favor ajuste las cantidades en la(s) ubicación(es) adecuada(s) la diferencia de la cuenta es {{difference}}.',
      createRequest: '¿Crear un nuevo pedido?',
      delete: '¿Estás seguro de eliminar {{name}}?',
      itemNotFound: 'El elemento del inventario <strong>{{item}}</strong> no se pudo encontrar.<br>Si desea crear un nuevo elemento, Ingrese la información abajo.<br>De lo contrario oprima cancelar para volver.',
      loading: 'Cargando transacciones ...',
      purchaseSaved: 'La compra de inventario ha sido guardada.',
      noRequests: 'No se encontraron pedidos.',
      noItems: 'No se encontraron elementos.',
      quantity: 'La cantidad total <strong>({{quantity}})</strong> no encaja con la cantidad total en las ubicaciones <strong>({{locationQuantity}})</strong>.',
      removeItem: '¿Está seguro de eliminar este elemento de la factura?',
      removeItemRequest: '¿Está seguro que quiere eliminar este elemento del pedido?',
      requestFulfilled: 'El pedido de inventario ha sido procesado.',
      requestUpdated: 'El pedido de inventario ha sido actualizado.',
      warning: 'Valide los campos requeridos (marcados con *) corrija los errores antes de adicionar.'
    },
    reports: {
      rows: {
        adjustments: 'Ajustes',
        adjustmentsTotal: 'Ajustes totales',
        balanceBegin: 'Balance inicial',
        balanceEnd: 'Balance Final',
        category: 'Categoria',
        consumed: 'Consumado',
        consumedGik: 'GiK Consumido',
        consumedGikTotal: 'Total GiK Consumido',
        consumedPuchases: 'Total de lo comprado consumido',
        consumedPurchasesTotal: 'Total de lo comprado consumido',
        consumedTotal: 'Total consumido',
        errInFinSum: 'Error en _generateFinancialSummaryReport: ',
        errInFindPur: 'Error en _findInventoryItemsByPurchase: ',
        errInFindReq: 'Error en _findInventoryItemsByRequest: ',
        expensesFor: 'Gatos para: ',
        noAccount: '(Sin Cuenta)',
        subtotal: 'Subtotal: ',
        subtotalFor: 'Subtotal para {{category}} - {{account}}: ',
        total: 'Total: ',
        totalFor: 'Total para {{var}}: ',
        totalPurchases: 'Compras Totales',
        transfer1: '{{quantity}} de {{location}}',
        trasnfer2: 'De: {{source}} A: {{target}}'
      },
      adjustment: 'Ajuste detallado',
      daysSupply: 'Dias de inventario restante',
      expenseDetail: 'Gastos detallados',
      expenseSum: 'Resumen de gastos',
      expiration: 'Fecha de expiracion',
      export: 'Exportar reporte',
      fields: 'Campos a incluir',
      finance: 'Resumen de finanzas',
      generate: 'Generar reporte',
      invLocation: 'Inventario por ubicacion',
      invValuation: 'Inventario por valoracion',
      purchaseDetail: 'Compras detalladas',
      purchaseSum: 'Resumen de compras',
      reportType: 'Tipo de reporte',
      stockTransferDetail: 'Detalle de traslado de stock',
      stockTransferSum: 'Resumen traslado de stock',
      stockUsageDetail: 'Detalle de uso de stock',
      stockUsageSum: 'Resumen de uso de stock',
      titleSingleDate: 'Informe {{name}} {{date}}',
      titleDateRange: 'Informe {{name}} {{startDate}} - {{endDate}}'
    },
    titles: {
      addPurchase: 'Adicionar compra',
      addRequest: 'Nuevo pedido',
      adjustment: 'Ajuste',
      editPurchase: 'Editar compra',
      editRequest: 'Editar pedido',
      inventoryItem: 'Nuevo elemento de inventario',
      inventoryReport: 'Reporte de inventario',
      purchaseSaved: 'Compras de inventario guardadas',
      quickAddTitle: 'Nuevo elemento de inventario',
      removeItem: 'Remover elemento',
      requestFulfilled: 'Pedido cumplido',
      requestUpdated: 'Pedido actualizado',
      transfer: 'Trasladar elementos',
      warning: 'Atención!!!!!'
    }
  },
  imaging: {
    pageTitle: 'Pedido de radriografía',
    sectionTitle: 'Radiografias',
    buttons: {
      newButton: '+ new radiografía'
    },
    labels: {
      radiologist: 'Radiólogo',
      addNewVisit: '--Adicionar nueva consulta--'
    },
    messages: {
      delete: '¿Está seguro que desea borrar el pedido de radiografía?',
      noCompleted: 'No se han encontrado items completados.'
    },
    titles: {
      completedImaging: 'Radiografia completada',
      editTitle: 'Pedido de edicion de radiografia',
      newTitle: 'Nuevo pedido de radiografia'
    },
    alerts: {
      completedTitle: 'Pedido de radiografia completado',
      completedMessage: 'El pedido de radiografia ha sido completado.',
      savedTitle: 'Pedido de radiografia guardado',
      savedMessage: 'El pedido de radiografia ha sido guardado.'
    }
  },
  medication: {
    pageTitle: 'Pedido de medicación',
    sectionTitle: 'Medication',
    returnMedication: 'Retorno de medicación',
    buttons: {
      dispenseMedication: 'administrar medicación',
      newButton: '+ nuevo pedido',
      returnMedication: 'devolver medicación'
    },
    titles: {
      completedMedication: 'Medicacion completada',
      editMedicationRequest: 'Editar pedido de medicación',
      newMedicationRequest: 'Nuevo pedido de medicación'
    },
    messages: {
      createNew: '¿Crear un nuevo pedido de medicación?',
      confirmDeletion: 'Estas seguro de eliminar este pedido de medicación?'
    },
    labels: {
      refills: 'Recargas',
      quantityRequested: 'Cantidad solicitada',
      quantityDispensed: 'Cantidad dispensada',
      quantityDistributed: 'Cantidad distribuida',
      quantityToReturn: 'Cantidad a devolver',
      returnLocation: 'Retornar a ubicación',
      returnAisle: 'Devolve a pasillo',
      returnReason: 'Razon por la que se devuelve/Nota',
      adjustmentDate: 'Fecha de ajuste',
      creditToAccount: 'Credito a cuenta'
    },
    alerts: {
      returnedTitle: 'Medicacion devuelta',
      returnedMessage: 'La medicacion ha sido marcada para devolver.',
      savedTitle: 'Pedido de medicacion guardado',
      savedMessage: 'La elemento de medicación ha sido guardado.',
      fulfilledTitle: 'Pedido de medicación cumplido'
    }
  },
  appointments: {
    currentScreenTitle: 'Listado de citas',
    editTitle: 'Editar cita',
    newTitle: 'Nueva cita',
    sectionTitle: 'Citas',
    thisWeek: 'Citas esta semana',
    missed: 'Citas perdidas',
    searchTitle: 'Buscar citas',
    todayTitle: 'Citas para hoy',
    calendarTitle: 'Calendario de Citas',
    messages: {
      appointmentSaved: 'La cita para {{patient}} ha sido guardada.',
      deleteAppointmentMessage: '¿Está seguro de eliminar esta cita?',
      endTimeLaterThanStart: 'Seleccione una hora de finalizacion despues de la de inicio.'
    },
    buttons: {
      newButton: '+ nueva cita',
      scheduleSurgery: '+ agendar cirugía'
    },
    labels: {
      noLocation: 'Sin Ubicación',
      selectedStartingDate: 'Mostrar Citas en o después de'
    },
    titles: {
      appointmentSaved: 'Cita Guardada',
      editSurgicalAppointment: 'Editar Agendamiento Quirúrgico',
      newSurgicalAppointment: 'Nuevo Agendamiento Quirúrgico',
      theaterSchedule: 'Agendamiento de Quirófano'
    }
  },
  visits: {
    titles: {
      additionalDiagnoses: 'Diagnósticos Adicionales',
      checkedIn: 'Ingreso del Paciente',
      checkOut: 'Salida del Paciente',
      checkedOut: 'Salida del Paciente',
      discharged: 'Alta de Paciente',
      editVisit: 'Editar Consulta',
      newVisit: 'Nueva Consulta',
      patientCheckIn: 'Ingreso del Paciente',
      visitSaved: 'Consulta Guardada'
    },
    messages: {
      delete: '¿Está seguro que desea eliminar esta consulta?',
      checkOut: '¿Está seguro que desea registrar la salida de {{patientName}}?',
      checkedOut: 'Ha sido registrada la salida de {{patientName}}.',
      discharged: 'Se ha dado de alta a {{patientName}}.',
      patientCheckedIn: 'Se ha registrado el ingreso de {{patientName}}.',
      patientCreatedAndCheckedIn: 'Se ha creado al paciente {{patientName}} y registrado su ingreso.',
      visitAndPatientSaved: 'Los registros de la consulta y el paciente and sigo guardados.',
      visitSaved: 'El registro de la consulta ha sido guardado.'
    },
    buttons: {
      newProcedure: 'Nuevo Procedimiento',
      newAppointment: 'Nueva Cita',
      addDiagnosis: 'Agregar Diagnóstico',
      newVitals: 'Signos Vitales',
      checkIn: 'Ingreso',
      checkOut: 'Salida',
      discharge: 'Alta'
    },
    labels: {
      diagnosis: 'Diagnóstico',
      procedure: 'Procedimiento',
      procedureDate: 'Fecha Procedimiento',
      authoredBy: 'Autorizado Por',
      visitInformation: 'Información de Consulta',
      examiner: 'Examinador Médico',
      status: 'Estado de Consulta',
      finalDiagnosis: 'Diagnóstico Final/Facturación',
      visitDate: 'Fecha de Consulta',
      visitType: 'Tipo de Consulta',
      patientToCheckIn: 'Paciente a Ingresar',
      checkInTime: 'Ingreso',
      checkOutTime: 'Salida',
      appointment: 'Cita',
      haveAppointment: 'S',
      noAppointment: 'N',
      ordersDone: 'Órdenes Finalidadas',
      haveDoneOrders: 'S',
      ordersNotDone: 'N',
      reasonForVisit: 'Razón de ConsultaReason For Visit',
      statusAdmitted: 'Admitido',
      statusDischarged: 'Dado de Alta',
      statusCheckedIn: 'Ingresado',
      statusCheckedOut: 'Salido',
      createNewPatient: 'Crear Nuevo Paciente',
      reportType: 'Tipo Reporte'
    },
    navigation: {
      charges: 'Cargas',
      notes: 'Notas',
      orders: 'Órdenes',
      procedures: 'Procedimientos',
      vitals: 'Signos Vitales',
      reports: 'Reportes'
    }
  },
  labs: {
    sectionTitle: 'Laboratorios',
    requestsTitle: 'Pedido de laboratorio',
    editTitle: 'Editar pedido de laboratorio',
    newTitle: 'Nuevo pedido de laboratorio',
    deleteTitle: 'Eliminar pedido',
    completedTitle: 'Completar laboratorio',
    labels: {
      labType: 'Tipo de laboratorio',
      addNewVisit: '--Adicionar nueva visita--'
    },
    messages: {
      noItemsFound: 'No laboratorios encontrados.',
      createNewRecord: '¿Crear un registro?',
      confirmDeletion: '¿Está seguro de eliminar esta solicitud de laboratorio?',
      noCompleted: 'No se encontraron elementos completados.'
    },
    buttons: {
      newButton: '+ nuevo laboratorio'
    },
    alerts: {
      requestCompletedTitle: 'Pedido de laboratorio competado',
      requestCompletedMessage: 'El pedido de laboratorio ha sido completado.',
      requestSavedTitle: 'Pedido de laboratorio guardado',
      requestSavedMessage: 'El pedido de laboratorio ha sido guardado.'
    }
  },
  common: {
    actions: 'Acciones'
  },
  patients: {
    navigation: {
      photos: 'Fotos',
      general: 'General',
      history: 'Historial',
      appointments: 'Citas',
      visits: 'Consultas',
      medication: 'Medicacion',
      imaging: 'Radiografía',
      labs: 'Laboratorios',
      socialWork: 'Trabajo Social'
    },
    titles: {
      addContact: 'Agregar contácto',
      admittedPatients: 'Pacientes Admitidos',
      expenses: 'Gastos',
      additionalContacts: 'Contactos Adicionales',
      familyInformation: 'Datos Familiares',
      delete: 'Borrar Paciente',
      new: 'Nuevo Paciente',
      edit: 'Editar Paciente',
      patient: 'Reporte de Pacientes',
      patientListing: 'Listado de Pacientes',
      patientReport: 'Reorte de Pacientes',
      addPhoto: 'Agregar Foto',
      editPhoto: 'Editar Foto',
      socialWork: 'Gasto',
      familyInfo: 'Datos Familiares',
      deleteFamilyMember: 'Borrar Miembro Familiar',
      deleteExpense: 'Borrar Gasto',
      deletePhoto: 'Borrar Foto',
      deleteContact: 'Borrar Contácto',
      savedPatient: 'Paciente Guardado',
      todaysOutpatients: 'Ambulatorios del día',
      admissionsDetail: 'Detalles de Admisión',
      admissionsSummary: 'Resúmen de Admisión',
      diagnosticTesting: 'Prueba de Diagnóstico',
      dischargesDetail: 'Detalle de Alta',
      dischargesSummary: 'Resúmen de Alta',
      proceduresDetail: 'Detalle de Procedimientos',
      proceduresSummary: 'Resúmen de Procedimientos',
      patientStatus: 'Estado del Paciente',
      totalPatientDays: 'Dias Totales del Paciente',
      totalPatientDaysDetailed: 'Dias Totales del Paciente (Detallado)',
      visit: 'Consulta',
      deletePatientRecord: 'Borrar Registro del Paciente',
      outpatientsForDate: 'Ambulatorios para {{visitDate}}'
    },
    messages: {
      areYouSureDelete: '¿Está seguro de deséa borrar este {{object}}?',
      deletePatient: 'Esta seguro que desea borrar a {{firstName}} {{lastName}}?',
      noPatientsFound: 'No se encontraron pacientes.',
      savedPatient: 'Los registros del paciente {{displayName}} han sido guardados.',
      notFoundQuickAdd: 'El paciente <strong>{{patientFullName}}</strong> no se pudo encontrar.  Si deséa crear un nuevo paciente, ingrése su información abajo. O puede presionar el botón Cancelar para volver atrás.',
      createNewPatient: '¿Crear un nuevo registro de paciente?',
      deletingPatient: 'Borrando el paciente y todos sus registros asociados.',
      photoFileRequired: 'Por favor, tome una foto o súba un archivo antes de guardar esta fóto.'
    },
    buttons: {
      addExpense: 'Agregar Gasto',
      addContact: 'Agregar Contacto',
      addOperativePlan: 'Agregar Plan Operativo',
      editOperativePlan: 'Plan Operativo Actual',
      download: 'Descargar',
      newLab: 'Nuevo Laboratorio',
      newVisit: 'Nueva Consulta',
      newMedication: 'Nueva Medicación',
      newImaging: 'Nueva Radiografía',
      addFamilyMember: 'Agregar Miembro Familiar',
      newPhoto: 'Nueva Foto',
      newAppointment: 'Nueva Cita',
      backToPatients: 'Volver a la Lista de Pacientes',
      newPatient: '+ nuevo paciente',
      patientCheckIn: 'Check In del Paciente',
      newOPDReport: 'New OPD Report',
      newDischargeReport: 'New Discharge Report',
      scheduleSurgery: 'Schedule Surgery'
    },
    labels: {
      primaryDiagnosis: 'Primary Diagnoses',
      secondaryDiagnosis: 'Secondary Diagnoses',
      monthlyCost: 'Monthly Cost',
      totalMontlyExpense: 'Total Monthly Expenses',
      patientType: 'Patient Type',
      admissionDate: 'Admission Date',
      patientDays: 'Patient Days',
      dischargeDate: 'Discharge Date',
      admit: 'Admit',
      relationships: 'Relationships',
      phone: 'Phone',
      email: 'Email',
      firstName: 'First Name',
      middleName: 'Middle Name',
      lastName: 'Last Name',
      sex: 'Sex',
      dob: 'DOB',
      dateOfBirth: 'Date Of Birth',
      placeOfBirth: 'Place Of Birth',
      sources: 'Sources',
      cost: 'Cost',
      civilStatus: 'Civil Status',
      relationship: 'Relationship To Patient',
      education: 'Education',
      occupation: 'Occupation',
      income: 'Income',
      insurance: 'Insurance',
      dateProcessed: 'Date Processed',
      status: 'Patient Status',
      externalPatientId: 'External Patient Id',
      bloodType: 'Blood Type',
      clinic: 'Clinic Site',
      referredBy: 'Referred By',
      referredDate: 'Referred Date',
      religion: 'Religion',
      parent: 'Parent/Guardian',
      contacts: 'Contacts',
      sexNotEntered: 'Sex Not Entered',
      operativePlan: 'Operative Plan',
      caption: 'Caption',
      patientTypeCharity: 'Charity',
      patientTypePrivate: 'Private'
    },
    notes: {
      newNote: 'Nueva Nota para',
      updateNote: 'Actualizando Nota de',
      onBehalfOfLabel: 'A nombre de',
      onBehalfOfCopy: 'a nombre de',
      pleaseSelectAVisit: 'Por favor seleccione una consulta'
    }
  },
  components: {
    chargesByTypeTab: {
      charges: 'cargas'
    },
    customFormManager: {
      buttons: {
        addForm: 'Agregar Formulario'
      }
    },
    sortableColumn: {
      labels: {
        selectAll: '(Seleccionar Todo)'
      }
    },
    imageUpload: {
      messages: {
        selectValidImageFile: 'Por favor seleccione un archivo de imágen válido.'
      }
    },
    dateTimePicker: {
      amHour: '{{hour}} AM',
      midnight: 'Medianoche',
      noon: 'Mediodía',
      pmHour: '{{hour}} PM'
    },
    takePhoto: {
      how: '¿Cómo desea agregar la foto?',
      takePhoto: 'Tomar Foto',
      uploadFile: 'Subir un archivo',
      camera: 'Cámara',
      photo: 'foto',
      preview: 'previsualizar',
      labels: {
        takeAPicture: 'Tomar una Foto',
        uploadAFile: 'Subir un Archivo'
      }
    },
    quantityConv: {
      unit: 'Unidad',
      conversion: '¿Que contiene 1 {{name}}?'
    },
    quantityCalc: {
      result: '{{targetUnit}} total: {{calculated}}'
    },
    patientOrders: {
      buttons: {
        newImaging: 'Nueva Radiografía',
        newLab: 'Nuevo Laboratorio',
        newMedication: 'Nueva Medicación'
      },
      labels: {
        imagingOrderType: 'Radiografía',
        labOrderType: 'Laboratorio',
        medicationOrderType: 'Medicación',
        orderType: 'Tipo Órden'
      }
    },
    priceList: {
      charges: '{{pricingType}} cargas'
    },
    operativeProcedures: {
      buttons: {
        addProcedure: 'Agregar Procedimiento'
      },
      labels: {
        procedure: 'Procedimiento'
      },
      titles: {
        procedures: 'Procedimientos'
      }
    },
    upcomingAppointments: {
      labels: {
        date: 'Fecha',
        with: 'Con',
        location: 'Lugar',
        type: 'Tipo'
      },
      titles: {
        upcomingAppointments: 'Próximas Citas'
      }
    }
  },
  models: {
    appointment: {
      labels: {
        status: 'Nombre',
        appointmentType: 'Tipo',
        provider: 'Con',
        location: 'Lugar',
        patient: 'Paciente',
        startDate: 'Fecha Inicio',
        endDate: 'Fecha Fin',
        allDay: 'Todo el Día',
        type: 'Tipo',
        notes: 'Notas',
        appointmentDate: 'Fecha'
      }
    },
    patient: {
      labels: {
        name: 'Nombre'
      },
      names: {
        singular: 'Paciente'
      }
    }
  }
};
