/*let inertia = 0;
let scrollElement = document.scrollingElement || document.documentElement;
/*const scrollSpeed = 2500; // Задаем фиксированную скорость скролла*/

/*window.addEventListener('wheel', function(e) {
    e.preventDefault(); // Предотвращаем стандартное поведение

    /*inertia += (e.deltaY > 0 ? scrollSpeed : -scrollSpeed); // Скролл вверх или вниз*/
   /*inertia += e.deltaY * 20; // Умножаем на коэффициент для настройки скорости
    console.log(inertia);
    let scroll = function() {
        // Получаем максимальное значение прокрутки
        const maxScroll = scrollElement.scrollHeight - scrollElement.clientHeight;

        if (Math.abs(inertia) > 0.001) {
            // Обновляем scrollTop
            scrollElement.scrollTop += inertia;

            // Плавное затухание инерции
            inertia *= 0.95;

            // Ограничиваем scrollTop в допустимых пределах
            if (scrollElement.scrollTop <= 0 && inertia < 0) {
                inertia = 0; // Обнуляем инерцию при достижении верхней границы
            } else if (scrollElement.scrollTop >= maxScroll && inertia > 0) {
                inertia = 0; // Обнуляем инерцию при достижении нижней границы
            }

            requestAnimationFrame(scroll);
        } else {
            inertia = 0; // Останавливаем инерцию, если она слишком мала
        }
    };

    scroll();
}, { passive: false });*/
