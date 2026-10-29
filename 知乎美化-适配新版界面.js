// ==UserScript==
// @name         知乎美化 · 2026 首页适配
// @version      0.10
// @author       sven
// @description  新版首页宽屏、圆角卡片、4种暗色方案、评论配色、广告过滤、屏蔽首页文章、左侧导航开关、隐藏看山狗、图片高度限制和滚动隐藏顶栏
// @match        *://www.zhihu.com/*
// @match        *://zhuanlan.zhihu.com/*
// @exclude      https://www.zhihu.com/signin*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFo0lEQVR4nJWXT4hlVxHGf9/tJyYuzJtxIziQN8RBFDEtIWB0MW+Mi4CIk4UuAtqvAxPcqAkJRNxMshDUTc8s3TjdO3c9QbIKod+o4CIuZtRFDEi3EIgEM/02jpPIPZ+LqnPv6TeB4IHLPfeeP1X11VdV54i2vewtOhaITcQDdEgdthAdINAGNkgd0IEVbwR17rAmx1TniSVil6e0V0UKgJc8pWdfG5yvwqRhs1FQIyQ3trvcpxsVGd4xf/gelO24yV0usK1VB6APOMDMKSADBShIBWNwj1WwjClAzLEL0CMc86jj9cl/LgRs8ZjCJvexH5r/xAuJa260TatG6DosIee4lHO0ZnWDXH5bgYQ8uql122Iis2Xnj4JtRH675AIHMAQKuAsdrLV3dYXTwQ7Bir1jrzJ+Wyw698yVkLmgxgVg+PGjcPw8zD6JKcgFUcD94AoNa0eXkO600lVqXOPqPrPZNT6tjylYBRZfgp0n4GgFR7dDkEieeNys6ZPCBq4MCicXdFLWdIKBHtMFfC4JY8Hf/nxEyY0jmD+IM7Cgy77gxtto+jF4+NMj8+tY84YOLd8JnZJPpiDxI7shUigimJ2Gwxf5yLb9aryvffOj5+pXKbzJDxOVoIw7REkLhedno7+6CzffgdkpmE3z+5/Nrq7JJMfejc3bNj+TnT4tTyRtmLiAlARKliK09Uis2fsTPPcqvvwNdPlxuP4mbO+P4aQObz0cG958F77+mxMJh9kDcPh0IpCcUIerqycYuc8FGX7zczB/CI6O4cofAA9GjuRjUFhN2I0hmISlNFCUzCGMSkxqfFJw3XD6cXjuOt57A1YfpM/KSSEqY9zLo4w0psLsVnknyhkVYgNPMlRQh+qE63+GSsaBoK2VJcdTKTcKDLmhA/o1BDKFKzKl3aOJcoNBu3SHAAe4ahwwKgBkFRhdMMIc6Chzf+VphruT6urwZBh1aEQXjL/2fZidHoVP74/3xS8GP1IBLQ/hxuGonCLFxpZKjtTpDpRrSjYwYa2p4GcvoPm59ZFU5L54apvP4MZhY2XJMh1u+DB0Qk7ybaIR2EGHl34LV1/HGU5CsP8MbH4Gnvw1vPJX7G48pGw/OiLgyoEKf4PAYH0f6VtdIOAmlwCwugOrO0mDOHRodjrG/vGv9HvyQEprRwQjPB3rWg5oXBNR0A+Vf2wtJwDZaP5ZPL0fVv+B4zto5yJjKK6R0CUPMI7K6jUEsgpKGYqTwXpneGiExKnR4iuZ6d6Ggx/C7FNwdBuu/C6ROBmiUU/6PDuWhh9tEssQHxFQVlmP3wKfPY23Hotfe3+Eq8tYf/kJmE2jdK8pIPWJTDmJAFmq1We57iNnDQol9HWFDbr8rfg8eg+Wb8KV19DyrQjLa08hNal4/hD4l3D+LNr/HvhncPhC49+Ev5475DHfeUjjGrPt4jHY+upgvZOAPL0XRJ2fgwdPNS7IdvADuPgF7m15UDEDOhaXXKQT6RyAzTNw8DxMPxHWn/1p6ObMjc8+DjvfhVMvwOr9EcLjnwc6V38PL78Gq7vYG8PBxAqTzUbInJwoGtlbfA3tfCeEL/8G23sZEaAMIV99HW2egdW/m9Is/Mpf0O4bsPw7tY4os+OAbuUXHZKe8W3gVDLeEjr/uTgRHb0Hy7fyf0PUQd2YH4eZesrRmMBqDhF5gRFiIxSRQoGJxS0Kc8XNRSasHlqStOZ3Nf1aKVQzIKkMzeHTGZaRoEzWmyxIyw6zW6FRQ6c2NapC5pCjuAl5+Od7Tru41vxagEpTOeN0LAq7oe0lH0DeC6uVH0Lito03kbVUnmSrp+yE/967Y8dNfqEvdwD+L09a3BrgbqA/IZS4H4osLE3mHlDzYB30iUJ7XwwklrzPhXWk4ZIXdGxROM//g0ZbQrKXVza0EQcQiWNvcIuOXXbG6/n/AAwhLDO9HaqBAAAAAElFTkSuQmCC
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        window.onurlchange
// @sandbox      JavaScript
// @license      GPL-3.0 License
// @run-at       document-start
// @namespace    local.zhihu-beautify.2026
// ==/UserScript==

// 包含 X.I.U 编写的原始代码，按 GPL-3.0 许可修改。

(function() {
    'use strict';
    var menu_ALL = [
        ['menu_widescreenDisplay', '宽屏显示', '勾选 = 该页面开启宽屏显示（刷新后查看效果）', ''],
        ['menu_widescreenDisplayIndex', '首页', '宽屏显示', true],
        ['menu_widescreenDisplayQuestion', '问题页', '宽屏显示', true],
        ['menu_widescreenDisplaySearch', '搜索页、话题页', '宽屏显示', true],
        ['menu_widescreenDisplayCollection', '收藏页', '宽屏显示', true],
        ['menu_widescreenDisplayPost', '文章页(暂不可用)', '宽屏显示', false],
        ['menu_widescreenDisplayPeople', '用户主页', '用户主页', false],
        ['menu_widescreenDisplayWidth', '宽屏宽度', '宽屏宽度 (默认 1440，随窗口缩小)', '1440'],
        ['menu_darkMode', '暗黑模式', '暗黑模式', true],
        ['menu_darkModeType', '暗黑模式切换（1~4）', '暗黑模式切换', 1],
        ['menu_picHeight', '调整图片最大高度', '调整图片最大高度', true],
        ['menu_postimg', '隐藏文章开头大图', '隐藏文章开头大图', true],
        ['menu_hideTitle', '向下翻时自动隐藏顶栏', '向下翻时自动隐藏顶栏', true],
        ['menu_showLeftNav', '显示左侧导航', '显示左侧导航', false],
        ['menu_hideArticles', '屏蔽首页文章', '屏蔽首页文章', true]
    ], menu_ID = [];
    for (let i=0;i<menu_ALL.length;i++){ // 如果读取到的值为 null 就写入默认值
        if (GM_getValue(menu_ALL[i][0]) == null){GM_setValue(menu_ALL[i][0], menu_ALL[i][3])};
    }
    registerMenuCommand();
    if (window.onurlchange === undefined) {addUrlChangeEvent();} // Tampermonkey v4.11 版本添加的 onurlchange 事件 grant，可以监控 pjax 等网页的 URL 变化
    addStyle();
    window.addEventListener('urlchange', scheduleUpdate);
    window.addEventListener('popstate', scheduleUpdate);
    // 新版首页异步挂载，监听结构变化，并合并同一批更新。
    let updateTimer = 0;
    const layoutObserver = new MutationObserver(scheduleUpdate);
    layoutObserver.observe(document.documentElement, {childList: true, subtree: true});
    function scheduleUpdate() {
        if (updateTimer) return;
        updateTimer = window.setTimeout(() => {
            updateTimer = 0;
            addStyle();
        }, 120);
    }
    // 向下翻时自动隐藏顶栏
    if (menu_value('menu_hideTitle')) hideTitle();

    // 注册脚本菜单
    function registerMenuCommand() {
        if (menu_ID.length){
            for (const id of menu_ID.filter(id => id != null)) GM_unregisterMenuCommand(id);
        }
        menu_ID = [];
        for (let i=0;i<menu_ALL.length;i++){ // 循环注册脚本菜单
            menu_ALL[i][3] = GM_getValue(menu_ALL[i][0]);
            if (menu_ALL[i][0] === 'menu_darkModeType') {
                if (menu_ALL[i][3] > 4){ // 避免在减少 raw 数组后，用户储存的数据大于数组而报错
                    menu_ALL[i][3] = 1;
                    GM_setValue('menu_darkModeType', menu_ALL[i][3]);
                }
                menu_ID[i] = GM_registerMenuCommand(`${menu_num(menu_ALL[i][3])} ${menu_ALL[i][1]}`, function(){menu_toggle(`${menu_ALL[i][3]}`,`${menu_ALL[i][0]}`)});
            } else if (menu_ALL[i][0] === 'menu_widescreenDisplay'){
                    menu_ID[i] = GM_registerMenuCommand(`#️⃣ ${menu_ALL[i][1]}`, function(){menu_setting('checkbox', menu_ALL[i][1], menu_ALL[i][2], true, [menu_ALL[i+1], menu_ALL[i+2], menu_ALL[i+3], menu_ALL[i+4], menu_ALL[i+5], menu_ALL[i+6], menu_ALL[i+7]])});
            } else if (menu_ALL[i][0].indexOf('menu_widescreenDisplay') === -1) {
                menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][3]?'✅':'❌'} ${menu_ALL[i][1]}`, function(){menu_switch(`${menu_ALL[i][3]}`,`${menu_ALL[i][0]}`,`${menu_ALL[i][2]}`)});
            }
        }
    }

    // 切换暗黑模式
    function menu_toggle(menu_status, Name) {
        GM_setValue(Name, Number(menu_status) >= 4 ? 1 : Number(menu_status) + 1);
        registerMenuCommand();
        addStyle();
    };

    // 菜单数字图标
    function menu_num(num) {
        return ['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟'][num]
    }

    // 菜单开关
    function menu_switch(menu_status, Name, Tips) {
        GM_setValue(Name, menu_status !== 'true');
        registerMenuCommand();
        addStyle();
        if (Name === 'menu_hideTitle') {
            if (menu_value(Name)) hideTitle();
            else document.documentElement.removeAttribute('data-zb-header-hidden');
        }
    };

    // 返回菜单值
    function menu_value(menuName) {
        for (let menu of menu_ALL) {
            if (menu[0] == menuName) {
                return menu[3]
            }
        }
    }


    // 脚本设置
    function menu_setting(type, title, tips, line, menu) {
        let _br = '', _html = `<style class="zhihuE_SettingStyle">.zhihuE_SettingRoot {position: absolute;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);transform: translate(-50%, -50%);width: auto;min-width: 400px;max-width: 600px;height: auto;min-height: 150px;max-height: 400px;color: #535353;background-color: #fff;border-radius: 3px;}
.zhihuE_SettingBackdrop_1 {position: fixed;top: 0;right: 0;bottom: 0;left: 0;z-index: 203;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;overflow-x: hidden;overflow-y: auto;-webkit-transition: opacity .3s ease-out;transition: opacity .3s ease-out;}
.zhihuE_SettingBackdrop_2 {position: absolute;top: 0;right: 0;bottom: 0;left: 0;z-index: 0;background-color: rgba(18,18,18,.65);-webkit-transition: background-color .3s ease-out;transition: background-color .3s ease-out;}
.zhihuE_SettingRoot .zhihuE_SettingHeader {padding: 10px 20px;color: #fff;font-weight: bold;background-color: #3994ff;border-radius: 3px 3px 0 0;}
.zhihuE_SettingRoot .zhihuE_SettingMain {padding: 10px 20px;border-radius: 0 0 3px 3px;}
.zhihuE_SettingHeader span {float: right;cursor: pointer;}
.zhihuE_SettingMain input {margin: 10px 6px 10px 0;vertical-align:middle;}
.zhihuE_SettingMain input[type=text] {margin: 5px 6px 5px 0;padding-block: 0;}
.zhihuE_SettingMain input[name=zhihuE_Setting_Checkbox] {cursor: pointer;}
.zhihuE_SettingMain label {margin-right: 20px;user-select: none;cursor: pointer;vertical-align:middle;}
.zhihuE_SettingMain hr {border: 0.5px solid #f4f4f4;}
[data-theme="dark"] .zhihuE_SettingRoot {color: #adbac7;background-color: #343A44;}
[data-theme="dark"] .zhihuE_SettingHeader {color: #d0d0d0;background-color: #2D333B;}
[data-theme="dark"] .zhihuE_SettingMain hr {border: 0.5px solid #2d333b;}</style>
        <div class="zhihuE_SettingBackdrop_1"><div class="zhihuE_SettingBackdrop_2"></div><div class="zhihuE_SettingRoot">
            <div class="zhihuE_SettingHeader">${title}<span class="zhihuE_SettingClose" title="点击关闭"><svg class="Zi Zi--Close Modal-closeIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M13.486 12l5.208-5.207a1.048 1.048 0 0 0-.006-1.483 1.046 1.046 0 0 0-1.482-.005L12 10.514 6.793 5.305a1.048 1.048 0 0 0-1.483.005 1.046 1.046 0 0 0-.005 1.483L10.514 12l-5.208 5.207a1.048 1.048 0 0 0 .006 1.483 1.046 1.046 0 0 0 1.482.005L12 13.486l5.207 5.208a1.048 1.048 0 0 0 1.483-.006 1.046 1.046 0 0 0 .005-1.482L13.486 12z" fill-rule="evenodd"></path></svg></span></div>
            <div class="zhihuE_SettingMain"><p>${tips}</p><hr>`
        if (line) _br = '<br>'
        for (let i=0; i<menu.length; i++) {
            if (menu[i][0] === 'menu_widescreenDisplayWidth') {
                _html += `<label>${menu[i][2]}：<input name="${menu[i][0]}" type="text" oninput="value=value.replace(/[^\\d]/g,'')" value="${GM_getValue(menu[i][0])}" style="width: 50px;"></label>${_br}`
            } else if (GM_getValue(menu[i][0])) {
                _html += `<label><input name="zhihuE_Setting_Checkbox" type="checkbox" value="${menu[i][0]}" checked="checked">${menu[i][1]}</label>${_br}`
            } else {
                _html += `<label><input name="zhihuE_Setting_Checkbox" type="checkbox" value="${menu[i][0]}">${menu[i][1]}</label>${_br}`
            }
        }
        _html += `</div></div></div>`
        document.body.insertAdjacentHTML('beforeend', _html); // 插入网页末尾
        setTimeout(function() { // 延迟 100 毫秒，避免太快
            const doc = document.querySelector('.zhihuE_SettingBackdrop_1');
            if (!doc) return
            // 关闭按钮 点击事件
            doc.querySelector('.zhihuE_SettingClose').onclick = function(){this.parentElement.parentElement.parentElement.remove();document.querySelector('.zhihuE_SettingStyle').remove();}
            // 点击周围空白处 = 点击关闭按钮
            doc.querySelector('.zhihuE_SettingBackdrop_2').onclick = function(event){if (event.target == this) {document.querySelector('.zhihuE_SettingClose').click();};}
            // 复选框 点击事件
            doc.querySelectorAll('input[name=zhihuE_Setting_Checkbox]').forEach(function (checkBox) {
                checkBox.addEventListener('click', function(){GM_setValue(this.value, this.checked);registerMenuCommand();addStyle();});
            })
            // 输入框 变化事件
            doc.querySelectorAll('input[type=text]').forEach(function (checkBox) {
                checkBox.onchange = function(){const width = Math.min(2400, Math.max(640, Number(this.value) || 1440));this.value = width;GM_setValue(this.name, String(width));registerMenuCommand();addStyle();};
            })
        }, 100)
    }


    // 添加样式
    function addStyle() {
        const width = Number(GM_getValue('menu_widescreenDisplayWidth'));
        if (!Number.isFinite(width) || width < 640 || width > 2400) GM_setValue('menu_widescreenDisplayWidth', '1440');
        updateLeanLayout();
        let style = `/* 屏蔽登录提示（问题页中间的元素） */
.Question-mainColumnLogin {display: none !important;}
/* 屏蔽回答页/首页广告 */
.Pc-card.Card, .Pc-Business-Card-PcTopFeedBanner {display: none !important;}
/* 屏蔽文章页推荐文章 */
.Recommendations-Main {display: none !important;}
/* 解除盐选内容选中复制限制 */
div[class*="ManuscriptIntro-root-"] {user-select: auto !important;}
`,
            style_index = `/* 屏蔽首页广告 */
.TopstoryItem--advertCard {display: none !important;}
/* 屏蔽首页活动广告 */
/* 只匹配广告标记，避免把新版首页内容容器误隐藏。 */
.Topstory .Topstory-advertCard, .Topstory .Pc-feedAd-container {display: none !important;}
html[data-theme="light"] header.AppHeader {background-color: #ffffff !important; -webkit-box-shadow: 0 1px 3px rgba(18,18,18,.1) !important; box-shadow: 0 1px 3px rgba(18,18,18,.1) !important;}
html[data-theme="light"] header.AppHeader a[aria-label="知乎"] svg {filter: invert(57%) sepia(71%) saturate(949%) hue-rotate(190deg) brightness(86%) contrast(188%) !important;}
html[data-theme="light"] .AppHeader-TabsLink {color: #8590a6 !important; font-weight: normal !important;}
html[data-theme="light"] .AppHeader-userInfo Button svg, .SearchBar-searchButton svg {color: inherit !important;}
html[data-theme="light"] .AppHeader-userInfo button>div {color: #8590a6 !important;}
html[data-theme="light"] .Input-wrapper.Input-wrapper--grey {background: #f6f6f6 !important;}
html[data-theme="light"] .SearchBar input {color: #121212 !important;}
html[data-theme="light"] .SearchBar input::placeholder, html[data-theme="light"] .SearchBar input::-webkit-input-placeholder, html[data-theme="light"] {color: #919baf !important;}
html[data-theme="light"] .Button--primary.Button--blue {color: #fff !important;background-color: #06f !important;}
/* 右上角 通知/私信 红点颜色 */
html[data-theme=light] .AppHeader-notifications:not([aria-label=通知])>div:first-of-type, html[data-theme=light] .AppHeader-messages:not([aria-label=私信])>div:first-of-type {color: #ffffff !important;border: 2px solid #ffffff !important;}

            `,
            style_widescreenDisplayIndex = `/* 宽屏显示 - 首页 */
.Topstory-mainColumn {width: 100% !important; min-width: 0 !important; box-sizing: border-box; flex: 1 1 auto !important;}
.Topstory-container > [data-zb-sidebar], .Topstory-sideBar, .Topstory [data-za-detail-view-path-module="RightSideBar"] {display: none !important;}
.Topstory-container {width: ${GM_getValue('menu_widescreenDisplayWidth')}px;}
@media only screen and (max-width: ${Number(GM_getValue('menu_widescreenDisplayWidth'))+50}px) {.Topstory-container {width: 97% !important;}}
`,
            style_widescreenDisplayQuestion = `/* 宽屏显示 - 问题页 */
.QuestionWaiting-mainColumn {width: inherit !important;}
.Question-mainColumn+div,[data-za-detail-view-path-module="RightSideBar"], .Question-sideColumn, .GlobalSideBar {display: none !important;}
.QuestionWaiting-mainColumn {margin-right: 0 !important;}
.Question-mainColumn, .ListShortcut {width: ${GM_getValue('menu_widescreenDisplayWidth')}px; margin: auto!important;}
@media only screen and (max-width: ${Number(GM_getValue('menu_widescreenDisplayWidth'))+50}px) {.Question-mainColumn, .ListShortcut {width: auto !important;}}
@media only screen and (max-width: ${GM_getValue('menu_widescreenDisplayWidth')-100}px) {.Question-mainColumn, .ListShortcut {width: 98.5% !important;}}
.AuthorInfo {max-width: 100% !important;}
`,
            style_widescreenDisplaySearch = `/* 宽屏显示 - 搜索页 */
.SearchMain, .App-main>[data-za-detail-view-path-module=TopicItem]>div:first-child {width: inherit !important;}
.SearchMain+div {display: none !important;}
.Search-container, .App-main>[data-za-detail-view-path-module=TopicItem] {width: ${GM_getValue('menu_widescreenDisplayWidth')}px;}
@media only screen and (max-width: ${Number(GM_getValue('menu_widescreenDisplayWidth'))+50}px) {.Search-container, .App-main>[data-za-detail-view-path-module=TopicItem] {width: 97.5% !important;}}
`,
            style_widescreenDisplayCollection = `/* 宽屏显示 - 收藏页 */
.CollectionsDetailPage-mainColumn {width: inherit !important;}
.CollectionsDetailPage-mainColumn+div {display: none !important;}
.CollectionsDetailPage {width: ${GM_getValue('menu_widescreenDisplayWidth')}px;}
@media only screen and (max-width: ${Number(GM_getValue('menu_widescreenDisplayWidth'))+50}px) {.CollectionsDetailPage {width: 98.5% !important;}}
`,
            style_widescreenDisplayPost = `/* 宽屏显示 - 文章页 */
.Post-content {min-width: auto !important;}
.Post-SideActions {left: calc(10vw) !important;}
.Post-Row-Content-right {display: none !important;}
.Post-Row-Content, .Post-Row-Content-left, .RichContent-actions {width: ${GM_getValue('menu_widescreenDisplayWidth')}px !important;}
@media only screen and (max-width: ${Number(GM_getValue('menu_widescreenDisplayWidth'))+50}px) {.Post-Row-Content, .Post-Row-Content-left, .RichContent-actions {width: auto !important;}}
@media only screen and (max-width: ${GM_getValue('menu_widescreenDisplayWidth')-100}px) {.Post-Row-Content, .Post-Row-Content-left, .RichContent-actions {width: 98% !important;}}
`,
            style_widescreenDisplayPeople = `/* 宽屏显示 - 用户主页 */
.Profile-mainColumn {width: inherit !important;}
.Profile-mainColumn+div,[data-za-module="RightSideBar"],.Profile-sideColumn {display: none !important;}
.Profile-main, #ProfileHeader {width: ${GM_getValue('menu_widescreenDisplayWidth')}px !important;}
@media only screen and (max-width: ${Number(GM_getValue('menu_widescreenDisplayWidth'))+50}px) {.Profile-main, #ProfileHeader {width: auto !important;}}
@media only screen and (max-width: ${GM_getValue('menu_widescreenDisplayWidth')-100}px) {.Profile-main, #ProfileHeader {width: 98.5% !important;}}
`,
            style_2 = `/* 隐藏在各列表中查看文章时开头显示的大图，不影响文章、专栏页面 */
.RichContent img.ArticleItem-image {display: none !important;}
`,
//            style_3 = `/* 向下翻时自动隐藏顶栏*/
//header.is-hidden {display: none;}
//`,
            style_4 = `/* 调整图片最大高度 */
.ztext .content_image, .ztext .origin_image, .GifPlayer img {max-height: 500px !important;width: auto !important;}
`,
            style_darkMode_1 = `/* 暗黑模式（方案 1） */
/* 首页工具条宽度 */
html[data-theme=dark] .Card.TopstoryItem.TopstoryItem-isRecommend .ContentItem-actions, .Card.TopstoryItem.TopstoryItem-isFollow .ContentItem-actions {margin: 0 -16px -10px;}
/* 右上角 通知/私信 红点颜色 */
html[data-theme=dark] .AppHeader-notifications:not([aria-label=通知])>div:first-of-type, html[data-theme=dark] .AppHeader-messages:not([aria-label=私信])>div:first-of-type {color: #ffffff !important;border: 2px solid #2d333b !important;}
/* 文字颜色 */
html[data-theme=dark] body, html[data-theme=dark] .ContentItem-title, html[data-theme=dark] .QuestionHeader-title, html[data-theme=dark] .Tabs-link, html[data-theme=dark] .CreatorEntrance-title, html[data-theme=dark] .Search-container, html[data-theme=dark] .HotItem-excerpt, html[data-theme=dark] .PushNotifications-item, html[data-theme=dark] .Notifications-Main>header h1, html[data-theme=dark] .Notifications-Section-header h2, html[data-theme=dark] .NotificationList-Item-content, html[data-theme=dark] .Reward, html[data-theme=dark] .ChatSideBar-Search-Input input, html[data-theme=dark] input.Input, html[data-theme=dark] .LinkCard-title, html[data-theme=dark] .MCNLinkCard-title, html[data-theme=dark] .ZVideoLinkCard-title, html[data-theme=dark] .TipjarDialog-customButton, html[data-theme=dark] .Question-mainColumn .Card:not(.AnswersNavWrapper) a[data-za-detail-view-id] > div:last-child, html[data-theme=dark] .TextArea {color: #adbac7 !important;}
html[data-theme=dark] .LinkCard-meta, html[data-theme=dark] .MCNLinkCard-source {color: #5a6f83 !important;}
/* 热榜标题 */
html[data-theme=dark] .HotItem-title {color: #c4cfda !important;}
/* 首页信息流标题 */
html[data-theme=dark] .ContentItem-title a:hover, html[data-theme=dark] .RichContent.is-collapsed .RichContent-inner:hover, html[data-theme=dark] .ContentItem-more:hover, html[data-theme=dark] .QuestionRichText--expandable.QuestionRichText--collapsed:hover {color: #b3c3d6 !important;}
/* 搜索高亮红字 */
html[data-theme=dark] .Highlight em {color: #c33c39 !important;}

/* 背景颜色 - 网页 */
html[data-theme=dark] body, html[data-theme=dark] .Select-option:focus {background: #22272E !important;}
/* 背景颜色 - 问题 */
html[data-theme=dark] .AppHeader, html[data-theme=dark] .QuestionHeader, html[data-theme=dark] .QuestionHeader-footer, html[data-theme=dark] .EmoticonsFooter-item--selected, html[data-theme=dark] .Card, html[data-theme=dark] .Question-mainColumn .Card .Sticky.is-bottom, html[data-theme=dark] .ContentItem-actions, html[data-theme=dark] .MoreAnswers .List-headerText, html[data-theme=dark] .CommentsV2-withPagination, html[data-theme=dark] .Topbar, html[data-theme=dark] .CommentsV2-footer, html[data-theme=dark] .CommentEditorV2-inputWrap--active, html[data-theme=dark] .InputLike, html[data-theme=dark] .InputLike + div div, html[data-theme=dark] .Popover-content, html[data-theme=dark] .Notifications-footer, html[data-theme=dark] .Messages-footer, html[data-theme=dark] .Modal-inner, html[data-theme=dark] .Emoticons, html[data-theme=dark] .EmoticonsFooter, html[data-theme=dark] .SearchTabs, html[data-theme=dark] .Popover-arrow:after, html[data-theme=dark] .CommentEditorV2-inputWrap, html[data-theme=dark] .ProfileHeader-wrapper, html[data-theme=dark] .UserCover, html[data-theme=dark] .AnswerForm-footer, html[data-theme=dark] .Editable-toolbar, html[data-theme=dark] .AnswerForm-fullscreenContent .Editable-toolbar, html[data-theme=dark] .KfeCollection-PcCollegeCard-wrapper, html[data-theme=dark] .KfeCollection-PcCollegeCard-root, html[data-theme=dark] .HotItem, html[data-theme=dark] .HotList, html[data-theme=dark] .HotListNavEditPad, html[data-theme=dark] .QuestionWaiting-typesTopper, html[data-theme=dark] .QuestionWaiting-types, html[data-theme=dark] .PostItem, html[data-theme=dark] .ClubSideBar section, html[data-theme=dark] .SearchSubTabs, html[data-theme=dark] .Club-SearchPosts-Content, html[data-theme=dark] .Club-content, html[data-theme=dark] .ClubJoinOrCheckinButton, html[data-theme=dark] .ClubEdit, html[data-theme=dark] .CornerButton, html[data-theme=dark] .Notifications-Section-header, html[data-theme=dark] .NotificationList, .NotificationList-Item.NotificationList-Item:after, .NotificationList-DateSplit.NotificationList-DateSplit:after, html[data-theme=dark] .Chat, .ChatUserListItem:after, .ChatListGroup-SectionTitle--bottomBorder:after, html[data-theme=dark] .ActionMenu, .ChatSideBar-Search--active, html[data-theme=dark] .ChatSideBar-Search-ResultListWrap, html[data-theme=dark] .QuestionMainDivider-inner, html[data-theme=dark] .Topic-bar, html[data-theme=dark] .AnnotationTag, html[data-theme=dark] .HoverCard, html[data-theme=dark] .HoverCard-loading, html[data-theme=dark] .ExploreSpecialCard, html[data-theme=dark] .ExploreHomePage-ContentSection-moreButton a, html[data-theme=dark] .ExploreRoundtableCard, html[data-theme=dark] .ExploreCollectionCard, html[data-theme=dark] .ExploreColumnCard, html[data-theme=dark] .RichText .lazy[data-lazy-status], html[data-theme=dark] #TopstoryContent > div:first-child, html[data-theme=dark] .Topstory-newUserFollowCountPanel, html[data-theme=dark] .AnswerForm-fullscreenContent .RichText, html[data-theme=dark] .Club-Search-Content, html[data-theme=dark] .WriteIndexLayout .Sticky {background: #2D333B !important;}
html[data-theme=dark] .CommentListV2-header-divider, html[data-theme=dark] .CommentsV2-openComment-divider, html[data-theme=dark] .AnswerForm-fullscreenScroller, html[data-theme=dark] .HotListNav-item, html[data-theme=dark] .AutoInviteItem-wrapper--desktop, html[data-theme=dark] .ExploreSpecialCard-contentTag, html[data-theme=dark] .ExploreCollectionCard-contentTypeTag, html[data-theme=dark] .Reward-TipjarDialog-tagLine, html[data-theme=dark] .AnswerForm-footer.useNewEditorSetting > div, html[data-theme=dark] .AnswerForm-fullscreenContent > div:first-child, html[data-theme=dark] .Editable-toolbar button:hover, html[data-theme=dark] .AuthorInfo.AnswerAdd-info + div {background-color: #222933 !important;}
html[data-theme=dark] .CornerButton:hover {background: #3f4752 !important;} /* 右下角按钮 */

/* 背景颜色 - 引用 */
html[data-theme=dark] .ztext blockquote {color: #768390 !important;border-left: 3px solid #3b3b3b !important;}

/* 背景颜色 - 卡片 */
html[data-theme=dark] .MCNLinkCard, html[data-theme=dark] .LinkCard-content, html[data-theme=dark] .ZVideoLinkCard-info {background-color: #22272e !important;}
html[data-theme=dark] .Post-content .MCNLinkCard, html[data-theme=dark] .Post-content .LinkCard-content, html[data-theme=dark] .Post-content .ZVideoLinkCard-info {background-color: #2D333B !important;}
html[data-theme=dark] .LinkCard-backdrop {background-image: url() !important;}

/* 背景颜色 - 头像 */
html[data-theme=dark] .Avatar, html[data-theme=dark] .UserAvatar {background-color: #2d333b !important;}
html[data-theme=dark] .UserAvatar {border: 4px solid #2d333b !important;}

/* 划词提示文字和背景颜色 */
html[data-theme=dark] .css-fg13ww {color: #adbac7 !important; background-color: #363d47 !important; border-radius: 10px !important;}

/* 通知信息中点评论链接时，在弹出的评论框中 "高亮" 目标评论 */
html[data-theme=dark] .CommentItemV2[tabindex='-1'] {background-color: #343a44 !important;}

/* 搜索框 */
html[data-theme=dark] .Input-wrapper.Input-wrapper--grey, html[data-theme=dark] .ChatSideBar-Search-Input input {background: #333a44 !important;}

/* 加载动画 */
html[data-theme=dark] .PlaceHolder-bg {background: -webkit-gradient(linear,left top,right top,from(#22272e),color-stop(20%,#2d333b),color-stop(40%,#22272e),to(#22272e)) !important;background: linear-gradient(90deg,#22272e 0,#2d333b 20%,#22272e 40%,#22272e) !important;}
html[data-theme=dark] .PlaceHolder-inner {background: #22272e !important;color: #2d333b !important;}

/* 私信 */
html[data-theme=dark] .Input-wrapper {background-color: #30363f !important;}
html[data-theme=dark] .TextMessage-sender, html[data-theme="dark"] .TextMessage-sender::after {background-color: #57616f !important;}
html[data-theme=dark] .TextMessage-receiver, html[data-theme="dark"] .TextMessage-receiver::after {background-color: #1e5fbf !important;}

html[data-theme=dark] .TextMessage-sender, html[data-theme=dark] .TextMessage-receiver {color: #dcdcdc !important;}
/*html[data-theme=dark] .MessagesBox::-webkit-scrollbar {width: 0px !important;height: 0px !important;}*/
html[data-theme=dark] .ToolBar, html[data-theme=dark] .Input-wrapper, html[data-theme=dark] .ClubTopPosts, html[data-theme=dark] .ChatSideBar-Search-Input input {border: none !important;}

html[data-theme=dark] .ChatBoxModal-closeIcon {fill: #8590a6 !important;}

/* 私信网页 */
html[data-theme=dark] .ChatUserListItem .Chat-ActionMenuPopover-Button {background: -webkit-gradient(linear,left top,right top,from(rgba(18,18,18,0)),color-stop(20%,#22272e)) !important;background: linear-gradient(90deg,rgba(18,18,18,0),#22272e 20%) !important;}
html[data-theme=dark] .css-1j6tmrz {border: 2px solid #2d333b !important;}

/* 选项鼠标指向时背景颜色 */
html[data-theme=dark] .Messages-item:hover, html[data-theme=dark] .GlobalSideBar-navLink:hover, html[data-theme=dark] .Menu-item.is-active, html[data-theme=dark] .ActionMenu-item:hover, html[data-theme=dark] .ChatUserListItem--active, html[data-theme=dark] .Messages-newItem {background-color: #272c33 !important;}
/* 通知 */
html[data-theme=dark] .PushNotifications-item a {color: #8ab5e0 !important;}

/* 封面大图/文章头部大图 */
html[data-theme=dark] img.UserCover-image, html[data-theme=dark] img.TitleImage {opacity: 0.7 !important;}
/* 其他图片 */
html[data-theme=dark] img {opacity: 0.8 !important;}
/* GIF 动图、放大图除外 */
html[data-theme=dark] .GifPlayer img, html[data-theme=dark] .ImageView-img, html[data-theme=dark]>body>img {opacity: 1 !important;}

/* 边框 */
html[data-theme=dark] .Topbar, html[data-theme=dark] .CommentsV2-footer, html[data-theme=dark] .Topstory-mainColumnCard .Card:not(.Topstory-tabCard), html[data-theme=dark] .NestComment:not(:last-child):after, html[data-theme=dark] .NestComment--rootComment:after, html[data-theme=dark] .NestComment .NestComment--child:after, html[data-theme=dark] .NestComment .NestComment--child:after, html[data-theme=dark] .CommentsV2-replyNum, html[data-theme=dark] .CommentItemV2:not(:first-child):after, html[data-theme=dark] .Tabs, html[data-theme=dark] .Popover-arrow:after, html[data-theme=dark] .SelfCollectionItem-innerContainer, html[data-theme=dark] .CollectionDetailPageItem-innerContainer {border-bottom: 1px solid #282d35 !important;}
html[data-theme=dark] .CommentEditorV2-inputWrap--active, html[data-theme=dark] .CommentEditorV2-inputWrap, html[data-theme=dark] .PostItem, html[data-theme=dark] .AnswerForm .Editable-toolbar, html[data-theme=dark] .Editable-toolbar span {border: none !important;}
html[data-theme=dark] .InputLike {border: 1px solid #424b56 !important;}
html[data-theme=dark] .Popover .InputLike {border: 1px solid #2d333b !important;}
html[data-theme=dark] .HotLanding-contentItem:not(:last-child) {border-bottom: 1px solid #424b56 !important;}
html[data-theme=dark] .HotLanding-content {border-left: 2px solid #424b56 !important;}

html[data-theme=dark] .Popover-content, html[data-theme=dark] .Popover-arrow:after {border: 1px solid #22272e !important;}

/* 滚动条 */
html[data-theme=dark] body::-webkit-scrollbar, html[data-theme="dark"] .MessagesBox::-webkit-scrollbar, html[data-theme="dark"] .Messages-list::-webkit-scrollbar, html[data-theme=dark] .PushNotifications-list::-webkit-scrollbar, html[data-theme=dark] .CommentListV2::-webkit-scrollbar, .ChatListGroup-SectionContent::-webkit-scrollbar, html[data-theme=dark] .ChatSideBar-Search-ResultListWrap::-webkit-scrollbar, html[data-theme=dark] .ChatBox textarea.Input::-webkit-scrollbar {width: 6px !important;height: 1px !important;}
html[data-theme=dark] body::-webkit-scrollbar-thumb, html[data-theme="dark"] .MessagesBox::-webkit-scrollbar-thumb, html[data-theme="dark"] .Messages-list::-webkit-scrollbar-thumb, html[data-theme=dark] .PushNotifications-list::-webkit-scrollbar-thumb, html[data-theme=dark] .CommentListV2::-webkit-scrollbar-thumb, .ChatListGroup-SectionContent::-webkit-scrollbar-thumb, html[data-theme=dark] .ChatSideBar-Search-ResultListWrap::-webkit-scrollbar-thumb, html[data-theme=dark] .ChatBox textarea.Input::-webkit-scrollbar-thumb {background: #3f4752 !important;}
html[data-theme=dark] body::-webkit-scrollbar-track {background: #22272e !important;}
html[data-theme=dark] .MessagesBox::-webkit-scrollbar-track, html[data-theme="dark"] .Messages-list::-webkit-scrollbar-track, html[data-theme=dark] .PushNotifications-list::-webkit-scrollbar-track, html[data-theme=dark] .CommentListV2::-webkit-scrollbar-track, .ChatListGroup-SectionContent::-webkit-scrollbar-track, html[data-theme=dark] .ChatSideBar-Search-ResultListWrap::-webkit-scrollbar-track, html[data-theme=dark] .ChatBox textarea.Input::-webkit-scrollbar-track {background: #2d333b !important;}

/* 滚动条 - 回答目录 */
html[data-theme=dark] .AnswerItem .RichContent-hasCatalog .RichContent-inner .Catalog.isCatalogV2::-webkit-scrollbar {width: 0 !important;}
html[data-theme=dark] .AnswerItem .RichContent-hasCatalog .RichContent-inner .Catalog.isCatalogV2 > :first-child {background: #2D333B !important;}

html {scrollbar-width: thin; scrollbar-color: #3f4752 #22272e;}
.MessagesBox, .Messages-list, .PushNotifications-list, .CommentListV2, .ChatListGroup-SectionContent, .ChatSideBar-Search-ResultListWrap {scrollbar-width: thin; scrollbar-color: #3f4752 #2D333B;}

/* 背景颜色 - 专栏/文章 */
html[data-theme=dark] .WhiteBg-body, html[data-theme=dark] .Post-content, html[data-theme=dark] .Post-Row-Content .Post-Row-Content-left {background: #22272E !important;}
html[data-theme=dark] .ColumnPageHeader, html[data-theme=dark] .BottomInfo {background: #1c2129 !important;}

/* 按钮颜色 */
.TopstoryTabs-link.is-active, html[data-theme=dark] .TopstoryTabs-link.is-active, html[data-theme=dark] .VoteButton, .Tag, html[data-theme=dark] .Tag, html[data-theme=dark] .HotListNav-item.is-active, html[data-theme=dark] .RichText a.UserLink-link {color: #3faaff !important;}
/*html[data-theme=dark] .Tabs-link.is-active:after {background: #2196F3 !important;}*/
html[data-theme=dark] .Reward-rewardBtn, html[data-theme=dark] .SearchBar-searchIcon.hasValue, html[data-theme=dark] .Chat-UnreadCount, html[data-theme=dark] .Payment-CheckedButton {color: #ffffff !important;}

/* 关闭查看回复时的高闪 */
html[data-theme=dark] .CommentItemV2--highlighted {-webkit-animation: nano !important;animation: nano !important;}

/* 赞赏 */
html[data-theme=dark] .Reward-TipjarDialog-amountList .Button--red, html[data-theme=dark] .Reward-TipjarDialog-amountList .Button--red, html[data-theme=dark] .Reward-TipjarDialog-amountInput .SimpleInput {color: #d3d3d3 !important; background-color: #353b44 !important; border: none !important;}

/* 赞同 */
html[data-theme=dark] .VoteButton.is-active {color: #d6edff !important;}

/* 创作中心 - 分析图表 */
html[data-theme=dark] .CreatorSection-body .AnalyticsChart text {fill: #adbac7 !important;}
`,
            style_darkMode_1_x = `/* 问题日志页 */
html[data-theme=dark] .zu-top {background: #2D333B !important;border: none !important;}
html[data-theme=dark] .zm-tag-editor-labels.zg-clear a {background: rgba(51,119,255,.1) !important;}
html[data-theme=dark] .zu-main {background: #2D333B !important;padding-left: 20px;padding-right: 20px;}
html[data-theme=dark] .zm-item+.zm-item {border-top: 1px solid #424b56;}
html[data-theme=dark] a {color: #D4E5F4 !important;}
html[data-theme=dark] ins, html[data-theme=dark] ins a {color: #009688 !important;}
html[data-theme=dark] del a {color: #E91E63 !important;}
html[data-theme=dark] div#zh-hovercard a {color: #353535 !important;}
            `,
            style_darkMode_2 = `/* 暗黑模式（方案 2） */
html {filter: invert(90%) !important; text-shadow: 0 0 0 !important;}
html[data-theme=light] body.ZVideo-body {background-color: #fff;}
img, .ZVideoItem-video, .ZVideo-video, .VideoAnswerPlayer-video {filter: invert(1) !important;}
.css-5ym188, body>div>div>span+div>div[style='opacity: 1;'] {background-color: rgba(255, 255, 255, 0.65) !important;}
.GifPlayer img, .GifPlayer.isPlaying video {filter: invert(1) !important;}
.GifPlayer.isPlaying img.ztext-gif.GifPlayer-gif2mp4Image, img[alt="[公式]"] {filter: none !important;}
`,
            style_darkMode_2_firefox = `/* 暗黑模式（方案 2） */
html {filter: invert(90%) !important; background-image: url(); text-shadow: 0 0 0 !important;}
html[data-theme=light] body.ZVideo-body {background-color: #fff;}
img, .ZVideoItem-video, .ZVideo-video, .VideoAnswerPlayer-video {filter: invert(1) !important;}
.GifPlayer img, .GifPlayer.isPlaying video {filter: invert(1) !important;}
.GifPlayer.isPlaying img.ztext-gif.GifPlayer-gif2mp4Image {filter: none !important;}
`,
            style_darkMode_3 = `/* 暗黑模式（方案 3） */
html {filter: brightness(70%) !important;}
`,
            style_darkMode_3_firefox = `/* 暗黑模式（方案 3） */
html {filter: brightness(70%) !important; background-image: url();}
`,
            style_darkMode_4 = `/* 暗黑模式（方案 4） */
html {filter: brightness(65%) sepia(30%) !important;}
`,
             style_darkMode_4_firefox = `/* 暗黑模式（方案 4） */
html {filter: brightness(65%) sepia(30%) !important; background-image: url();}
`
        let style_Add = document.getElementById('zhihu-beautify-style');
        if (!style_Add) {
            style_Add = document.createElement('style');
            style_Add.id = 'zhihu-beautify-style';
            (document.head || document.documentElement).appendChild(style_Add);
        }



        // 如果开启了 [暗黑模式]
        if (menu_value('menu_darkMode')) {
            // firefox 浏览器
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                style_darkMode_2 = style_darkMode_2_firefox
                style_darkMode_3 = style_darkMode_3_firefox
                style_darkMode_4 = style_darkMode_4_firefox
            }

            {
                // 如果暗黑模式为 1
                if (menu_value('menu_darkModeType') === 1) {
                    // 如果当前知乎主题为白天模式，那就是改为暗黑模式
                    if (getTheme() === 'light') {
                        setTheme('dark');
                    }
                    // 如果是问题日志页，则改为暗黑模式
                    if (location.pathname.indexOf('/log') > -1) {
                        document.documentElement.setAttribute('data-theme', 'dark');
                        style_darkMode_1 += style_darkMode_1_x;
                    }
                } else { // 如果是其他暗黑模式，则需要确保为白天模式
                    if (getTheme() === 'dark') {
                        setTheme('light');
                    }
                }
                switch(menu_value('menu_darkModeType')) {
                    case 1:
                        if (!(location.hostname.indexOf('zhuanlan') > -1 && (location.pathname.indexOf('/edit') > -1 || location.pathname.indexOf('/write') > -1))) style += style_darkMode_1;
                        break;
                    case 2:
                        style += style_darkMode_2;
                        break;
                    case 3:
                        style += style_darkMode_3;
                        break;
                    case 4:
                        style += style_darkMode_4;
                        break;
                }
            }
        } else {
            if (getTheme() === 'dark'){
                setTheme('light');
            }
        }

        if (location.pathname === '/' || location.pathname === '/hot' || location.pathname === '/follow') style += style_index;
        if (menu_value('menu_darkMode') && menu_value('menu_darkModeType') === 1 && (location.pathname.indexOf('/special/') > -1 || location.pathname.indexOf('/pub/') > -1)) style += style_darkMode_2 + 'video {filter: invert(1) !important;}';

        // 宽屏显示
        if (isHome() && menu_value('menu_widescreenDisplayIndex')) style += style_widescreenDisplayIndex;
        if (menu_value('menu_widescreenDisplayQuestion') && location.pathname.indexOf('/question/') > -1) style += style_widescreenDisplayQuestion;
        if (menu_value('menu_widescreenDisplaySearch') && (location.pathname === '/search' || location.pathname.indexOf('/club/') > -1 || location.pathname.indexOf('/topic/') > -1)) style += style_widescreenDisplaySearch;
        if (menu_value('menu_widescreenDisplayCollection') && location.pathname.indexOf('/collection/') > -1) style += style_widescreenDisplayCollection;
        if (menu_value('menu_widescreenDisplayPost') && location.hostname.indexOf('zhuanlan') > -1 && (location.pathname.indexOf('/edit') === -1 || location.pathname.indexOf('/write') === -1)) style += style_widescreenDisplayPost;
        if (menu_value('menu_widescreenDisplayPeople') && location.pathname.indexOf('/people/') > -1) style += style_widescreenDisplayPeople;

        // 调整图片最大高度
        if (menu_value('menu_picHeight')) style += style_4;
        // 隐藏文章开头大图
        if (menu_value('menu_postimg')) style += style_2;

        style += leanStyles();
        if (style_Add.textContent !== style) style_Add.textContent = style;
    }

    function isHome() {
        return location.hostname === 'www.zhihu.com' && /^\/(?:hot|follow)?\/?$/.test(location.pathname);
    }

    function isWideLayout() {
        if (isHome()) return !!menu_value('menu_widescreenDisplayIndex');
        if (location.pathname.startsWith('/question/')) return !!menu_value('menu_widescreenDisplayQuestion');
        if (location.pathname === '/search' || location.pathname.startsWith('/topic/')) return !!menu_value('menu_widescreenDisplaySearch');
        return false;
    }

    // 用语义节点识别布局，不依赖每次构建都可能改变的 css-* 类名。
    function updateLeanLayout() {
        const root = document.documentElement;
        const header = document.querySelector('header.LeanAppHeaderBar, header.AppHeader');
        document.querySelectorAll('[data-zb-header-host]').forEach(el => {
            if (el !== header && el !== header?.parentElement) el.removeAttribute('data-zb-header-host');
        });
        if (header) {
            const host = getComputedStyle(header.parentElement).position === 'fixed' ? header.parentElement : header;
            host.setAttribute('data-zb-header-host', '');
        }
        root.toggleAttribute('data-zb-lean', !!document.querySelector('header.LeanAppHeaderBar'));
        root.toggleAttribute('data-zb-hide-left', !menu_value('menu_showLeftNav'));
        root.toggleAttribute('data-zb-hide-articles', isHome() && !!menu_value('menu_hideArticles'));
        document.querySelectorAll('.TopstoryItem').forEach(card => {
            const title = card.querySelector('.ContentItem-title a[href]');
            let article = !!card.querySelector('.ContentItem.ArticleItem');
            if (title) {
                const url = new URL(title.href, location.href);
                article ||= url.hostname === 'zhuanlan.zhihu.com' && /^\/p\//.test(url.pathname);
            }
            card.toggleAttribute('data-zb-article', article);
        });
        document.querySelectorAll('aside').forEach(el => {
            if ([...el.querySelectorAll('nav a')].some(a => new URL(a.href, location.href).pathname === '/')) el.setAttribute('data-zb-leftnav', '');
        });
        root.toggleAttribute('data-zb-home-wide', isHome() && !!menu_value('menu_widescreenDisplayIndex'));
        root.toggleAttribute('data-zb-wide-layout', isWideLayout());
        root.toggleAttribute('data-zb-question', location.pathname.startsWith('/question/'));
        root.toggleAttribute('data-zb-topic', location.pathname.startsWith('/topic/'));
        root.style.setProperty('--zb-width', `${GM_getValue('menu_widescreenDisplayWidth')}px`);
        document.querySelectorAll('.Topstory-container').forEach(container => {
            [...container.children].forEach(el => {
                // 新版侧栏是主列的直接兄弟，并包含明确的创作者/广告侧栏节点。
                if (!el.matches('.Topstory-mainColumn') && el.querySelector('.GlobalSideBar-creator, .CreatorEntrance, [data-za-detail-view-path-module="RightSideBar"]')) {
                    el.setAttribute('data-zb-sidebar', '');
                }
            });
        });
        document.querySelectorAll('.AnswerItem > div[tabindex="0"]').forEach(el => {
            if ([...el.querySelectorAll('button')].some(button => button.textContent.includes('更多评论'))) el.setAttribute('data-zb-hot-comment', '');
        });
        if (!isWideLayout() || !root.hasAttribute('data-zb-lean')) return;
        const main = document.querySelector('main.App-main');
        const row = main?.parentElement?.parentElement;
        const shell = row?.parentElement;
        // 只有确认这是带左侧导航的布局，才处理容器宽度。
        if (!shell || ![...shell.children].some(el => el.tagName === 'ASIDE' && el.querySelector('nav'))) return;
        shell.setAttribute('data-zb-shell', '');
        [...shell.children].forEach(el => {
            if (el !== row && el.tagName !== 'ASIDE' && !el.childElementCount && !el.textContent.trim()) el.setAttribute('data-zb-spacer', '');
        });
        row.setAttribute('data-zb-row', '');
        [...row.children].forEach(el => {
            if (el.tagName === 'ASIDE' && location.pathname.startsWith('/topic/')) el.setAttribute('data-zb-topic-sidebar', '');
        });
        main.parentElement.setAttribute('data-zb-main-wrap', '');
        const content = main.querySelector('.Topstory, .QuestionPage, [data-za-detail-view-path-module="TopicItem"], .Search-container');
        for (let el = content?.parentElement; el && el !== main; el = el.parentElement) {
            el.setAttribute('data-zb-main-wrap', '');
        }
        const questionColumn = main.querySelector('.Question-mainColumn');
        if (questionColumn) {
            for (let el = questionColumn.parentElement; el && !el.matches('.QuestionPage') && el !== main; el = el.parentElement) {
                el.setAttribute('data-zb-question-wrap', '');
            }
        }
    }

    function leanStyles() {
        return `
/* 2026 新版首页：保留左导航和发布入口，内容区域自适应。 */
html[data-zb-home-wide] .Topstory {width: 100% !important; min-width: 0 !important;}
html[data-zb-home-wide] .Topstory-container {width: 100% !important; max-width: var(--zb-width) !important; margin-inline: auto !important; box-sizing: border-box;}
html[data-zb-wide-layout][data-zb-lean] [data-zb-row] {flex: 1 1 0% !important; width: 0 !important; min-width: 0 !important;}
html[data-zb-wide-layout][data-zb-lean] [data-zb-shell] {padding-inline: 20px; box-sizing: border-box;}
html[data-zb-wide-layout][data-zb-lean] [data-zb-spacer] {display: none !important;}
html[data-zb-hide-left] [data-zb-leftnav] {display: none !important;}
html[data-zb-hide-articles] .TopstoryItem[data-zb-article] {display: none !important;}
html[data-zb-topic][data-zb-wide-layout] [data-zb-topic-sidebar] {display: none !important;}
html[data-zb-topic][data-zb-wide-layout][data-zb-lean] main > [data-za-detail-view-path-module=TopicItem] {width: 100% !important; max-width: var(--zb-width); margin-inline: auto; padding-inline: 20px; box-sizing: border-box;}
html[data-zb-topic][data-zb-wide-layout][data-zb-lean] [data-za-detail-view-path-module=TopicItem] > div,
html[data-zb-topic][data-zb-wide-layout][data-zb-lean] [data-za-detail-view-path-module=TopicItem] .ListShortcut {width: 100% !important; min-width: 0 !important; box-sizing: border-box;}
html[data-zb-topic][data-zb-lean] .Card {border-radius: 16px !important;}
html[data-zb-wide-layout][data-zb-lean] [data-zb-main-wrap],
html[data-zb-wide-layout][data-zb-lean] main.App-main {width: 100% !important; min-width: 0 !important; max-width: none !important;}
html[data-zb-home-wide][data-zb-lean] .Topstory-mainColumn {padding-inline: 20px !important;}
html[data-zb-home-wide][data-zb-lean] .Topstory-mainColumnCard {width: 100% !important;}
html[data-zb-lean] .LeanAppHeaderBar > div {width: 100% !important; margin-inline: 0 !important; box-sizing: border-box; padding-inline: 24px !important;}
html[data-zb-lean] .ContentItem-actions {margin: 0 !important; flex-wrap: wrap;}
html[data-zb-lean] .RichContent-inner, html[data-zb-lean] .ContentItem-title {overflow-wrap: anywhere;}
html[data-zb-lean] .WriteArea {box-sizing: border-box; max-width: 100%;}
html[data-zb-lean] .TopstoryItem {border-radius: 16px !important; padding: 20px !important; margin-bottom: 14px !important; box-sizing: border-box; border: 1px solid rgba(133,144,166,.12);}
html[data-zb-lean] .WriteArea {border-radius: 16px !important;}
html[data-zb-lean] .Topstory :is(.Topstory-mainColumnCard,.Topstory-content,.Topstory-recommend,.Topstory-follow,.ListShortcut),
html[data-zb-lean] .Topstory #TopstoryContent,
html[data-zb-lean] .Topstory #TopstoryContent > div:first-child {background: transparent !important; box-shadow: none !important;}
html[data-zb-lean] .TopstoryItem .ContentItem-title {margin: 0 0 10px !important; line-height: 1.5;}
html[data-zb-lean] .TopstoryItem .RichContent-inner {line-height: 1.8;}
/* 只隐藏看山狗入口，保留正常的回到顶部等工具。 */
.KanshanCornerButton, .CornerAnimayedFlex--kanshanEntry {display: none !important;}
/* 回答间文字链广告、侧栏广告和信息流广告。 */
.pc-article-answer-text-chain, .Pc-card.Card, .TopstoryItem--advertCard,
.Pc-Business-Card-PcTopFeedBanner, .Topstory-advertCard, .Pc-feedAd-container {display: none !important;}
html[data-zb-question][data-zb-wide-layout][data-zb-lean] .QuestionPage {width: 100% !important; max-width: var(--zb-width); margin-inline: auto;}
html[data-zb-question][data-zb-wide-layout][data-zb-lean] [data-zb-question-wrap] {width: 100% !important; min-width: 0 !important; max-width: none !important; box-sizing: border-box;}
html[data-zb-question][data-zb-wide-layout][data-zb-lean] .Question-mainColumn {width: 100% !important; min-width: 0 !important; max-width: 1120px !important; margin-inline: auto !important;}
html[data-zb-question][data-zb-lean] .Question-mainColumn .Card {border-radius: 16px !important;}
html[data-zb-question][data-zb-lean] .Question-mainColumn .AnswerItem {padding: 22px 24px; box-sizing: border-box;}
html[data-zb-question][data-zb-lean] .Question-mainColumn .RichContent-inner {font-size: 17px; line-height: 1.85; overflow-wrap: anywhere;}
html[data-zb-question][data-zb-lean] .Question-mainColumn .RichContent-inner img {max-width: 100%; height: auto;}
html[data-zb-lean][data-theme=dark] body {background: #22272e !important; color: #adbac7 !important;}
html[data-zb-lean][data-theme=dark] [data-zb-header-host],
html[data-zb-lean][data-theme=dark] .LeanAppHeaderBar,
html[data-zb-lean][data-theme=dark] aside nav,
html[data-zb-lean][data-theme=dark] .WriteArea,
html[data-zb-lean][data-theme=dark] .TopstoryItem {background: #2d333b !important; color: #adbac7 !important; border-color: #444c56 !important;}
html[data-zb-lean][data-theme=dark] .Topstory .ContentItem-title a {color: #c4cfda !important;}
html[data-zb-lean][data-theme=dark] header nav a,
html[data-zb-lean][data-theme=dark] [data-zb-leftnav] nav a {color: #adbac7 !important;}
html[data-zb-lean][data-theme=dark] header nav a[aria-current=page] {color: #5898ff !important;}
html[data-zb-lean][data-theme=dark] .WriteArea [class] {color: inherit;}
/* 新评论组件大量使用构建类名；以稳定的评论根节点约束配色。 */
html[data-theme=dark] .Comments-container,
html[data-theme=dark] [data-zb-hot-comment] {background: #252c35 !important; color: #e6edf3 !important; border-color: #444c56 !important; border-radius: 12px;}
html[data-theme=dark] .Comments-container :is(div,span,p,a,button,label,h2,h3,section),
html[data-theme=dark] [data-zb-hot-comment] :is(div,span,p,a,button) {color: #e6edf3 !important; border-color: #444c56 !important;}
html[data-theme=dark] .Comments-container div,
html[data-theme=dark] [data-zb-hot-comment] div {background-color: transparent !important;}
html[data-theme=dark] .Comments-container .CommentContent,
html[data-theme=dark] .Comments-container .CommentContent :is(p,span) {color: #e6edf3 !important; line-height: 1.75;}
html[data-theme=dark] .Comments-container a[href*="/people/"],
html[data-theme=dark] [data-zb-hot-comment] a[href*="/people/"] {color: #f0f6fc !important; font-weight: 600;}
html[data-theme=dark] .Comments-container .CommentContent a,
html[data-theme=dark] .RichContent .RichText a {color: #79b8ff !important;}
html[data-theme=dark] .Comments-container :is(time,small),
html[data-theme=dark] .Comments-container div:has(> .CommentContent) > div:last-child,
html[data-theme=dark] .Comments-container div:has(> .CommentContent) > div:last-child :is(span,button) {color: #aab7c8 !important;}
html[data-theme=dark] .Comments-container :is(input,textarea,[contenteditable=true]) {background: #22272e !important; color: #e6edf3 !important; caret-color: #e6edf3; border-color: #596574 !important;}
html[data-theme=dark] .Comments-container .Button--secondary {background: #343d49 !important; color: #dce6f0 !important;}
html[data-theme=dark] .Comments-container .Button--primary {background: #2f6feb !important; color: #fff !important;}
html[data-theme=dark] .QuestionPage a[href*="/topic/"]:has(img) {background: #2d333b !important; border: 1px solid #444c56; border-radius: 12px;}
html[data-theme=dark] .QuestionPage a[href*="/topic/"]:has(img) :is(div,span,strong) {color: #dce6f0 !important;}
html[data-theme=dark] .LeanAppHeaderBar :is(.Messages-icon,.Notifications-icon) {color: #bdc9d8 !important;}
[data-zb-header-host] {transition: transform .18s ease !important;}
html[data-zb-header-hidden] [data-zb-header-host]:not(:focus-within):not(:hover) {transform: translateY(-110%) !important; pointer-events: none;}
@media (max-width: 700px) {
    html[data-zb-home-wide][data-zb-lean] .Topstory-mainColumn {padding-inline: 8px !important;}
    html[data-zb-lean] .LeanAppHeaderBar > div {padding-inline: 12px !important;}
}
@media (prefers-reduced-motion: reduce) {[data-zb-header-host] {transition: none !important;}}
`;
    }

    function hideTitle() {
        if (hideTitle.started) return;
        hideTitle.started = true;
        let previous = window.scrollY, pending = false;
        window.addEventListener('scroll', () => {
            if (pending) return;
            pending = true;
            requestAnimationFrame(() => {
                pending = false;
                const current = window.scrollY, delta = current - previous;
                if (!menu_value('menu_hideTitle') || current < 80 || delta < -4) {
                    document.documentElement.removeAttribute('data-zb-header-hidden');
                } else if (delta > 4 && !document.activeElement?.closest('header')) {
                    document.documentElement.setAttribute('data-zb-header-hidden', '');
                }
                if (Math.abs(delta) > 4 || current < 80) previous = current;
            });
        }, {passive: true});
    }

    function getTheme() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    }

    // 只修改页面主题，不写 Cookie、不刷新，避免干扰正在阅读的内容。
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }


    // 自定义 urlchange 事件（用来监听 URL 变化）
    function addUrlChangeEvent() {
        history.pushState = ( f => function pushState(){
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('pushstate'));
            window.dispatchEvent(new Event('urlchange'));
            return ret;
        })(history.pushState);

        history.replaceState = ( f => function replaceState(){
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('replacestate'));
            window.dispatchEvent(new Event('urlchange'));
            return ret;
        })(history.replaceState);

        window.addEventListener('popstate',()=>{
            window.dispatchEvent(new Event('urlchange'))
        });
    }
})();
