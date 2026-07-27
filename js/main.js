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

  // 4. Activar el botón correspondiente
  event.currentTarget.classList.add('active');

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
  const q = questions[currentQ];
  document.getElementById('quizQuestion').textContent = q.question;
  const optionsDiv = document.getElementById('quizOptions');
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
  if (selectedIdx === questions[currentQ].correct) {
    resultDiv.innerHTML = '<p style="color:#2ecc71; margin-top:10px;">¡Correcto! 🎉</p>';
  } else {
    resultDiv.innerHTML = '<p style="color:#e74c3c; margin-top:10px;">Incorrecto, ¡vuelve a repasar la tradición! 😅</p>';
  }

  setTimeout(() => {
    currentQ = (currentQ + 1) % questions.length;
    resultDiv.innerHTML = '';
    loadQuiz();
  }, 1800);
}

// Cargar la primera pregunta al abrir
document.addEventListener('DOMContentLoaded', loadQuiz);
