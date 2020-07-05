// ==UserScript==
// @name         block_page
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  屏蔽含有关键字的网页
// @author       叶志豪2020
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
      //setInterval(function(){fun();},5000);

   function fun(){
      //屏蔽网页关键字 //ok
       var test=document.getElementsByTagName('html')[0].innerHTML;
    //被屏蔽词
    var keywords=["漫画","里番","色情","情色","巨乳","无码","性感","有码"];
    //遍历
    for (var i = keywords.length - 1; i >= 0; i--) {

        if ( test.indexOf( keywords[i])!=-1) {
            document.write("网页含有关键字,禁止访问")
            break
        }
    }}

     fun()
})();