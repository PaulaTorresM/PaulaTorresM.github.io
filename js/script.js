let profes = document.getElementById("boton")

profes.addEventListener('click', () => {

    let seguir, apuesta, plata


    let juego = (document.getElementById("juego").value);

    //valor predertiminado: 5000


    let contador = 0;
    do {
        apuesta = prompt("¿cuanto desea apostar?");
        alert("La maquina esta girando la moneda, presione aceptar para saber su resultado");
        let opcion1 = Math.floor(Math.random() * 2) + 1;
        if (juego == "num1" && opcion1 == 1) {
            plata = 5000 + apuesta * 2;
            alert("Usted ha ganado la opción de la maquina es " + opcion1);
            alert("fue un buen juego, la cantidad de dinero que tiene es   " + plata);
        }
        else if (juego != "num1" && opcion1 == 1) {
            plata = apuesta - 1000- apuesta;
            alert("Usted ha perdido la opción de la maquina es " + opcion1);
            alert("fue un buen juego, la cantidad de dinero que tiene es   " + plata);
        }
        else if (juego == "num2" && opcion1 == 2) {
            plata = 5000 + apuesta * 2;
            alert("Usted ha ganado la opción de la maquina es " + opcion1);
            alert("fue un buen juego, la cantidad de dinero que tiene es   " + plata);
        }
        else if (juego != "num2" && opcion1 == 2) {
            plata = apuesta - 1000- apuesta;
            alert("Usted ha perdido la opción de la maquina es " + opcion1);
            alert("fue un buen juego, la cantidad de dinero que tiene es   " + plata);
        }

        contador = contador + 1
        seguir = prompt("Para volver a jugar digite 1 o si desea salir digite 3");
        alert("El total de dinero ganado o perdido es de " + plata + " y las veces que jugo fueron " +contador);

    } while (seguir != 3);
})