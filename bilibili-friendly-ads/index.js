// ==UserScript==
// @name        bilibili-friendly-ads
// @namespace   Violentmonkey Scripts
// @match       https://www.bilibili.com/
// @grant       none
// @version     1.0
// @author      mesimpler
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2
// @description 2024/3/22 21:28:21
// @license     MIT
// ==/UserScript==

const targetNode = document.querySelector('.container')

const disconnect = VM.observe(targetNode, () => {
  let ads = document.querySelectorAll('.feed-card:has(a[href*="cm.bilibili.com"][data-target-url]:not([data-target-url*=".bilibili.com/"]))');
  ads.forEach(ad => {
    const skeleton = ad.querySelector('.bili-video-card__skeleton');
    const wrap = ad.querySelector('.bili-video-card__wrap');

    skeleton.classList.remove('hide')
    wrap.remove()

    const cover = skeleton.querySelector('.bili-video-card__skeleton--cover')
    cover.style = `position: relative;`
    cover.innerHTML = `
      <span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: var(--text3);">已为您屏蔽该广告</span>
    `
  });
});
