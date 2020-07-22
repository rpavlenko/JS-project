// eslint-disable-next-line strict
'use strict';

import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'mdn-polyfills/Node.prototype.append';
import elementClosest from 'element-closest';
elementClosest(window);
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

import selectClub from './modules/selectClub';
import freeVisitPopUp from './modules/freeVisitPopUp';
import callbackForm from './modules/callbackForm';
import showGift from './modules/showGift';

selectClub();
freeVisitPopUp();
callbackForm();
showGift();


