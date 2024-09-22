// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Oh, her eyes, her eyes", time: 14 },
  { text: "Make the stars look like they're not shinin'", time: 17 },
  { text: "Her hair, her hair", time: 18 },
  { text: "Falls perfectly without her tryin'", time: 18.5 },
  { text: "She's so beautiful and I tell her everyday", time: 24 },
  { text: "Yeah, I know, I know", time: 32 },
  { text: "When I compliment her, she won't believe me", time: 33 },
  { text: "And it's so, it's so", time: 36 },
  { text: "Sad to think that she don't see what I see", time: 39 },
  { text: "But every time she asks me, Do I look okay?", time: 42 },
  { text: "I say", time: 44 },
  { text: "When I see your face", time: 50 },
  { text: "There's not a thing that I would change", time: 55 },
  { text: "'Cause you're amazing", time: 59 },
  { text: "Just the way you are", time: 61 },
  { text: "And when you smile", time: 65 },
  { text: "The whole world stops and stares for a while", time: 70 },
  { text: "'Cause girl, you're amazing", time: 77 },
  { text: "Just the way you are", time: 79 },
  { text: "Yeah", time: 85 },
  { text: "Te quiero muchooooo Shanisita.", time: 86 },
  { text: "Te quiero muchooooo Shanisita.", time: 88 },
  { text: "Feliz 21Sept.", time: 86 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);