/* let nombres = []

for (let i = 0; i < nombres.length; i++);{
    console.log("nombres[i]");
} */

/* let nombres = []
for (let index = 0; index < 5; index++) {
   nombres[index] = prompt("Ingrese un nombre")
    
}
for (let index = 0; nombres.length; index++) {
    console.log(nombres[index]);
    
}
 */

/* Metodos arreglos javascript */

/* let numeros = [1,2,3,4];

for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
    
}
numeros.push(5)

for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
    
}
for (let index = 0; index < 10; index++) {
    numeros.push() = prompt("Ingrese un numero: ")
    
} */

// Metodos para agregar datos .push(), .unshift()
// Metodos para eliminar datos .pop(), .shift()


//Cajero

const menuOpciones = () => {
    menu = Number(prompt("Seleccione operacion \n1 - Consultar\n2 - Consignar\n3 - Retirar\n4 - Transferir\n5 - Salir"));
    return menu
} 

const consignar = () => {
    valor =Number(prompt("Ingrese valor a consignar: "));
        saldoCuenta += valor
        alert("El nuevo saldo de la cuenta es: " + saldoCuenta);
}

const retirar = () => {
    valor = Number(prompt("Ingrese valor a retirar: "));
        if(valor > saldoCuenta){
            alert("Saldo insuficiente, pobre");
        } else{
            alert("Retiro exitoso su nuevo saldo es: " + (saldoCuenta -= valor));
        }
}

const transferir = () => {
    valor = Number(prompt("Ingrese valor a transferir: "));
        if(valor > saldoCuenta){
            alert("Saldo insuficiente, pobre");
        } else{
            alert("Transferencia exitosa su nuevo saldo es: " + (saldoCuenta -= valor));
        }
}

let saldoCuenta = 0
let valor = 0
let menu 
let usuario, password
let intento = 0

/* usuario = prompt("Ingrese usuario: ");

if (usuario == "Arroyave") {
    password = prompt("Ingrese su password:");
    if (password == "123") {
        while (menu != 5) {
            menu = menuOpciones();
               switch (parseInt(menu)) {
                    case 1:
                       alert("Su saldo es: " + saldoCuenta);
                       break;
                    case 2:                     
                        consignar();
                        break;
                    case 3:
                       retirar();
                       break;
                    case 4:
                       transferir();
                       break;
                    case 5:
                       alert("Tenga Buen dia");
                       break;
                    default:
                       alert("Error en la operacion seleccionada");
                       break;
               }   
           }
    } else {
        alert("password invalido");
    }  
} else {
    alert("El usuario no existe");
} */
for (let index = 0; intento < 3; index++) {
    usuario = prompt("Ingrese usuario: ");

    if (usuario == "Arroyave") {
        password = prompt("Ingrese su password:");
        if (password == "123") {
            while (menu != 5) {
                menu = menuOpciones();
                switch (parseInt(menu)) {
                    case 1:
                        alert("Su saldo es: " + saldoCuenta);
                    break;
                    case 2:                     
                        consignar();
                    break;
                    case 3:
                        retirar();
                    break;
                    case 4:
                        transferir();
                    break;
                    case 5:
                        alert("Tenga Buen dia");
                    break;
                    default:                        
                        alert("Error en la operacion seleccionada");
                    break;
                }   
            }
        } else {
            alert("password invalido");
        }  
    } else {
        alert("El usuario no existe");
    }
    intento++
}





/* let saldoCuenta = 0
let valor = 0
let menu
while (menu != 5) {
 menu = prompt("Seleccione operacion \n1 - Consultar\n2 - Consignar\n3 - Retirar\n4 - Transferir\n5 - Salir")
    switch (parseInt(menu)) {
        case 1:
            alert("Su saldo es: " + saldoCuenta);
            break;
        case 2:
            valor =Number(prompt("Ingrese valor a consignar: "));
            saldoCuenta += valor
            alert("El nuevo saldo de la cuenta es: " + saldoCuenta);
            break;
        case 3:
            valor = Number(prompt("Ingrese valor a retirar: "));
            if(valor > saldoCuenta){
                alert("Saldo insuficiente, pobre");
            } else{
                alert("Retiro exitoso su nuevo saldo es: " + (saldoCuenta -= valor));
            }
            break;
        case 4:
            valor = Number(prompt("Ingrese valor a transferir: "));
            if(valor > saldoCuenta){
                alert("Saldo insuficiente, pobre");
            } else{
                alert("Transferencia exitosa su nuevo saldo es: " + (saldoCuenta -= valor));
            }
            break;
        case 5:
            alert("Tenga Buen dia");
            break;
        
        default:
            alert("Error en la operacion seleccionada");
            break;
    }   
} */