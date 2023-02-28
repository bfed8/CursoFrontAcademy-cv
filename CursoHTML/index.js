$.ajax({
  url: "https://randomuser.me/api/",
  dataType: "json",
  success: function (data) {
    document.getElementById("grupoPerfil").style.display = "none";
    document.getElementById("grupoDireccion").style.display = "none";
    document.getElementById("grupoContacto").style.display = "none";
    var nombre = data.results[0].name.first + " " + data.results[0].name.last;
    document.getElementById("nombreCompleto").innerHTML = nombre;
    document

      .getElementById("mostrarPerfil")
      .addEventListener("click", function () {
        var nombre =
          data.results[0].name.first + " " + data.results[0].name.last;
        document.getElementById("nombreCompletoPerfil").innerHTML = nombre;
        var fechaNaciemiento = data.results[0].dob.date;
        document.getElementById("fechaNacimientoPerfil").innerHTML =
          fechaNaciemiento;

        var edad = data.results[0].dob.age;
        document.getElementById("edad").innerHTML = edad;

        document.getElementById("grupoPerfil").style.display = "flex";
        document.getElementById("grupoDireccion").style.display = "none";
        document.getElementById("grupoContacto").style.display = "none";
    });
    
    document
    .getElementById("mostrarContacto")
    .addEventListener("click", function () {
        var email = data.results[0].email;
        document.getElementById("email").innerHTML = email;
        var telefono = data.results[0].cell;
        document.getElementById("telefonoCelular").innerHTML = telefono;
        
        document.getElementById("grupoContacto").style.display = "flex";
        document.getElementById("grupoDireccion").style.display = "none";
        document.getElementById("grupoPerfil").style.display = "none";
      });
    document
      .getElementById("mostrarDireccion")
      .addEventListener("click", function () {
        var direccion =
          data.results[0].location.street.name +
          " " +
          data.results[0].location.street.number;
        document.getElementById("direccionCompleta").innerHTML = direccion;

        var ciudad = data.results[0].location.city;
        document.getElementById("ciudad").innerHTML = ciudad;

        var codigoPostal = data.results[0].location.postcode;
        document.getElementById("codigoPostal").innerHTML = codigoPostal;

        var estado = data.results[0].location.state;
        document.getElementById("estado").innerHTML = estado;

        var pais = data.results[0].location.country;
        document.getElementById("pais").innerHTML = pais;

        document.getElementById("grupoDireccion").style.display = "flex";
        document.getElementById("grupoContacto").style.display = "none";
        document.getElementById("grupoPerfil").style.display = "none";
      });
  },
});

