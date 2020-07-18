// ==UserScript==
// @name         time_limiter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  当时间超过12点自动关闭网络
// @author       叶志豪2020
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //当时间超过12点自动关闭网络
    var date=new Date();
   if(date.getHours()>=23){
   document.write("很晚了睡吧");
   }
})();
