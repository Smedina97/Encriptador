function btn_encriptar() {
    var mensaje = document.getElementById("mensaje").value;
    if (validarTexto(mensaje)) {
      var resultado = encriptar(mensaje);
      document.getElementById("resultado").value = resultado;
      document.getElementById("mensaje").value = "";
    } else {
      alert("No está permitido el uso de caracteres especiales, ni mayúsculas y acentos.");
    }
  }
  
  function btn_desencriptar() {
    var resultado = document.getElementById("resultado").value;
    var mensaje = desencriptar(resultado);
    document.getElementById("mensaje").value = mensaje;
    document.getElementById("resultado").value = "";
  }
  
  function encriptar(texto) {
    var encriptado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    return encriptado;
  }
  
  function desencriptar(texto) {
    var desencriptado = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    return desencriptado;
  }
  
  function copiarTexto() {
    var resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
    alert("Texto encriptado copiado al portapapeles.");
  }
  
  
  function validarTexto(texto) {
    var caracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var caracteresMayusculas = /[A-Z]+/;
    var caracteresAcentos = /[áéíóúÁÉÍÓÚ]+/;
    return !(caracteresEspeciales.test(texto) || caracteresMayusculas.test(texto) || caracteresAcentos.test(texto));
  }
  