// ==UserScript==
// @name        jm-remove-ad
// @namespace   Violentmonkey Scripts
// @match       https://18comic.vip/*
// @grant       GM_addStyle
// @version     1.0.1
// @author      mesimpler
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2
// @description JM漫画去广告
// @description 2025/6/21 08:57:06
// ==/UserScript==

function applyToElement(selector, callback) {
  const element = document.querySelector(selector)
  if (element) callback(element);
}
function applyToAllElements(selector, callback) {
  const elements = document.querySelectorAll(selector);
  if(elements) {
     elements.forEach(callback)
  }
}

applyToElement('.div-bf-pv', (el) => el.remove())
applyToElement('.top-nav', (el) => el.remove())
applyToElement('#Comic_Top_Nav', (el) => el.style.top = 0)
applyToElement('img[src*="float-right-close.png"]', (el) => el.parentElement.remove())
applyToElement('div[class*="sticky"]', (el) => el.remove())

applyToAllElements('.meun-game', (el) => el.parentElement.remove())
applyToAllElements('.meun-video', (el) => el.parentElement.remove())

GM_addStyle(`
  .ph-bottom li {
    width: 100% !important;
  }
`)

setInterval(() => {
  applyToAllElements('div[data-show="ok"]', (el) => el.remove())
}, 3000)

// const targetNode = document.querySelector("#wrapper");
// const disconnect = VM.observe(targetNode, () => {
//   applyToAllElements('div[data-show="ok"]', (el) => el.remove())
// });

