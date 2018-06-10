
let listaVehiculos = new Array();

let btnRegistrar = $('#registrar');

btnRegistrar.on('click', () => {
  let marca = $("#modelo").val(),
      modelo = $("#marca").val(),
      annoFabricacion = $("#annofabricacion").val(),
      placa = $("#placa").val(),
      tipoGasolina = JSON.parse($("#gasolina").val());

  const nuevoAuto = new Automovil(marca, modelo, annoFabricacion, placa, tipoGasolina);

  listaVehiculos.push(nuevoAuto);

  llenarTabla();
});

function llenarTabla() {
  let table = $('table tbody');

  table.html('');

  for (let i = 0; i < listaVehiculos.length; i++) {
    let fila = $('<tr/>'),
        columna = $('<td/>').append(listaVehiculos[i].getModelo());

    fila.append(columna);

    columna = $('<td/>').append(listaVehiculos[i].getMarca());
    fila.append(columna);

    columna = $('<td/>').append(listaVehiculos[i].getAnno());
    fila.append(columna);

    columna = $('<td/>').append(listaVehiculos[i].getId());
    fila.append(columna);

    columna = $('<td/>').append(listaVehiculos[i].getNombreTipoCombustible());
    fila.append(columna);

    table.append(fila);
  }
}