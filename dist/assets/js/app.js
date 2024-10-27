/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/file.js":
/*!*******************************!*\
  !*** ./src/assets/js/file.js ***!
  \*******************************/
/***/ (function() {

eval("let inertia = 0;\r\nlet scrollElement = document.scrollingElement || document.documentElement;\r\n/*const scrollSpeed = 2500; // Задаем фиксированную скорость скролла*/\r\n\r\nwindow.addEventListener('wheel', function(e) {\r\n    e.preventDefault(); // Предотвращаем стандартное поведение\r\n\r\n    /*inertia += (e.deltaY > 0 ? scrollSpeed : -scrollSpeed); // Скролл вверх или вниз*/\r\n    inertia += e.deltaY * 20; // Умножаем на коэффициент для настройки скорости\r\n    console.log(inertia);\r\n    let scroll = function() {\r\n        // Получаем максимальное значение прокрутки\r\n        const maxScroll = scrollElement.scrollHeight - scrollElement.clientHeight;\r\n\r\n        if (Math.abs(inertia) > 0.001) {\r\n            // Обновляем scrollTop\r\n            scrollElement.scrollTop += inertia;\r\n\r\n            // Плавное затухание инерции\r\n            inertia *= 0.95;\r\n\r\n            // Ограничиваем scrollTop в допустимых пределах\r\n            if (scrollElement.scrollTop <= 0 && inertia < 0) {\r\n                inertia = 0; // Обнуляем инерцию при достижении верхней границы\r\n            } else if (scrollElement.scrollTop >= maxScroll && inertia > 0) {\r\n                inertia = 0; // Обнуляем инерцию при достижении нижней границы\r\n            }\r\n\r\n            requestAnimationFrame(scroll);\r\n        } else {\r\n            inertia = 0; // Останавливаем инерцию, если она слишком мала\r\n        }\r\n    };\r\n\r\n    scroll();\r\n}, { passive: false });\r\n\n\n//# sourceURL=webpack://RomanFadeev/./src/assets/js/file.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("/*let inertia = 0;\r\nlet scrollElement = document.scrollingElement || document.documentElement;\r\nconst scrollSpeed = 5050;  // Задаем фиксированную скорость скролла\r\n\r\n        window.addEventListener('wheel', function(e) {\r\n            e.preventDefault(); // Предотвращаем стандартное поведение\r\n\r\n            \r\n            inertia += (e.deltaY > 0 ? scrollSpeed : -scrollSpeed);  // Скролл вверх или вниз\r\n\r\n            let scroll = function() {\r\n                if (Math.abs(inertia) > 0.1) {\r\n                    scrollElement.scrollTop += inertia;\r\n                    inertia *= 0.85; // Плавное затухание инерции\r\n                    requestAnimationFrame(scroll);\r\n                } else {\r\n                    inertia = 0; // Останавливаем инерцию\r\n                }\r\n            };\r\n\r\n            scroll();\r\n        }, { passive: false });*/\n\n//# sourceURL=webpack://RomanFadeev/./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/scroll.js":
/*!*********************************!*\
  !*** ./src/assets/js/scroll.js ***!
  \*********************************/
/***/ (function() {

eval("/*const aLinks = document.querySelectorAll('[data-link]');\r\n\r\naLinks.forEach (tabLinks);\r\nfunction tabLinks(item) {\r\n    item.addEventListener('click',function(event) {\r\n    event.preventDefault();\r\n    let thisItem = item;\r\n    let tabId = thisItem.getAttribute('data-link');\r\n    let currentLink = document.querySelector(tabId);\r\n    let elementPosition = currentLink.getBoundingClientRect().top;\r\n    let topOffset = document.querySelector('.container__GridHeader').offsetHeight;\r\n    const offsetPosition = elementPosition - topOffset;\r\n        window.scrollBy({\r\n            top: offsetPosition,\r\n            behavior: 'smooth'\r\n        });\r\n    console.log(thisItem);\r\n    console.log(tabId);\r\n    console.log(currentLink);\r\n    console.log(elementPosition);\r\n    console.log(topOffset);\r\n    console.log(offsetPosition);\r\n    });\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*console.log(aLinks);\r\nconsole.log(aLinks.length);*/\r\n\n\n//# sourceURL=webpack://RomanFadeev/./src/assets/js/scroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/file.js"]();
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/scroll.js"]();
/******/ 	
/******/ })()
;