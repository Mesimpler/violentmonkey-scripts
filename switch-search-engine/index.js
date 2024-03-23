// ==UserScript==
// @name        switch-search-engine
// @namespace   Violentmonkey Scripts
// @match       https://*.bing.com/search*
// @match       https://*.baidu.com/s*
// @match       https://*.google.com/search*
// @match       https://*.search.yahoo.com/search*
// @match       https://*.sogou.com/web*
// @grant       GM_addStyle
// @grant       GM_openInTab
// @version     1.0
// @author      mesimpler
// @description 2024/3/23 15:11:56
// @license     MIT
// ==/UserScript==

const engines = [
  {
    name: 'baidu.com',
    url: 'https://www.baidu.com/s',
    param: 'wd',
    iconSvg: '<svg t="1711178737594" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6658" width="200" height="200"><path d="M178.310425 536.276272c112.425327-23.747051 97.023668-156.052053 93.699081-184.955607-5.427897-44.508759-58.689142-122.399088-130.948027-116.292704C50.008498 243.03411 36.71015 372.489465 36.71015 372.489465c-12.212769 59.774721 29.514193 187.601707 141.600275 163.854655z m119.413745 230.007155c-3.392436 9.295274-10.720098 33.110175-4.342318 53.804034 12.552013 46.408523 53.600488 48.511834 53.600488 48.511834h58.75699v-141.668124H342.70787c-28.360764 8.345392-42.066206 29.921285-45.051549 39.352256zM386.809537 314.478811c62.081577 0 112.22178-70.291272 112.221781-157.27333C499.167015 70.291272 448.958964 0 386.877386 0c-61.94588 0-112.289629 70.291272-112.289629 157.205481 0 86.914208 50.343749 157.27333 112.289629 157.27333z m267.323951 10.380853c82.978983 10.5844 136.308076-76.601203 146.892476-142.618006 10.855795-65.948954-42.676844-142.685855-101.365985-155.848506-58.960536-13.298349-132.37285 79.518698-139.089873 140.039755-7.9383 74.090801 10.855795 147.978055 93.631231 158.426757z m203.34261 388.366066s-128.369776-97.702155-203.274761-203.410459C552.699654 353.966765 408.317581 417.405317 360.077142 496.65262c-48.036893 79.247303-122.941878 129.319658-133.594127 142.618006-10.787946 13.094803-155.034322 89.763855-123.009726 229.735761 32.024595 140.039755 144.517771 137.257958 144.51777 137.257958s82.911134 8.141846 179.052768-13.094803a383.209562 383.209562 0 0 1 178.98492 5.2922s224.714956 74.090801 286.185895-68.527205c61.470939-142.753704-34.670695-216.708807-34.670695-216.708807z m-384.498688 212.366489H327.034816c-63.099308-12.416315-88.203334-54.889613-91.460072-62.081578-3.053192-7.259813-21.033103-41.387718-11.534282-99.330524 27.275185-86.84636 105.029816-93.088442 105.029816-93.088442h77.82248V576.917654l66.152501 1.085579v347.588986z m272.073361-1.017731H577.057344c-65.13477-16.555087-68.187962-62.217275-68.187962-62.217275v-183.055843l68.187962-1.017731v164.533143c4.070923 17.437121 26.257454 20.693859 26.257454 20.693859h69.205693v-184.209271h72.598129v245.273118z m238.013305-488.71432c0-31.617503-26.664546-126.809255-125.587978-126.809255-99.059129 0-112.289629 89.831703-112.289629 153.338104 0 60.656754 5.156503 145.331955 128.234078 142.618006 123.077575-2.713949 109.643529-137.325806 109.643529-169.146855z" fill="#8a8a8a" p-id="6659"></path></svg>'
  },
  {
    name: 'bing.com',
    url: 'https://www.bing.com/search',
    param: 'q',
    iconSvg: '<svg t="1711178699856" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5370" width="200" height="200"><path d="M340.582 70.11L102.537 0.683V851.9L340.65 643.345V70.11zM102.537 851.763l238.045 171.623 580.881-340.924V411.785L102.537 851.83z" p-id="5371" fill="#8a8a8a"></path><path d="M409.463 255.386l113.733 238.933 138.854 56.866 259.413-139.4-506.06-156.331z" p-id="5372" fill="#8a8a8a"></path></svg>'
  },
  {
    name: 'google.com',
    url: 'https://www.google.com/search',
    param: 'q',
    iconSvg: '<svg t="1711182896147" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7784" width="200" height="200"><path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z" p-id="7785" fill="#8a8a8a"></path></svg>'
  },
  {
    name: 'yahoo.com',
    url: 'https://search.yahoo.com/search',
    param: 'p',
    iconSvg: '<svg t="1711183015787" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8868" width="200" height="200"><path d="M866.35008 66.56H157.63968C107.38176 66.56 66.56 107.33568 66.56 157.68576v708.67456C66.56 916.66944 107.38176 957.44 157.63968 957.44h708.7104c50.21696 0 91.08992-40.63232 91.08992-91.07968V157.68576C957.4912 107.33568 916.7104 66.56 866.35008 66.56z m-255.24224 658.31936H296.95488v-30.79168l96.57856-13.32224v-32.80896L218.01472 339.10272l-90.34752-10.2656-13.312-34.92864 327.3728 5.12v29.71648l-97.56672 12.42624 135.53664 178.56 141.62944-126.23872-99.47648-2.06848v-28.68224h263.70048l-12.32896 27.5968h-68.62848l-193.94048 168.31488v127.32928h100.55168l-0.09728 38.89664z m131.36384 5.25824l-57.48224-14.40256 13.31712-49.26976 59.4944 18.47808-15.32928 45.19424z m31.77984-86.26688l-50.304-14.34112 61.60384-233.97888 124.1344 41.99424-135.43424 206.32576z" fill="#8a8a8a" p-id="8869"></path></svg>'
  },
  {
    name: 'sogou.com',
    url: 'https://www.sogou.com/web',
    param: 'query',
    iconSvg: '<svg t="1711183162161" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10150" width="200" height="200"><path d="M512 973.824c-257.365333 0-465.988267-207.735467-465.988267-463.940267S254.634667 45.943467 512 45.943467c257.365333 0 465.988267 207.735467 465.988267 463.940266a460.731733 460.731733 0 0 1-109.431467 298.5984l37.0688 26.624a505.719467 505.719467 0 0 0 117.896533-325.2224c0-281.258667-229.034667-509.269333-511.522133-509.269333S0.477867 228.693333 0.477867 509.952s229.034667 509.269333 511.522133 509.269333c67.037867 0 133.393067-13.038933 195.242667-38.570666l-23.005867-39.594667a466.5344 466.5344 0 0 1-172.2368 32.768z m215.2448 9.898667l23.005867 39.594666a512.8192 512.8192 0 0 0 198.314666-145.476266l-37.0688-26.624a466.7392 466.7392 0 0 1-184.32 132.437333z" p-id="10151" fill="#8a8a8a"></path><path d="M502.237867 702.122667s-186.094933 1.365333-287.470934-92.637867l-7.9872 131.345067s612.5568 221.184 618.0864-134.075734c0 0 13.038933-84.3776-208.759466-142.404266 0 0-87.4496-21.162667-186.094934-77.4144 0 0-50.7904-62.2592 104.174934-49.834667 183.773867 14.813867 280.576 62.2592 280.576 62.2592V283.2384S395.264 126.976 231.424 305.3568c0 0-55.5008 81.578667 0 132.7104 55.569067 51.2 168.072533 116.1216 319.488 154.8288-0.068267 0 194.3552 88.4736-48.674133 109.226667z" p-id="10152" fill="#8a8a8a"></path></svg>'
  },

]

let container = document.createElement("div")
container.classList.add('container')
container.addEventListener('click', (e) => {
  let targetURL = new URL(e.target.dataset.engineURL);
  let searchParams = new URLSearchParams();

  searchParams.set(e.target.dataset.searchParam, getKeyWord());
  targetURL.search = searchParams.toString();

  GM_openInTab(targetURL.href)
})

engines.forEach(eg => {
  let btn = document.createElement("button");
  btn.dataset.engineURL = eg.url
  btn.dataset.searchParam = eg.param
  btn.innerHTML = `${eg.iconSvg}`;
  container.appendChild(btn)
});

if(window.location.href.includes('sogou.com')) {
  const containerWrap = document.querySelector('#sogou_wrap_id')
  containerWrap.appendChild(container)
}else {
  document.body.appendChild(container)
}

function getKeyWord() {
  let currentURL = new URL(window.location.href);
  let searchParams = new URLSearchParams(currentURL.search);
  let keyWord = '';

  for (let index = 0; index < engines.length; index++) {
    const engine = engines[index];
    if(currentURL.href.includes(engine.name)) {
      return keyWord = searchParams.get(engine.param)
    }
  }

  return keyWord
}

GM_addStyle(`
  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: fixed;
    right: 50px;
    bottom: 120px;
  }

  .container button {
    border: 1px solid #eee;
    background-color: #eee;
    padding: 8px;
    cursor: pointer;
  }

  .container button:hover {
    background-color: #ccc;
  }

  .container svg {
    width: 24px;
    height: 24px;
    margin-top: 1px;
    pointer-events: none;
  }
`);