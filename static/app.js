//    Copyright 2017 Satyam Singh (satyam0507@gmail.com) All Rights Reserved.
// 
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
// 
//        http://www.apache.org/licenses/LICENSE-2.0
// 
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

'use strict';

var target = document.querySelector('.target');
var close = document.querySelector('.close');

var timingFunctionExpand = function (t) {
    return --t * t * t * t * t + 1;
};

var timingFunctionCollapse = function (t) {
    if ((t *= 2) < 1) {
        return 0.5 * t * t * t * t * t;
    }

    return 0.5 * ((t -= 2) * t * t * t * t + 2);
};

target.addEventListener('click', function () {
    var flip = new FLIP({
        element: target,
        duration: 2000,
        ease: timingFunctionExpand
    });

    // First position & opacity.
    flip.first();

    // Apply the 'end' class and snapshot the last position & opacity.
    flip.last('end');

    // Move and fade the element back to the original position.
    flip.invert();

    // Play it forwards.
    flip.play();
});

close.addEventListener('click', function () {
    var flip = new FLIP({
        element: target,
        duration: 2000,
        ease: timingFunctionCollapse
    });

    // First position & opacity.
    flip.first();
    flip.removeClass('end');
    // Apply the 'end' class and snapshot the last position & opacity.
    flip.last();

    // Move and fade the element back to the original position.
    flip.invert();

    // Play it forwards.
    flip.play();
});