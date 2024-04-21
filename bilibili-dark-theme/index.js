// ==UserScript==
// @name        bilibili-dark-theme
// @namespace   Violentmonkey Scripts
// @match       https://www.bilibili.com/*
// @run-at      document-idle
// @grant       GM_addStyle
// @version     1.0
// @author      mesimpler
// @license     MIT
// @description 提供b站黑夜模式。(drak mode with bilibili.)
// ==/UserScript==

GM_addStyle(`
  * {
    border: none !important;
  }
  :root {
    --Wh0: #242424;       /* 网页背景 */
    --Ga10: #f1f2f3;      /* 字体 */
    --Ga11: #333333;      /* 换一换按钮背景 */
    --Ga2: #484848;       /* 换一换按钮hover */
    --Ga0_s: #333333;     /* 分区按钮背景 */
    --Ga7: #a4a4a4;       /* 分区按钮字体 */
    --Ga12: #4a4a4a;      /* 稍后再看按钮hover背景 */
    --Ga1: #242424;       /* 悬浮后搜索框背景色 */
    --Ga1_s: #333333;     /* 搜索框与骨架屏背景色 */
  }
`);
