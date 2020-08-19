import {forEachPolyfill} from './utils/polyfill-foreach';
import {initIe11Download} from './utils/init-ie11-download';
import {programDay} from './modules/program-day';
import {bookBtn} from './modules/book-btn';

// Utils
// ---------------------------------
forEachPolyfill();
initIe11Download();


// Modules
// ---------------------------------
programDay();
bookBtn();
