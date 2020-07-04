// ==UserScript==
// @name         auto_click_wzdx
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  温州大学网课自动播放 0.2添加判断语句 auto_click_wzdx
// @author       Yezhihao
 // @match        *://wzuhs.cjnep.net/*

 // @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //温州大学网课自动播放
    setInterval(function(){autoClick();},5000); //每分钟检查 元素是否存在
function autoClick(){ //ok
    if(document.getElementById("job_nextvideo_btn")!=null){
    document.getElementById("job_nextvideo_btn").click();

    }}
      setInterval(function(){location.reload();},60*1000*60);// 1小时:reload
//   原: setInterval(function(){document.getElementById("job_nextvideo_btn").click();},60*1000*7);


})();