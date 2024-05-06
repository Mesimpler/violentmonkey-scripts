// ==UserScript==
// @name        qdm-wider-video
// @namespace   Violentmonkey Scripts
// @match       https://www.qdm66.com/dongmanplay/*
// @grant       none
// @version     1.1
// @author      mesimpler
// @license     MIT
// @description 让趣动漫的视频播放器宽屏播放（并且移除了页面中的一些干扰元素，更专注视频）。
// ==/UserScript==

/* 宽屏 */
const video_wrap = document.querySelector("#player-left");
const video_side = document.querySelector("#player-sidebar");
video_wrap.classList.remove("col-md-wide-75");
video_wrap.classList.add("col-md-wide-100");
video_side.classList.remove("col-md-wide-25");
video_side.classList.add("col-md-wide-100");
setTimeout(() => {
  video_side.style.height = "auto";
}, 800);

/* 移除公告 */
const gongaos = document.querySelectorAll("#gongao");
gongaos.forEach((el) => el.remove());

/* 移除滚动提示 */
const tips = document.querySelector("#tips");
tips.remove();

/* 移除路线切换提示 */
const switch_tips = document.querySelector(".tips.close-box");
switch_tips.remove();

/* 重排剧集布局 */
const video_lis = document.querySelectorAll(".myui-content__list > li");
video_lis.forEach(
  (el) => (el.className = "col-lg-5 col-md-4 col-sm-7 col-xs-6  ")
);
