/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/base-helpers';
import PopupManager from './modules/popup-manager';
import BurgerMenu from './modules/burger-menu';
import Tabs from './modules/tabs';
import Accordion from './modules/accordion';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

document.addEventListener("DOMContentLoaded", function() {
	const burgerMenu = document.querySelector(".burger-menu");
	const menu = document.querySelector(".mobile-menu");
	const body = document.body;

	burgerMenu.addEventListener("click", function() {
		burgerMenu.classList.toggle("open");
		menu.classList.toggle("open");
		body.classList.toggle("lock-scroll");
	});

	document.addEventListener("click", function(event) {
		if (!burgerMenu.contains(event.target) && !menu.contains(event.target)) {
			burgerMenu.classList.remove("open");
			menu.classList.remove("open");
			body.classList.remove("lock-scroll");
		}
	});
});

/* document.addEventListener('DOMContentLoaded', () => {
	const scrollBook = document.querySelector('.scroll-book');
	const slideContents = document.querySelectorAll('.slide-content');

	const changeColorOnScroll = () => {
	let scrollBookRect = scrollBook.getBoundingClientRect();
	let maxVisibleHeight = 0;
	let activeSlideContent = null;

	slideContents.forEach((slideContent) => {
		let slideRect = slideContent.getBoundingClientRect();

		let visibleHeight = Math.min(slideRect.bottom, scrollBookRect.bottom) - Math.max(slideRect.top, scrollBookRect.top);

		if (visibleHeight > maxVisibleHeight) {
		maxVisibleHeight = visibleHeight;
		activeSlideContent = slideContent;
		}
	});

	// Дополнительная проверка для последнего блока
	if (
		scrollBook.scrollTop + scrollBook.clientHeight >= scrollBook.scrollHeight &&
		slideContents.length > 0
	) {
		activeSlideContent = slideContents[slideContents.length - 1];
	}

	slideContents.forEach((slideContent) => {
		if (slideContent === activeSlideContent) {
		slideContent.style.backgroundColor = '#f97247'; // Цвет для активного блока
		} else {
		slideContent.style.backgroundColor = '#2d2d2d'; // Цвет для неактивных блоков
		}
	});
	};

	scrollBook.addEventListener('scroll', changeColorOnScroll);
	changeColorOnScroll(); // Первоначальная проверка при загрузке страницы
}); */