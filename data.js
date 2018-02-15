
/////////////////////////////////////////////////////////////////////////////////
//Funcion que recorre los numeros                                              //
//primera condicion de doble coincidencia primero sino no llgaremos a las otras//
/////////////////////////////////////////////////////////////////////////////////

function numbers() {

    document.write("<h1>Ejercicio 1</h1>");

    for(var i=0;i<=100;i++){

        if ((i%3==0)&&(i%5==0)) {
                document.write("CDmon"+"</br>");
            }
        else if (i % 3==0) {
            document.write("CD"+"</br>");
        }
        else if (i % 5 ==0){
            document.write("mon"+"</br>");
        }
        else {
            document.write([i]+"</br>");
        }
    }

}