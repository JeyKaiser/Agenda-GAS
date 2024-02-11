function doGet(){
    return HtmlService.createTemplateFromFile("web").evaluate().setTitle("Agenda Google Apps Script");
}

function obtenerDatosHTML(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

//Funcion que toma los datos que existen en la hoja de excel y los guarda en un rango.
//esta funcion sera llamada desde js.html desde la funcion crearTablaContactos()
function obtenerContactos(){
    let hoja = SpreadsheetApp.openById("1TW8eC6RJnifsaU5tojnxx7MHjJ5_QLBef5EwMqh0QWQ").getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    //Logger.log(datos);
    return datos;
}