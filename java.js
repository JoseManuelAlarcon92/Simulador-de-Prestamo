
alert("Bienvenido a Prestamos YA!!");
alert("Simula tu PRESTAMO en 3, 6, 9 o 12 cuotas!!");

let montoMaximo = 200000;
let cuotaMaxima = 12;
let interesUno = 1.15;
let interesDos = 1.75;
let interesTres = 2.25;
let interesCuatro = 2.75;




let nombre = prompt("Ingrese su Nombre:");
    alert("Hola " + nombre);
  
let monto = parseFloat(prompt("¿Cuanto dinero necesitas?"));

while (monto > montoMaximo) { 
  alert("El monto maximo para retirar es: " + montoMaximo);
  monto = prompt("Ingrese otro monto:");
}

let cuotas = prompt("¿En cuantas cuotas?")

while (cuotas > cuotaMaxima) { 
    alert("La cuota maxima es: " + cuotaMaxima);
    cuotas = prompt("Ingrese otra cantidad de cuotas:");
    
}


alert("El valor de la cuota es de: $" + calcular(monto, cuotas, interesUno, interesDos, interesTres, interesCuatro));





function calcular(monto, cuotas, interesUno, interesDos, interesTres, interesCuatro) { 
    if ((monto >= 0 && monto <= 200000) && (cuotas == 3)) {
        let montoFinal = ((monto /cuotas) * interesUno);
        return montoFinal.toFixed(2);
    }
    else if ((monto >= 0 && monto <= 200000) && (cuotas == 6)) {
        let montoFinal = ((monto /cuotas) * interesDos);
        return montoFinal.toFixed(2);
    }
    else if ((monto >= 0 && monto <= 200000) && (cuotas == 9)) {
        let montoFinal = ((monto /cuotas) * interesTres);
        return montoFinal.toFixed(2);
    }
    else if ((monto >= 0 && monto <= 200000) && (cuotas == 12)) {
        let montoFinal = ((monto /cuotas) * interesCuatro);
        return montoFinal.toFixed(2);
    }
}

