// ==UserScript==
// @name        jm-remove-ad
// @namespace   Violentmonkey Scripts
// @match       https://18comic.vip/
// @match       https://18comic.vip/*
// @run-at      document-start
// @grant       GM_addStyle
// @version     2.1.5
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
function removeElements(selectors) {
  selectors.forEach((selector) => applyToAllElements(selector, (el) => el.remove()));
}

GM_addStyle(`
  #Comic_Top_Nav {
    top: 0 !important;
    margin-bottom: 0 !important;
  }
  [style*="position: fixed"][style*="overflow: hidden"][style*="margin: 0px auto"][style*="transform: translate3d(0px, 0px, 0px) translateX(-50%)"][style*="height: auto"][style*="box-sizing: border-box"][style*="display: flex"][style*="bottom: 0px"][style*="left: 50%"] {
    display: none !important;
  }
  /* 底部Tab补齐 */
  .ph-bottom li {
    width: 100% !important;
  }
`)

const ADS_SELECTORS = [
  `[data-group="photo_center_games_1"]`, //最上面的广告
  `[data-group="photo_center_1"]`, //中间的广告
  `[data-group*="photo_bottom"]`, //最底下的广告
  `[style*="text-align:center"][style*="margin: 0 auto"][style*="max-width: 100%"]`, //播放完的广告
  ".float_right", //靠右的三个操作按钮
  ".center.scramble-page.thewayhome", //回家的路
  `[data-group="album_detail"]`, // 本子页Tag部分广告贴片
  `[data-group="web_comicforum_middle1"]`, // 评论区底部追加广告
  ".ph-active:has(.meun-video)", // 小电影Tab
  ".ph-active:has(.meun-game)", // 游戏Tab
  `.ph-active:has(a[href="/veteran"])`, // 好站推荐Tab
  ".mobile-ad",
  ".header-menu-block", // 个人页 标题栏
  ".user-daily-mission", // 个人页日常任务
  `div[class$="b_sticky2"]`,
  `[data-group*="album_related"]`,
  `[data-group*="all_bottom"]`,
  `.row:has(div[data-group*="all_albums"])`, // 搜索页底部广告
  `.row:has(div[data-group*="list"])`, // 类别页广告
  ".top-nav",
  ".div-bf-pv",
];

removeElements(ADS_SELECTORS)
VM.observe(document.body, () => {
  removeElements(ADS_SELECTORS)
});

