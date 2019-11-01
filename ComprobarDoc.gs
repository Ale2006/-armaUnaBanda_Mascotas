function myFunction() {
  var datos= SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Usuario");//Inicio el documento a utilizar por nombre
  var valores= datos.getRange("B3:B7").getValues();// seteo el rango para obtener datos y los convierto en un array
  
  
  for(i=0;i<valores.length;i++){
  
    Logger.log(valores[i]);//cargo en el registro los valores del array
    datos.getRange("C"+(i+3)).setValue(comprobar(valores[i]));// escribe al lado del valor en el doc lo que retorna comprobar()
  }
  
  SpreadsheetApp.flush();
  
 }


function comprobar(cadena){
  str= new String (cadena);
  var l="^[a-zA-Z ]{3,}$";
  var m="^[a-zA-Z0-9]+[@]{1}[a-zA-Z]+[.com]{4}$";
  
  if(str.match(l)|| str.match(m)){
        return true;
    
    }
  else{
    return false;
    }
  
}
