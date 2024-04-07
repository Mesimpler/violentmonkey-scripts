// ==UserScript==
// @name        bilibili-remove-swipe
// @namespace   Violentmonkey Scripts
// @match       https://www.bilibili.com/
// @run-at      document-start
// @grant       none
// @version     1.0
// @author      -
// @description remove bilibili homepage swipe
// ==/UserScript==

GM_addStyle(`
  .recommended-swipe {
    display: none !important;
  }
  .recommended-container_floor-aside .container>*:nth-of-type(n + 8) {
    margin-top: 0px !important;
  }
`);

function GM_addStyle(cssText) {
  const style = document.createElement("style");
  style.lang = "text/css";
  style.textContent = cssText;
  document.head.appendChild(style);
}
