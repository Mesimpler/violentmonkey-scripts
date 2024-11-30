// ==UserScript==
// @name        bilibili-dark-theme
// @namespace   Violentmonkey Scripts
// @match       https://www.bilibili.com/*
// @match       https://t.bilibili.com/*
// @match       https://search.bilibili.com/*
// @run-at      document-idle
// @grant       GM_addStyle
// @version     1.2.2
// @author      mesimpler
// @license     MIT
// @description 提供b站黑夜模式。(drak mode with bilibili.)
// ==/UserScript==

GM_addStyle(`
  :root {
    color-scheme: dark;

    --Lb5: #0087b7 !important;
    --Wh0: #242424 !important;
    --Ga0: #333333 !important;
    --Ga0_s: #333333 !important;
    --Ga1: #242424 !important;
    --Ga1_s: #333333 !important;
    --Ga2: #484848 !important;
    --Ga7: #a4a4a4 !important;
    --Ga10: #d1d1d1 !important;
    --Ga11: #333333 !important;
    --Ga12: #4a4a4a !important;
    --Ga13_s: #3d3e3e !important;

    /* 回复框*/
    .reply-box-warp {
      border: 1px solid #626262 !important;
    }

    /* 弹幕输入框 */ 
    .bpx-player-video-inputbar-wrap {
      background: #333333;
    }
  
    /* 标题栏阴影 */
    .mini-header {
      box-shadow: none;
      border-bottom: 1px solid #484848;
    }
  }
`);

/* 动态 */
if (
  location.href.startsWith("https://www.bilibili.com/opus/") ||
  location.href.startsWith("https://t.bilibili.com/")
) {
  // 移除背景图片
  const bg = document.querySelector(".bg");
  if (bg) {
    bg.remove();
  }

  GM_addStyle(`
    :root {
      --Wh0: #333333 !important;
      --Ga0: #484848 !important;
    }
 
    /* 背景遮罩 */
    .bgc {
      background-color: var(--Ga1) !important;
    }
 
    /* 动态UP名字 */
    .bili-dyn-up-list__item__name {
      color: var(--Ga5) !important;
    }
 
    /* 推荐视频商品卡片 */
    .bili-dyn-card-ugc__wrap,
    .bili-dyn-card-goods__wrap {
      background-color: var(--Ga1) !important;
    }
  `);
}
