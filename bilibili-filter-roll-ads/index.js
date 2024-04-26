// ==UserScript==
// @name        bilibili-filter-roll-ads
// @namespace   Violentmonkey Scripts
// @match       https://www.bilibili.com/
// @run-at      document-start
// @grant       none
// @version     1.1
// @author      mesimpler
// @license     MIT
// @description 过滤b站换一换中的广告。(filter bilibili roll ads.)
// ==/UserScript==

const feedNum = 12;

window.fetch = new Proxy(window.fetch, {
  apply: function (target, thisArg, argumentsList) {
    if (
      argumentsList[0].startsWith(
        "https://api.bilibili.com/x/web-interface/wbi/index/top/feed/rcmd"
      )
    ) {
      const url = argumentsList[0];
      const options = argumentsList[1];
      const modifiedOptions = {
        ...options,
        params: {
          ...options.params,
          ps: feedNum,
        },
      };
      const modifiedUrl = url.replace("ps=10", `ps=${feedNum}`);

      return Reflect.apply(target, thisArg, [
        modifiedUrl,
        modifiedOptions,
      ]).then((response) => {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return response.json().then((res) => {
            res.data.item = res.data.item.filter((video) => video.id !== 0);
            return new Response(JSON.stringify(res), response);
          });
        }
        return response;
      });
    }

    return Reflect.apply(...arguments);
  },
});
