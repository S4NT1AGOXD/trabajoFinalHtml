const url = 'http://localhost:8082/api/usuario';

const listarDatos = async () => {
  let respuesta = '';
  let body = document.getElementById('contenido');

  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
  .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
  .then(function(data) {
      let listaUsuarios = data.usuarios //Capturar el array devuelto por la api
      datos = 
      listaUsuarios.map(function(usuario) {//Recorrer el array
          respuesta += `<tr><td>${usuario.insumo}</td>`+
          `<td>${usuario.categoria}</td>`+
          `<td>${usuario.estado}</td>`+
          `<td><a class="btn btn-warning boton-registro waves-effect waves-light modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(usuario)})'>Editar</a>
          `+
          
          `</tr>`
          body.innerHTML = respuesta
      })
  })

}


const registrar = async () => {
  let _insumo = document.getElementById('insumo').value;
  let _categoria = document.getElementById('categoria').value;
  let _estado = document.getElementById('estado').value;

  let insumos = {
    insumo: _insumo,
    categoria: _categoria,
    estado: _estado
  };

  fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(insumos),
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
      window.location.href = 'http://127.0.0.1:5503/Insumos.html';
    })
  })
}

function editar(insumos) {
  document.getElementById('insumo').value = ''
  document.getElementById('categoria').value = ''
  document.getElementById('estado').value = ''

  document.getElementById('insumo').value = insumos.insumo
  document.getElementById('categoria').value = insumos.categoria
  document.getElementById('estado').value = insumos.estado
}


const actualizar = async() => {
  let _insumo = document.getElementById('insumo').value;
  let _categoria = document.getElementById('categoria').value;
  let _estado = document.getElementById('estado').value;
  
  let insumos = {
    insumo: _insumo,
    categoria: _categoria,
    estado: _estado
  };

  fetch(url, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(insumos),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then((resp) => resp.json())
  .then(json => {
    alert(json.msg);
    // Redirigir a otra página
    window.location.href = 'http://127.0.0.1:5503/Insumos.html';
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

