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

## 验证记录

已通过 JavaScript 语法检查、生产构建及 `node tests/spelling.cjs` 回归检查（实际核对点击分支、空输入、错误/正确输入、反馈、保存调用与计数）。完整 Playwright 浏览器测试脚本已提供，但本次执行环境缺少浏览器且下载失败，因此尚未完成浏览器端到端验证。

## SEHS5052 科目（2026-10-03）

新增 `sehs5052.html`，原有 SEHS5001 功能和存储键保留。

- 六讲共450个PDF物理页；每页保留可提取英文讲稿、原页图及可用的图中文字OCR。
- 235个中英学习单元；中英、中文、英文三种显示模式。学习解读是摘要，不是完整讲稿的逐句翻译。OCR标注为待校对。
- 78道双语单选题，支持全部、L1–4、L5–6及各讲范围。每次随机10道不重复题，选项也随机。
- 10分/题；结束后检查未答题，再确认交卷。生成总分、分讲次诊断、解析和原页链接。
- `sehs5052-academy-v1` 独立保存已学页、未交卷草稿、最近50次提交与错题。可导入/导出；不会发送成绩到学校。
- 1%扩展提醒按每次切换到不同学习页独立抽样，可在科目总览关闭；不影响测评分数。
- 构建生成六讲×三语言共18份可打印HTML报告，网站复习页可下载；英文与中英报告保留逐页英文原文，中文报告为中文摘要版。
- 讲义说明课堂练习为L1–4、测试为L5–11。目前只有L1–6材料，网站明确提示范围不完整。
- 校核说明与原文分开，包含AES标准、TLS版本、Equifax案例、SQL/XSS处理及异常检测假设。

数据源：`data/sehs5052/course.json`。图页：`assets/sehs5052/`。报告源：`notes/sehs5052/`。

验证：

```sh
npm run check
node tests/course5052.cjs
# 安装 Playwright 和浏览器，启动 dist 的本地HTTP服务后：
CHROME_PATH=/path/to/chrome TEST_URL=http://127.0.0.1:8765 node tests/course5052-browser.cjs
```

本地浏览器检查涵盖科目切换、三语言、搜索、草稿恢复、交卷评分、历史、下载、手机宽度与200%文字。源文件只保留用户提供讲义的原文；其中的旧内容、预测、例子与统计不等于当前权威事实。

### Course and chapter navigation

The subject selector separates SEHS5001 and SEHS5052. SEHS5052 has a Lecture → topic chapter → source-page study unit directory (21 chapters, 235 units). Its dedicated Lecture 1–4 combined assessment draws 10 of 48 questions: at least two from each lecture, plus two random remaining questions. Submission creates a local assessment with lecture diagnostics and a downloadable report. SEHS5001 retains its supplied Lecture 1–3 chapters; Lecture 4 has not been supplied.

Source-page WebP images are compressed at quality 55 without reducing pixel dimensions (450 images: 25.06 MB → 20.40 MB), then losslessly bundled by lecture in `source-assets/*.json.gz`. The build restores all 450 original image bytes using Node built-in gzip support.
