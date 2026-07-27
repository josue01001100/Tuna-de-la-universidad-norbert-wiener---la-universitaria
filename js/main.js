/* ==========================================
   DATOS OFICIALES (ROA y Decálogo)
   ========================================== */

const datosFundacion = {
  fecha: "15 de marzo del 2015",
  universidad: "Universidad Privada Norbert Wiener",
  ubicacion: "Lima - Perú",
  lema: "La tuna que ronda hasta que la noche termine"
};

// Lista completa ROA (Real Orden de Ascenso)
const roaData = [
  { num: 1, nombre: "Celestino Roberto Hernández Molina", mote: "Centella", profesion: "Ingeniería Industrial", anio: "2015", padrino: "Hueso", testigo: "Yuyín" },
  { num: 2, nombre: "Juan Carlos Alcalde Terreros", mote: "Químico", profesion: "Tecnología Médica en Laboratorio Clínico", anio: "2015", padrino: "Hueso", testigo: "Rafiki" },
  { num: 3, nombre: "Herald Carlos Fiestas Piscoya", mote: "Rex", profesion: "Administración de Hotelería y Turismo", anio: "2015", padrino: "Hueso", testigo: "Rafiki" },
  { num: 4, nombre: "Miguel Angel Acosta Guerra", mote: "Phineas", profesion: "Farmacia y Bioquímica", anio: "2015", padrino: "Cavernícola", testigo: "Rafiki" },
  { num: 5, nombre: "Gary Neil Diaz Torres", mote: "Gato de Iglesia", profesion: "Administración y Negocios Internacionales", anio: "2015", padrino: "Rafiki", testigo: "Yuyín" },
  { num: 6, nombre: "Angel de Jesús Valdivieso Araujo", mote: "Lo Tumbo", profesion: "Tecnología Médica en Terapia Física y Rehabilitación", anio: "2015", padrino: "Centella", testigo: "Químico" },
  { num: 7, nombre: "Flavio César Mendoza Gaona", mote: "Palito", profesion: "Psicología", anio: "2015", padrino: "Centella", testigo: "Phineas" },
  { num: 8, nombre: "Carlos Zenitchimaru Franco Chávez", mote: "Yufra", profesion: "Odontología", anio: "2015", padrino: "—", testigo: "Gato de Iglesia" },
  { num: 9, nombre: "Wyatt Dempsey Caqui Rivera", mote: "Ruiseñor", profesion: "—", anio: "2016", padrino: "—", testigo: "—" },
  { num: 10, nombre: "Diego Alonso Peña Villafana", mote: "Cucho", profesion: "Ingeniería Electrónica", anio: "2016", padrino: "Arena", testigo: "Jujuy" },
  { num: 11, nombre: "Juan Francisco Quiquia Valenzuela", mote: "Matagato", profesion: "Derecho", anio: "2016", padrino: "Colón", testigo: "Cavernícola" },
  { num: 12, nombre: "Jhon David Torres Rueda", mote: "Lord Farquad", profesion: "Tecnología Médica en Terapia Física y Rehabilitación", anio: "2017", padrino: "Rex", testigo: "Quimico" },
  { num: 13, nombre: "Marco Antonio Lucas Apari", mote: "Frankenstein", profesion: "Psicología", anio: "2017", padrino: "Químico", testigo: "Rex" },
  { num: 14, nombre: "Carlos Alberto Uchuya Medina", mote: "Nobita", profesion: "Psicología", anio: "2018", padrino: "Palito", testigo: "Quimico" },
  { num: 15, nombre: "Freddy Junior Escurra García", mote: "Garfield", profesion: "Medicina Humana", anio: "2018", padrino: "Rex", testigo: "Centella" },
  { num: 16, nombre: "Orlando de Jesús Bedoya Morro", mote: "Camarada", profesion: "Medicina Humana", anio: "2019", padrino: "Cucho", testigo: "Lopez" },
  { num: 17, nombre: "Miguel Angel Corsino Cana", mote: "Olaf", profesion: "Derecho y Ciencias Políticas", anio: "2022", padrino: "Nobita", testigo: "Quimico" },
  { num: 18, nombre: "Albaro Gerardo Yupa Ortega", mote: "Baljeet", profesion: "Medicina Humana", anio: "2022", padrino: "Nobita", testigo: "Centella" },
  { num: 19, nombre: "Gustavo Franco Rubina Medina", mote: "Largo Adams", profesion: "Psicología", anio: "2023", padrino: "Nobita", testigo: "Centella" },
  { num: 20, nombre: "Jaime Arturo Pacheco Retamozo", mote: "Charlie Brown", profesion: "Contabilidad y Auditoría", anio: "2024", padrino: "Largo", testigo: "Cucho" },
  { num: 21, nombre: "Jose Andres Quispe Abanto", mote: "Flan", profesion: "Enfermería", anio: "2024", padrino: "Quimico", testigo: "Cucho" },
  { num: 22, nombre: "Carlos Antonio Loayza Prado", mote: "Kbooms", profesion: "Medicina Humana", anio: "2024", padrino: "Olaf", testigo: "Nobita" }
];

// Decálogo del Pardillo Completo
const decalogoData = {
  dedicatoria: "Para ese atolondrado ser, que siendo alguien no es nada, así como a todos los demás proyectos mutantes de pardillo va esta arenga de la que es menester guardar escrupuloso cumplimiento.",
  puntos: [
    { num: 1, regla: "El pardillo es el último mono.", detalle: "Aquel ser de inocencia láctea que primerizamente ingresa a la tuna de la Universidad Privada Norbert Wiener no será considerado ni siquiera como pardillo, llegará a tal grado tras diversas andanzas y desventuras." },
    { num: 2, regla: "El pardillo no opina, asume la opinión de los veteranos.", detalle: "" },
    { num: 3, regla: "El pardillo es un ser sonriente y servicial para con la veteranía.", detalle: "El pardillo da todo de sí para la tuna, nunca espera nada de ella. Cuan lejos ha de estar un pardillo de albergar la protesta o el gesto agrio." },
    { num: 4, regla: "Es menester la demostración, por el pardo, de sus buenas artes musicales hacia las que ha de tener primordial interés.", detalle: "" },
    { num: 5, regla: "Los ensayos son sagrados para el pardillo, su desinterés e inasistencia encolerizará a la veteranía.", detalle: "" },
    { num: 6, regla: "El vino es indispensable en todo buen ensayo.", detalle: "Cuantos puntos gana un pardillo cumpliendo con el puntual abastecimiento de la bodega veteranal y cuantos pierde aquel ser dejado de si para tales menesteres." },
    { num: 7, regla: "Es competencia de la tuna conocer que el pardo es un buen bebedor.", detalle: "Deberá tener prestancia en sus demostraciones, así como en los banquetes." },
    { num: 8, regla: "Las demostraciones del pardillo en el arte de la conquista de feminas deberán ser: convincentes, elegantes, corteses, varoniles y sobre todo de buen gusto ... ¡Nunca altaneros!", detalle: "" },
    { num: 9, regla: "El pardillo llamado a ser tuna ha de albergar dentro de sí a un ser de monstruosa alegría e ingenio mental.", detalle: "Ser pardillo implica ser asiduo en rondas y trasiegos peregrinos del buen tumar. En otras palabras, estar dispuesto a todo lo honesto que nos rodea en este mundo." },
    { num: 10, regla: "Las rondas son el pan de la tuna, el pardillo debe honrar este precepto, siendo cumplido y holgado en la organización de las mismas.", detalle: "" }
  ],
  neofito: "Si el pardillo demuestra buen hacer en todas estas primeras artes, podrá pasar a ser considerado neófito, que es aquel ser que tras pacientes tiempos de pardo existencia parece al fin preparado por comenzar a aprender el significado de nuestra sagrada cofradía, respetando el mensaje de nuestros fundadores."
};

/* ==========================================
   NAVEGACIÓN Y FILTROS
   ========================================== */

// Función corregida para cambiar de sección/pestaña
function switchTab(tabId) {
  // 1. Ocultar todas las secciones
  const allTabs = document.querySelectorAll('.tab-content');
  allTabs.forEach(tab => tab.classList.remove('active'));

  // 2. Desactivar todos los botones de la barra de navegación
  const allButtons = document.querySelectorAll('.nav-btn');
  allButtons.forEach(btn => btn.classList.remove('active'));

  // 3. Mostrar la pestaña seleccionada
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }

  // 4. Activar el botón correspondiente en la navegación
  const navBtnToActivate = document.querySelector(`.nav-btn[onclick*="${tabId}"]`);
  if (navBtnToActivate) {
    navBtnToActivate.classList.add('active');
  }

  // 5. Desplazar suavemente hacia arriba
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filtro de búsqueda para el cancionero
function filterSongs() {
  const input = document.getElementById('songSearch');
  if (!input) return;
  const filter = input.value.toLowerCase();
  const songs = document.querySelectorAll('.song-accordion');

  songs.forEach(song => {
    const title = song.querySelector('.song-title').textContent.toLowerCase();
    song.style.display = title.includes(filter) ? 'block' : 'none';
  });
}

// Filtro de búsqueda para la tabla ROA
function filterROA() {
  const input = document.getElementById('roaSearch');
  if (!input) return;
  
  const filter = input.value.toLowerCase();
  const table = document.getElementById('roaTable');
  if (!table) return;

  const rows = table.querySelectorAll('tbody tr');

  rows.forEach(row => {
    const textContent = row.textContent.toLowerCase();
    row.style.display = textContent.includes(filter) ? '' : 'none';
  });
}

/* ==========================================
   SISTEMA DE TRIVIA COMBINADO (ROA + Decálogo)
   ========================================== */

let questions = [];
let currentQ = 0;

// Utilidad para desordenar un arreglo
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Generador de opciones falsas dinámicas
function getWrongOptions(correctVal, keyType) {
  let pool = [];
  if (keyType === 'mote' || keyType === 'padrino' || keyType === 'testigo') {
    pool = [...new Set(roaData.map(t => t.mote))];
  } else if (keyType === 'nombre') {
    pool = roaData.map(t => t.nombre);
  } else if (keyType === 'profesion') {
    pool = [...new Set(roaData.map(t => t.profesion))];
  } else if (keyType === 'anio') {
    pool = ["2015", "2016", "2017", "2018", "2019", "2022", "2023", "2024"];
  }

  // Filtrar la respuesta correcta y valores vacíos o no disponibles
  pool = pool.filter(v => v !== correctVal && v !== "—" && v !== "" && v !== undefined);
  shuffleArray(pool);

  const choices = [correctVal, pool[0], pool[1], pool[2]];
  shuffleArray(choices);
  
  return {
    opts: choices,
    correctIdx: choices.indexOf(correctVal)
  };
}

// Generador total de preguntas cruzadas
function generateQuestions() {
  questions = [];

  // --- Preguntas de Historia y Fundación ---
  questions.push({
    question: `¿En qué fecha exacta se formó la Tuna de la ${datosFundacion.universidad}?`,
    options: ["15 de marzo del 2015", "1 de abril del 2015", "15 de mayo del 2016", "20 de enero del 2014"],
    correct: 0
  });

  questions.push({
    question: "¿A quién va dirigida la arenga del Decálogo del Pardillo?",
    options: [
      "A los tunos veteranos de la universidad",
      "Para ese atolondrado ser, que siendo alguien no es nada...",
      "Exclusivamente a los neófitos preparados",
      "A los padrinos y testigos del ascenso"
    ],
    correct: 1
  });

  // --- Preguntas del Decálogo ---
  decalogoData.puntos.forEach(p => {
    let distractoresPunto = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].filter(n => n !== p.num.toString());
    shuffleArray(distractoresPunto);
    
    let optsPunto = [
      `Punto ${p.num}`,
      `Punto ${distractoresPunto[0]}`,
      `Punto ${distractoresPunto[1]}`,
      `Punto ${distractoresPunto[2]}`
    ];
    shuffleArray(optsPunto);

    questions.push({
      question: `¿A qué número de punto del Decálogo corresponde: "${p.regla}"?`,
      options: optsPunto,
      correct: optsPunto.indexOf(`Punto ${p.num}`)
    });

    if (p.detalle !== "") {
      questions.push({
        question: `Según el Decálogo (${p.regla}), completa: "${p.detalle.substring(0, 45)}..."`,
        options: [
          p.detalle,
          "No importa el abastecimiento si el pardillo canta bien.",
          "El pardillo puede elevar su protesta si es justa.",
          "El veterano debe solicitar opinión al pardillo."
        ],
        correct: 0
      });
    }
  });

  questions.push({
    question: "¿Qué es un Neófito según la conclusión del Decálogo?",
    options: [
      decalogoData.neofito,
      "Aquel pardillo que ha pagado la ronda de vino.",
      "Aquel que ha cumplido un año sin faltar a los ensayos.",
      "Un tuno de beca completo con derecho a voto."
    ],
    correct: 0
  });

  // --- Preguntas dinámicas del ROA ---
  roaData.forEach(tuno => {
    // 1. Mote por Nombre
    let qMote = getWrongOptions(tuno.mote, 'mote');
    questions.push({
      question: `¿Cuál es el Mote/Apodo de ${tuno.nombre}?`,
      options: qMote.opts,
      correct: qMote.correctIdx
    });

    // 2. Nombre por Mote
    let qNom = getWrongOptions(tuno.nombre, 'nombre');
    questions.push({
      question: `¿Quién es el Tuno conocido como "${tuno.mote}"?`,
      options: qNom.opts,
      correct: qNom.correctIdx
    });

    // 3. Profesión por Mote
    if (tuno.profesion !== "—") {
      let qProf = getWrongOptions(tuno.profesion, 'profesion');
      questions.push({
        question: `¿Qué profesión/carrera tiene ${tuno.mote} (${tuno.nombre})?`,
        options: qProf.opts,
        correct: qProf.correctIdx
      });
    }

    // 4. Año de Ascenso
    let qAnio = getWrongOptions(tuno.anio, 'anio');
    questions.push({
      question: `¿En qué año fue el ascenso de ${tuno.mote}?`,
      options: qAnio.opts,
      correct: qAnio.correctIdx
    });

    // 5. Padrino (Corregido)
    if (tuno.padrino !== "—") {
      let qPad = getWrongOptions(tuno.padrino, 'padrino');
      questions.push({
        question: `¿Quién fue el Padrino de ${tuno.mote}?`,
        options: qPad.opts,
        correct: qPad.correctIdx
      });
    }

    // 6. Testigo (Corregido)
    if (tuno.testigo !== "—") {
      let qTest = getWrongOptions(tuno.testigo, 'testigo');
      questions.push({
        question: `¿Quién fue el Testigo de ascenso de ${tuno.mote}?`,
        options: qTest.opts,
        correct: qTest.correctIdx
      });
    }

    // 7. Número ROA
    let optsROA = [
      `ROA N°${tuno.num}`,
      `ROA N°${(tuno.num % 22) + 1}`,
      `ROA N°${((tuno.num + 3) % 22) + 1}`,
      `ROA N°${((tuno.num + 7) % 22) + 1}`
    ];
    shuffleArray(optsROA);
    questions.push({
      question: `¿Qué número de orden ROA ocupa ${tuno.mote} (${tuno.nombre})?`,
      options: optsROA,
      correct: optsROA.indexOf(`ROA N°${tuno.num}`)
    });
  });

  shuffleArray(questions);
}

// Cargar y mostrar la pregunta actual (Corregido)
function loadQuiz() {
  const quizQuestion = document.getElementById('quizQuestion');
  const optionsDiv = document.getElementById('quizOptions');

  if (!quizQuestion || !optionsDiv) return;

  if (questions.length === 0) {
    generateQuestions();
  }

  const q = questions[currentQ];
  quizQuestion.innerHTML = `<small style="color:#888;">Pregunta ${currentQ + 1} de ${questions.length}</small><br>${q.question}`;
  optionsDiv.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.disabled = false; // Habilita los botones en cada nueva pregunta
    btn.onclick = () => checkAnswer(idx);
    optionsDiv.appendChild(btn);
  });
}

// Verificar la respuesta elegida
function checkAnswer(selectedIdx) {
  const resultDiv = document.getElementById('quizResult');
  const optionsDiv = document.getElementById('quizOptions');
  if (!resultDiv) return;

  if (optionsDiv) {
    const buttons = optionsDiv.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
  }

  if (selectedIdx === questions[currentQ].correct) {
    resultDiv.innerHTML = '<p class="result-msg correct">¡Correcto! Aúpa Wiener </p>';
  } else {
    const correctaText = questions[currentQ].options[questions[currentQ].correct];
    resultDiv.innerHTML = `<p class="result-msg incorrect">Incorrecto. La respuesta correcta era: "${correctaText}" </p>`;
  }

  setTimeout(() => {
    currentQ = (currentQ + 1) % questions.length;
    resultDiv.innerHTML = '';
    loadQuiz();
  }, 2200);
}

// Cargar componentes al abrir la página web
document.addEventListener('DOMContentLoaded', () => {
  loadQuiz();
});
