// Long file - just collection of connects finished components
// Recommend create separately file in components folder and connect all in it

// Determining the operating system on mobile
import { mobileCheck } from "./functions/mobile-check";
console.log(mobileCheck())

// Determining screen width
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Function throttling (for resizing, input, scrolling, etc.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Fix fullscreen blocks
// import './functions/fix-fullheight';

// Implementation of the burger menu
// import { burger } from './functions/burger';

// Implementation stop scroll (don't forget call function)
// import { disableScroll } from './functions/disable-scroll';

// Implementation of the scroll enable (don't forget call function)
// import { enableScroll } from './functions/disable-scroll';

// Modal window implementation
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Tab implementation
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Get site header height (don't forget call function)
// import { getHeaderHeight } from './functions/header-height';

// Connecting the custom scroll plugin
// import 'simplebar';

// Plugin for positioning tooltips
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Connecting a swiper
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Connecting animations on scroll
// import AOS from 'aos';
// AOS.init();

// Enable block parallax on scroll
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Connecting smooth scrolling to anchors
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Connecting swipe events on mobile
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Send successful, enter something...');
// };

// validateForms('.form-1', rules1, afterForm);
