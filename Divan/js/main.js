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

document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.new-slider-track');
    const slides = document.querySelectorAll('.new-slide');
    const prevBtn = document.querySelector('.slider-arrow-left');
    const nextBtn = document.querySelector('.slider-arrow-right');
    
    // Клонируем слайды для бесконечной прокрутки
    const firstClone = slides[0].cloneNode(true);
    const secondClone = slides[1].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    const preLastClone = slides[slides.length - 2].cloneNode(true);
    
    sliderTrack.appendChild(firstClone);
    sliderTrack.appendChild(secondClone);
    sliderTrack.insertBefore(lastClone, slides[0]);
    sliderTrack.insertBefore(preLastClone, slides[0]);
    
    const allSlides = document.querySelectorAll('.new-slide');
    let currentIndex = 2; // Начинаем с первого оригинального слайда
    let isAnimating = false;
    
    // Обновляем позицию слайдера
    function updateSlider() {
        sliderTrack.style.transform = `translateX(-${currentIndex * 33.333}%)`;
        
        // Обновляем активные слайды
        allSlides.forEach(slide => slide.classList.remove('active'));
        allSlides[currentIndex + 1].classList.add('active');
    }
    
    // Переход к следующему слайду
    function goNext() {
        if (isAnimating) return;
        isAnimating = true;
        
        currentIndex++;
        sliderTrack.style.transition = 'transform 0.5s ease';
        updateSlider();
        
    }
    
    // Переход к предыдущему слайду
    function goPrev() {
        if (isAnimating) return;
        isAnimating = true;
        
        currentIndex--;
        sliderTrack.style.transition = 'transform 0.5s ease';
        updateSlider();
        
    
    }
    
    // Обработчики для кнопок
    nextBtn.addEventListener('click', goNext);
    prevBtn.addEventListener('click', goPrev);
    

    
    // Инициализация
    updateSlider();
    
    // Обработка окончания анимации
    sliderTrack.addEventListener('transitionend', () => {
        isAnimating = false;
    });

    
    
    // Адаптация к изменению размера окна
    window.addEventListener('resize', () => {
        sliderTrack.style.transition = 'none';
        updateSlider();
        setTimeout(() => {
            sliderTrack.style.transition = 'transform 0.5s ease';
        }, 50);
    });
});

// Latest Slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.Latest-slaider');
    const container = document.querySelector('.Latest-slider-container');
    const slides = document.querySelectorAll('.Latest-slide');
    const prevBtn = document.querySelector('.Latest-slider-arrow-left');
    const nextBtn = document.querySelector('.Latest-slider-arrow-right');
    
    let currentPosition = 0;
    const slideWidth = slides[0].offsetWidth;
    const visibleSlides = 4;
    const totalSlides = slides.length;
    
    // Проверяем, нужно ли показывать стрелки
    function checkArrows() {
        prevBtn.style.display = currentPosition === 0 ? 'none' : 'flex';
        nextBtn.style.display = currentPosition <= -(totalSlides - visibleSlides) * slideWidth ? 'none' : 'flex';
    }
    
    // Перемещение слайдера
    function moveSlider() {
        container.style.transform = `translateX(${currentPosition}px)`;
        checkArrows();
    }
    
    // Следующие слайды
    nextBtn.addEventListener('click', function() {
        if (currentPosition > -(totalSlides - visibleSlides) * slideWidth) {
            currentPosition -= slideWidth;
            moveSlider();
        }
    });
    
    // Предыдущие слайды
    prevBtn.addEventListener('click', function() {
        if (currentPosition < 0) {
            currentPosition += slideWidth;
            moveSlider();
        }
    });
    
    // Инициализация
    checkArrows();
    
    // Адаптация к изменению размера окна
    window.addEventListener('resize', function() {
        currentPosition = 0;
        moveSlider();
    });
});