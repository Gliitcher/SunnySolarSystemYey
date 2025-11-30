// Глобальные переменные
var click = false;
var starInterval;
var mouseX = 0;
var mouseY = 0;

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Загружаем состояние из localStorage
    loadButtonState();
    
    // Отслеживаем изменения в других вкладках
    window.addEventListener('storage', function(e) {
        if (e.key === 'starButtonState') {
            updateButtonState(JSON.parse(e.newValue));
        }
    });
});

// Отслеживаем движение мыши для получения координат
document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function toggleColor(button) {
    click = !click;
    
    if (click) {
        // Меняем на синий цвет
        button.style.backgroundColor = '#a9e0eeff';
        button.style.borderColor = '#c9e7e2ff';
        
        // Запускаем создание звёздочек
        starInterval = setInterval(function() {
            createStar();
        }, 45);
    } else {
        // Возвращаем исходный цвет
        button.style.backgroundColor = '';
        button.style.borderColor = '';
        
        // Останавливаем создание звёздочек
        clearInterval(starInterval);
    }
    
    // Сохраняем состояние в localStorage
    saveButtonState();
    
    // Синхронизируем все кнопки на текущей странице
    syncAllButtons();
}

function saveButtonState() {
    const state = {
        active: click,
        timestamp: Date.now()
    };
    localStorage.setItem('starButtonState', JSON.stringify(state));
}

function loadButtonState() {
    const savedState = localStorage.getItem('starButtonState');
    if (savedState) {
        const state = JSON.parse(savedState);
        updateButtonState(state);
    }
}

function updateButtonState(state) {
    click = state.active;
    syncAllButtons();
    
    if (click && !starInterval) {
        // Если кнопка активна, запускаем звёздочки
        starInterval = setInterval(function() {
            createStar();
        }, 45);
    } else if (!click && starInterval) {
        // Если кнопка неактивна, останавливаем звёздочки
        clearInterval(starInterval);
        starInterval = null;
    }
}

function syncAllButtons() {
    // Находим все кнопки звёздочек на странице
    const starButtons = document.querySelectorAll('.like_button, [onclick*="toggleColor"]');
    
    starButtons.forEach(button => {
        if (click) {
            button.style.backgroundColor = '#a9e0eeff';
            button.style.borderColor = '#c9e7e2ff';
        } else {
            button.style.backgroundColor = '';
            button.style.borderColor = '';
        }
    });
}

function createStar() {
    const star = document.createElement('div');
    star.innerHTML = '★';
    star.className = 'falling_star';
    star.style.left = mouseX + 'px';
    star.style.top = mouseY + 'px';
    
    // Случайный размер от 15px до 25px
    const size = 15 + Math.random() * 10;
    star.style.fontSize = size + 'px';
    
    // Случайный угол поворота
    star.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    document.body.appendChild(star);
    
    // Удаляем звезду после анимации
    setTimeout(() => {
        if (star.parentNode) {
            star.parentNode.removeChild(star);
        }
    }, 200);
}

// Очистка при закрытии страницы (опционально)
window.addEventListener('beforeunload', function() {
    if (!click) {
        localStorage.removeItem('starButtonState');
    }
});