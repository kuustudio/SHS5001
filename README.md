# SHS5001 · SEHS5001 Interactive Lecture Academy

Lecture 1 双语瀑布式学习网站，含词汇发音、听写核对、练习题和浏览器本地进度。保留原有课程资料与来源说明。课程代码为 SEHS5001，GitHub 仓库按要求命名 SHS5001。

## Cloudflare Pages（推荐）

在 Workers & Pages 中选择创建 **Pages**，连接 `kuustudio/SHS5001`：

| 设置 | 值 |
| --- | --- |
| Production branch | `main` |
| Framework preset | `None` |
| Root directory | 留空（仓库根目录） |
| Build command | `npm run build` |
| Build output directory | `dist` |

不需要 API 密钥或数据库。之后提交到 main 会由已连接的 Cloudflare 项目触发部署。

## Cloudflare Workers 静态资源

若创建的是 **Worker**，使用同一仓库与 main 分支：

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- 项目名: `shs5001`
- 静态目录已在 `wrangler.jsonc` 设置为 `./dist`。

Pages 和 Workers 二选一即可。这里只准备部署代码，没有创建 Cloudflare 项目或上线网站。

官方配置说明：
- https://developers.cloudflare.com/pages/configuration/build-configuration/
- https://developers.cloudflare.com/workers/static-assets/binding/

## 本地运行

需要 Node.js 20+；生产构建没有第三方依赖。

```sh
npm run build
python3 -m http.server 8765 --directory dist
```

打开 http://localhost:8765 。根目录 index.html 是构建模板，含 JSON 占位符；请使用构建后的 dist/index.html。

离线单文件：`python3 build.py`，生成 `SEHS5001_Interactive_Academy_Offline.html`。

## 本次修复

- 修正听写核对读取错误单词 ID 导致点击报错的问题。
- 空输入提示；正确/错误结果显示在输入框旁及提示条中。
- 支持回车核对，兼容大小写、首尾空格、连续空白和常见连字符。
- 正确听写更新记忆状态并保存；空输入不计入尝试次数。
- 答题反馈支持屏幕阅读器；修改答案后清除旧核对结果。

“提醒”是当前页面内的结果提示，不是定时提醒或系统推送。英语发音依赖浏览器/操作系统提供的 speechSynthesis 语音。学习进度仅存于当前浏览器，换设备或域名时请使用导出/导入进度。关键词核对不是人工评分。

## 文件与扩展

- `app.js` / `style.css` / `index.html`: 页面与交互源代码。
- `data/lecture1.json`: 当前课程内容。
- `data/vocabulary.json`: 单词、IPA 与例句。
- `data/lecture_template.json`: 追加课程模板（通过页面导入）。
- `scripts/build.mjs`: 构建供托管的 dist 目录。
- `tests/interactions.cjs`: 浏览器回归测试。

验证：`npm run check`。运行交互测试需安装 Playwright 及 Chromium；启动上面的本地服务器后运行 `node tests/interactions.cjs`，可用 TEST_URL 指定地址。
