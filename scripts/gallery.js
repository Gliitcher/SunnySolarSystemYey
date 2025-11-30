document.addEventListener('DOMContentLoaded', function() {
    // Массив данных об изображениях
    const images = [
        {
            id: 1,
            mainImage: 'gallery/Ustroystv.png',
            thumbnail: 'gallery/Ustroystv.png',
            caption: 'Устройство солнечной системы'
        },
        {
            id: 2,
            mainImage: 'gallery/sun.png',
            thumbnail: 'gallery/sun.png',
            caption: 'Солнце'
        },
        {
            id: 3,
            mainImage: 'gallery/mercury.png',
            thumbnail: 'gallery/mercury.png',
            caption: 'Поверхность Меркурия'
        },
        {
            id: 4,
            mainImage: 'gallery/VenusSurface.png',
            thumbnail: 'gallery/VenusSurface.png',
            caption: 'Поверхность Венеры'
        },
        {
            id: 5,
            mainImage: 'gallery/earth.png',
            thumbnail: 'gallery/earth.png',
            caption: 'Земля из космоса'
        },
        {
            id: 6,
            mainImage: 'gallery/mars.png',
            thumbnail: 'gallery/mars.png',
            caption: 'Поверхность Марса'
        },
        {
            id: 7,
            mainImage: 'gallery/coiper.png',
            thumbnail: 'gallery/coiper.png',
            caption: 'Пояс Койпера'
        },
        {
            id: 8,
            mainImage: 'gallery/upi.png',
            thumbnail: 'gallery/upi.png',
            caption: 'Юпитер'
        },
        {
            id: 9,
            mainImage: 'gallery/saturn.png',
            thumbnail: 'gallery/saturn.png',
            caption: 'Сатурн'
        },
        {
            id: 10,
            mainImage: 'gallery/uran.png',
            thumbnail: 'gallery/uran.png',
            caption: 'Уран'
        },
        {
            id: 11,
            mainImage: 'gallery/neptune.png',
            thumbnail: 'gallery/neptune.png',
            caption: 'Нептун'
        },
        {
            id: 12,
            mainImage: 'gallery/plutone.png',
            thumbnail: 'gallery/plutone.png',
            caption: 'Плутон'
        },
        {
            id: 13,
            mainImage: 'gallery/beaty1.png',
            thumbnail: 'gallery/beaty1.png',
            caption: 'Красивая картина'
        },
        {
            id: 14,
            mainImage: 'gallery/beaty2.png',
            thumbnail: 'gallery/beaty2.png',
            caption: 'Эстетичная картина'
        },
        {
            id: 15,
            mainImage: 'gallery/beaty3.png',
            thumbnail: 'gallery/beaty3.png',
            caption: 'Прекрасная картина!'
        }
    ];
    
    const mainImage = document.getElementById('mainImage');
    const imageCaption = document.getElementById('imageCaption');
    const thumbnailsContainer = document.getElementById('thumbnailsContainer');
    
    // Создание миниатюр
    images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail' + (index === 0 ? ' active' : '');
        thumbnail.dataset.id = image.id;
        
        const img = document.createElement('img');
        img.src = image.thumbnail;
        img.alt = image.caption;
        
        thumbnail.appendChild(img);
        thumbnailsContainer.appendChild(thumbnail);
        
        // Обработчик клика по миниатюре
        thumbnail.addEventListener('click', function() {
            // Обновляем основное изображение и подпись
            mainImage.src = image.mainImage;
            mainImage.alt = image.caption;
            imageCaption.textContent = image.caption;
            
            // Убираем класс active у всех миниатюр
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.classList.remove('active');
            });
            
            // Добавляем класс active к текущей миниатюре
            this.classList.add('active');
        });
    });
});