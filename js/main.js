// Datos Generales
const datosFundacion = {
  fecha: "15 de marzo del 2015",
  universidad: "Universidad Privada Norbert Wiener",
  ubicacion: "Lima - Perú",
  lema: "La tuna que ronda hasta que la noche termine"
};

// Lista completa ROA (Real Orden de Ascenso)
const roaData = [
  { num: 1, nombre: "Celestino Roberto Hernández Molina", mote: "Centella", profesion: "Ingeniería Industrial", anio: "2015", padrino: "Hueso", testigo: "Yuyín", fecha: "15 de marzo", hora: "12:03 - 12:05", lugar: "plaza de armas de surco, Lima, Peru", foto: "./assets/centella.jpg" },
  { num: 2, nombre: "Juan Carlos Alcalde Terreros", mote: "Químico", profesion: "Tecnología Médica en Laboratorio Clínico", anio: "2015", padrino: "Hueso", testigo: "Rafiki", fecha: "15 de marzo", hora: "12:03 - 12:05", lugar: "plaza de armas de surco, Lima, Peru", foto: "./assets/quimico.jpg" },
  { num: 3, nombre: "Herald Carlos Fiestas Piscoya", mote: "Rex", profesion: "Administración de Hotelería y Turismo", anio: "2015", padrino: "Hueso", testigo: "Rafiki", fecha: "15 de marzo", hora: "12:03 - 12:05", lugar: "plaza de armas de surco, Lima, Peru", foto: "./assets/rex.jpg" },
  { num: 4, nombre: "Miguel Angel Acosta Guerra", mote: "Phineas", profesion: "Farmacia y Bioquímica", anio: "2015", padrino: "Cavernícola", testigo: "Rafiki", fecha: "15 de marzo", hora: "12:03 - 12:05", lugar: "plaza de armas de surco, Lima, Peru", foto: "./assets/phineas.jpg" },
  { num: 5, nombre: "Gary Neil Diaz Torres", mote: "Gato de Iglesia", profesion: "Administración y Negocios Internacionales", anio: "2015", padrino: "Rafiki", testigo: "Yuyín", fecha: "-", hora: "-", lugar: "-", foto: "./assets/gato de iglesia.jpg" },
  { num: 6, nombre: "Angel de Jesús Valdivieso Araujo", mote: "Lo Tumbo", profesion: "Tecnología Médica en Terapia Física y Rehabilitación", anio: "2015", padrino: "Centella", testigo: "Químico", fecha: "18 de julio", hora: "-", lugar: "Parque Jorge Washington, lima, Perú", foto: "./assets/lotumbo.jpg" },
  { num: 7, nombre: "Flavio César Mendoza Gaona", mote: "Palito", profesion: "Psicología", anio: "2015", padrino: "Centella", testigo: "Phineas", fecha: "-", hora: "-", lugar: "-", foto: "./assets/palito.jpg" },
  { num: 8, nombre: "Carlos Zenitchimaru Franco Chávez", mote: "Yufra", profesion: "Odontología", anio: "2015", padrino: "-", testigo: "Gato de Iglesia", fecha: "-", hora: "-", lugar: "-", foto: "./assets/yufra.jpg" },
  { num: 9, nombre: "Wyatt Dempsey Caqui Rivera", mote: "Ruiseñor", profesion: "Administración y negocios internacionales ", anio: "2016", padrino: "-", testigo: "-", fecha: "-", hora: "-", lugar: "-", foto: "./assets/ruiseñor.jpg" },
  { num: 10, nombre: "Diego Alonso Peña Villafana", mote: "Cucho", profesion: "Ingeniería Electrónica", anio: "2016", padrino: "Arena", testigo: "Jujuy", fecha: "-", hora: "-", lugar: "-", foto: "./assets/cucho.jpg" },
  { num: 11, nombre: "Juan Francisco Quiquia Valenzuela", mote: "Matagato", profesion: "Derecho", anio: "2016", padrino: "Colón", testigo: "Cavernícola", fecha: "-", hora: "-", lugar: "-" },
  { num: 12, nombre: "Jhon David Torres Rueda", mote: "Lord Farquad", profesion: "Tecnología Médica en Terapia Física y Rehabilitación", anio: "2017", padrino: "Rex", testigo: "Quimico", fecha: "-", hora: "-", lugar: "-", foto: "./assets/lord.jpg" },
  { num: 13, nombre: "Marco Antonio Lucas Apari", mote: "Frankenstein", profesion: "Psicología", anio: "2017", padrino: "Químico", testigo: "Rex", fecha: "-", hora: "-", lugar: "-", foto: "./assets/frankenstein.jpg" },
  { num: 14, nombre: "Carlos Alberto Uchuya Medina", mote: "Nobita", profesion: "Psicología", anio: "2018", padrino: "Palito", testigo: "Quimico", fecha: "-", hora: "-", lugar: "-", foto: "./assets/nobita.jpg" },
  { num: 15, nombre: "Freddy Junior Escurra García", mote: "Garfield", profesion: "Medicina Humana", anio: "2018", padrino: "Rex", testigo: "Centella", fecha: "-", hora: "-", lugar: "-", foto: "./assets/garfield.jpg" },
  { num: 16, nombre: "Orlando de Jesús Bedoya Morro", mote: "Camarada", profesion: "Medicina Humana", anio: "2019", padrino: "Cucho", testigo: "Lopez", fecha: "-", hora: "-", lugar: "-", foto: "./assets/camarada.jpg" },
  { num: 17, nombre: "Miguel Angel Corsino Cana", mote: "Olaf", profesion: "Derecho y Ciencias Políticas", anio: "2022", padrino: "Nobita", testigo: "Quimico", fecha: "-", hora: "-", lugar: "-", foto: "./assets/olaf.jpg" },
  { num: 18, nombre: "Albaro Gerardo Yupa Ortega", mote: "Baljeet", profesion: "Medicina Humana", anio: "2022", padrino: "Nobita", testigo: "Centella", fecha: "-", hora: "-", lugar: "-", foto: "./assets/baljeet.jpg" },
  { num: 19, nombre: "Gustavo Franco Rubina Medina", mote: "Largo Adams", profesion: "Psicología", anio: "2023", padrino: "Nobita", testigo: "Centella", fecha: "10 de diciembre", hora: "02:00 am", lugar: "Pueblito Boyacense, Duitama, Colombia", foto: "./assets/Largo.jpg"},
  { num: 20, nombre: "Jaime Arturo Pacheco Retamozo", mote: "Charlie Brown", profesion: "Contabilidad y Auditoría", anio: "2024", padrino: "Largo", testigo: "Cucho", fecha: "29 de junio", hora: "-", lugar: "Plaza Bolívar, Pueblo Libre, Perú", foto: "./assets/charlie-brown.jpg"},
  { num: 21, nombre: "Jose Andres Quispe Abanto", mote: "Flan", profesion: "Enfermería", anio: "2024", padrino: "Quimico", testigo: "Cucho", fecha: "29 de junio", hora: "-", lugar: "Plaza Bolívar, Pueblo Libre, Perú", foto: "./assets/flan.jpg"},
  { num: 22, nombre: "Carlos Antonio Loayza Prado", mote: "Kbooms", profesion: "Medicina Humana", anio: "2024", padrino: "Olaf", testigo: "Nobita",fecha: "29 de junio", hora: "-", lugar: "Plaza Bolívar, Pueblo Libre, Perú", foto: "./assets/kbooms.jpg"},
  { num: 23, nombre: "Joseph Elí Victor Carmen Rodriguez", mote: "jackie chan", profesion: "Medicina Humana", anio: "2026", padrino: "nobita", testigo: "rex", fecha: "11 de septiembre de 2026", hora: "7:30 pm", lugar: "Plaza de San Blas, Cusco, Perú", foto: "./assets/jackie-chu.jpg" }
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

    if (typeof renderROACards === 'function') {
        renderROACards();
    }
    
    // Inicializar el creador si entran a admin
    if (tabId === 'admin') {
        inicializarCreadorAcordes();
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
    
    if (tuno.foto) {
      card.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('${tuno.foto}')`;
      card.style.backgroundSize = 'cover';
      card.style.backgroundPosition = 'center';
    }

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
          <span><strong>Fecha de Ascenso:</strong> ${tuno.fecha || '-'}</span>
          <span><strong>Hora:</strong> ${tuno.hora || '-'}</span>
          <span><strong>Lugar:</strong> ${tuno.lugar || '-'}</span>
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
    let qMote = getWrongOptions(tuno.mote, 'mote');
    questions.push({
      question: `¿Cuál es el Mote/Apodo de ${tuno.nombre}?`,
      options: qMote.opts,
      correct: qMote.correctIdx
    });

    let qNom = getWrongOptions(tuno.nombre, 'nombre');
    questions.push({
      question: `¿Quién es el Tuno conocido como "${tuno.mote}"?`,
      options: qNom.opts,
      correct: qNom.correctIdx
    });

    if (tuno.profesion !== "-") {
      let qProf = getWrongOptions(tuno.profesion, 'profesion');
      questions.push({
        question: `¿Qué profesión/carrera tiene ${tuno.mote} (${tuno.nombre})?`,
        options: qProf.opts,
        correct: qProf.correctIdx
      });
    }

    let qAnio = getWrongOptions(tuno.anio, 'anio');
    questions.push({
      question: `¿En qué año fue el ascenso de ${tuno.mote}?`,
      options: qAnio.opts,
      correct: qAnio.correctIdx
    });

    if (tuno.padrino !== "-") {
      let qPad = getWrongOptions(tuno.padrino, 'padrino');
      questions.push({
        question: `¿Quién fue el Padrino de ${tuno.mote}?`,
        options: qPad.opts,
        correct: qPad.correctIdx
      });
    }

    if (tuno.testigo !== "-") {
      let qTest = getWrongOptions(tuno.testigo, 'testigo');
      questions.push({
        question: `¿Quién fue el Testigo de ascenso de ${tuno.mote}?`,
        options: qTest.opts,
        correct: qTest.correctIdx
      });
    }

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

const ADMIN_PASS = "messi180411pm";
let esAdminAutenticado = false;

// Solicitud de Contraseña para entrar al Panel Admin
function solicitarAccesoAdmin() {
  if (esAdminAutenticado) {
    poblarSelectorCanciones();
    switchTab('admin');
    actualizarVistaPrevia();
    return;
  }
  
  const password = prompt("Ingresa la contraseña de administrador:");
  if (password === ADMIN_PASS) {
    esAdminAutenticado = true;
    poblarSelectorCanciones();
    switchTab('admin');
    actualizarVistaPrevia();
  } else if (password !== null) {
    alert("Contraseña incorrecta.");
  }
}

// Convierte texto con [Acorde] y [SALTO] a la estructura idéntica a Clavelitos (.song-page y .cols-N)
function parsearTextoACancioneroHTML(texto, fontSize) {
  const bloquesColumnas = texto.split('[SALTO]');
  const totalCols = bloquesColumnas.length;
  let htmlPaginas = '';
  const tamañoAplicado = fontSize && fontSize.trim() !== '' ? fontSize.trim() : '0.88rem';

  bloquesColumnas.forEach((bloque) => {
    const lineas = bloque.split('\n');
    let htmlPaginaActual = `\n      <!-- COLUMNA / PÁGINA -->\n      <div class="song-page" style="font-size: ${tamañoAplicado};">`;

    lineas.forEach(linea => {
      const lineaLimpia = linea.trim();
      if (!lineaLimpia) return;

      let lineaHTML = '\n        <div class="song-line">\n          ';
      const regex = /\[(.*?)\]([^\s\[]*)/g;
      let lastIndex = 0;
      let match;

      while ((match = regex.exec(lineaLimpia)) !== null) {
        const textoPrevio = lineaLimpia.substring(lastIndex, match.index);
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

      lineaHTML += lineaLimpia.substring(lastIndex);
      lineaHTML += '\n        </div>';
      htmlPaginaActual += lineaHTML;
    });

    htmlPaginaActual += '\n      </div>';
    htmlPaginas += htmlPaginaActual;
  });

  return `<div class="song-chords-container multi-page cols-${totalCols}">${htmlPaginas}\n    </div>`;
}

// Convierte HTML de vuelta a [Acorde] y [SALTO] para edición
function desparsearHTMLaTexto(cancionContainer) {
  let textoFinal = '';
  const paginas = cancionContainer.querySelectorAll('.song-page, .song-column');

  if (paginas.length > 0) {
    let bloquesTextos = [];
    paginas.forEach(pag => {
      let textoPagina = '';
      const lineas = pag.querySelectorAll('.song-line');
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
        textoPagina += lineaTexto.trim() + '\n';
      });
      bloquesTextos.push(textoPagina.trim());
    });
    textoFinal = bloquesTextos.join('\n[SALTO]\n');
  } else {
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
      textoFinal += lineaTexto.trim() + '\n';
    });
    textoFinal = textoFinal.trim();
  }

  return textoFinal;
}

// Llena el selector desplegable con las canciones existentes para lectura/edición
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

  if (selectedId === 'nueva') {
    document.getElementById('adminSongForm').reset();
    document.getElementById('adminSongId').value = '';
    actualizarVistaPrevia();
    return;
  }

  const cancionAcc = document.querySelector(`details.song-accordion[data-id="${selectedId}"]`);
  if (cancionAcc) {
    document.getElementById('adminSongId').value = selectedId;
    document.getElementById('adminTitle').value = cancionAcc.querySelector('.song-title span').textContent;
    
    const badgeEl = cancionAcc.querySelector('.badge');
    document.getElementById('adminBadge').value = badgeEl ? badgeEl.textContent : '';

    const introEl = cancionAcc.querySelector('.intro-text');
    document.getElementById('adminIntro').value = introEl ? introEl.textContent.trim() : '';

    const chordsContainer = cancionAcc.querySelector('.song-chords-container');
    const primeraPag = chordsContainer ? chordsContainer.querySelector('.song-page, .song-column') : null;
    if (primeraPag && primeraPag.style.fontSize) {
      document.getElementById('adminFontSize').value = primeraPag.style.fontSize;
    }

    if (chordsContainer) {
      document.getElementById('adminLyrics').value = desparsearHTMLaTexto(chordsContainer);
    }

    const historyEl = cancionAcc.querySelector('.history-text');
    if (historyEl) {
      const ps = Array.from(historyEl.querySelectorAll('p')).map(p => p.textContent).join('\n\n');
      document.getElementById('adminHistory').value = ps;
      const imgEl = historyEl.querySelector('img');
      document.getElementById('adminHistoryImg').value = imgEl ? imgEl.getAttribute('src') : '';
    } else {
      if (document.getElementById('adminHistory')) document.getElementById('adminHistory').value = '';
      if (document.getElementById('adminHistoryImg')) document.getElementById('adminHistoryImg').value = '';
    }

    actualizarVistaPrevia();
  }
}

// Inserta una etiqueta de acorde [Acorde] justo donde está el cursor
function insertarAcordeEnCursor() {
  const textarea = document.getElementById('adminLyrics');
  if (!textarea) return;

  const acordeNombre = prompt("Ingresa el acorde (ejemplo: Am, E7, Sol):", "Am");
  if (!acordeNombre) return;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const textoPrevio = textarea.value;

  const textoInyectado = `[${acordeNombre.trim()}]`;
  textarea.value = textoPrevio.substring(0, start) + textoInyectado + textoPrevio.substring(end);

  textarea.selectionStart = textarea.selectionEnd = start + textoInyectado.length;
  textarea.focus();

  actualizarVistaPrevia();
}

// Inserta la marca de salto de columna [SALTO] en el cursor
function insertarSaltoColumna() {
  const textarea = document.getElementById('adminLyrics');
  if (!textarea) return;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const textoPrevio = textarea.value;

  const textoInyectado = `\n[SALTO]\n`;
  textarea.value = textoPrevio.substring(0, start) + textoInyectado + textoPrevio.substring(end);

  textarea.selectionStart = textarea.selectionEnd = start + textoInyectado.length;
  textarea.focus();

  actualizarVistaPrevia();
}

// Renderiza la vista previa en tiempo real
function actualizarVistaPrevia() {
  const container = document.getElementById('livePreviewContainer');
  if (!container) return;

  const titulo = document.getElementById('adminTitle').value || 'Título de la Canción';
  const badge = document.getElementById('adminBadge').value || 'Ritmo';
  const intro = document.getElementById('adminIntro').value;
  const letraMarcada = document.getElementById('adminLyrics').value;
  const historyText = document.getElementById('adminHistory') ? document.getElementById('adminHistory').value : '';
  const historyImg = document.getElementById('adminHistoryImg') ? document.getElementById('adminHistoryImg').value : '';

  const fontSize = document.getElementById('adminFontSize') ? document.getElementById('adminFontSize').value : '0.88rem';

  const contenidoCancionHTML = parsearTextoACancioneroHTML(letraMarcada, fontSize);

  let htmlReseña = '';
  if (historyText.trim() || historyImg.trim()) {
    const parrafos = historyText.split('\n').filter(p => p.trim() !== '').map(p => `<p>${p}</p>`).join('\n      ');
    htmlReseña = `\n    <!-- RESEÑA HISTÓRICA -->\n    <div class="history-text">\n      ${parrafos}${historyImg.trim() ? `\n      <div class="history-img-container">\n        <img src="${historyImg}" alt="Reseña Histórica ${titulo}">\n      </div>` : ''}\n    </div>`;
  }

  container.innerHTML = `
    <details class="song-accordion" open>
      <summary class="song-title">
        <span>${titulo}</span>
        <span class="badge">${badge}</span>
      </summary>
      <div class="song-body">
        ${intro ? `<div class="intro-text">${intro}</div>` : ''}
        <div class="page-indicator-info"> Desliza para pasar página </div>
        ${contenidoCancionHTML}
        ${htmlReseña}
      </div>
    </details>
  `;
}

// Genera y descarga el archivo HTML con la estructura completa tipo Clavelitos
function guardarNuevaCancion(event) {
  event.preventDefault();

  const titulo = document.getElementById('adminTitle').value.trim();
  const badge = document.getElementById('adminBadge').value.trim() || 'Tuna';
  const intro = document.getElementById('adminIntro').value.trim();
  const letraMarcada = document.getElementById('adminLyrics').value;
  const historyText = document.getElementById('adminHistory') ? document.getElementById('adminHistory').value.trim() : '';
  const historyImg = document.getElementById('adminHistoryImg') ? document.getElementById('adminHistoryImg').value.trim() : '';

  const fontSize = document.getElementById('adminFontSize') ? document.getElementById('adminFontSize').value : '0.88rem';

  const contenidoCancionHTML = parsearTextoACancioneroHTML(letraMarcada, fontSize);

  let htmlReseña = '';
  if (historyText || historyImg) {
    const parrafos = historyText.split('\n').filter(p => p.trim() !== '').map(p => `<p>${p}</p>`).join('\n      ');
    htmlReseña = `\n\n    <!-- RESEÑA HISTÓRICA -->\n    <div class="history-text">\n      ${parrafos}${historyImg ? `\n\n      <div class="history-img-container">\n        <img src="${historyImg}" alt="Reseña Histórica ${titulo}">\n      </div>` : ''}\n    </div>`;
  }

  const codigoHTML = `<!-- CANCIÓN: ${titulo.toUpperCase()} -->
<details class="song-accordion">
  <summary class="song-title">
    <span>${titulo}</span>
    <span class="badge">${badge}</span>
  </summary>
  <div class="song-body">
    ${intro ? `<!-- INTRO -->\n    <div class="intro-text">\n      ${intro}\n    </div>\n\n    ` : ''}<!-- Mensaje guía para móviles -->
    <div class="page-indicator-info"> Desliza para pasar página </div>

    <!-- Contenedor exclusivo para las columnas de estrofas -->
    ${contenidoCancionHTML}${htmlReseña}
  </div>
</details>\n\n`;

  const blob = new Blob([codigoHTML], { type: 'text/html;charset=utf-8' });
  const enlace = document.createElement('a');
  enlace.href = URL.createObjectURL(blob);
  enlace.download = `${titulo.toLowerCase().replace(/\s+/g, '-')}-codigo.html`;
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);

  alert('¡Código HTML estructurado y descargado con éxito!');
}

// Función para renderizar o actualizar canciones guardadas en localStorage
function renderizarOActualizarCancion(cancion) {
  const songListContainer = document.querySelector('.song-list');
  if (!songListContainer) return;

  let acc = document.querySelector(`details.song-accordion[data-id="${cancion.id}"]`);
  if (!acc) {
    acc = document.createElement('details');
    acc.className = 'song-accordion';
    acc.dataset.id = cancion.id;
    songListContainer.prepend(acc);
  }

  const contenidoCancionHTML = parsearTextoACancioneroHTML(cancion.letra, cancion.fontSize);

  let htmlReseña = '';
  if (cancion.historyText || cancion.historyImg) {
    const parrafos = cancion.historyText.split('\n').filter(p => p.trim() !== '').map(p => `<p>${p}</p>`).join('\n      ');
    htmlReseña = `\n    <!-- RESEÑA HISTÓRICA -->\n    <div class="history-text">\n      ${parrafos}${cancion.historyImg ? `\n      <div class="history-img-container">\n        <img src="${cancion.historyImg}" alt="Reseña Histórica ${cancion.titulo}">\n      </div>` : ''}\n    </div>`;
  }

  acc.innerHTML = `
    <summary class="song-title">
      <span>${cancion.titulo}</span>
      <span class="badge">${cancion.badge}</span>
    </summary>
    <div class="song-body">
      ${cancion.intro ? `<div class="intro-text">${cancion.intro}</div>` : ''}
      <div class="page-indicator-info"> Desliza para pasar página </div>
      ${contenidoCancionHTML}
      ${htmlReseña}
    </div>
  `;
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

// Inicialización centralizada de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  if (typeof renderROACards === 'function') {
    renderROACards();
  }
  cargarCancionesAlIniciar();
  if (typeof loadQuiz === 'function') {
    loadQuiz();
  }
});

// ==========================================
// CREADOR MASIVO DE BIBLIOTECA DE ACORDES SVG
// ==========================================

let bibliotecaAcordesAdmin = {};
let puntosActualesBuilder = []; // [{string: 1, fret: 1, finger: '1'}, ...]
let trasteSeleccionadoGlobal = 1;

// Inicializar el diapasón interactivo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('interactiveFretboard')) {
    dibujarDiapasonInteractivo(1);
  }
});

function inicializarCreadorAcordes() {
  const container = document.getElementById('interactiveFretboard');
  if (container && container.innerHTML.trim() === "") {
    dibujarDiapasonInteractivo(trasteSeleccionadoGlobal);
  }
}

// Función switchTab integrada con la inicialización del Admin
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

    if (typeof renderROACards === 'function') {
        renderROACards();
    }
    
    // Inicializar el creador si entran a admin
    if (tabId === 'admin') {
        inicializarCreadorAcordes();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function actualizarTrasteInicial() {
  const input = document.getElementById('builderStartFret');
  if (!input) return;
  let val = parseInt(input.value) || 1;
  if (val < 1) val = 1;
  trasteSeleccionadoGlobal = val;
  const label = document.getElementById('labelStartFret');
  if (label) label.textContent = val;
  dibujarDiapasonInteractivo(val);
}

// Dibuja la cuadrícula SVG de 6 cuerdas y 4 trastes con número de traste ajustable
function dibujarDiapasonInteractivo(startFret) {
  const container = document.getElementById('interactiveFretboard');
  if (!container) return;

  let svgHTML = `<svg viewBox="0 0 140 160" class="fretboard-svg w-40 h-48">`;
  
  if (startFret > 1) {
    svgHTML += `<text x="12" y="45" font-size="10" fill="#d4af37" font-weight="bold">${startFret}fr</text>`;
  } else {
    svgHTML += `<line x1="30" y1="30" x2="110" y2="30" stroke="#d4af37" stroke-width="5"/>`;
  }

  // Líneas horizontales (Trastes 1 al 4)
  for (let i = 0; i <= 4; i++) {
    let y = 30 + (i * 25);
    svgHTML += `<line x1="30" y1="${y}" x2="110" y2="${y}" stroke="#888" stroke-width="1.5"/>`;
  }

  // Líneas verticales (Cuerdas 1 a 6)
  const xCuerdas = [110, 94, 78, 62, 46, 30];
  xCuerdas.forEach((x, index) => {
    let numCuerda = index + 1; 
    svgHTML += `<line x1="${x}" y1="30" x2="${x}" y2="130" stroke="#ccc" stroke-width="1"/>`;
    
    for (let f = 1; f <= 4; f++) {
      let yCentro = 30 + ((f - 1) * 25) + 12.5;
      let puntoExistente = puntosActualesBuilder.find(p => p.string === numCuerda && p.fret === f);
      
      if (puntoExistente) {
        svgHTML += `<circle cx="${x}" cy="${yCentro}" r="7" fill="#d4af37" data-string="${numCuerda}" data-fret="${f}" onclick="manejarClicPunto(${numCuerda}, ${f})" style="cursor: pointer;" />`;
        svgHTML += `<text x="${x}" y="${yCentro + 3}" font-size="8" text-anchor="middle" fill="#000" font-weight="bold" pointer-events="none">${puntoExistente.finger}</text>`;
      } else {
        svgHTML += `<circle cx="${x}" cy="${yCentro}" r="6" fill="rgba(255,255,255,0.08)" data-string="${numCuerda}" data-fret="${f}" onclick="manejarClicPunto(${numCuerda}, ${f})" style="cursor: pointer;" />`;
      }
    }
  });

  svgHTML += `</svg>`;
  container.innerHTML = svgHTML;
}

// Asigna o cambia el dedo al hacer clic en una casilla
function manejarClicPunto(cuerda, traste) {
  let index = puntosActualesBuilder.findIndex(p => p.string === cuerda && p.fret === traste);
  
  if (index !== -1) {
    puntosActualesBuilder.splice(index, 1);
  } else {
    let dedo = prompt("¿Qué dedo usas en esta posición? (1: Índice, 2: Medio, 3: Anular, 4: Meñique):", "1");
    if (dedo && ['1','2','3','4'].includes(dedo.trim())) {
      puntosActualesBuilder.push({
        string: cuerda,
        fret: traste,
        finger: dedo.trim()
      });
    }
  }
  dibujarDiapasonInteractivo(trasteSeleccionadoGlobal);
}

function limpiarDiapasonBuilder() {
  puntosActualesBuilder = [];
  dibujarDiapasonInteractivo(trasteSeleccionadoGlobal);
}

// Guarda el acorde actual en la memoria de la sesión
function agregarAcordeALaLista() {
  const nombreInput = document.getElementById('builderChordName');
  const descInput = document.getElementById('builderDescription');
  const startFretInput = document.getElementById('builderStartFret');

  if (!nombreInput) return;

  const nombre = nombreInput.value.trim();
  const desc = descInput ? descInput.value.trim() : '';
  const startFret = parseInt(startFretInput.value) || 1;

  if (!nombre) {
    alert("Por favor, ingresa un nombre para el acorde (ej. Am, C, F#m).");
    return;
  }

  let svgGenerado = generarSVGPersonalizado(startFret, puntosActualesBuilder);

  bibliotecaAcordesAdmin[nombre] = {
    nombre: `${nombre}`,
    startFret: startFret,
    svg: svgGenerado,
    desc: desc || `Posición para ${nombre}`
  };

  actualizarListaVisualAcordes();
  alert(`¡Acorde "${nombre}" guardado con éxito en la biblioteca!`);
  
  nombreInput.value = '';
  if (descInput) descInput.value = '';
  limpiarDiapasonBuilder();
}

function actualizarListaVisualAcordes() {
  const listaContainer = document.getElementById('listaAcordesCreados');
  const counter = document.getElementById('counterAcordes');
  if (!listaContainer || !counter) return;
  
  const keys = Object.keys(bibliotecaAcordesAdmin);
  counter.textContent = keys.length;

  if (keys.length === 0) {
    listaContainer.innerHTML = `<span style="color: #777; font-size: 0.85rem; font-style: italic;">Aún no has guardado ningún acorde.</span>`;
    return;
  }

  let html = '';
  keys.forEach(k => {
    html += `<span class="chord-chip" style="background: rgba(212, 175, 55, 0.2); border: 1px solid #d4af37; color: #d4af37; padding: 4px 10px; border-radius: 20px; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px;">🎵 ${k} <button onclick="eliminarAcordeDeBiblioteca('${k}')" style="background:none; border:none; color:#ff6b6b; cursor:pointer; font-weight:bold;" title="Eliminar">&times;</button></span>`;
  });
  listaContainer.innerHTML = html;
}

function eliminarAcordeDeBiblioteca(nombre) {
  delete bibliotecaAcordesAdmin[nombre];
  actualizarListaVisualAcordes();
}

// Convierte los puntos seleccionados en código SVG limpio con coordenadas sincronizadas
function generarSVGPersonalizado(startFret, puntos) {
  let svg = `<svg viewBox="0 0 140 160" class="w-32 h-36">`;

  if (startFret > 1) {
    svg += `<text x="12" y="45" font-size="10" fill="#d4af37" font-weight="bold">${startFret}fr</text>`;
    svg += `<line x1="30" y1="30" x2="110" y2="30" stroke="#888" stroke-width="1.5"/>`;
  } else {
    svg += `<line x1="30" y1="30" x2="110" y2="30" stroke="#d4af37" stroke-width="5"/>`;
  }

  // Líneas horizontales (Trastes 1 al 4)
  for (let i = 0; i <= 4; i++) {
    let y = 30 + (i * 25);
    svg += `<line x1="30" y1="${y}" x2="110" y2="${y}" stroke="#888" stroke-width="1.5"/>`;
  }

  // Líneas verticales (Cuerdas 1 a 6)
  const xCuerdas = [110, 94, 78, 62, 46, 30];
  xCuerdas.forEach((x) => {
    svg += `<line x1="${x}" y1="30" x2="${x}" y2="130" stroke="#ccc" stroke-width="1"/>`;
  });

  // Mapeo sincronizado con el diapasón interactivo principal
  const mapX = { 1: 110, 2: 94, 3: 78, 4: 62, 5: 46, 6: 30 };

  puntos.forEach(p => {
    let cx = mapX[p.string];
    let cy = 30 + ((p.fret - 1) * 25) + 12.5;
    if (cx !== undefined && !isNaN(cy)) {
      svg += `<circle cx="${cx}" cy="${cy}" r="7" fill="#d4af37" /><text x="${cx}" y="${cy + 3}" font-size="8" text-anchor="middle" fill="#000" font-weight="bold">${p.finger}</text>`;
    }
  });

  svg += `</svg>`;
  return svg;
}

// Descarga un archivo con todo el diccionario empaquetado en JS
function exportarBibliotecaCompletaJS() {
  const keys = Object.keys(bibliotecaAcordesAdmin);
  if (keys.length === 0) {
    alert("Primero debes crear y guardar al menos un acorde.");
    return;
  }

  let contenidoArchivo = `// DICCIONARIO COMPLETO DE ACORDES - TUNA UNIVERSITARIA\n`;
  contenidoArchivo += `const diagramasAcordesSVG = ${JSON.stringify(bibliotecaAcordesAdmin, null, 2)};\n`;

  const blob = new Blob([contenidoArchivo], { type: 'text/javascript;charset=utf-8' });
  const enlace = document.createElement('a');
  enlace.href = URL.createObjectURL(blob);
  enlace.download = `diagramasAcordesSVG.js`;
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);

  alert('¡Biblioteca de acordes empaquetada y descargada con éxito!');
}
