document.addEventListener('DOMContentLoaded', function() {
    // Массив данных о космических телах
    const spaceObjects = [
        {
            id: 1,
            name: "Плутон",
            mainImage: "img/pluto.png",
            thumbnail: "img/pluto.png",
            description: "Плутон — крупнейшая известная карликовая планета Солнечной системы. Первоначально считался девятой планетой, но в 2006 году был переклассифицирован в карликовую планету. Имеет пять спутников, крупнейший из которых — Харон."
        },
        {
            id: 2,
            name: "Пояс астероидов",
            mainImage: "img/asteroids.png",
            thumbnail: "img/asteroids.png",
            description: "Пояс астероидов — это область между Марсом и Юпитером, в которой находится большинство астероидов Солнечной системы и которая служит границей между внутренними каменистыми планетами и внешними планетами-гигантами."
        },
        {
            id: 3,
            name: "Пояс Койпера",
            mainImage: "img/koiper.png",
            thumbnail: "img/koiper.png",
            description: "Область Солнечной системы за орбитой Нептуна, населенная небольшими объектами типа астероидов и ядер комет."
        },
        {
            id: 4,
            name: "Комета",
            mainImage: "img/commet.png",
            thumbnail: "img/commet.png",
            description: "Ледяное небесное тело, состоящее из пыли, льда и замёрзших газов. Вращается вокруг Солнца по вытянутым орбитам, при приближении к Солнцу лёд и газы испаряются, образуя хвост."
        },
        {
            id: 5,
            name: "Метеорит",
            mainImage: "img/meteorite.png",
            thumbnail: "img/meteorite.png",
            description: "Твёрдое космическое тело, состоящее из камня или железа."
        },
        {
            id: 6,
            name: "Облако Оорта",
            mainImage: "img/oort.png",
            thumbnail: "img/oort.png",
            description: "Огромный «пузырь», состоящий изо льда и пыли и окружающий Солнечную Систему."
        }
    ];

    const otMainImage = document.getElementById('otMainImage');
    const otImageCaption = document.getElementById('otImageCaption');
    const otDescription = document.querySelector('.other_object:last-child p');
    const otThumbnailsContainer = document.getElementById('otThumbnailsContainer');

    // Создание миниатюр с подписями
    function createThumbnails() {
        spaceObjects.forEach((object, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'other_thumbnail' + (index === 0 ? ' active' : '');
            thumbnail.dataset.id = object.id;
            
            const img = document.createElement('img');
            img.src = object.thumbnail;
            img.alt = object.name;
            
            const content = document.createElement('div');
            content.className = 'other_thumbnail_content';
            
            const title = document.createElement('div');
            title.className = 'other_thumbnail_title';
            title.textContent = object.name;
            
            const desc = document.createElement('div');
            desc.className = 'other_thumbnail_desc';
            desc.textContent = object.description.substring(0, 60) + '...';
            
            content.appendChild(title);
            content.appendChild(desc);
            
            thumbnail.appendChild(img);
            thumbnail.appendChild(title);
            otThumbnailsContainer.appendChild(thumbnail);
            
            // Обработчик клика по миниатюре
            thumbnail.addEventListener('click', function() {
                updateMainContent(object);
                setActiveThumbnail(this);
            });
        });
    }

    // Обновление основного контента
    function updateMainContent(object) {
        otMainImage.src = object.mainImage;
        otMainImage.alt = object.name;
        otImageCaption.textContent = object.name;
        otDescription.textContent = object.description;
    }

    // Установка активной миниатюры
    function setActiveThumbnail(thumbnail) {
        // Убираем класс active у всех миниатюр
        document.querySelectorAll('.other_thumbnail').forEach(thumb => {
            thumb.classList.remove('active');
        });
        
        // Добавляем класс active к текущей миниатюре
        thumbnail.classList.add('active');
        
        // Прокручиваем к активной миниатюре
        thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Инициализация
    function initGallery() {
        createThumbnails();
        
        // Устанавливаем первое космическое тело как активное
        if (spaceObjects.length > 0) {
            updateMainContent(spaceObjects[0]);
        }
    }

    // Запускаем инициализацию
    initGallery();
});