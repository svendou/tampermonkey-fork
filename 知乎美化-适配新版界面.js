// ==UserScript==
// @name         知乎美化 · 2026 首页适配
// @version      0.1.1
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
        ['menu_widescreenDisplay', '宽屏显示', '选择需要宽屏显示的页面，修改后立即生效并自动保存。', ''],
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
    document.addEventListener('selectionchange', scheduleUpdate);
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
        const existing = document.querySelector('dialog.zhihuE_SettingRoot');
        if (existing) { existing.querySelector('.zhihuE_SettingClose').focus(); return; }
        const previousFocus = document.activeElement;
        const style = document.createElement('style');
        style.className = 'zhihuE_SettingStyle';
        style.textContent = `
.zhihuE_SettingRoot {--zb-setting-bg:#fff;--zb-setting-text:#283747;--zb-setting-muted:#526476;--zb-setting-line:#d4dce5;--zb-setting-input:#f4f7fa;color-scheme:light;box-sizing:border-box;width:480px;max-width:calc(100vw - 32px);max-height:calc(100dvh - 32px);margin:auto;padding:0;overflow:auto;border:1px solid var(--zb-setting-line);border-radius:16px;background:var(--zb-setting-bg);color:var(--zb-setting-text);box-shadow:0 16px 48px rgba(0,0,0,.24);font:14px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI","Microsoft YaHei",sans-serif;}
.zhihuE_SettingRoot::backdrop {background:rgba(13,19,27,.65);}
.zhihuE_SettingHeader {display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 22px 12px;}
.zhihuE_SettingHeader h2 {margin:0;font-size:19px;font-weight:650;color:inherit;}
.zhihuE_SettingClose {display:grid;place-items:center;flex:none;width:36px;height:36px;padding:0;border:0;border-radius:9px;background:transparent;color:var(--zb-setting-muted);cursor:pointer;}
.zhihuE_SettingClose:hover {background:var(--zb-setting-input);color:var(--zb-setting-text);}
.zhihuE_SettingMain {padding:0 22px 22px;}
.zhihuE_SettingMain > p {margin:0 0 14px;color:var(--zb-setting-muted);font-size:13px;}
.zhihuE_SettingOption {display:flex;align-items:center;gap:12px;min-height:42px;padding:3px 0;cursor:pointer;}
.zhihuE_SettingOption input {flex:none;width:17px;height:17px;margin:0;accent-color:#2f6feb;cursor:pointer;}
.zhihuE_SettingWidth {display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-top:14px;padding-top:18px;border-top:1px solid var(--zb-setting-line);}
.zhihuE_SettingWidth small {display:block;margin-top:2px;color:var(--zb-setting-muted);font-size:12px;}
.zhihuE_SettingWidth input {box-sizing:border-box;width:108px;max-width:100%;min-height:38px;padding:6px 10px;border:1px solid var(--zb-setting-line);border-radius:8px;background:var(--zb-setting-input);color:var(--zb-setting-text);font:inherit;font-variant-numeric:tabular-nums;}
.zhihuE_SettingRoot :is(button,input):focus-visible {outline:2px solid #5898ff;outline-offset:3px;}
[data-theme=dark] .zhihuE_SettingRoot {--zb-setting-bg:#2d333b;--zb-setting-text:#c6d0dc;--zb-setting-muted:#9baabd;--zb-setting-line:#46515f;--zb-setting-input:#252c34;color-scheme:dark;}
@media(max-width:480px) {.zhihuE_SettingHeader {padding:16px 18px 10px;}.zhihuE_SettingMain {padding:0 18px 18px;}.zhihuE_SettingOption {min-height:44px;}}
`;
        document.head.append(style);
        const dialog = document.createElement('dialog');
        dialog.className = 'zhihuE_SettingRoot';
        dialog.setAttribute('aria-labelledby', 'zb-setting-title');
        dialog.setAttribute('aria-describedby', 'zb-setting-description');
        dialog.innerHTML = `<div class="zhihuE_SettingHeader"><h2 id="zb-setting-title">${title}</h2><button type="button" class="zhihuE_SettingClose" aria-label="关闭设置" autofocus><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div><div class="zhihuE_SettingMain"><p id="zb-setting-description">${tips}</p>${menu.map(item => item[0] === 'menu_widescreenDisplayWidth'
            ? `<label class="zhihuE_SettingWidth"><span>宽屏最大宽度<small id="zb-setting-width-help">640–2400 px，随窗口自动缩小</small></span><input name="${item[0]}" type="number" min="640" max="2400" step="1" inputmode="numeric" aria-describedby="zb-setting-width-help" value="${GM_getValue(item[0])}"></label>`
            : `<label class="zhihuE_SettingOption"><input name="zhihuE_Setting_Checkbox" type="checkbox" value="${item[0]}" ${GM_getValue(item[0]) ? 'checked' : ''}><span>${item[1]}</span></label>`).join('')}</div>`;
        document.body.append(dialog);
        const close = () => dialog.close();
        dialog.querySelector('.zhihuE_SettingClose').addEventListener('click', close);
        dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
        dialog.addEventListener('click', event => {
            if (event.target !== dialog) return;
            const rect = dialog.getBoundingClientRect();
            if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
        });
        dialog.addEventListener('close', () => {
            dialog.remove(); style.remove();
            if (previousFocus?.isConnected) previousFocus.focus({preventScroll:true});
        }, {once:true});
        dialog.querySelectorAll('input[type=checkbox]').forEach(input => {
            input.addEventListener('change', () => {GM_setValue(input.value, input.checked);registerMenuCommand();addStyle();});
        });
        dialog.querySelector('input[type=number]')?.addEventListener('change', event => {
            const input = event.currentTarget;
            const width = Math.round(Math.min(2400, Math.max(640, Number(input.value) || 1440)));
            input.value = String(width);
            GM_setValue(input.name, input.value);registerMenuCommand();addStyle();
        });
        dialog.showModal();
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
        hideSelectionToolbar();
        prepareAnswerCards();
        prepareComments();
        const heading = document.querySelector('.QuestionPage h1');
        if (heading) {
            const panel = heading.parentElement;
            panel.setAttribute('data-zb-question-heading', '');
            const tags = panel.querySelector('.TopicLink')?.closest('.Tag')?.parentElement;
            if (tags) tags.setAttribute('data-zb-question-tags', '');
            const operations = [...panel.children].find(el => el.querySelector('.QuestionHeader-Comment'));
            if (operations) {
                operations.setAttribute('data-zb-question-operations', '');
                const secondary = operations.querySelector('.QuestionHeader-Comment')?.parentElement;
                if (secondary && secondary !== operations) {
                    secondary.setAttribute('data-zb-question-secondary', '');
                    [...secondary.children].forEach(el => {
                        if (el.tagName === 'SPAN' && !el.querySelector('button,a,input')) el.setAttribute('data-zb-question-stat', '');
                    });
                }
            }
        }
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
            if (el.textContent.includes('更多评论') && el.querySelector('a[href*="/people/"]')) el.setAttribute('data-zb-hot-comment', '');
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

    function hideSelectionToolbar() {
        // 只识别带复制、喜欢、评论和 AI 解释的划词工具条，不拦截文字选择。
        document.querySelectorAll('svg.ZDI--Repeat24').forEach(icon => {
            let target = null;
            for (let el = icon.parentElement, depth = 0; el && depth < 6; el = el.parentElement, depth++) {
                const text = el.textContent.replace(/\s/g, '');
                if (text.length > 80) break;
                if (text.includes('复制') && text.includes('喜欢') && text.includes('评论') && text.includes('AI解释')) target = el;
            }
            if (target) target.setAttribute('data-zb-selection-toolbar', '');
        });
    }

    function prepareAnswerCards() {
        document.querySelectorAll('.Question-mainColumn .AnswerItem').forEach(answer => {
            const card = answer.closest('.List-item') || answer.closest('.AnswerCard') || answer;
            card.setAttribute('data-zb-answer-card', '');
            for (let el = card.parentElement; el && !el.matches('.Question-mainColumn'); el = el.parentElement) {
                el.setAttribute('data-zb-answer-list', '');
            }
            prepareAnswerFold(answer);
        });
    }

    function prepareComments() {
        document.querySelectorAll('.Comments-container .CommentContent').forEach(content => {
            const body = content.parentElement;
            const row = body.parentElement;
            body.setAttribute('data-zb-comment-body', '');
            row.setAttribute('data-zb-comment-row', '');
            if (body.firstElementChild !== content) body.firstElementChild.setAttribute('data-zb-comment-author', '');
            if (body.lastElementChild !== content) body.lastElementChild.setAttribute('data-zb-comment-meta', '');
            let list = null;
            for (let el = row.parentElement; el && !el.matches('.Comments-container'); el = el.parentElement) {
                const children = [...el.children].filter(child => child.querySelector('.CommentContent') || child.textContent.trim());
                if (children.length > 1 && children.every(child => child.querySelector('.CommentContent'))) list = el;
            }
            if (list) [...list.children].filter(group => group.querySelector('.CommentContent')).forEach(group => group.setAttribute('data-zb-comment-group', ''));
        });
    }

    function prepareAnswerFold(answer) {
        const inner = answer.querySelector('.RichContent-inner');
        const rich = inner?.closest('.RichContent');
        if (!inner || !rich || rich.classList.contains('is-collapsed') || inner.isContentEditable) return;
        let button = rich.querySelector(':scope > .zb-answer-toggle');
        // 使用正文实际高度判断，图片加载后再检查；不重复创建展开按钮。
        if (!button && inner.scrollHeight > 720) {
            if (!inner.id) {
                prepareAnswerFold.nextId = (prepareAnswerFold.nextId || 0) + 1;
                inner.id = `zb-answer-body-${prepareAnswerFold.nextId}`;
            }
            inner.setAttribute('data-zb-folded', '');
            button = document.createElement('button');
            button.type = 'button';
            button.className = 'zb-answer-toggle';
            button.textContent = '展开完整回答';
            button.setAttribute('aria-controls', inner.id);
            button.setAttribute('aria-expanded', 'false');
            const actions = rich.querySelector(':scope > .ContentItem-actions');
            rich.insertBefore(button, actions);
            button.addEventListener('click', () => {
                const wasExpanded = button.getAttribute('aria-expanded') === 'true';
                inner.toggleAttribute('data-zb-folded', wasExpanded);
                button.setAttribute('aria-expanded', String(!wasExpanded));
                button.textContent = wasExpanded ? '展开完整回答' : '收起回答';
                syncAnswerFoldAccess(inner);
                if (wasExpanded && inner.getBoundingClientRect().top < 0) {
                    answer.scrollIntoView({block: 'start'});
                }
            });
        }
        prepareAnswerFold.observed ||= new WeakSet();
        if (!prepareAnswerFold.observed.has(inner)) {
            prepareAnswerFold.observer ||= new ResizeObserver(() => scheduleUpdate());
            prepareAnswerFold.observer.observe(inner);
            prepareAnswerFold.observed.add(inner);
        }
        if (button) syncAnswerFoldAccess(inner);
    }

    // 仅让裁切线下的节点退出辅助阅读和 Tab 顺序，保留可见摘要中的链接。
    function syncAnswerFoldAccess(inner) {
        syncAnswerFoldAccess.saved ||= new WeakMap();
        const previous = syncAnswerFoldAccess.saved.get(inner);
        previous?.forEach((attributes, el) => {
            for (const [name, value] of Object.entries(attributes)) {
                if (value === null) el.removeAttribute(name);
                else el.setAttribute(name, value);
            }
        });
        syncAnswerFoldAccess.saved.delete(inner);
        if (!inner.hasAttribute('data-zb-folded')) return;
        const limit = inner.getBoundingClientRect().bottom;
        const saved = new Map();
        const remember = (el, name, value) => {
            if (!saved.has(el)) saved.set(el, {});
            const attributes = saved.get(el);
            if (!(name in attributes)) attributes[name] = el.getAttribute(name);
            el.setAttribute(name, value);
        };
        const visit = el => {
            const rect = el.getBoundingClientRect();
            if (!rect.width && !rect.height) return;
            if (rect.top >= limit - 1) {
                remember(el, 'inert', '');
                remember(el, 'aria-hidden', 'true');
                return;
            }
            if (rect.bottom > limit) [...el.children].forEach(visit);
        };
        [...inner.children].forEach(visit);
        inner.querySelectorAll('a[href],button,input,select,textarea,[tabindex],[contenteditable=true]').forEach(el => {
            if (el.getBoundingClientRect().bottom > limit && !el.closest('[inert]')) remember(el, 'tabindex', '-1');
        });
        syncAnswerFoldAccess.saved.set(inner, saved);
        if (!syncAnswerFoldAccess.listened) syncAnswerFoldAccess.listened = new WeakSet();
        if (!syncAnswerFoldAccess.listened.has(inner)) {
            inner.addEventListener('focusin', event => {
                if (inner.hasAttribute('data-zb-folded') && event.target.getBoundingClientRect().bottom > inner.getBoundingClientRect().bottom) {
                    inner.closest('.RichContent')?.querySelector(':scope > .zb-answer-toggle')?.click();
                }
            });
            syncAnswerFoldAccess.listened.add(inner);
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
/* 划词浮条的当前结构直接屏蔽；语义识别兼容构建类名变化。 */
[data-zb-selection-toolbar], .css-1qgg1gw:has(.ZDI--Repeat24):has(.ZDI--Heart24):has(.ZDI--ChatBubble24) {display: none !important;}
/* 回答间文字链广告、侧栏广告和信息流广告。 */
.pc-article-answer-text-chain, .pc-article-answer-big-img, .Pc-card.Card, .TopstoryItem--advertCard,
.Pc-Business-Card-PcTopFeedBanner, .Topstory-advertCard, .Pc-feedAd-container {display: none !important;}
html[data-zb-question][data-zb-wide-layout][data-zb-lean] .QuestionPage {width: 100% !important; max-width: var(--zb-width); margin-inline: auto;}
html[data-zb-question][data-zb-wide-layout][data-zb-lean] [data-zb-question-wrap] {width: 100% !important; min-width: 0 !important; max-width: none !important; box-sizing: border-box;}
html[data-zb-question][data-zb-wide-layout][data-zb-lean] .Question-mainColumn {width: 100% !important; min-width: 0 !important; max-width: 1120px !important; margin-inline: auto !important;}
html[data-zb-question][data-zb-lean] .Question-mainColumn .Card {border-radius: 16px !important;}
html[data-zb-question][data-zb-lean] .Question-mainColumn .AnswerItem {padding: 22px 24px; box-sizing: border-box;}
html[data-zb-question][data-zb-lean] .Question-mainColumn .RichContent-inner {font-size: 17px; line-height: 1.85; overflow-wrap: anywhere;}
html[data-zb-question][data-zb-lean] .Question-mainColumn .RichContent-inner img {max-width: 100%; height: auto;}
html[data-zb-question] [data-zb-answer-list] {background: transparent !important; box-shadow: none !important;}
html[data-zb-question] [data-zb-answer-card] {margin-block: 16px !important; border: 1px solid rgba(133,144,166,.16) !important; border-radius: 16px !important; box-shadow: none !important; background: #fff !important;}
html[data-zb-question] [data-zb-answer-card]:not(.AnswerItem) {padding: 0 !important;}
html[data-zb-question] [data-zb-answer-card] .AnswerItem {padding: 24px !important;}
html[data-zb-question][data-theme=dark] [data-zb-answer-card] {background: #2d333b !important; border-color: #3b444f !important;}
html[data-zb-question] [data-zb-question-heading] {margin: 16px auto 20px; padding: 24px 28px; border-radius: 18px; border: 1px solid rgba(133,144,166,.18); box-sizing: border-box;}
html[data-zb-question][data-theme=dark] [data-zb-question-heading] {background: #2d333b !important; border-color: #3b444f;}
html[data-zb-question] [data-zb-question-heading] h1 {margin: 16px 0 20px !important; font-size: clamp(22px, 2vw, 28px) !important; line-height: 1.5 !important; letter-spacing: .2px; font-weight: 650;}
html[data-zb-question][data-theme=dark] [data-zb-question-heading] h1 {color: #dce5f0 !important;}
html[data-zb-question] [data-zb-question-tags] {display: flex; flex-wrap: wrap; gap: 8px;}
html[data-zb-question] [data-zb-question-heading] .Tag {margin: 0 !important; border-radius: 8px !important; padding: 2px 6px !important; height: auto !important;}
html[data-zb-question][data-theme=dark] [data-zb-question-heading] :is(.Tag,.Tag-content,.TopicLink,.TopicLink > div) {background: #344255 !important; color: #b9d3f3 !important; border: 0 !important;}
html[data-zb-question] [data-zb-question-heading] a[href*="/topic/"]:has(img) {margin-block: 18px; padding: 12px; border-radius: 12px !important; box-sizing: border-box;}
html[data-zb-question][data-theme=dark] [data-zb-question-heading] a[href*="/topic/"]:has(img) {background: #293039 !important;}
html[data-zb-question][data-theme=dark] [data-zb-question-heading] a[href*="/topic/"]:has(img) button {background: #354151 !important; color: #c6d0dc !important; border: 1px solid #465363 !important;}
html[data-zb-question] [data-zb-question-heading] button {border-radius: 9px !important; min-height: 34px;}
html[data-zb-question][data-theme=dark] [data-zb-question-heading] .Button--plain {color: #aab8ca !important;}
html[data-zb-question][data-theme=dark] [data-zb-question-heading] .Button--grey {border-color: #526071 !important; color: #c6d0dc !important;}
html[data-zb-question] [data-zb-question-operations] {display: flex !important; flex-direction: column; align-items: stretch !important; gap: 10px; margin-top: 18px; padding-top: 16px; border-top: 1px solid rgba(133,144,166,.16);}
html[data-zb-question] [data-zb-question-operations] .QuestionButtonGroup {display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin: 0 !important;}
html[data-zb-question] [data-zb-question-operations] .QuestionButtonGroup > button {margin: 0 !important; min-height: 38px; padding-inline: 16px; font-size: 14px;}
html[data-zb-question] [data-zb-question-operations] .WriteAnswerButton {order: -1; font-weight: 600;}
html[data-zb-question] [data-zb-question-heading] [data-zb-question-operations] .QuestionButtonGroup-invite {border-color: transparent !important; background: transparent !important; color: #526476; padding-inline: 8px;}
html[data-zb-question] [data-zb-question-heading] [data-zb-question-operations] .QuestionButtonGroup-invite:hover {background: rgba(88,152,255,.08) !important;}
html[data-zb-question] [data-zb-question-secondary] {display: flex !important; flex-wrap: wrap; align-items: center; justify-content: flex-start !important; gap: 4px 16px; min-width: 0; width: 100%; margin: 0 !important; font-size: 13px;}
html[data-zb-question] [data-zb-question-secondary] > * {margin: 0 !important; flex: 0 0 auto;}
html[data-zb-question] [data-zb-question-secondary] button {font-size: 13px; min-height: 34px;}
html[data-zb-question] [data-zb-question-secondary] button[aria-label="更多"] {min-width: 34px; padding-inline: 8px;}
html[data-zb-question] [data-zb-question-stat] {order: 1; display: inline-flex; align-items: center; gap: 5px; color: #526476; font-size: 13px; font-variant-numeric: tabular-nums;}
html[data-zb-question][data-theme=dark] :is([data-zb-question-stat],.QuestionButtonGroup-invite) {color: #9baabd !important;}
html[data-zb-question] [data-zb-question-heading] button:focus-visible {outline: 2px solid #5898ff; outline-offset: 3px;}
html[data-zb-question] .RichContent-inner[data-zb-folded] {position: relative; max-height: 560px !important; overflow: hidden !important;}
html[data-zb-question] .RichContent-inner[data-zb-folded]::after {content: ''; position: absolute; inset: auto 0 0; height: 80px; pointer-events: none; background: linear-gradient(transparent, #fff);}
html[data-zb-question][data-theme=dark] .RichContent-inner[data-zb-folded]::after {background: linear-gradient(transparent, #2d333b);}
.zb-answer-toggle {display: block; width: 100%; margin: 12px 0 18px; padding: 12px; border: 1px solid rgba(133,144,166,.22); border-radius: 10px; background: transparent; color: #1769c2; font-size: 15px; cursor: pointer;}
html[data-theme=dark] .zb-answer-toggle {color: #79b8ff; border-color: #46505e;}
.zb-answer-toggle:hover {background: rgba(88,152,255,.08);}
.zb-answer-toggle:focus-visible {outline: 2px solid #5898ff; outline-offset: 2px;}
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
html[data-theme=dark] [data-zb-hot-comment] {background: #2d333b !important; color: #c6d0dc !important; border: 0 !important; border-radius: 12px; box-shadow: none !important;}
html[data-theme=dark] .Comments-container {margin-top: 16px; padding-top: 14px; border-top: 1px solid #414b58 !important;}
html[data-theme=dark] .Comments-container :is(div,span,p,a,button,label,h2,h3,section),
html[data-theme=dark] [data-zb-hot-comment] :is(div,span,p,a,button) {color: #c6d0dc !important; border-color: #414b58 !important;}
html[data-theme=dark] .Comments-container div,
html[data-theme=dark] [data-zb-hot-comment] div {background-color: transparent !important;}
html[data-theme=dark] .Comments-container :is(div,section) {border: 0 !important; box-shadow: none !important;}
html[data-theme=dark] .Comments-container .CommentContent,
html[data-theme=dark] .Comments-container .CommentContent :is(p,span) {color: #c6d0dc !important; line-height: 1.8; font-size: 15px;}
html[data-theme=dark] .Comments-container a[href*="/people/"],
html[data-theme=dark] [data-zb-hot-comment] a[href*="/people/"] {color: #d7e0eb !important; font-weight: 600;}
html[data-theme=dark] .Question-mainColumn .RichContent-inner,
html[data-theme=dark] .Question-mainColumn .RichContent-inner .RichText {color: #c6d0dc !important;}
html[data-theme=dark] .Comments-container .CommentContent a,
html[data-theme=dark] .RichContent .RichText a {color: #79b8ff !important;}
html[data-theme=dark] .Comments-container :is(time,small),
html[data-theme=dark] .Comments-container div:has(> .CommentContent) > div:last-child,
html[data-theme=dark] .Comments-container div:has(> .CommentContent) > div:last-child :is(span,button) {color: #9baabd !important;}
html[data-theme=dark] .Comments-container :is(input,textarea,[contenteditable=true]) {background: #293039 !important; color: #c6d0dc !important; caret-color: #c6d0dc; border: 1px solid #46515f !important; border-radius: 10px; padding: 10px 12px; box-shadow: none !important;}
html[data-theme=dark] .Comments-container :is(input,textarea,[contenteditable=true]):focus {outline: 2px solid #5898ff; outline-offset: 2px;}
html[data-theme=dark] .Comments-container button:disabled {color: #8493a8 !important; opacity: .65;}
html[data-theme=dark] .Comments-container .CommentContent p {margin-block: 4px;}
/* 评论采用适合连续阅读的宽度，避免大屏上一行文字过长。 */
.Comments-container {width: 100%; max-width: 980px; margin-inline: auto !important; box-sizing: border-box;}
.Comments-container [data-zb-comment-row] {padding-block: 9px; gap: 12px; align-items: flex-start;}
.Comments-container [data-zb-comment-body] {min-width: 0; flex: 1;}
.Comments-container [data-zb-comment-author] {margin-bottom: 4px; font-size: 14px; line-height: 1.6;}
.Comments-container .CommentContent {font-size: 15px; line-height: 1.8;}
.Comments-container [data-zb-comment-meta] {margin-top: 5px; font-size: 13px; line-height: 1.6;}
.Comments-container [data-zb-comment-group] {padding-block: 6px;}
.Comments-container [data-zb-comment-group] + [data-zb-comment-group] {border-top: 1px solid #dce2ea !important;}
html[data-theme=dark] .Comments-container [data-zb-comment-group] + [data-zb-comment-group] {border-top-color: #3b4551 !important;}
.Comments-container [data-zb-comment-group] > div:not(:first-child) {margin-left: 0 !important;}
.Comments-container [data-zb-comment-row] img.Avatar {border-radius: 50%;}
.Comments-container :is(button,a):focus-visible {outline: 2px solid #5898ff; outline-offset: 3px; border-radius: 4px;}
/* Draft 的提示文字不在可编辑节点内，需要与输入文字使用相同的起点。 */
.Comments-container .DraftEditor-root {position: relative; font-family: inherit; font-size: 14px; line-height: 24px;}
.Comments-container .DraftEditor-root .public-DraftEditor-content {box-sizing: border-box; width: 100%; min-height: 46px; padding: 10px 12px; font-family: inherit; font-size: 14px; line-height: 24px;}
.Comments-container .DraftEditor-root .public-DraftStyleDefault-block {margin: 0; font-size: inherit; line-height: 24px;}
.Comments-container .public-DraftEditorPlaceholder-root {position: absolute; top: 11px; left: 13px; right: 13px; margin: 0; padding: 0; font-family: inherit; font-size: 14px; line-height: 24px; pointer-events: none;}
.Comments-container .public-DraftEditorPlaceholder-inner {font-family: inherit; font-size: 14px; line-height: 24px;}
html[data-theme=dark] .Comments-container .public-DraftEditorPlaceholder-inner {color: #9baabd !important;}
.Comments-container .Button--secondary {display: inline-flex; align-items: center; justify-content: center; gap: 4px; box-sizing: border-box; height: 34px; min-height: 34px; padding: 6px 10px; border-radius: 8px; font-family: inherit; font-size: 13px; font-weight: 400; line-height: 20px; vertical-align: middle;}
.Comments-container .Button--secondary > span {display: inline-flex; align-items: center; height: auto; line-height: 20px;}
.Comments-container .Button--secondary svg {flex-shrink: 0; width: 18px; height: 18px; vertical-align: middle;}
html[data-theme=dark] .Comments-container .Button--secondary {background: #343d49 !important; color: #dce6f0 !important;}
html[data-theme=dark] .Comments-container .Button--primary {background: #2f6feb !important; color: #fff !important;}
html[data-theme=dark] .QuestionPage a[href*="/topic/"]:has(img) {background: #2d333b !important; border: 1px solid #444c56; border-radius: 12px;}
html[data-theme=dark] .QuestionPage a[href*="/topic/"]:has(img) :is(div,span,strong) {color: #dce6f0 !important;}
html[data-theme=dark] .LeanAppHeaderBar :is(.Messages-icon,.Notifications-icon) {color: #bdc9d8 !important;}
[data-zb-header-host] {transition: transform .18s ease !important;}
html[data-zb-header-hidden] [data-zb-header-host]:not(:focus-within):not(:hover) {transform: translateY(-110%) !important; pointer-events: none;}
@media (max-width: 700px) {
    html[data-zb-question] [data-zb-question-heading] {padding: 18px;}
    html[data-zb-question] [data-zb-question-operations] .QuestionButtonGroup {gap: 8px;}
    html[data-zb-question] [data-zb-question-operations] .QuestionButtonGroup > button {min-height: 40px; padding-inline: 12px;}
    html[data-zb-question] [data-zb-question-secondary] {gap: 2px 12px;}
    .Comments-container [data-zb-comment-group] > div:not(:first-child) {margin-left: 0 !important;}
    html[data-zb-question] .RichContent-inner[data-zb-folded] {max-height: 420px !important;}
    html[data-zb-question] [data-zb-answer-card] .AnswerItem {padding: 18px !important;}
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
