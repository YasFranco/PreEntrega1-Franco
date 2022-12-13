//Simulador de entradas de cine

let user = "yasFranco";

//Ingreso a la pagina

let login = prompt("Ingresa tu usuario")

if (login === user) {

    alert("Bienvenida" + " " + user);

    let cantidad = 0;
    let general;
    let premium;

    //funcion de calcular el total de las entradas
    
    function calcularPrecio(cantidad, precio){

        let resultado = cantidad * precio;
        return alert("Seleccionaste" + " " + general + "entradas. El total a pagar es" + resultado);
    }


    //Elegir que pelicula ver 

    let option = prompt("Elegi que pelicula queres ver: \n1 - Terror. \n2 - Comedia. \n3 - Romantica \n Para salir presiona X");


    while (option != "X" && option != "x") {

        switch (option) {
            case "1":
                let terror1 = prompt("Elegi que tipo de entrada queres: \na - Entrada general $600 \nb - Entrada cine Premium $1000 \nPresione S para salir");

                while (terror1 != "S" && terror1 != "s") {
                    switch (terror1) {
                        case "a":
                            general = parseInt(prompt("seleccione la cantidad de entradas"));
                            calcularPrecio(general, 600);
                            break;

                        case "b":
                            premium = parseInt(prompt("seleccione la cantidad de entradas"));
                            calcularPrecio(premium, 1000);
                            break;

                        default:
                            alert("Superaste la cantidad permitida.")
                            break;
                    }
                    //condicion de salida de pelicula terror 
                    terror1 = prompt("Elegi que tipo de entrada queres: \na - Entrada general $600 \nb - Entrada cine Premium $1000 \nPresione S para salir");
                }
                break;

            case "2":
                let comedia2 = prompt("Elegi que tipo de entrada queres: \na - Entrada general &600 \nb - Entrada cine Premium $1000 \nPresione S para salir");

                while (comedia2 != "S" && comedia2 != "s") {
                    switch (comedia2) {
                        case "a":
                            general = parseInt(prompt("seleccione la cantidad de entradas"));
                            calcularPrecio(general, 600);
                            break;

                        case "b":
                            premium = parseInt(prompt("seleccione la cantidad de entradas"));
                            calcularPrecio(premium, 1000);
                            break;

                        default:
                            alert("Superaste la cantidad permitida.")
                            break;
                    }
                    //condicion de salida de pelicula comedia 
                    comedia2 = prompt("Elegi que tipo de entrada queres: \na - Entrada general $600 \nb - Entrada cine Premium $1000 \nPresione S para salir");
                }
                break;


            case "3":
                alert("Lo sentimos, las entradas para romantica ya se encuentran agotadas");
                break;

            default:
                alert("Opcion no valida");
                break;



        }
        //condicion de salida del while peliculas
        option = prompt("Elegi que pelicula queres ver: \n1 - Terror. \n2 - Comedia. \n3. Romantica \n Para salir presiona X.");
        break;


    }

} else {
    alert("Usuario no encontrado");

}
alert("Gracias por elegir nuestro cine");



