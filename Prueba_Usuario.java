package prueba_usuario;


public class Prueba_Usuario {

   
    public static void main(String[] args) {
        
        String [] nombres="Ana An3a A Ana. ".split(" ");
        String [] mailPrueba= "esparaprueba@hotmail.com esparaprueba#hotmail.com esparaprueba@hotmail esparaprueba@.com".split(" ");
        
        for (String nombre : nombres) {
            System.out.println(nombre + " --->" + Iscorrecto(nombre));
            
        }
        
        for (String mail : mailPrueba) {
            System.out.println(mail + " --->" + Ismailcorrecto(mail));
        }
    }
    
    
    public static boolean Iscorrecto(String cadena){
    String expresion="^[a-zA-Z]{3,}$";
    
        if (cadena.matches(expresion)) {
            return true;
        }
    return false;
    }
    
    public static boolean Ismailcorrecto(String cadena){
    String expresion="^[a-zA-Z0-9]+[@]{1}[a-zA-Z]+[.com]{4}$";
    
        if (cadena.matches(expresion)) {
            return true;
        }
    return false;
    }
}
