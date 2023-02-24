;(function() {
const ProjectsList = [{
    projectName: 'Барбершоп',
    projectDescription: '\u2022 HTML \u2022 Less \u2022 JS \u2022 Адаптивная вёрстка \r\n \u2022 Figma',
    projectExtraDescription: `В этом проекте я произвёл вёрстку по макету из Figma, предоставленному
    обучающей компанией "HTML Academy". Сайт демонстрирует навыки создания адаптивной сетки
    и внедрения JS для создания интерактивных элементов.
    Стили спроектированы с помощью препроцессора Less и для продакшена скомпилированы в CSS.`,
    imgSrc: 'source/barbershop.jpg',
    linkOpen: 'https://dvzhuk.github.io/barbershop_D/',
    linkGitHub: 'https://github.com/DVZhuk/barbershop_D',
}, {
    projectName: 'Конструктор сайтов',
    projectDescription: '\u2022 HTML \u2022 CSS \u2022 React',
    projectExtraDescription: `По вёрстке и стилям, предоставленным обучающей компанией: "HTML Academy",
    разработал приложение на React. Проект демонстрирует навыки владения фреймворком
    и взаимодейтсвия со средой NodeJS.`,
    imgSrc: 'source/constructor.jpg',
    linkOpen: 'https://dvzhuk.github.io/constructor_react/',
    linkGitHub: 'https://github.com/DVZhuk/constructor_react',
}, {
    projectName: 'Графический редактор',
    projectDescription: '\u2022 HTML \u2022 CSS \u2022 JS \u2022 Адаптивная вёрстка',
    projectExtraDescription: `Этот проект - полностью вручную свёрстанное 
    и запрограммированное приложение,
    разработанное на JS. Демонстрирует продвинутые знания
    языка и его взаимодейтсвие с элементами DOM-дерева. Приложение полностью адаптивно
    под разные устройства.`,
    imgSrc: 'source/draw-editor.jpg',
    linkOpen: 'https://dvzhuk.github.io/draw-editor/',
    linkGitHub: 'https://github.com/DVZhuk/draw-editor',
}, {
    projectName: 'Свайпер',
    projectDescription: '\u2022 HTML \u2022 CSS \u2022 JS \u2022 Адаптивная вёрстка \r\n \u2022 Применение концепции ООП',
    projectExtraDescription: `Наглядная демонстрация умения создавать на JS
    интерактивные элементы для сайтов и приложений. При создании свайпера была использована
    концепция ООП для лёгкого переиспользования данного компонента.`,
    imgSrc: 'source/swiper.jpg',
    linkOpen: 'https://dvzhuk.github.io/swiper/',
    linkGitHub: 'https://github.com/DVZhuk/swiper',
}, {
    projectName: 'Визуализация алгоритмов сортировки',
    projectDescription: '\u2022 HTML \u2022 CSS \u2022 JS \u2022 Адаптивная вёрстка',
    projectExtraDescription: `Визуализация была создана для учёбно-исследовательской работы
    в институте. Демонстрирует два самых простейших алгоритма сортировки и умение работать 
    с ассинхронными функциями SetTimeout() и SetInterval().`,
    imgSrc: 'source/sort.jpg',
    linkOpen: 'https://dvzhuk.github.io/sorting_algorithms/',
    linkGitHub: 'https://github.com/DVZhuk/sorting_algorithms',
}];

const elemsProjectName = document.querySelectorAll('.project-title');
const elemsProjectDescription = document.querySelectorAll('.project-description');
const elemsImgSrc = document.querySelectorAll('.project-img');
const elemsLinkOpen = document.querySelectorAll('.button--open');
const elemsLinkGitHub = document.querySelectorAll('.button--git');

const extraButtons = document.querySelectorAll('.button--extra');
const popup = document.querySelector('.popup-wrapper');
const elemProjectNameExtra = document.querySelector('.project-title-extra');
const elemProjectExtraDescription = document.querySelector('.project-extra-description');

ProjectsList.forEach((project, index) => {
    elemsProjectName[index].textContent = project.projectName;
    elemsProjectDescription[index].textContent = project.projectDescription;
    elemsImgSrc[index].src = project.imgSrc;
    elemsLinkOpen[index].href = project.linkOpen;
    elemsLinkGitHub[index].href = project.linkGitHub;

    extraButtons[index].addEventListener('click', function() {
        elemProjectNameExtra.textContent = project.projectName;
        elemProjectExtraDescription.textContent = project.projectExtraDescription;
        popup.classList.toggle('popup-wrapper--open');
    });
});
})();

