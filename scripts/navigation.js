
// Бургер-меню
document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.querySelector('.burger_button');
    const burgerContent = document.querySelector('.burger_content');
    
    burgerButton.addEventListener('click', function(e) {
        e.stopPropagation();
        burgerContent.classList.toggle('show');
    });
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', function() {
        burgerContent.classList.remove('show');
    });
    
    // Предотвращаем закрытие меню при клике внутри него
    burgerContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Переключение темы
    const themeButtons = document.querySelectorAll('.theme_btn');
    
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            burgerContent.classList.remove('show'); // Закрываем меню после выбора темы
        });
    });
    
    // Загрузка сохраненной темы
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
});
