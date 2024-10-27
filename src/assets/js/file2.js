/*let inertia = 0;
let scrollElement = document.scrollingElement || document.documentElement;
const scrollSpeed = 5050;  // Задаем фиксированную скорость скролла

        window.addEventListener('wheel', function(e) {
            e.preventDefault(); // Предотвращаем стандартное поведение

            
            inertia += (e.deltaY > 0 ? scrollSpeed : -scrollSpeed);  // Скролл вверх или вниз

            let scroll = function() {
                if (Math.abs(inertia) > 0.1) {
                    scrollElement.scrollTop += inertia;
                    inertia *= 0.85; // Плавное затухание инерции
                    requestAnimationFrame(scroll);
                } else {
                    inertia = 0; // Останавливаем инерцию
                }
            };

            scroll();
        }, { passive: false });*/