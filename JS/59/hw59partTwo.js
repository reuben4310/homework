// Q2/A
window.myApp = window.myApp || {};
window.myApp.Count = (function () {
    'use strict';
let count =0;


   

    return {
        getCount: function () {
            return count;
        },
        Increment: function () {
            count++;
        }
    };

}());
       