// Datos Generales
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
  { num: 8, nombre: "Carlos Zenitchimaru Franco Chávez", mote: "Yufra", profesion: "Odontología", anio: "2015", padrino: "-", testigo: "Gato de Iglesia" },
  { num: 9, nombre: "Wyatt Dempsey Caqui Rivera", mote: "Ruiseñor", profesion: "-", anio: "2016", padrino: "-", testigo: "-" },
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

// Decálogo del Pardillo
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

// Navegación por pestañas
function switchTab(tabId) {
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => tab.classList.remove('active'));
    
    const allButtons = document.querySelectorAll('.nav-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));

    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    const navBtnToActivate = document.querySelector(`.nav-btn[onclick*="${tabId}"]`);
    if (navBtnToActivate) {
        navBtnToActivate.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filtro para el Cancionero
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

// Renderizar Tarjetas ROA
function renderROACards() {
  const container = document.getElementById('roaCardsContainer');
  if (!container) return;
  container.innerHTML = "";
  roaData.forEach(tuno => {
    const card = document.createElement('div');
    card.className = 'roa-card';
    card.setAttribute('data-roa', tuno.num);
    card.innerHTML = `
      <div class="roa-card-header">
        <span class="roa-card-badge">ROA N° ${tuno.num}</span>
        <span class="roa-card-year">${tuno.anio}</span>
      </div>
      <div class="roa-card-body">
        <h3 class="roa-card-mote">"${tuno.mote}"</h3>
        <h4 class="roa-card-name">${tuno.nombre}</h4>
        <p class="roa-card-profession"><strong>Carrera:</strong> ${tuno.profesion || 'No especificada'}</p>
      </div>
      <div class="roa-card-footer">
        <div class="roa-card-meta">
          <span><strong>Padrino:</strong> ${tuno.padrino || '-'}</span>
          <span><strong>Testigo:</strong> ${tuno.testigo || '-'}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Filtro rápido ROA
function filterROACards() {
  const input = document.getElementById('roaSearch');
  if (!input) return;
  const filter = input.value.toLowerCase();
  const cards = document.querySelectorAll('.roa-card');
  cards.forEach(card => {
    const textContent = card.textContent.toLowerCase();
    card.style.display = textContent.includes(filter) ? 'flex' : 'none';
  });
}

// Sistema de Trivia
let questions = [];
let currentQ = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

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
  pool = pool.filter(v => v !== correctVal && v !== "-" && v !== "" && v !== undefined);
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
  
  // 1. Historia y Fundación
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

  // 2. Decálogo del Pardillo
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

  // 3. Preguntas dinámicas del ROA
  roaData.forEach(tuno => {
    // Mote por Nombre
    let qMote = getWrongOptions(tuno.mote, 'mote');
    questions.push({
      question: `¿Cuál es el Mote/Apodo de ${tuno.nombre}?`,
      options: qMote.opts,
      correct: qMote.correctIdx
    });

    // Nombre por Mote
    let qNom = getWrongOptions(tuno.nombre, 'nombre');
    questions.push({
      question: `¿Quién es el Tuno conocido como "${tuno.mote}"?`,
      options: qNom.opts,
      correct: qNom.correctIdx
    });

    // Profesión por Mote
    if (tuno.profesion !== "-") {
      let qProf = getWrongOptions(tuno.profesion, 'profesion');
      questions.push({
        question: `¿Qué profesión/carrera tiene ${tuno.mote} (${tuno.nombre})?`,
        options: qProf.opts,
        correct: qProf.correctIdx
      });
    }

    // Año de Ascenso
    let qAnio = getWrongOptions(tuno.anio, 'anio');
    questions.push({
      question: `¿En qué año fue el ascenso de ${tuno.mote}?`,
      options: qAnio.opts,
      correct: qAnio.correctIdx
    });

    // Padrino
    if (tuno.padrino !== "-") {
      let qPad = getWrongOptions(tuno.padrino, 'padrino');
      questions.push({
        question: `¿Quién fue el Padrino de ${tuno.mote}?`,
        options: qPad.opts,
        correct: qPad.correctIdx
      });
    }

    // Testigo
    if (tuno.testigo !== "-") {
      let qTest = getWrongOptions(tuno.testigo, 'testigo');
      questions.push({
        question: `¿Quién fue el Testigo de ascenso de ${tuno.mote}?`,
        options: qTest.opts,
        correct: qTest.correctIdx
      });
    }

    // Número ROA
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

function loadQuiz() {
const quizQuestion = document.getElementById('quizQuestion');
const optionsDiv = document.getElementById('quizOptions');
if (!quizQuestion || !optionsDiv) return;
if (questions.length === 0) {
    generateQuestions();
}

  const q = questions[currentQ];
  quizQuestion.innerHTML = `<small style="color:#888;">Pregunta ${currentQ + 1} de ${questions.length}</small><br>${q.question}`;
  
  optionsDiv.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.disabled = false;
    btn.onclick = () => checkAnswer(idx);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selectedIdx) {
  const resultDiv = document.getElementById('quizResult');
  const optionsDiv = document.getElementById('quizOptions');
  if (!resultDiv) return;

  if (optionsDiv) {
    const buttons = optionsDiv.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
  }

  if (selectedIdx === questions[currentQ].correct) {
    resultDiv.innerHTML = '<p class="result-msg correct">¡Correcto! Aúpa Wiener</p>';
  } else {
    const correctaText = questions[currentQ].options[questions[currentQ].correct];
    resultDiv.innerHTML = `<p class="result-msg incorrect">Incorrecto. La respuesta correcta era: "${correctaText}"</p>`;
  }

  setTimeout(() => {
    currentQ = (currentQ + 1) % questions.length;
    resultDiv.innerHTML = "";
    loadQuiz();
  }, 2200);
}

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  renderROACards();
  loadQuiz();
});

const ADMIN_PASS = "messi180411pm";
let esAdminAutenticado = false;

// Solicitud de Contraseña para entrar al Panel Admin
function solicitarAccesoAdmin() {
  if (esAdminAutenticado) {
    poblarSelectorCanciones();
    switchTab('admin');
    return;
  }
  
  const password = prompt("Ingresa la contraseña de administrador:");
  if (password === ADMIN_PASS) {
    esAdminAutenticado = true;
    poblarSelectorCanciones();
    switchTab('admin');
  } else if (password !== null) {
    alert("Contraseña incorrecta.");
  }
}

// Convierte texto con [Acorde]sílaba a HTML (.syl / .c)
function parsearTextoACancioneroHTML(texto) {
  const lineas = texto.split('\n');
  let htmlResultante = '';

  lineas.forEach(linea => {
    if (!linea.trim()) return;

    let lineaHTML = '<div class="song-line">';
    const regex = /\[(.*?)\]([^\s\[]*)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(linea)) !== null) {
      const textoPrevio = linea.substring(lastIndex, match.index);
      lineaHTML += textoPrevio;

      const acorde = match[1];
      const silaba = match[2];

      if (silaba.length > 0) {
        lineaHTML += `<span class="syl"><span class="c">${acorde}</span>${silaba}</span>`;
      } else {
        lineaHTML += `<span class="syl"><span class="c">${acorde}</span>&nbsp;</span>`;
      }

      lastIndex = regex.lastIndex;
    }

    lineaHTML += linea.substring(lastIndex);
    lineaHTML += '</div>';
    htmlResultante += lineaHTML;
  });

  return htmlResultante;
}

// Convierte HTML (.syl / .c) de vuelta a [Acorde] para cargar en el área de texto
function desparsearHTMLaTexto(cancionContainer) {
  let textoFinal = '';
  const lineas = cancionContainer.querySelectorAll('.song-line');

  lineas.forEach(linea => {
    let lineaTexto = '';
    linea.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        lineaTexto += node.textContent;
      } else if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('syl')) {
        const acordeEl = node.querySelector('.c');
        const acorde = acordeEl ? acordeEl.textContent.trim() : '';
        
        let silaba = node.textContent;
        if (acordeEl) {
          silaba = silaba.replace(acordeEl.textContent, '');
        }
        if (silaba === '\u00a0') silaba = '';

        lineaTexto += `[${acorde}]${silaba}`;
      }
    });
    textoFinal += lineaTexto + '\n';
  });

  return textoFinal.trim();
}

// Llena el selector desplegable con las canciones existentes
function poblarSelectorCanciones() {
  const selector = document.getElementById('adminSongSelector');
  if (!selector) return;

  selector.innerHTML = '<option value="nueva">-- Crear una canción nueva --</option>';

  const cancionesEstaticas = document.querySelectorAll('.song-list > details.song-accordion');
  cancionesEstaticas.forEach((acc, index) => {
    const titulo = acc.querySelector('.song-title span').textContent;
    const id = acc.dataset.id || `estatica_${index}`;
    acc.dataset.id = id;

    const opt = document.createElement('option');
    opt.value = id;
    opt.textContent = `[Canción] ${titulo}`;
    selector.appendChild(opt);
  });
}

// Carga los datos de la canción seleccionada en los campos del formulario
function cargarCancionParaEditar() {
  const selector = document.getElementById('adminSongSelector');
  const selectedId = selector.value;
  const btnEliminar = document.getElementById('btnEliminar');

  if (selectedId === 'nueva') {
    document.getElementById('adminSongForm').reset();
    document.getElementById('adminSongId').value = '';
    btnEliminar.style.display = 'none';
    return;
  }

  btnEliminar.style.display = 'inline-block';
  
  const cancionAcc = document.querySelector(`details.song-accordion[data-id="${selectedId}"]`);
  if (cancionAcc) {
    document.getElementById('adminSongId').value = selectedId;
    document.getElementById('adminTitle').value = cancionAcc.querySelector('.song-title span').textContent;
    
    const badgeEl = cancionAcc.querySelector('.badge');
    document.getElementById('adminBadge').value = badgeEl ? badgeEl.textContent : '';

    const introEl = cancionAcc.querySelector('.intro-text');
    document.getElementById('adminIntro').value = introEl ? introEl.textContent.trim() : '';

    const chordsContainer = cancionAcc.querySelector('.song-chords-container');
    document.getElementById('adminLyrics').value = desparsearHTMLaTexto(chordsContainer);
  }
}

// Guardar los cambios (Crea una nueva o actualiza la existente)
function guardarNuevaCancion(event) {
  event.preventDefault();

  const id = document.getElementById('adminSongId').value;
  const titulo = document.getElementById('adminTitle').value;
  const badge = document.getElementById('adminBadge').value;
  const intro = document.getElementById('adminIntro').value;
  const letraMarcada = document.getElementById('adminLyrics').value;

  const lineasHTML = parsearTextoACancioneroHTML(letraMarcada);

  const cancionData = {
    id: id || `custom_${Date.now()}`,
    titulo: titulo,
    badge: badge,
    intro: intro,
    bodyHTML: lineasHTML
  };

  let cancionesGuardadas = JSON.parse(localStorage.getItem('canciones_custom_v2') || '{}');
  cancionesGuardadas[cancionData.id] = cancionData;
  localStorage.setItem('canciones_custom_v2', JSON.stringify(cancionesGuardadas));

  renderizarOActualizarCancion(cancionData);

  alert('¡Canción guardada con éxito!');
  document.getElementById('adminSongForm').reset();
  poblarSelectorCanciones();
  switchTab('cancionero');
}

// Renderiza o actualiza la estructura en el DOM
function renderizarOActualizarCancion(cancion) {
  let accordion = document.querySelector(`details.song-accordion[data-id="${cancion.id}"]`);

  if (!accordion) {
    accordion = document.createElement('details');
    accordion.className = 'song-accordion';
    accordion.dataset.id = cancion.id;
    document.querySelector('.song-list').appendChild(accordion);
  }

  accordion.innerHTML = `
    <summary class="song-title">
      <span>${cancion.titulo}</span>
      <span class="badge">${cancion.badge}</span>
    </summary>
    <div class="song-body">
      <div class="song-chords-container">
        ${cancion.intro ? `<div class="intro-text">${cancion.intro}</div>` : ''}
        ${cancion.bodyHTML}
      </div>
    </div>
  `;
}

// Eliminar canción
function eliminarCancionActual() {
  const id = document.getElementById('adminSongId').value;
  if (!id) return;

  if (confirm('¿Deseas eliminar esta canción del cancionero?')) {
    let cancionesGuardadas = JSON.parse(localStorage.getItem('canciones_custom_v2') || '{}');
    if (cancionesGuardadas[id]) {
      delete cancionesGuardadas[id];
      localStorage.setItem('canciones_custom_v2', JSON.stringify(cancionesGuardadas));
    } else {
      let ocultas = JSON.parse(localStorage.getItem('canciones_ocultas') || '[]');
      ocultas.push(id);
      localStorage.setItem('canciones_ocultas', JSON.stringify(ocultas));
    }

    const accordion = document.querySelector(`details.song-accordion[data-id="${id}"]`);
    if (accordion) accordion.remove();

    alert('Canción eliminada.');
    document.getElementById('adminSongForm').reset();
    poblarSelectorCanciones();
    switchTab('cancionero');
  }
}

// Cargar cambios guardados al abrir la página
function cargarCancionesAlIniciar() {
  poblarSelectorCanciones();

  const ocultas = JSON.parse(localStorage.getItem('canciones_ocultas') || '[]');
  ocultas.forEach(id => {
    const acc = document.querySelector(`details.song-accordion[data-id="${id}"]`);
    if (acc) acc.remove();
  });

  const cancionesGuardadas = JSON.parse(localStorage.getItem('canciones_custom_v2') || '{}');
  Object.values(cancionesGuardadas).forEach(cancion => {
    renderizarOActualizarCancion(cancion);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  cargarCancionesAlIniciar();
});
