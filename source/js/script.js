// modules
import mobileHeight from "./modules/mobile-height-adjust.js";
import slider from "./modules/slider.js";
import menu from "./modules/menu.js";
import footer from "./modules/footer.js";
import chat from "./modules/chat.js";
import result from "./modules/result.js";
import form from "./modules/form.js";
import social from "./modules/social.js";
import AccentTypographyBuild from "./modules/accent-typography-builder.js";
import FullPageScroll from "./modules/full-page-scroll";
import initSvg from "./modules/svg-loader";

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

initSvg(fullPageScroll.activeScreen);

const introTitle = new AccentTypographyBuild(
    `.intro__title`,
    500,
    `active`,
    `transform`
);
const introDate = new AccentTypographyBuild(
    `.intro__date`,
    300,
    `active`,
    `transform`
);

const storyTitle = new AccentTypographyBuild(
    `.slider__item-title`,
    500,
    `active`,
    `transform`
);

const prizesTitle = new AccentTypographyBuild(
    `.prizes__title`,
    500,
    `active`,
    `transform`
);

const rulesTitle = new AccentTypographyBuild(
    `.rules__title`,
    500,
    `active`,
    `transform`
);

const gameTitle = new AccentTypographyBuild(
    `.game__title`,
    500,
    `active`,
    `transform`
);

setTimeout(() => {
  introTitle.runAnimation();
}, 500);

setTimeout(() => {
  introDate.runAnimation();
}, 1200);

setTimeout(() => {
  storyTitle.runAnimation();
}, 500);

setTimeout(() => {
  prizesTitle.runAnimation();
}, 500);

setTimeout(() => {
  rulesTitle.runAnimation();
}, 500);

setTimeout(() => {
  gameTitle.runAnimation();
}, 500);

window.addEventListener(`load`, () => {
  const body = document.querySelector(`body`);

  body.classList.add(`loaded`);
});
