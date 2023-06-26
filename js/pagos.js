const url = 'http://localhost:8082/api/pago';

const listarDatos = async () => {
  let respuesta = '';
  let body = document.getElementById('contenido');

  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then((resp) => resp.json()) // Obtener la respuesta y convertirla a json
    .then(function (data) {
      let listaPagos = data.pagos; // Capturar el array devuelto por la API
      respuesta = listaPagos.map(function (pago) { // Recorrer el array y generar filas de la tabla
        return `<tr>
                  <td>${pago.proveedor}</td>
                  <td>${pago.factura}</td>
                  <td>${pago.total}</td>
                  <td>${pago.abonado}</td>
                  <td>${pago.restante}</td>
                  <td>${pago.forma}</td>
                  <td>${pago.estado}</td>
                  <td>${pago.descripcion}</td>
                  <td>
                    <a class="btn btn-warning boton-registro waves-effect waves-light modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(pago)})'>Modificar</a>
                  </td>
                </tr>`;
      }).join(""); // Unir las filas en una sola cadena

      body.innerHTML = respuesta;
    })
    .catch(function (error) {
      console.log('Error:', error);
    });
}

const registrar = async () => {
  let _proveedor = document.getElementById('proveedor').value;
  let _factura = document.getElementById('factura').value;
  let _total = document.getElementById('total').value;
  let _abonado = document.getElementById('abonado').value;
  let _forma = document.getElementById('forma').value;
  let _estado = document.getElementById('estado').value;
  let _descripcion = document.getElementById('descripcion').value;

  let pagos = {
    proveedor: _proveedor,
    factura: _factura,
    total: _total,
    abonado: _abonado,
    forma: _forma,
    estado: _estado,
    descripcion: _descripcion
  };

  fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(pagos),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then((resp) => resp.json())
  .then(json => {
    Swal.fire(
      json.msg,
      '',
      'success'
    ).then(() => {
      window.location.href = 'http://127.0.0.1:5503/pagos.html';
    })
  })
}

function editar(pagos) {
  document.getElementById('proveedor').value = ''
  document.getElementById('factura').value = ''
  document.getElementById('total').value = ''
  document.getElementById('abonado').value = ''
  document.getElementById('forma').value = ''
  document.getElementById('estado').value = ''
  document.getElementById('descripcion').value = ''

  document.getElementById('proveedor').value = pagos.proveedor
  document.getElementById('factura').value = pagos.factura
  document.getElementById('total').value = pagos.total
  document.getElementById('abonado').value = pagos.abonado
  document.getElementById('forma').value = pagos.forma
  document.getElementById('estado').value = pagos.estado
  document.getElementById('descripcion').value = pagos.descripcion
}

const actualizar = async() => {
    let _proveedor = document.getElementById('proveedor').value;
    let _factura = document.getElementById('factura').value;
    let _total = document.getElementById('total').value;
    let _abonado = document.getElementById('abonado').value;
    let _forma = document.getElementById('forma').value;
    let _estado = document.getElementById('estado').value;
    let _descripcion = document.getElementById('descripcion').value;
  
    let pagos = {
        proveedor: _proveedor,
        factura: _factura,
        total: _total,
        abonado: _abonado,
        forma: _forma,
        estado: _estado,
        descripcion: _descripcion
      };

  fetch(url, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(pagos),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then((resp) => resp.json())
  .then(json => {
    alert(json.msg);
    // Redirigir a otra página
    window.location.href = 'http://127.0.0.1:5503/pagos.html';
  });
};

if (document.querySelector('#btnRegistrar')) {
  document.querySelector('#btnRegistrar')
    .addEventListener('click', registrar);
}

if(document.querySelector('#btnActualizar')){
   document.querySelector('#btnActualizar')
   .addEventListener('click',actualizar)
}