// ==UserScript==
// @name        bilibili-filter-roll-ads
// @namespace   Violentmonkey Scripts
// @match       https://www.bilibili.com/
// @run-at      document-start
// @grant       none
// @version     1.0
// @author      -
// @description 2024/4/6 02:18:21
// ==/UserScript==

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
          ps: 12,
        },
      };
      const modifiedUrl = url.replace("ps=10", "ps=20");

      return Reflect.apply(target, thisArg, [
        modifiedUrl,
        modifiedOptions,
      ]).then((response) => {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return response.json().then((res) => {
            res.data.item = res.data.item.filter((video) => video.id != 0);
            res.data.item = res.data.item.slice(0, 10);
            return new Response(JSON.stringify(res), response);
          });
        }
        return response;
      });
    }

    return Reflect.apply(...arguments);
  },
});
