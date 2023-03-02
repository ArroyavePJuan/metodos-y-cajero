const menuOpciones =() => {
    menu = Number(prompt(
        "Seleccione la operacion que desea realizar \n1 - Registrar empleado  \n2- Consultar empleado \n3 - Lista empleados \n4- Salir"));
        return menu
    }

const registrarEmpleados = () => {
    do{
        documentoEmpleado = prompt("ingrese documento: ")
        nombreEmpleado = prompt("Ingrese su nombre: ")
        cargoEmpleado = prompt("Ingrese su cargo: ")
        valorHora =  Number(prompt("Ingrese el valor por hora: "))
        cantidadHoras = Number(prompt("Ingrese cantidad horas: "))
        empleados.push({
            nombre: nombreEmpleado,
            documento: documentoEmpleado,
            cargo: cargoEmpleado,
            valorHora: valorHora,
            cantidadHoras: cantidadHoras,
            salario: valorHora * cantidadHoras
        })
        registrar = prompt("Desea registrar otro empleado: \n1 si \n2 no")
        }
        while (registrar != 2)
}

const buscarEmpleado = () => {
    documentoEmpleado = prompt("ingrese documento: ")
    empleado =  empleados.find(empleado => empleado.documento === documentoEmpleado);
    if (empleado === undefined){
        console.log("El empleado no está registrado")
    } else {
        alert(`Nombre empleado: ${empleado.nombre}\nCargo: ${empleado.cargo}\nSalario: ${empleado.salario}`);
    }
}

const listarEmpleados = () => {
    let texto = "Listado de empleados: \n NOMBRE   |   CARGO   |   SALARIO \n"
    empleados.forEach( empleado =>
        texto += `${empleado.nombre}   |   ${empleado.cargo}   |   ${empleado.salario} \n`)
    alert(texto)
}
let documentoEmpleado, nombreEmpleado, cargoEmpleado, valorHora, cantidadHoras, menu, registrar, empleados = []

while (menu != 4) {
    menu = menuOpciones();
    switch (parseInt(menu)) {
        case 1:
            registrarEmpleados();
            break;
        case 2:
            buscarEmpleado();
            break;
        case 3:
            listarEmpleados();
            break;
        case 4:
            alert("Tenga Buen dia");
            break;
        default:
            alert("Error en la operacion seleccionada");
            break;
    }
}
