var botonGenerarAsientos = document.getElementById("generarAsientos");

botonGenerarAsientos.addEventListener("click", function() {
     generarAsientosAleatorios();
});

function generarAsientosAleatorios() {
    var audio = document.getElementById('myAudio');
    audio.play();

    var celdasAlumno = document.getElementsByClassName("alumno");

    var numeros = Array.from({ length: 15 }, (_, index) => index + 1);

    for (var i = 0; i < celdasAlumno.length; i++) {

        var indiceAleatorio = Math.floor(Math.random() * numeros.length);

        var numeroAleatorio = numeros.splice(indiceAleatorio, 1)[0];
        celdasAlumno[i].innerText = numeroAleatorio;
    }
}
