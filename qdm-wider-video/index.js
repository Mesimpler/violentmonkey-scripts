// ==UserScript==
// @name        qdm-wider-video
// @namespace   Violentmonkey Scripts
// @match       https://www.qdm66.com/dongmanplay/*
// @grant       none
// @version     1.0
// @author      mesimpler
// @license     MIT
// @description 让趣动漫的视频播放器宽屏播放（并且移除了页面中的一些干扰元素，更专注视频）。
// ==/UserScript==

const video_wrap = document.querySelector("#player-left");
const video_side = document.querySelector("#player-sidebar");

video_wrap.classList.remove("col-md-wide-75");
video_wrap.classList.add("col-md-wide-100");

video_side.classList.remove("col-md-wide-25");
video_side.classList.add("col-md-wide-100");
setTimeout(() => {
  video_side.style.height = "auto";
}, 800);

const gongaos = document.querySelectorAll("#gongao");
gongaos.forEach((el) => el.remove());

const tips = document.querySelector("#tips");
tips.remove();

const switch_tips = document.querySelector(".tips.close-box");
switch_tips.remove();
