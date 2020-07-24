// eslint-disable-next-line strict
'use strict';

const freeVisitPopUp = document.getElementById('free_visit_form'),
  callbackForm = document.getElementById('callback_form'),
  freeVisitPopUpButton = document.querySelector('.open-popup'),
  callbackFormpButton = document.querySelector('.callback-btn');


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
import modalOpen from './modules/modalOpen';
import showGift from './modules/showGift';
import sliders from './modules/sliders';
import sendForm from './modules/sendForm';
import maskPhone from './modules/maskPhone';

selectClub();
modalOpen(freeVisitPopUp, freeVisitPopUpButton);
modalOpen(callbackForm, callbackFormpButton);
showGift();
sliders();
maskPhone('#phone');
maskPhone('#callback_form-phone');
maskPhone('#callback_form1-phone');
maskPhone('#callback_form2-phone');
maskPhone('#callback_footer_form-phone');
sendForm();




