document.addEventListener('DOMContentLoaded', function() {
    const catalogLink = document.querySelector('.catalog-link');
    const catalogMenu = document.querySelector('.catalog');
    
    // Функция для закрытия меню
    function closeCatalogMenu() {
        catalogMenu.classList.remove('active');
        setTimeout(() => {
            catalogMenu.style.display = 'none';
        }, 300); // Должно совпадать с длительностью анимации
    }
    
    // Функция для открытия меню
    function openCatalogMenu() {
        catalogMenu.style.display = 'block';
        setTimeout(() => {
            catalogMenu.classList.add('active');
        }, 10); // Небольшая задержка для активации анимации
    }
    
    // Открытие/закрытие при клике на "Каталог"
    catalogLink.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (catalogMenu.classList.contains('active')) {
            closeCatalogMenu();
        } else {
            openCatalogMenu();
        }
    });
    
    // Закрытие при клике на пункты меню
    const menuItems = document.querySelectorAll('.cat');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            closeCatalogMenu();
        });
    });
    
    // Закрытие при клике в любом месте документа
    document.addEventListener('click', function() {
        closeCatalogMenu();
    });
    
    // Предотвращаем закрытие при клике внутри меню
    catalogMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

    const slider = document.querySelector('.promo-slider');
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    let slideInterval;
    const slideCount = slides.length;

    // Инициализация слайдера
    function initSlider() {
        // Установка правильной ширины контейнера
        sliderContainer.style.width = `${870 * slideCount}px`;
        
        // Показать первый слайд
        goToSlide(0);
        startAutoSlide();
    }

    // Переход к слайду
    function goToSlide(index) {
        currentSlide = (index + slideCount) % slideCount;
        sliderContainer.style.transform = `translateX(-${currentSlide * 870}px)`;
        updateDots();
    }

    // Обновление точек навигации
    function updateDots() {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    // Автопрокрутка
    function startAutoSlide() {
        stopAutoSlide();
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 4000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Обработчики событий
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            goToSlide(index);
            startAutoSlide();
        });
    });

    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    // Инициализация
    initSlider();