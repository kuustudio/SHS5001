# SEHS5052 Lecture 3 — Threat modelling and traditional defences

威胁建模与传统防御

Source: SEHS5052-Lecture 03 - with Notes.pdf

English narration is extracted page by page. Bilingual notes are study summaries, not a complete literal translation. Source-page snapshots and unverified slide OCR are available on the website.

## PDF 1–2: Overview / 课程概览

The lecture covers threat modelling, traditional defences and their limits as a cycle of identification, prioritization, control and review.

本讲分为威胁建模、传统防御与其局限。把识别威胁、安排优先级、实施控制及复核效果看作连续过程。

## PDF 3–5: STRIDE / STRIDE识别威胁

STRIDE checks spoofing, tampering, repudiation, information disclosure, denial of service and elevation of privilege. It structures analysis without guaranteeing completeness.

STRIDE逐项检查冒充、篡改、抵赖、信息披露、拒绝服务和权限提升。它组织分析，不能保证没有遗漏或完全消除判断偏差。

## PDF 6–7: Spoofing and tampering / 冒充与篡改

Spoofing defeats identity assurance; tampering alters data. Consider MFA and trusted certificates alongside integrity checks, signatures and secure development.

冒充破坏身份认证，篡改损害完整性。分别考虑MFA、可信证书，以及完整性检查、签名和安全开发。

## PDF 8–9: Repudiation and disclosure / 抵赖与披露

Repudiation concerns denial of actions; reliable logs and signatures provide evidence. Disclosure calls for encryption, least privilege and secure data handling.

抵赖是事后否认行为，可用可信日志与签名留证；披露使敏感信息被未授权者读取，需加密、最小权限与安全删除等控制。

## PDF 10–11: DoS and privilege elevation / 拒绝服务与提权

DoS harms availability; privilege elevation exceeds intended permissions. Use resilience and traffic controls for the former, and access restrictions, patches and review for the latter.

拒绝服务影响可用性；提权让用户获得原本没有的权限。冗余、限流及抗DDoS用于前者，权限限制、补丁与审计用于后者。

## PDF 12–13: DREAD prioritization / DREAD排序

DREAD considers damage, reproducibility, exploitability, affected users and discoverability. Consistent scales aid comparison, but scores remain judgement-based.

DREAD包含损害、可复现性、可利用性、受影响用户和可发现性。统一尺度便于比较，但分值仍依赖证据、假设与评估者判断。

## PDF 14–15: Consequence / 后果评估

Damage severity and affected users inform consequences. Healthcare scenarios also require patient-safety and service-continuity considerations.

损害严重性与受影响人数共同帮助估计后果。医疗案例尤其要考虑患者安全和业务中断，不能只计算短期财务损失。

## PDF 16–17: Likelihood / 可能性评估

Reproducibility, attacker resources and discoverability influence likelihood. A zero-day is not automatically hard to exploit; record uncertainty instead of assuming low risk.

可复现性、攻击所需资源及漏洞可发现性影响可能性。零日的未知性不等于一定难利用，需记录不确定性而非套用固定低分。

## PDF 18–19: Risk matrix / 风险矩阵

Plot likelihood against consequence to build a risk register. Prioritize severe risks and document treatment or acceptance decisions.

把可能性和后果放入矩阵形成风险登记册。优先处理严重风险，其他风险按资源与业务需求安排，并记录接受风险的理由。

## PDF 20–21: Controls and acceptance / 控制与风险接受

Preventive controls reduce occurrence, detective controls reveal incidents, and supporting processes sustain governance. Document mitigation or acceptance decisions.

预防控制减少发生机会；检测控制发现事件；支持性流程维持管理和审计。判断缓解或接受风险时，需要业务责任与明确依据。

## PDF 22–23: SCADA case / SCADA案例

Unauthorized SCADA changes can involve tampering and DoS with physical consequences. Combine access control, monitoring, change audit and isolation.

未经授权改变工业控制节点可能同时涉及篡改和拒绝服务，并影响实体设备与人员安全。结合访问控制、网络监控、变更审计与隔离。

## PDF 24–25: Modelling cycle / 持续建模循环

Identify threats, assess priority, deploy controls and verify effectiveness. Changes, incidents and emerging threats trigger reassessment.

规划并识别威胁，评估排序，部署控制，再检查是否有效。系统变化、事件经验与新威胁都应触发重新评估。

## PDF 26–27: Communicating risk / 向管理层解释

Explain spending through threats, consequences, control effectiveness and cost. Classroom ROI figures illustrate reasoning rather than measured organizational returns.

用威胁、后果、控制效果和成本说明安全投入，而非只说安全重要。避免把课堂示例的投资回报数字当作实际组织测量值。

## PDF 28–29: Defence in depth / 纵深防御

Firewalls, monitoring, antimalware and secure code provide different protections. Other layers should limit harm when one fails.

防火墙、监测、反恶意软件与安全代码承担不同角色。某层失效时其他层仍应限制影响，设计时注意共同失效因素。

## PDF 30–30: Firewall placement / 防火墙位置

A controlled traffic checkpoint improves visibility and policy enforcement but needs capacity and availability planning.

把相关流量经过可控检查点有助于执行规则与观察流量，但也可能带来性能瓶颈和单点风险，需要容量与高可用设计。

## PDF 31–32: Packet filtering / 包过滤

Packet filters match addresses, ports and protocols. Header rules are efficient but do not fully understand application behaviour.

按源地址、目标地址、端口和协议匹配规则。速度较快，但仅看包头不足以理解应用行为或识别所有攻击。

## PDF 33–34: Stateful and proxy firewalls / 有状态与代理

Stateful inspection tracks connections; application proxies inspect protocol-level behaviour. Deeper inspection brings processing and configuration trade-offs.

有状态检查记录连接状态；应用代理理解更高层协议并检查内容。功能越深，通常越需关注性能与配置复杂度。

## PDF 35–36: Demilitarized zone / DMZ

Place public services in a semi-trusted zone and restrict paths to core systems. A compromised public server should not imply unrestricted database access.

公开服务放在半可信区域，核心数据库置于更受限制的内部网络。只开放必要通信，降低公开服务器失陷后的横向影响。

## PDF 37–37: IDS workflow / IDS工作流程

Sensors collect data, analyzers compare signatures or baselines, and alerts feed investigation and tuning. IDS primarily monitors and alerts.

传感器采集流量或日志，分析器比对特征或基线，产生告警后由人员调查并更新策略。IDS通常负责监测与告警，不等于自动阻断。

## PDF 38–38: Network and host IDS / NIDS与HIDS

NIDS observes traffic but may not see encrypted payloads. HIDS examines host files, processes and logs. Their perspectives complement each other.

NIDS观察网络通信，但加密内容可能不可见；HIDS观察主机文件、进程和日志。二者视角互补，可覆盖外部流量和内部行为。

## PDF 39–40: Signature and anomaly detection / 特征与异常

Signature detection matches known patterns; anomaly detection finds baseline deviations. Both need maintenance and error evaluation.

特征检测匹配已知模式；异常检测寻找偏离正常基线的活动。前者容易漏掉新变种，后者可能误报，二者都需要评估和维护。

## PDF 41–42: Antimalware evolution / 反恶意软件演变

Antimalware evolves from signatures to heuristics, runtime behaviour and integrated endpoint response. Threat intelligence helps without guaranteeing universal detection.

从签名扫描到启发式、运行时行为监测和综合防护。威胁情报与EDR帮助关联主机行为，但不能保证识别所有未知攻击。

## PDF 43–43: Sandboxing / 沙箱

Execute suspicious files in isolation and observe system, file and network behaviour. An uneventful sandbox run is not proof of safety.

在隔离环境运行可疑文件，观察系统调用、文件变化和网络活动。行为分析帮助判断风险，但未观察到恶意行为并不等于绝对安全。

## PDF 44–44: Secure code / 安全代码

Anticipate malformed input and failures, validate rather than blindly trust, and keep isolated request failures from taking down the service.

防御性编程预想非法输入和故障；持续验证而不盲目信任；韧性让单个请求失败不会拖垮全部服务。

## PDF 45–46: Safe input handling / 安全输入处理

Validate types and formats, canonicalize where appropriate and bind SQL values. Context-specific handling is stronger than a short keyword blacklist.

验证类型与格式，必要时规范化输入，SQL值使用参数绑定。不同输入位置需要不同安全处理，不能只靠过滤几个关键词。

## PDF 47–47: Four defence roles / 四层职责

Firewalls block, IDS detects, antimalware responds and secure code resists vulnerabilities. Learn from incidents and update every layer.

防火墙阻挡、IDS检测、反恶意软件处理、安全代码抵抗漏洞。事件后复盘并更新，才能让各层持续有效。

## PDF 48–49: Traditional limits / 传统技术局限

Unknown flaws, changing malware and alert volume challenge fixed rules. These limitations motivate behavioural and AI-assisted methods.

未知漏洞、变化中的恶意软件与大量告警削弱固定规则防护。理解这些限制是引入行为分析和AI的原因。

## PDF 50–51: Zero-day window / 零日窗口

Risk persists between flaw introduction, discovery, patch release and patch deployment. Manage exposure windows rather than generalizing one incident.

从漏洞出现到被发现、修补和实际部署补丁之间都可能存在风险。关注暴露与缓解窗口，不把某个历史案例简单等同于所有零日过程。

## PDF 52–52: Detection errors / 误报与漏报

Overlapping behaviour creates false positives and false negatives. Rare attacks can yield many false alerts even with a modest false-positive rate.

正常与攻击行为分布重叠，阈值影响误报和漏报。当攻击很少，即使误报率不高，也可能产生大量无效告警。

## PDF 53–53: Polymorphic malware / 多态恶意软件

Polymorphic malware changes its appearance while retaining intent. Behaviour analysis and sandboxing complement static signatures.

恶意软件改变包装或字节特征，行为目的可能不变。行为分析与沙箱可补充静态签名，但仍需评估规避与检测成本。

## PDF 54–54: Trade-offs / 安全与性能取舍

Inspection depth, restrictive policy and usability create trade-offs. Choose controls with business latency, workflow and budget in mind.

深度检查、严格策略与用户便利之间存在取舍。结合业务延迟要求、人员操作和成本决定控制强度。

## PDF 55–56: AI adaptation / AI攻防适应

AI supports detection but also scales attacks and adaptation. Revisit features, models and response workflows as behaviour changes.

AI可帮助检测未知模式，也可增强攻击规模与规避能力。持续调整特征、检测策略和调查流程，避免假定模型永远有效。

## PDF 57–58: Prevent, detect, recover / 预防、检测、恢复

Assume breaches remain possible. Combine prevention, rapid detection, backups and recovery; allocate resources according to organizational risk.

假设仍可能发生入侵，结合预防、快速发现、备份与恢复。预算比例只是课堂例子，应按组织风险确定，而非统一套用。

## PDF 59–59: Closing page / 结束页

This page has no extractable lecture notes.

本页无可提取讲稿。

## Original source — PDF page 1

[No extractable narration; see source image.]

## Original source — PDF page 2

Table of 
Contents

Week 3: Cybersecurity Threat Models & Traditional Defense Techniques

## Original source — PDF page 3

Part I: Threat Modelling Frameworks

We're moving from chaos to structured thinking. Security decisions should be based on data and systematic analysis, not 
panic or guesswork. This presentation introduces two powerful frameworks: STRIDE (the lens) and DREAD (the scale). 
Together, they transform the overwhelming task of securing a system into a manageable, prioritized action plan. Think of 
STRIDE as a checklist that ensures you've thought through every type of attack. Think of DREAD as a calculator that tells 
you which threats matter most. By the end of this presentation, you'll be able to walk into a hospital, identify threats 
systematically, score them objectively, and present a prioritized defense strategy to leadership.

The journey has three stages: (1) Identify all threats using STRIDE (What could go wrong?), (2) Prioritize them using 
DREAD (What matters most?), (3) Allocate resources to mitigate the highest-risk threats first (Where do we spend our 
security budget?). This structured approach is what separates amateur security from professional security. It's also what 
organizations like Microsoft, Amazon, and major hospitals use to make strategic decisions.

Security isn't about perfect protection. It's about rational risk management. With limited budgets and limited time, you 
must choose battles wisely. STRIDE and DREAD help you make those choices objectively, backed by data. By the end of this 
class, you'll be able to justify security spending to a CFO using this framework.

## Original source — PDF page 4

Threat Modelling Frameworks

STRIDE is a Microsoft threat modeling framework that asks six systematic questions about every system 
component: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege. Think 
of STRIDE as a prism. White light (your system design) enters the prism and splits into six colors (six threat categories). 
No matter how well-designed your system is, one of these six threats probably applies to it. The beauty of STRIDE is that 
it's not subjective—it's a checklist. You don't have to guess which threats matter. You systematically check all six.

Here's the workﬂow: (1) Draw a diagram of your system (hospital EHR: Users → Web App → App Server → Database). (2) 
For every component and data flow, ask the six STRIDE questions. (3) Document every "yes" answer as a potential threat. 
For the hospital EHR database, ask: "Can someone spoof this database (pretend to be the database)? Tamper with 
patient records? Delete audit logs and deny they accessed the data? Disclose patient information? Crash the database 
(DoS)? Or gain unauthorized admin privileges?" By the end, you might have 50-100+ potential threats across all 
components. This seems overwhelming—until you apply DREAD.

STRIDE is thorough but not overwhelming if you do it systematically. Start with one component, ask six questions, move to 
the next. By component #10, you'll be fast at it. And yes, you'll find threats your initial security design missed. That's the

## Original source — PDF page 5

whole point.

## Original source — PDF page 6

Spoofing is pretending to be someone or something you're not. It violates authentication (the ability to verify identity). 
Example: A hacker sends an email that looks like it's from the hospital IT department, saying "Verify your account 
password here." The nurse thinks the email is legitimate and enters her password on a fake website. The hacker now has 
her credentials and can impersonate her. In a banking context, a criminal spoofs a login page and collects account 
numbers. Another form: IP spoofing, where an attacker's packet appears to come from a trusted IP address.

Tampering is modifying data or code after it's been created. It violates integrity (the assurance that data hasn't been 
altered). Example: A disgruntled hospital employee changes a patient's allergy record from "Penicillin allergy" to "No 
allergies." A doctor doesn't see the allergy warning and prescribes penicillin. The patient has an allergic reaction. The 
data was tampered, and the patient suffered. In a financial context, a hacker intercepts a transaction and changes the 
amount from $100 to $10,000. In code: A hacker modifies a hospital's billing software to overcharge patients and send 
the extra money to themselves.

These are the most common threats in real systems. Every modern system must defend against spoofing (use strong 
authentication, MFA, digital certificates) and tampering (use encryption, digital signatures, integrity checks, secure

## Original source — PDF page 7

development practices). When evaluating any system, ask: "How do we know this user/device/server is really who they claim? 
And how do we ensure data hasn't been modified?"

## Original source — PDF page 8

Repudiation is denying responsibility for an action. It violates non-repudiation (the ability to prove who did what, when). 
Example: A nurse sends a message to the pharmacy: "Prescribe 10mg morphine for Patient X." Later, she denies sending 
it ("I never authorized that!"). The pharmacy has no audit trail proving the nurse sent the message. Who's responsible if 
the patient overdoses? The nurse? The pharmacy? If there's no digital signature or timestamp, the nurse can repudiate. 
In a financial context, a customer initiates a wire transfer and later claims "I never authorized that!"—if there's no proof 
(no digital signature, no biometric, no recorded approval), the bank can't prove the customer is lying and loses money.

Information Disclosure is exposing confidential information. It violates confidentiality (the restriction of access to 
authorized users). Example: A healthcare vendor stores patient data in an unencrypted cloud database. A competitor or 
hacker accesses it and steals patient medical histories and social security numbers. Patient harm, regulatory fines 
(HIPAA), lawsuits. Another example: A hospital's network cables are installed in a public hallway. An attacker physically 
taps the cables and reads all unencrypted traffic (passwords, patient data, etc.). Unencrypted data in transit can be 
wiretapped. Unencrypted data at rest can be accessed if someone gains physical access to the server or steals a hard 
drive.

## Original source — PDF page 9

For repudiation, ask: "How do we create an audit trail that proves who did what and when?" Answers: Comprehensive logging, 
digital signatures, timestamped records, immutable audit logs. For information disclosure, ask: "How do we ensure only 
authorized people can read sensitive data?" Answers: Encryption (both in transit and at rest), access control (role-based, least
privilege), network segmentation (sensitive data on isolated networks), secure deletion (when data is no longer needed).

## Original source — PDF page 10

Denial of Service (DoS) is making a service unavailable to legitimate users. It violates availability (the assurance of 
timely, reliable access). Example: A botnet floods the hospital website with millions of fake requests per second. 
Legitimate patients can't book appointments. The hospital loses revenue and patient trust. Another form: A hacker uses 
a DoS attack to distract hospital IT staff while they steal data through a different route. The hospital's EHR goes offline, 
making it impossible for doctors to access patient records during an emergency—patient harm ensues. In power 
systems: A DoS attack against a power plant's control system could cause a blackout affecting thousands.

Elevation of Privilege is gaining unauthorized access levels or permissions you shouldn't have. It 
violates authorization (the restriction of actions to authorized users). Example: A nurse has access to patient records for 
her department only. But she finds a vulnerability in the EHR system that allows her to access records for all patients in 
the hospital, including celebrities and VIPs. An unprivileged user exploits a buffer overflow to gain admin rights. A 
contractor with "view-only" access finds a way to delete critical data. Once an attacker elevates privilege, they can do 
anything—tamper with data, steal information, delete audit logs.

For DoS, ask: "How do we ensure the system stays available even under attack?" Answers: Redundancy (multiple

## Original source — PDF page 11

servers), load balancing (distribute traffic), rate limiting (limit requests per user), DDoS protection (filter malicious traffic). 
For elevation of privilege, ask: "How do we ensure users only access what they're authorized to?" Answers: Role-based access 
control (users have minimal permissions needed), least privilege principle (don't give admin access casually), input validation 
(prevent buffer overflows), software patching (fix privilege escalation bugs), regular audits (verify users have appropriate 
permissions).

## Original source — PDF page 12

Threat Modelling Frameworks: STRIDE and DREAD

DREAD – The Scale of Prioritization
STRIDE identified 50+ potential threats. But you can't fix them all immediately—there's no budget for that. DREAD is your 
prioritization framework. The fundamental formula: Risk = Probability × Consequence. A threat with high probability but 
low consequence might be medium risk (e.g., a user falls for a phishing email but MFA blocks the attacker = medium 
risk). A threat with low probability but extreme consequence might be high risk (e.g., a zero-day vulnerability in critical 
system = high risk). DREAD breaks down risk into five measurable components: (D) Damage Potential (How bad if it 
happens?), (R) Reproducibility (Can attackers repeat it reliably or is it one-in-a-million?), (E) Exploitability (How easy to 
exploit? Script kiddie with tools or specialist required?), (A) Affected Users (One person or all 500K patients?), (D) 
Discoverability (How likely is an attacker to find this?).

For each threat, score each component on a 1–5 scale (1 = low, 5 = high). Average the five scores to get a risk rating (1–
5). A threat scoring 4.5–5 is extreme risk (fix immediately). A threat scoring 3–3.5 is medium risk (plan to fix, schedule 
resources). A threat scoring 1–2 is low risk (accept it—cost to fix exceeds benefit). This objectivity is powerful: Instead of 
arguing "This is bad!" you say "Per DREAD scoring, this rates 4.6. Here's the breakdown: Damage=5, Reproducibility=5, 
Exploitability=4, Affected Users=5, Discoverability=4. Risk score = 4.6 = Extreme. We must fix it.“

## Original source — PDF page 13

DREAD scoring removes subjectivity. It's data-driven. When leadership asks 'Why are we spending $100K on this security fix?' You 
say: 'Because this threat scores 4.8 on DREAD. The consequence is patient harm. The probability is high. ROI of fixing it is 100x. 
Here's the calculation.' Executives respect that.

## Original source — PDF page 14

Threat Modelling Frameworks: DREAD

Consequence answers the question: "If this threat succeeds, how bad is the damage?" Two factors dominate: (1) 
Damage Potential – How severe is the damage? A vulnerability causing a temporary 1-hour service interruption = low 
damage. One exposing all patient data = extreme damage. One leading to patient death = catastrophic damage. Scale 
this from Insigniﬁcant → Minor → Moderate → Major → Doomsday. (2) Affected Users – How many people suffer? A 
vulnerability affecting one user = low impact. One affecting a department (100 users) = moderate. One affecting the 
entire hospital database (500K patients) = extreme. Scale this from Single User → Department → Database → 
Enterprise.

In DREAD, combine these two: A threat with Damage=5 (Doomsday, patient fatality) and Affected Users=5 (all patients) 
has extreme consequence, even if probability is low. Why? Because one incident is unacceptable. Even if a zero-day 
exploited only once per decade, that one exploit could be catastrophic. Conversely, a threat with Damage=1 (typo in non-
critical form) and Affected Users=1 (one user) has low consequence. A hundred incidents wouldn't matter much.

Example in hospital context: A SQL Injection vulnerability in the patient portal that could allow reading all medical 
records. Damage = Doomsday (breach of HIPAA, patient privacy violated, reputation damage, potential fines). Affected

## Original source — PDF page 15

Users = All patients. Consequence = Extreme. Even if it's hard to exploit (Exploitability=2) and rare (Discoverability=2), the overall 
risk is HIGH because consequence is extreme.

## Original source — PDF page 16

Probability answers: "How likely is this threat to actually happen?" Three factors matter: (1) Reproducibility – Can an 
attacker execute this threat reliably every time, or is it flaky/unreliable? A vulnerability that works 100% of the time = 
high reproducibility (score 5). One that works "sometimes" due to race conditions = low reproducibility (score 1–2). (2) 
Exploitability – How much skill and resources does the attacker need? A threat requiring an automated tool a script 
kiddie can download = high exploitability (score 5). One requiring access to nation-state malware = low exploitability 
(score 1). (3) Discoverability – How likely is an attacker to find this vulnerability? A vulnerability in a public-facing website 
that thousands of security researchers test = high discoverability (score 5). One in an obscure internal tool with 10 users 
= low discoverability (score 1).

Example: Phishing Attack. Reproducibility = High (send emails repeatedly). Exploitability = High (attacker just needs a 
template, social engineering, no technical skill). Discoverability = High (everyone knows phishing works; it's one of the 
oldest attacks). Probability = High (Average of 5, 5, 5 ≈ 5). Result: Phishing is very likely. That's why it's so prevalent. But 
a good defense (email filtering, user training, MFA) can reduce probability. With MFA, even if an attacker gets a password 
via phishing, they can't log in without the second factor—probability drops.

## Original source — PDF page 17

Example: Zero-Day Vulnerability. Reproducibility = Unknown (new exploit, might have bugs). Exploitability = Very Low (requires 
deep reverse engineering, rare). Discoverability = Very Low (not public, only known to the discoverer). Probability = Low (Average 
of 2, 1, 1 ≈ 1.3). Result: Zero-days are rare. But when they're combined with Damage=5 and Affected Users=5, the overall risk is 
HIGH because consequence is catastrophic.

## Original source — PDF page 18

(The Risk Matrix)

Here's how it all comes together: You create a 2D Risk Matrix with Likelihood on one axis (Rare → Unlikely → Possible 
→ Likely → Almost Certain) and Consequence on the other (Insigniﬁcant → Minor → Moderate → Major → Doomsday). 
Each cell in the matrix has a risk rating: Low, Medium, High, or Extreme. Plot your threat based on DREAD scores.

Example 1: Zero-Day Vulnerability in EHR. DREAD scores: Damage=5 (Doomsday—patient harm), Reproducibility=2 
(unreliable), Exploitability=1 (requires expertise), Affected Users=5 (all patients), Discoverability=1 (not public). Average = 
2.8, but consequence component (Damage × Affected Users) dominates. Plot: Rare likelihood + Doomsday 
consequence = HIGH RISK. Even though it's rare, the consequence is so severe you must invest in defenses (network 
segmentation, intrusion detection, backups).

Example 2: Minor Typo in Internal Tool. Damage=1 (insignificant), Affected Users=1 (one person), Reproducibility=5, 
Exploitability=5, Discoverability=5. Plot: Likely likelihood + Insignificant consequence = LOW RISK. You'll fix it eventually, 
but it's low priority.

The Risk Matrix creates a Risk Register—a prioritized list. Extreme risks get immediate resources. High risks get planned

## Original source — PDF page 19

resources. Medium risks get fixed opportunistically. Low risks are accepted.

## Original source — PDF page 20

You've identified threats (STRIDE) and prioritized them (DREAD). Now comes the hard part: How do we actually fix
them? For each high-risk threat, you have three mitigation strategies: (1) Preventative Controls – Stop the threat from 
happening in the first place. Examples: Firewalls prevent network attacks, strong authentication prevents spoofing, 
encryption prevents eavesdropping, input validation prevents injection attacks. (2) Detective Controls – Detect the 
threat while it's happening and respond. Examples: Intrusion Detection Systems catch unusual traffic patterns, audit logs 
record who accessed what, antivirus catches malware during execution, file integrity monitoring alerts when critical files 
change. (3) Supportive Controls – Build underlying capabilities that enable prevention and detection. Examples: Key 
management systems manage encryption keys, identity and access management systems verify users, security 
administration manages policies, system patching fixes vulnerabilities.

For a high-risk SQL Injection threat: Preventative = parameterized queries (make injection impossible). Detective = SQL 
query logging and anomaly detection (catch "SELECT * FROM patients" when normal queries return 10 rows). Supportive 
= secure development training (teach developers to validate input), code review (catch vulnerabilities before 
deployment). All three layers together create defense-in-depth—if one fails, others catch the threat.

## Original source — PDF page 21

The final decision for each threat: Risk Acceptance vs. Risk Mitigation. For extreme risk (like patient safety threats), you mitigate. 
For low risk, you accept ("This will happen; we accept the consequence"). For medium risk, you judge: "Is this business-critical? 
Can we afford to fix? Or should we accept and monitor?"

## Original source — PDF page 22

SCADA = Supervisory

Control and Data

Acquisition
13
Real-world 
incident: Stuxnet

Let's apply STRIDE and DREAD to a real example to cement understanding. Silver Star Mines operates a SCADA 
(Supervisory Control and Data Acquisition) system that controls mining equipment—pumps, conveyors, ventilation, etc. 
During a security audit, the team discovers a threat: "Unauthorized modification of SCADA nodes." Using STRIDE, this 
is Tampering and Denial of Service (attackers could modify equipment settings, causing machines to malfunction, stop, 
or behave dangerously).

Using DREAD scoring: Damage Potential = Doomsday (5)—worker could be injured or killed if equipment 
fails. Reproducibility = Low (2)—not easy to access SCADA nodes; they're protected. Exploitability = Low (2)—requires 
specialized knowledge of SCADA protocols. Affected Users = Moderate (3)—affects workers in affected section of 
mine. Discoverability = Low (1)—SCADA is not internet-facing; not easy to find. Average DREAD = (5+2+2+3+1)/5 = 2.6. 
But wait—consequence is extreme (Doomsday + workers), so we plot: Rare likelihood + Doomsday consequence = HIGH 
RISK. The company must invest in mitigation.

Mitigation strategy: (1) Preventative: Network Segmentation (isolate SCADA on separate network), access control (only 
authorized engineers), encryption. (2) Detective: Intrusion Detection on SCADA network, monitoring for unauthorized

## Original source — PDF page 23

changes. (3) Supportive: Security administration, auditing changes. Result: Even though the threat is rare, the consequence is so 
severe that substantial resources are justified.

## Original source — PDF page 24

Initial planning and 
threat modeling. Map

your system, identify

components, apply 
STRIDE systematically

to find threats.

Evaluate threats and score 
them. Which are high risk? 
Where should we spend 
resources?

Implement security measures. Deploy 
firewalls, encryption, authentication, 
logging, intrusion detection.

Review and verify controls. Are our defenses 
actually working? Did we miss any threats? 
What did we learn from incidents?

Here's the critical insight that separates professionals from amateurs: "Security is a cycle, not a destination." You don't 
"complete" security once and declare victory. Instead, you continuously repeat four phases in a cycle: (1) Design 
(STRIDE) – Initial planning and threat modeling. Map your system, identify components, apply STRIDE systematically to 
find threats. (2) Assess (DREAD) – Evaluate threats and score them. Which are high risk? Where should we spend 
resources? (3) Control (Mitigation) – Implement security measures. Deploy firewalls, encryption, authentication, logging, 
intrusion detection. (4) Audit (Follow-up) – Review and verify controls. Are our defenses actually working? Did we miss 
any threats? What did we learn from incidents?

Then you cycle back to Design because the threat landscape continuously evolves. Last year's top threat was 
ransomware; this year it's supply chain attacks. New vulnerabilities are discovered every day (zero-days). Attackers 
develop new tactics. Compliance requirements change. Your defenses must adapt. A hospital that implemented security 
controls in 2020 must reassess in 2024 because the threat environment has changed dramatically (AI-enabled attacks, 
new malware, etc.). The STRIDE/DREAD cycle keeps you ahead.

If you build security once and then leave, the security posture will degrade over time. New threats emerge. Patching falls

## Original source — PDF page 25

behind. Staff turn over. Controls weaken. That's why mature organizations do this cycle continuously—monthly threat assessments,
quarterly risk reviews, annual strategic security planning. Security is operationalized, not installed.

## Original source — PDF page 26

This is the capstone message: STRIDE and DREAD transform cybersecurity from a cost center to a strategic asset. When 
you use these frameworks systematically, you can justify security spending to executives with data. Instead of saying "We 
need a firewall because security is important" (vague, unconvincing), you say: "We identified 50 threats using STRIDE. 
Prioritized them using DREAD. The top 5 are rated extreme or high risk. A firewall mitigates 3 of them. Cost: $50K. 
Potential loss if we don't: $5M+ in breach damages, regulatory fines, reputation damage. ROI: 100x." Executives 
understand ROI and will fund initiatives with clear business justification.

STRIDE and DREAD also prevent two common security failures: (1) "Security theater"—buying expensive tools that look 
good but don't address real threats. (2) "Analysis paralysis"—identifying so many threats you're paralyzed and do 
nothing. STRIDE identifies threats systematically. DREAD prioritizes so you focus on what matters. You can't fix every 
threat, but you can fix the ones with the highest risk.

As a security professional, mastering these frameworks is essential. You'll use them in every job: designing a hospital 
EHR, auditing a cloud infrastructure, building a startup's security program. STRIDE and DREAD are the universal 
methodology. Learn them well, and you'll always be able to have data-driven conversations with leadership about where

## Original source — PDF page 27

to invest.

## Original source — PDF page 28

Part II: Traditional Defense Techniques
16

"Imagine designing an actual fortress in medieval times. The architect wouldn't rely on a single wall. There would be 
outer walls, an inner keep, guard towers, and hidden escape routes. Modern digital security works the same way. This 
slide shows a digital fortress—a real-world-inspired architecture used by major tech companies and hospitals.“

Walk through the layers visually: The Perimeter has firewall layers and DDoS protection (outer walls). 
The Monitoring layer has IDS and SIEM (watchtowers—Security Information and Event Management systems that collect 
and analyze logs from all sources). The Host Defense layer has antivirus, endpoint detection, and hardened operating 
systems (the keep—the core fortification). The Foundation has secure code review, encryption, secure APIs, and input 
validation (the architect's blueprint—if the foundation is weak, everything collapses).

No single layer is perfect. But when attackers must break through multiple layers, the cost and difficulty increase 
exponentially. This is defense-in-depth in practice.

## Original source — PDF page 29

17
Philosophy: Defense-in-depth is the opposite of 'security by obscurity.' It's security by multiplication—
each layer is visible, understandable, but layered so that defeating one doesn't grant automatic victory.

Visually, defense-in-depth is often shown as concentric spheres protecting a central core of assets. Here we see four 
layers (Firewall → IDS → AnƟvirus → Secure Code), each providing diﬀerent protecƟon, creaƟng redundancy.

Why redundancy matters: Imagine the firewall has a bug and lets malicious traffic through. The IDS (Intrusion Detection 
System) catches it. The IDS has a false negative and misses an attack? The antivirus on the host catches the malware. The 
antivirus is fooled by a polymorphic threat? The secure code design prevents exploitation.

The goal is "No single point of failure." There's no one place you can attack and bring down the whole system. Layer 4 
(Secure Code) is perhaps most important because it's the hardest for attackers to breach.

Philosophy: Defense-in-depth is the opposite of 'security by obscurity.' It's security by multiplication—each layer is visible, 
understandable, but layered so that defeating one doesn't grant automatic victory.

## Original source — PDF page 30

Key principle: "By concentrating all network traffic

through a single point, you gain visibility and 
control. The cost is potential bottleneck (latency).

In modern hospitals, this trade-off is worth it."

"The perimeter is your first impression. It's where all incoming traffic must pass. Think of it as a narrow gateway through 
which all traffic flows—a choke point. The firewall is at this choke point.“

There are three aspects to firewall design: (1) The Choke Point: Centralized traffic control. All traffic, regardless of source 
or destination, funnels through the firewall. This centralization allows unified policy enforcement. (2) The Filter: The 
internal policy engine that evaluates traffic against rules. (3) The Shield: The hardened implementation that resists 
attacks against the firewall itself (firewalls are often targets).

In a hospital: The firewall is often at the internet boundary. A patient calls the hospital—their internet traffic goes 
through the firewall (encrypted if it's HTTPS). The hospital's doctors access cloud storage—that traffic also goes through 
the firewall. A vendor connects to integrate with the hospital's EHR system—that goes through the firewall (or a 
separate, monitored channel).

Key principle: "By concentrating all network traffic through a single point, you gain visibility and control. The cost is 
potential bottleneck (latency). In modern hospitals, this trade-off is worth it."

## Original source — PDF page 31

(The Simplest Firewall)

Packet Filtering – The Simplest Firewall

"Imagine a package arriving on a conveyor belt. It has a label (header) with a destination address and what's inside (port 
number). A checkpoint guard checks the label: 'Does this match my rules? Is the destination on the allowed list? Is the 
port permitted?’”

Here's the process: A packet arrives with a header (source IP, destination IP, port, protocol). The firewall checks it against 
rules (e.g., "Allow traffic to port 443 from any source" or "Block traffic to port 25 from the DMZ"). If the packet matches a
"Release" rule, it continues. If it matches a "Discard" rule, it's dropped.

Strengths: Fast (only checks headers), simple (easy to configure), effective against many attacks. Weaknesses: Stateless 
(no memory of connections—every packet is evaluated independently), context-blind (can't detect sophisticated attacks 
hidden in the payload), can't see what's inside the packet.

Example: A hospital's packet filter might allow traffic to port 443 (HTTPS) from any internet source (patients accessing

## Original source — PDF page 32

the patient portal) but block port 3306 (MySQL database port) from the internet. This prevents direct internet access to the 
database. Simple but effective for known threats.

## Original source — PDF page 33

Advanced Firewall Methods – Stateful Inspection & Application Gateway
Let's deepen our understanding of the two advanced methods.

Stateful Inspection maintains a State Table that tracks active connections: [SRC: 192.168.1.18, DST: 8.8.8.8, PORT: 443, 
STATE: ESTABLISHED]. When a packet arrives, the firewall checks: "Is this a response to an established connection in my 
state table?" If yes, allow it. If no, drop it. This blocks many network-level attacks (spoofed packets, random connection 
attempts) without slowing traffic significantly.

Application Gateway (Proxy) is different. Instead of letting traffic pass through, it intercepts it completely. The client 
connects to the proxy, the proxy connects to the server. The proxy breaks the connection, inspects the entire payload for 
malicious content or policy violations, and re-initiates a new connection on behalf of the client. This is thorough (catches 
sophisticated attacks) but slow (lots of processing) and complex (requires separate proxy rules for each application).

In a hospital: A stateful firewall might be deployed at the main internet gateway (efficient, covers most threats). An 
application gateway might be deployed specifically for the hospital's web portal or email gateway where the risk is

## Original source — PDF page 34

highest.

## Original source — PDF page 35

Here's how you put these principles together architecturally. The DMZ (Demilitarized Zone) is a clever design pattern.

The internet connects to an External Firewall (FW1). Behind that is the DMZ, a "semi-trusted" zone containing public-
facing servers: web servers, email servers, DNS servers. These servers are accessible from the internet but not fully 
trusted.

Behind the DMZ is an Internal Firewall (FW2) that protects the inner sanctum: application servers, database servers, 
workstations with sensitive data.

Why split it this way? Because web servers are frequently attacked. If a web server is compromised, you don't want the 
attacker to have immediate access to your database. The internal firewall creates a second barrier. An attacker must 
compromise the web server, then find a way through the internal firewall to reach the database—two layers of effort 
instead of one.

In a hospital, the DMZ might contain the patient portal (accessible from the internet). The internal network behind FW2

## Original source — PDF page 36

contains the EHR (Electronic Health Record) database with actual patient data. If the patient portal is hacked, the EHR is still
protected.

## Original source — PDF page 37

network traffic,

system logs
collects activity

checks against signatures or baselines

notifies the operator

operator 
updates rules

(monitors and alerts)

"So far, we've talked about blocking bad traffic at the perimeter. But what if something slips through? Or what if an 
insider is the threat? The IDS is your watchtower—it monitors and alerts.“

The IDS workflow: (1) Data Source (network traﬃc, system logs) →(2) Sensor (collects acƟvity) →(3) Analyzer (checks 
against signatures or baselines) →(4) Alert (noƟﬁes the operator) →(5) Feedback Loop (operator updates rules).

The fundamental challenge is balancing false positives vs. false negatives. Too sensitive? Hundreds of alerts per day; 
operators ignore them (alert fatigue). Too conservative? Real attacks slip through undetected. There's no perfect setting; 
it's a trade-off that depends on your risk tolerance.

In a hospital: An IDS might alert if: (1) An unusual amount of data is exfiltrated (i.e., transfer secretly out of an area 
under enemy control) from the EHR system (potential data breach), (2) A workstation attempts to access the database 
directly (unusual, might indicate a compromised machine), (3) A user logs in at 3 AM from an unknown location 
(suspicious). Some of these will be false alarms (a legitimate data backup at 3 AM), but each alert is investigated.

## Original source — PDF page 38

"IDS can be deployed in two places with different perspectives.“

Network-Based IDS (NIDS) watches the roads—all network traffic flowing through a monitoring point (e.g., at the 
firewall). It sees: "A large file transfer from the database to an external IP at 11 PM" or "Repeated failed login attempts to 
the web server." It catches network-level attacks (reconnaissance, data exfiltration, DoS). Drawback: Can't see what's 
happening inside encrypted traffic.

Host-Based IDS (HIDS) watches the rooms—a software agent installed on individual servers or workstations. It monitors 
system calls, log files, and file integrity. It sees: "A process modified the operating system kernel" or "A file that should
never change (like /etc/passwd) was altered." It catches host-level attacks (privilege escalation, rootkits, unauthorized 
modifications).

In a hospital: NIDS at the main firewall catches external threats and unusual network traffic. HIDS on critical servers 
(database, EHR) catches internal compromise or insider threats.

## Original source — PDF page 39

"The IDS analyzer uses two primary methods: signature detection and anomaly detection.“

Signature Detection is like fingerprinting. The analyzer has a database of known malware and attack patterns. When it 
sees traffic that matches a signature (e.g., "A SQL injection attempt"), it alerts. Strengths: Fast, accurate for known 
threats, no false positives if signatures are good. Weaknesses: Blind to zero-day attacks (attacks using unknown exploits), 
requires constant signature updates.

Anomaly Detection establishes a baseline of "normal" behavior and flags deviations. For example: "Normal traffic on the 
database port is 100 GB/day. Today's traffic is 10 TB. That's anomalous—alert!" Strengths: Catches new, unknown 
attacks. Weaknesses: High false positive rate (a legitimate surge in traffic looks anomalous), requires tuning.

The graph shows the trade-off: As you tighten signatures (more conservative), you miss more anomalies. As you loosen 
signatures (less conservative), you get more false positives. There's a sweet spot, different for each organization.

In a hospital: Signature detection catches known malware outbreaks (hospital IT team has Snort rules for prevalent

## Original source — PDF page 40

malware). Anomaly detection catches unusual patterns (a workstation that suddenly exfiltrates 50 GB of data doesn't match its
normal 100 MB/day pattern).

## Original source — PDF page 41

"The antimalware layer is your immune system. Like your body's antibodies, it recognizes and neutralizes pathogens.“

a set of software tools that enable an 
unauthorized user to gain control of a 
computer system without being 
detected.

"The antimalware layer is your immune system. Like your body's antibodies, it recognizes and neutralizes pathogens.“

The diagram shows a mechanical antibody capturing malicious code. The pathogens are: (1) Viruses (parasitic code that 
requires a host to propagate), (2) Worms (self-propagating without a host), (3) Trojans (disguised as legitimate software 
but containing malicious payloads), (4) Rootkits (stealthy persistence mechanisms that hide the attacker's presence).

Antimalware engines use multiple detection methods: (1) Signature matching (known malware hashes), 
(2) Heuristics (behavior analysis—"This program is trying to modify the boot sector; that's suspicious"), 
(3) Sandboxing (detonate suspicious files in an isolated environment to see what they do), (4) Cloud intelligence (query 
reputation databases to see if other organizations have flagged this file).

In a hospital: When a staff member downloads a file, the antimalware engine scans it. If it's malware or behaves 
suspiciously, it's quarantined. If it's clean, it's allowed. In the background, the hospital's antimalware is connected to 
threat intelligence feeds (global malware databases) so zero-day malware that's hitting other hospitals is caught quickly.

## Original source — PDF page 42

Security technologies evolve in response to threats. Here's the 
evolution of antimalware:

Fast but limited
Added behavioral analysis. 
Can catch variants of known

malware.

Catches malware at 
runtime, even if it was

never written to disk.

Combines scanning,

access control, and 
behavioral monitoring 
across multiple layers.

"Security technologies evolve in response to threats. Here's the evolution of antimalware:“

(1st Generation: Simple Scanners) - Just signature matching. Fast but limited. (2nd Generation: Heuristics) - Added 
behavioral analysis. Can catch variants of known malware. (3rd Generation: Activity Traps) - Memory monitoring. 
Catches malware at runtime, even if it was never written to disk. (4th Generation: Full Protection) - Combines scanning, 
access control, and behavioral monitoring across multiple layers.

By "arms race," we mean: AƩackers develop new malware → AnƟmalware vendors add detecƟon → AƩackers modify 
malware to evade detecƟon → Vendors adapt again. This cycle is endless. The goal is not to win the race (impossible) but 
to stay ahead of the majority of threats.

In a hospital: Using 4th-gen antimalware (often integrated with EDR—Endpoint Detection and Response) is now 
standard. Hospitals can't rely solely on signatures; they need behavioral analysis and real-time monitoring.

## Original source — PDF page 43

When a file is suspicious but we're not sure it's 
malware, we detonate it safely in a sandbox

Emulation: The sandbox 
simulates a full computer.
Detonation: The file is executed.

Observation: System calls, file modifications, 
network connections are logged.
Decision: Malware or safe?

"When a file is suspicious but we're not sure it's malware, we detonate it safely in a sandbox.“

The sandbox is an isolated environment that emulates CPU, memory, disk, and network. A suspicious file is executed 
here, not on the live system. We observe: Does it try to encrypt files? Does it try to contact a command-and-control 
server? Does it try to steal passwords? Based on behavior, we classify it as malware or benign.

Emulation: The sandbox simulates a full computer. Detonation: The file is executed. Observation: System calls, file 
modifications, network connections are logged. Decision: Malware or safe?

In a hospital: An automated threat analysis system continuously analyzes files. Suspicious executables are sandboxed. If 
malware is detected, a signature is generated and pushed to all antivirus clients within hours. The digital immune system 
at work.

## Original source — PDF page 44

Never assume anything. Expect 
malformed input, malicious users,

network failures.

Software that bends under attack but 
doesn't break. If one request fails, the

system continues serving others.

Principle 1
Principle 2

Validate every user, every input, every

time. Don't trust just because 
something came from a trusted source.

Principle 3

"Finally, we reach the foundation: the code itself. No matter how good your defenses are, if the software is full of 
vulnerabilities, you're building on sand.“

Security by Design means three principles: (1) Defensive Programming: Never assume anything. Expect malformed 
input, malicious users, network failures. (2) Resilience: Software that bends under attack but doesn't break. If one 
request fails, the system continues serving others. (3) Paranoia: Validate every user, every input, every time. Don't trust 
just because something came from a trusted source.

A classic example: An attacker sends a massive file that should be small. Defensive programming checks the file size 
before processing and rejects it. A resilient system logs the error and continues running. Paranoid programming assumes 
the client is lying and validates independently.

## Original source — PDF page 45

(1) Input Validation- Check the input type

and format. Usernames should be

alphanumeric, not contain SQL

keywords.
(2) Canonicalization - Convert input to a

standard format before using it.
(3) Parameterized Queries - Use prepared

statements that separate code from

data: stmt.bind(":username", 
user_input) - The database knows 
user_input is data, not code, so SQL

injection is impossible.

"Here's the #1 vulnerability in web applications: poor input validation. Specifically, SQL Injection.“

The example shows: A nurse logs into the hospital system. The login form takes a username. The code is: SELECT * FROM 
users WHERE username = '" + user_input + “’;

A normal nurse enters: alice → Query becomes: SELECT * FROM users WHERE username = 'alice'; → LegiƟmate.

A hacker enters: admin' OR '1'='1 → Query becomes: SELECT * FROM users WHERE username = 'admin' OR '1'='1'; → 
The OR '1'='1' is always true, so the query returns every user in the database. The hacker just bypassed authentication.

The Fix: (1) Input Validation - Check the input type and format. Usernames should be alphanumeric, not contain SQL 
keywords. (2) Canonicalization - Convert input to a standard format before using it. (3) Parameterized Queries - Use 
prepared statements that separate code from data: stmt.bind(":username", user_input) - The database knows 
user_input is data, not code, so SQL injection is impossible.

## Original source — PDF page 46

In a hospital: The EHR application should use parameterized queries everywhere. Regular security audits should test for SQL 
injection, command injection, and other input-based attacks.

## Original source — PDF page 47

"Security is a continuous loop, not a destination." 
After an incident, you learn (What went wrong?), you update defenses (How do we stop this again?), you iterate.

The next time a similar attack is attempted, you're stronger.
30

"Let's wrap up Lec-3-B with the full picture. Defense-in-depth uses four layers, each with a role:“

(1) Firewall (BLOCK) - Stops known bad traffic at the perimeter.
(2) IDS (DETECT) - Monitors for attacks that slip through the firewall.
(3) Antivirus (CLEAN) - Removes malware from the system.
(4) Secure Code (RESIST) - Prevents vulnerabilities in the software itself.

An attacker might find a way past the firewall (sophisticated attack). But if IDS alerts, an analyst can respond in seconds. 
If malware gets through both, antivirus stops it. If a zero-day exploit targets code, secure coding practices (input 
validation, etc.) limit the damage.

The Principle: "Security is a continuous loop, not a destination." After an incident, you learn (What went wrong?), you 
update defenses (How do we stop this again?), you iterate. The next time a similar attack is attempted, you're stronger.

## Original source — PDF page 48

Part III: Limitations of Traditional Techniques
31

"We've learned to think like architects (Lec-3-A) and to build layered defenses (Lec-3-B). But here's the reality: It's a 
war. Defenders and attackers are in constant competition. Every time we implement a new defense, attackers adapt. 
Every time attackers develop a new exploit, defenders respond.“

The fortress image is apt. Your digital fortress has walls (firewalls), watchtowers (IDS), and guards (antivirus). But enemy 
engineers are probing your walls with techniques 
like THREAT_VECTOR_DETECTION, PORT_443_BREACH, MALWARE_SIGNATURE_UNKNOWN, POLYMORPHIC_ENTITY_F
LOW, ZERO_DAY_EXPLOIT. Notice the last one—a zero-day exploit is an attack you don't have a defense for yet.

This lecture is about understanding the dynamics of this conflict. Why do traditional defenses fail? How do attackers 
innovate? How do we stay ahead? By the end of Lecture 3, you'll see security not as a product you buy but as an ongoing 
process of adaptation.

## Original source — PDF page 49

?

"Here's the core of Lec-3-C: Why do traditional defenses fail? Three reasons:“

(1) The Invisible Enemy: Zero-Day Vulnerabilities. A vulnerability exists in the hospital's EHR software, unknown to the

vendor and to the hospital. An attacker discovers it and exploits it. Your IDS has no signature for it (unknown). Your 
firewall has no rule for it (unknown). Your antivirus has no detection for it. For a window of time (hours to months), 
the vulnerability is exploited with impunity. Only when the vendor issues a patch does the fortress close the gap.

(2) The Moving Target: Polymorphism. Malware rewriters its own binary signature while keeping the payload the same.

Your antivirus signature matched Malware_Variant_A, but Malware_Variant_B is byte-for-byte different (different 
encryption wrapper, different packing). AV thinks it's benign. Attacker wins.

(3) The Noise Problem: False Positives & Alert Fatigue. Even 99% accurate detection generates too many false alarms in

a large network. Analysts drown in alerts and start ignoring them ("It's probably a false positive"). A real attack gets 
lost in the noise.

## Original source — PDF page 50

"Let's zoom in on zero-days. Here's the timeline:“

(1) Vulnerability Introduced: A developer writes buggy code (buffer overflow, SQL injection risk). The code ships in a

release.
(2) Exploit Discovered by Attacker: A sophisticated attacker reverse-engineers the code, finds the bug, writes an exploit.
(3) THE WINDOW: Zero-Day Attacks Occur Here. The attacker exploits the vulnerability while vendors and defenders are

unaware. This window can be hours, days, weeks, or months.
(4) Patch Released: The vendor discovers the vulnerability (from attack reports or security researchers) and issues a

patch. The window closes. Organizations patch and the vulnerability is mitigated.

The problem: Traditional signature scanners are blind during this window. They don't have a signature for a 
vulnerability that was just discovered.

Example: WannaCry ransomware exploited a Windows zero-day (EternalBlue, leaked by Shadow Brokers). For the time 
between exploitation and patching, every unpatched Windows system in the world was vulnerable. Hospitals with old

## Original source — PDF page 51

systems that hadn't patched were hit hard.

## Original source — PDF page 52

(network traffic volume, login 
frequency, file access, etc.)

"IDS generates alerts based on patterns. But patterns are noisy. Here's why:“

The graph shows two distributions: Legitimate User Behavior (grey curve) and Intruder Behavior (black curve). The x-
axis is "System Activity" (network traffic volume, login frequency, file access, etc.).

In a normal hospital, doctors log in during working hours, access EHRs occasionally, and stay connected. In the evening, 
access drops. An intruder might log in at 3 AM, access many patient records quickly, and download files. But what about 
a legitimate 3 AM access? A doctor responding to an emergency, a backup process running, a night shift rotation.

If you set the IDS threshold conservatively (only alert on extreme anomalies), you miss intruders who blend in. If you set 
it aggressively (alert on any deviation), you flood analysts with false positives.

The Base-Rate Fallacy: In a hospital network, real attacks might be 0.1% of events. Even 99% detection accuracy means: 
(0.1% × true positives) + (99.9% × 1% false positive rate) = way more false alarms than real attacks. Analysts get 
overwhelmed.

## Original source — PDF page 53

"Polymorphic malware evades signature detection by constantly changing form.“

The diagram shows a malware payload (red core) with different encryption wrappers (blue shapes): Square (Signature A), 
Hexagon (Signature B), Star (Signature C).

Here's how it works: The malware author writes a self-modifying program. Each time it propagates, it re-encrypts itself 
with a random key and re-packages itself in a different format. The payload (the malicious code) is the same, but 
the signature (the file hash, the byte sequence) is different each time.

Your antivirus has signature for "Malware_PolyVirus_A (hash 12345)." But the next instance has a different hash (hash 
67890) because the wrapper is different. AV thinks it's a new, benign file.

Polymorphic malware defeated signature-based detection. This drove the adoption of heuristic analysis (analyzing 
behavior, not just signatures) and sandboxing (detonating suspicious files to see what they do).

## Original source — PDF page 54

The point: You can't maximize all 
three simultaneously. A hospital 
must choose: How much latency is 
acceptable to inspect traffic? How 
restrictive can policies be before 
users rebel? How much budget 
can we spend?

E.g., Doctor using

Private Cloud

"There's another trade-off, often overlooked: security vs. usability vs. performance.“

The trade-off triangle shows three vertices: (1) Security (Risk Reduction): Deep inspection adds latency. A hospital with 
ultra-strict firewall rules and IDS scrutiny might slow network traffic, frustrating doctors trying to access EHRs. (2) 
Usability (User Productivity): Tight controls lead to "Shadow IT." If the hospital's approved cloud storage is hard to use, 
doctors might use personal Dropbox accounts, circumventing security. (3) Performance/Cost (Speed & Budget): Perfect 
security is infinitely expensive. A hospital can't afford to inspect every packet at 10 Gbps line rate; the hardware would 
be prohibitively expensive.

The point: You can't maximize all three simultaneously. A hospital must choose: How much latency is acceptable to 
inspect traffic? How restrictive can policies be before users rebel? How much budget can we spend?

## Original source — PDF page 55

E.g., Drive to recruit 
PhD students at XJTU +

Power of AI Bots

"This is where we pivot to the future. The arms race has reached a new frontier: AI vs. AI.“

On the Defense side: Deep learning anomaly detection finds unknown threats by learning normal patterns and flagging 
deviations. Machine learning classifiers identify malware without signatures.

On the Attack side: Generative AI can craft phishing emails that are nearly indistinguishable from legitimate messages. 
AI-driven password guessing, vulnerability scanning, and exploit generation are coming (or already here).

The dynamic is new. For decades, defenses were mostly static (rules, signatures) and attackers were nimble 
(polymorphism, zero-days). Now, both sides are deploying AI. Attackers use AI to evade defenses. Defenders use AI to 
detect evasion.

Example: A hospital's ML-based IDS learns that normal database queries fetch 1-10 rows per minute. A query fetching 
100,000 rows is anomalous—alert! But an attacker could craft queries that slowly fetch data (10 rows per minute) over 
hours, blending in with normal traffic. Defense adapts: Develop more sophisticated features to detect slow exfiltration.

## Original source — PDF page 56

Attack adapts again: Use a botnet of compromised hospital computers to normalize the traffic signature. The arms race continues,
now with AI.

## Original source — PDF page 57

"So how do we win an arms race we can't win? The answer is resilience through defense-in-depth.“

The diagram shows a fortress with multiple layers:
(1) PREVENT: Encryption, authentication, access control—stop attacks before they happen.
(2) DETECT: IDS, monitoring, audit logs—catch attacks while they're happening.
(3) RECOVER: Backups, redundancy, incident response—recover after an attack succeeds.

Supporting all three are:
(4) Management Controls (policies, risk assessment),
(5) Technical Controls (firewalls, encryption),
(6) Physical Controls (locked server rooms, guards).

Two vertical arrows represent:
(7) Audit (comprehensive logging),
(8) Monitoring (real-time alerts).

## Original source — PDF page 58

The philosophy: Don't assume you'll prevent all attacks. Assume a breach will happen. Be ready to detect it quickly and recover 
efficiently. This mindset shift is crucial. Instead of spending all budget on prevention, you allocate it: 40% to prevention, 40% to 
detection, 20% to recovery.

In a hospital: Ransomware might get past the firewall (breach prevention failed). But IDS detects unusual encrypted file traffic
(detection succeeded). Backup systems allow recovery without paying ransom (recovery succeeded). Net result: Attack was costly 
for the attacker, recovery was fast for the hospital.

Final message: "Security is not a product, but a process. It's not about building the perfect wall; it's about building an adaptable, 
resilient system that detects and responds to threats faster than attackers can innovate."

## Original source — PDF page 59

[No extractable narration; see source image.]

