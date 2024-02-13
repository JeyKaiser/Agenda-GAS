const HOJA = SpreadsheetApp.openById('1TW8eC6RJnifsaU5tojnxx7MHjJ5_QLBef5EwMqh0QWQ').getActiveSheet();

function doGet(){     //pasamos los datos por la url (cuando no son datos muy importantes)
    return HtmlService.createTemplateFromFile("web").evaluate().setTitle("Agenda Google Apps Script");
}

function doPost(datos){    
    return HtmlService.createTemplateFromFile("web").evaluate().setTitle("Agenda Google Apps Script");
}

function obtenerDatosHTML(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

//Funcion que toma los datos que existen en la hoja de excel y los guarda en un rango.
//esta funcion sera llamada desde js.html desde la funcion crearTablaContactos()
function obtenerContactos(){
    return HOJA.getDataRange().getValues();
    //Logger.log(datos);    
}

function insertarContactos(nombre, correo){
    HOJA.appendRow([nombre,correo]);
}

