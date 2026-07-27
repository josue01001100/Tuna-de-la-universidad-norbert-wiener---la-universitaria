// Función para cambiar de sección/pestaña
function switchTab(tabId) {
  // 1. Ocultar todas las secciones
  const allTabs = document.querySelectorAll('.tab-content');
  allTabs.forEach(tab => tab.classList.remove('active'));

  // 2. Desactivar todos los botones
  const allButtons = document.querySelectorAll('.nav-btn');
  allButtons.forEach(btn => btn.classList.remove('active'));

  // 3. Mostrar la pestaña seleccionada
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }

  // 4. Activar el botón correspondiente (si existe un evento activo)
  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add('active');
  } else {
    // Si se llama por función directa (ej. desde una card de inicio)
    const btnToActive = document.querySelector(`.nav-btn[onclick*="${tabId}"]`);
    if (btnToActive) btnToActive.classList.add('active');
  }

  // Desplazar suavemente arriba
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filtro de búsqueda para el cancionero
function filterSongs() {
  const input = document.getElementById('songSearch').value.toLowerCase();
  const songs = document.querySelectorAll('.song-accordion');

  songs.forEach(song => {
    const title = song.querySelector('.song-title').textContent.toLowerCase();
    if (title.includes(input)) {
      song.style.display = 'block';
    } else {
      song.style.display = 'none';
    }
  });
}

// Filtro de búsqueda para la tabla ROA (Real Orden de Ascenso)
function filterROA() {
  const input = document.getElementById('roaSearch');
  if (!input) return;
  
  const filter = input.value.toLowerCase();
  const table = document.getElementById('roaTable');
  if (!table) return;

  const rows = table.querySelectorAll('tbody tr');

  rows.forEach(row => {
    const textContent = row.textContent.toLowerCase();
    if (textContent.includes(filter)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// Minijuego Trivia básico
const questions = [
  {
    question: "¿En qué año se fundó la Tuna de la Universidad Norbert Wiener?",
    options: ["2010 (MMX)", "2015 (MMXV)", "2018 (MMXVIII)", "2020 (MMXX)"],
    correct: 1
  },
  {
    question: "¿Qué color de beca caracteriza a nuestra Tuna?",
    options: ["Roja", "Verde", "Morada", "Azul"],
    correct: 2
  },
  {
    question: "¿Cuál es el primer paso en la Real Orden de Ascenso?",
    options: ["Tuno de Beca", "Pardillo", "Aspirante", "Veterano"],
    correct: 2
  }
];

let currentQ = 0;

function loadQuiz() {
  const quizQuestion = document.getElementById('quizQuestion');
  const optionsDiv = document.getElementById('quizOptions');

  if (!quizQuestion || !optionsDiv) return;

  const q = questions[currentQ];
  quizQuestion.textContent = q.question;
  optionsDiv.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(idx);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selectedIdx) {
  const resultDiv = document.getElementById('quizResult');
  if (!resultDiv) return;

  if (selectedIdx === questions[currentQ].correct) {
    resultDiv.innerHTML = '<p style="color:#2ecc71; margin-top:10px; font-weight:bold;">¡Correcto! 🎉</p>';
  } else {
    resultDiv.innerHTML = '<p style="color:#e74c3c; margin-top:10px; font-weight:bold;">Incorrecto, ¡vuelve a repasar la tradición! 😅</p>';
  }

  setTimeout(() => {
    currentQ = (currentQ + 1) % questions.length;
    resultDiv.innerHTML = '';
    loadQuiz();
  }, 1800);
}

// Cargar componentes al abrir el sitio web
document.addEventListener('DOMContentLoaded', () => {
  loadQuiz();
});
