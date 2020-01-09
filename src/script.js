import {calc} from './modules/calc.js';
import {form} from './modules/form.js';
import {slider} from './modules/slider.js';
import {tabs} from './modules/tabs.js';
import {timer} from './modules/timer.js';
import {modal} from './modules/modal.js';
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    // let calc = require('./parts/calc.js'),
    //     form = require('./parts/form'),
    //     slider = require('./parts/slider'),
    //     tabs = require('./parts/tabs.js'),
    //     timer = require('./parts/timer'),
    //     modal = require('./parts/modal');


    calc();
    form();
    slider();
    tabs();
    timer();
    modal();

    
    
});
