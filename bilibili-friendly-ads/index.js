// ==UserScript==
// @name        bilibili-friendly-ads
// @namespace   Violentmonkey Scripts
// @match       https://www.bilibili.com
// @grant       none
// @version     2.0
// @author      mesimpler
// @description use gray picture to replace bili homepage ads.
// @require     https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js
// ==/UserScript==
const targetNode = document.querySelector(".container");
const observer = createObserver(targetNode, () => {
  replaceAds();
});

function createObserver(
  targetNode,
  callback,
  options = {
    childList: true,
    optimize: "throttle", // debounce | throttle
    waite: 100,
  }
) {
  const observer = new MutationObserver(
    _[options.optimize](callback, options.waite)
  );
  observer.observe(targetNode, options);
  return observer;
}

let skeleton = null;
function replaceAds() {
  if (!skeleton) {
    skeleton = document
      .querySelector(".bili-video-card__skeleton")
      .cloneNode(true);
    console.log(skeleton);
    skeleton.classList.remove("hide");
    const cover = skeleton.querySelector(".bili-video-card__skeleton--cover");
    cover.style = `position: relative;`;
    cover.innerHTML = `
        <span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: var(--text3);">已为您屏蔽该广告</span>
      `;
  }
  let ads = document.querySelectorAll(
    '.bili-video-card:has(a[href*="cm.bilibili.com"][data-target-url]:not([data-target-url*=".bilibili.com/"]))'
  );
  console.log(ads);
  ads.forEach((ad) => {
    const ad_wrap = ad.querySelector(".bili-video-card__wrap");
    ad_wrap.remove();

    ad.appendChild(skeleton.cloneNode(true));
  });
}
