/*let inertia = 0;
let scrollElement = document.scrollingElement || document.documentElement;
const scrollSpeed = 50;  // Задаем фиксированную скорость скролла
        window.addEventListener('wheel', function(e,) {
            e.preventDefault(); // Предотвращаем стандартное поведение
            inertia += (e.deltaY > 0 ? scrollSpeed : -scrollSpeed);  // Скролл вверх или вниз
            let scroll = function() {
                if (Math.abs(inertia) > 0.1) {
                    scrollElement.scrollTop +=(e.deltaY > 0 ? 1 : -1) *10;
                    setTimeout(function() {inertia *=  0.8;}, 300);
                    //const myTimeout = setTimeout(myGreeting, 500);
                    //function myGreeting() {
                    //inertia *=  0.5; }// Плавное затухание инерции
                    requestAnimationFrame(scroll);
                } else {
                    inertia = 0; // Останавливаем инерцию
                }
                
            };;
            scroll();
        }, { passive: false });*/

        
/*        const aLinks = document.querySelectorAll('[data-link]');
        const topOffset = document.querySelector('.container__GridHeader').offsetHeight;
        let currentActiveElement = null; // Переменная для хранения текущего активного элемента
        
        aLinks.forEach(tabLinks);
        
        function tabLinks(item) {
            item.addEventListener('click', function(event) {
                event.preventDefault();
        
                // Находим целевой элемент, на который нужно скроллить
                let tabId = item.getAttribute('data-link');
                let currentLink = document.querySelector(tabId);
        
                // Вычисляем позицию целевого элемента с учетом смещения
                let elementPosition = currentLink.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - topOffset;
        
                // Определяем начальную позицию для вычисления расстояния
                let startPosition = currentActiveElement 
                    ? currentActiveElement.getBoundingClientRect().top + window.pageYOffset 
                    : window.pageYOffset;
        
                // Рассчитываем расстояние от текущего активного элемента до нового элемента
                let distance = Math.abs(offsetPosition - startPosition);
        
                // Устанавливаем разное время скролла на основе расстояния
                let scrollDuration;
                if (distance < 1000) {
                    scrollDuration = 5;
                } else if (distance < 2000) {
                    scrollDuration = 6;
                } else if (distance < 4000) {
                    scrollDuration = 7;
                } else {
                    scrollDuration = 18;
                }
        
                console.log("Расстояние:", distance);
                console.log("Текущий офсет:", offsetPosition);
                console.log("Начальная позиция:", startPosition);
        
                // Используем подход из функции myMove для плавного скролла
                let pos = startPosition;
                let id = 0;
                clearInterval(id);
                id = setInterval(frame, 1);
                console.log("Time:", scrollDuration);
                console.log("Условие:", Math.abs(pos - offsetPosition));
                function frame() {
                    if (Math.abs(pos - offsetPosition) < 1) {
                        clearInterval(id);
                        currentActiveElement = currentLink; // Обновляем текущий активный элемент
                        console.log("Остановка функции");
                    } else {
                        // Плавное приближение к целевой позиции с эффектом ease-out
                        //pos += (offsetPosition - pos)*.00195; // Двигаемся на 10% ближе к цели
                       // pos++;
                       pos += (offsetPosition > pos ? 1 : -1) * Math.min(Math.abs(offsetPosition - pos) * 0.1, 10);
                        console.log('Позиция рили:', pos);
                        window.scrollTo(0, pos);
                    }
                }
                
                
            });
        }
        */


