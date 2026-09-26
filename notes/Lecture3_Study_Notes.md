# Lecture 3 质量管理方法 II

Quality Management Methods II

依据：51页学生版课件及2026年9月22日课堂转录。留空内容按课堂讲述补充；案例百分比不是已核实研究结论。

复习主线：稳健设计减少变异 → FTA/FMEA 预防失效 → Kaizen/品管圈推动参与 → Six Sigma/Lean 改善变异与流转 → 整合方法并克服采用障碍。

## 进阶质量管理概览

### L3-01-01 共同目标与实施限制

Shared goals and limitations · PDF 4, 5, 6

- **进阶方法旨在提升照护质量、优化运作、运用证据、支持安全目标。** Advanced methods aim to enhance care quality, optimize operations, use evidence and support safety.
- **核心方法：田口方法、故障树分析、失效模式与影响分析、持续改善、品管圈、六西格玛、精益、精益六西格玛。** Core methods: Taguchi, FTA, FMEA, Kaizen, Quality Circles, Six Sigma, Lean and Lean Sigma.
- **主动预防是在患者受到伤害之前识别潜在失效。** Proactive improvement identifies potential failures before patients are harmed.
- **成效取决于资源、数据、培训、员工参与以及是否适合本地情境。** Benefits depend on resources, data, training, staff participation and the fit with local conditions.

**课堂补充：** 老师反复强调：方法不同，但患者安全、有效性、效率和减少浪费仍是共同方向。Different tools share common improvement goals.

**练习：** 列出两个共同目标：一个关于照护质量，一个关于安全。 Name two shared aims: one about care quality and one about safety.

**参考：** 提升照护质量并支持患者安全。 Enhance care quality and support patient safety.

## 田口方法与稳健设计

### L3-02-01 稳健设计的核心

Robust design · PDF 8, 9, 10

- **田口方法强调在设计阶段减少不必要变异，使产品或流程在不同条件下仍保持稳定表现。** Taguchi methods emphasize reducing unwanted variation during design so a product or process performs consistently under varying conditions.
- **稳健不是条件永远不变，而是表现较少受条件变化影响。** Robust does not mean that conditions never change; it means performance is less sensitive to those changes.
- **课件介绍该方法由日本工程师、统计学家 Genichi Taguchi 发展。** The slides credit Japanese engineer and statistician Genichi Taguchi.

**辨析：** 重要辨析：不要把课堂中的“尽量减少变异”背成“完全没有变异”或“永远不用调整”。

**练习：** 条件变化时，稳健设计希望保持什么？ What does robust design try to maintain when conditions vary?

**参考：** 稳定表现，并减少变异。 Consistent performance with reduced variation.

### L3-02-02 医学影像设备的稳健设计

Medical imaging example · PDF 10

- **学生版课件引出医学影像设备，但例子文字未写完整。** The student slide introduces a medical imaging device but leaves the example incomplete.
- **课堂补充：同时考虑曝光设置、对比度、患者移动和机器校准。** Classroom explanation: consider exposure settings and contrast alongside patient movement and machine calibration.
- **设计目标是在操作条件变化时仍保持可靠图像质量。** The design goal is reliable image quality despite variation in operating conditions.

**课堂补充：** 第10页留空部分依据老师讲述补充。老师提出把移动、校准和设置变化在设计阶段一起考虑。This completes the unfinished example using the transcript.

**辨析：** 可联系你的 DICOM 项目理解“图像质量是否稳定”；这是教学案例，不是设备参数或临床设置建议。

**练习：** 影像例子讨论了哪两个变异来源？ Which two sources of variation were discussed in the imaging example?

**参考：** 患者移动和机器校准问题。 Patient movement and machine calibration issues.

### L3-02-03 正交表、参数与噪声因素

Orthogonal arrays and noise · PDF 11, 13

- **正交表组织选定的因素组合，以较有效率地研究因素；信噪比帮助比较表现的稳健性。** Orthogonal arrays organize selected combinations of factors to study them efficiently. Signal-to-noise ratios help compare performance robustness.
- **课件讨论剂量、间隔、生物标志物等因素，以及患者差异或依从性等变异来源。** The slides discuss dose, interval and biomarkers as factors, and patient differences or adherence as sources of variation.
- **Noise 在这里指设计情境中难以控制的影响，不一定是声音。** Noise means influences that are difficult to control in the design context, not necessarily audible sound.
- **化疗例子写到剂量相关不良事件减少35%，但没有提供可识别的研究出处。** The chemotherapy example reports 35% fewer dose-related adverse events, but gives no identifiable study citation.

**辨析：** 35%只作为课件示例数字记录。正交设计不能替代临床试验伦理、安全审查或个体化判断；不据此制定剂量。

**练习：** 写出组织试验与比较稳健性的两种田口工具。 Name the two Taguchi tools mentioned for arranging trials and comparing robustness.

**参考：** 正交表和信噪比。 Orthogonal arrays and signal-to-noise ratios.

### L3-02-04 优势、限制与分析工具

Strengths, limits and software · PDF 12, 14

- **优势：减少流程变异、提高可靠性、较有效率地安排试验次数。** Strengths: reduced process variation, greater reliability and efficient use of experimental runs.
- **限制：复杂交互作用、医疗流程的非线性、统计能力、培训和文化阻力。** Limits: complex interactions, nonlinear healthcare processes, statistical expertise, training and cultural resistance.
- **工具页列出 Minitab、JMP、Design-Expert、R 作为例子。** The software slide lists Minitab, JMP, Design-Expert and R as examples.
- **解释结果需要结合临床知识与统计知识。** Clinical knowledge and statistical knowledge must be combined to interpret results meaningfully.

**课堂补充：** 老师说软件名称用于举例，不要求全部背诵；也提醒只会计算、不了解临床背景并不够。Software was illustrative; clinical understanding is needed alongside analysis.

**辨析：** 第14页部分文字显示不清，结合可提取文字与课堂讲述整理。不将课件关于“线性”的简述推广为所有田口设计都只能处理线性关系。

**练习：** 列出两个与能力和改变有关的实施障碍。 Name two implementation barriers concerning skills and change.

**参考：** 统计能力不足和变革阻力。 Limited statistical expertise and resistance to change.

## 系统性风险评估

### L3-03-01 故障树分析的方向与逻辑门

Fault Tree Analysis · PDF 16, 17, 18, 19

- **FTA＝故障树分析。从不希望发生的顶事件开始，向下追查促成原因及其组合。** FTA = Fault Tree Analysis. Start from an undesired top event and trace combinations of contributing causes downward.
- **FTA 是自上而下的演绎分析，以 AND、OR 逻辑门连接基本事件。** FTA is top-down and deductive; basic events are linked through AND and OR logic gates.
- **AND 要求相关条件同时成立；OR 表示任一相关条件成立即可。** AND requires the linked conditions together; OR can be satisfied by any linked condition.
- **课件图以错误胰岛素剂量为顶事件，追查可能的输送或计算失效。** The slide’s diagram uses an incorrect insulin dose as the top event and traces possible delivery or calculation failures.

**辨析：** FTA 从失效事件往下找原因，不是单纯按时间顺序画流程图。它可帮助根因调查，但不等于所有 Root Cause Analysis 方法。

**练习：** FTA 分析方向是什么？使用哪两个逻辑门？ What is the direction of FTA, and which two logic gates are used?

**参考：** 自上而下；AND 和 OR 逻辑门。 Top-down; AND and OR gates.

### L3-03-02 用药错误与麻醉设备案例

FTA healthcare cases · PDF 17, 20

- **针对用药错误，建立故障树识别关键路径，再选择预防措施。** For medication errors, build a fault tree to identify critical pathways and select preventive measures.
- **麻醉例子追查与缺氧相关的气体泄漏、设置错误、阀门故障及漏做使用前检查。** The anesthesia example traces gas leaks, incorrect settings, valve faults and missed pre-use checks associated with hypoxia.
- **应对包括预防性维护、使用前检查和员工培训。** Responses include preventive maintenance, pre-use checks and staff training.

**辨析：** 这是风险分析学习，不是麻醉设备故障排查操作指引。

**练习：** 列出麻醉设备例子中的两项预防措施。 Name two prevention measures in the anesthesia example.

**参考：** 预防性维护和员工培训。 Preventive maintenance and staff training.

### L3-03-03 FMEA 步骤与风险排序

Failure modes and effects · PDF 21, 22

- **FMEA＝失效模式与影响分析。识别流程可能怎样失效、有什么影响，以及如何降低风险。** FMEA = Failure Mode and Effects Analysis. Identify how a process may fail, its effects and actions to reduce the risk.
- **绘制流程、识别失效模式、评估影响、排列风险优先级，再选择改进措施。** Map the process, identify failure modes, assess effects and prioritize risks before selecting corrective actions.
- **用药案例使用严重度、发生频度和可检测性评分。** The medication case uses severity, occurrence and detection scores.
- **严重度关注后果；发生频度关注发生可能性；可检测性关注能否在造成伤害前发现。** Severity concerns consequences; occurrence concerns how often failure may happen; detection concerns finding it before harm.

**课堂补充：** 老师特别补充：流程图应覆盖所有步骤，不应只画已经知道的高风险步骤。Map all steps, not just previously identified high-risk steps.

**辨析：** 不同评分表对 detection 的方向定义可能不同，本讲材料未给评分表，不能自行补出统一阈值。

**练习：** 用药 FMEA 案例用了哪三个风险评分维度？ Which three risk-rating dimensions appear in the medication FMEA case?

**参考：** 严重度、发生频度、可检测性。 Severity, occurrence and detection.

### L3-03-04 用药与输血安全案例

Medication and transfusion FMEA · PDF 22, 23

- **用药案例覆盖处方、配药和给药，识别错误剂量、错误患者等模式。** The medication case examines prescribing, dispensing and administration, including wrong dose and wrong patient.
- **课件描述条码扫描与双重核对，用于用药和输血安全。** The slides describe barcode scanning and double-check procedures for medication and transfusion safety.
- **用药案例报告六个月内错误率降低58%；材料没有附研究出处。** The medication case reports a 58% error-rate reduction over six months; no study citation is supplied.

**辨析：** 58%是课件示例数据，不是已核实研究结论或普遍效果。技术仍需配合正确流程与员工遵循。

**练习：** 输血案例提出哪两种安全措施？ Which two safety measures appear in the transfusion case?

**参考：** 双重核对和条码扫描。 Double-check systems and barcode scanning.

### L3-03-05 FTA 与 FMEA 怎么区分

FTA versus FMEA · PDF 18, 21

- **FTA 问：哪些原因组合可能导致这个失效事件？** FTA asks: what combinations of causes could lead to this failure event?
- **FMEA 问：各流程步骤可能怎样失效、后果是什么、如何降低风险？** FMEA asks: how could each process step fail, what would happen, and how should we reduce the risk?
- **两者可在主动风险评估中互相补充。** They can complement each other in proactive risk assessment.

**辨析：** 辅助比较题；关键词检查不能判断名称是否写反，请结合参考答案自查。

**练习：** 哪种方法用故障树？哪种分析失效模式与影响？ Which method uses a fault tree, and which examines failure modes and effects?

**参考：** FTA 用故障树；FMEA 分析失效模式与影响。 FTA uses a fault tree; FMEA examines failure modes and effects.

## 持续改善文化与品管圈

### L3-04-01 Kaizen：小步、持续、全员

Kaizen philosophy · PDF 25, 26, 28

- **Kaizen 指持续向好改变：通过员工参与，进行小规模、渐进、持续的改善。** Kaizen means change for the better: small, incremental and continuous improvements involving employees.
- **核心做法：每日改善、员工赋权、减少浪费、标准化、数据驱动迭代、以患者为中心。** Core practices: daily improvements, staff empowerment, reducing waste, standardization, data-driven iteration and patient-centered care.
- **有效的小改变形成标准，并成为下一轮改善的基础。** Effective small changes become standards and provide a base for the next improvement.

**辨析：** 联系 Lesson 2：BPR 更强调根本性重设计；Kaizen 更强调日常小步改善。

**练习：** 用三个词描述 Kaizen 改善的规模、方式和持续性。 What three words describe the scale, pace and duration of Kaizen improvements?

**参考：** 小规模、渐进、持续。 Small, incremental and continuous.

### L3-04-02 急症室与出院流程改善

Kaizen cases · PDF 27, 29

- **急症室例子：描绘患者流程、找瓶颈、尝试小改变、测量结果、再迭代。** A&E example: map the patient journey, identify bottlenecks, test small fixes, measure results and repeat.
- **课件举例包括检验申请准备、分流与检验人员之间的沟通改善。** The slides mention lab-order preparation and better communication between triage and laboratory staff.
- **出院例子：每日识别瓶颈、简化文书，改善患者流转。** Discharge example: identify daily bottlenecks and streamline paperwork to improve patient flow.

**课堂补充：** 老师强调一线人员最熟悉步骤和问题，应先听取他们的意见，而不是管理者单独设计所有改变。Frontline knowledge should inform changes.

**练习：** 在测试患者流转的小改变前，Kaizen 团队应找出什么？ What should a Kaizen team identify before testing small changes in patient flow?

**参考：** 患者流程中的瓶颈。 Bottlenecks in the patient journey.

### L3-04-03 品管圈：小组定期解决问题

Quality Circles · PDF 30, 31

- **品管圈是员工组成的小组，定期识别、分析并解决工作相关问题。** Quality Circles are small groups of employees who meet regularly to identify, analyze and solve work-related problems.
- **课件描述通常由同一单位5–10名成员组成，有引导者和管理支持。** The slide describes typically 5–10 members from one unit, with a facilitator and management support.
- **工具包括头脑风暴、根因分析和 PDCA；参与有助于形成共同责任和主人翁意识。** Tools include brainstorming, root cause analysis and PDCA. Participation builds shared responsibility and ownership.

**课堂补充：** 老师强调管理层支持的重要性：否则建议可能得不到资源落实。Management support helps turn ideas into action.

**练习：** 品管圈定期做什么？课件描述多少名成员？ What does a Quality Circle do regularly, and what group size is described?

**参考：** 定期开会识别、分析、解决工作问题；通常5–10名成员。 Meet to identify, analyze and solve work problems; typically 5–10 members.

### L3-04-04 持续开展的五个条件

Sustain improvement cultures · PDF 32

- **领导承诺、员工参与、培训文化、开放沟通、系统整合。** Leadership commitment; staff engagement; training culture; open communication; system integration.
- **领导配置资源；员工提供意见；培训建立能力；安全反馈渠道让问题能被提出。** Leaders allocate resources; staff contribute ideas; training builds capability; safe feedback channels allow problems to surface.
- **让改善与医院目标一致，并把有效改变写入政策和日常实践。** Align improvement with hospital goals and embed successful changes into policy and routine practice.

**练习：** 列出维持 Kaizen 与品管圈的五个条件。 List the five conditions for sustaining Kaizen and Quality Circles.

**参考：** 领导承诺；员工参与；培训文化；开放沟通；系统整合。 Leadership commitment; staff engagement; training culture; open communication; system integration.

## 六西格玛与精益管理

### L3-05-01 Six Sigma 与 DMAIC 五步

Six Sigma and DMAIC · PDF 34, 35

- **Six Sigma 用数据减少缺陷和流程变异。** Six Sigma uses data to reduce defects and process variability.
- **DMAIC＝定义、测量、分析、改进、控制。** DMAIC = Define, Measure, Analyze, Improve, Control.
- **定义问题；测量当前表现；分析原因；改进流程；通过控制维持成效。** Define the problem; measure current performance; analyze causes; improve the process; control it to sustain gains.
- **放射科例子：分析患者流转、找瓶颈、调整预约安排来减少等待。** Radiology example: analyze patient flow, locate bottlenecks and change scheduling to reduce waits.

**课堂补充：** 老师说明 DMAIC 可用于真实流程问题分析，并提到以往学生曾用于作业或案例研究。DMAIC was discussed as an applied problem-solving structure.

**辨析：** 转录中的正态分布百分比识别不清，本笔记不据此给出“六西格玛等于某准确率”的结论。关键词匹配不检查步骤顺序。

**练习：** 按顺序写出 DMAIC。 Expand DMAIC in order.

**参考：** 定义、测量、分析、改进、控制。 Define, Measure, Analyze, Improve, Control.

### L3-05-02 Lean：减少不增值步骤

Lean management · PDF 36, 37

- **Lean 通过改善流转、减少不增值活动来消除浪费并提升价值。** Lean eliminates waste and maximizes value by improving flow and removing non-value-added activities.
- **急症室例子使用价值流分析、简化分流流程并改善床位周转。** In the A&E example, the team maps value streams, streamlines triage and improves bed turnover.
- **可视化管理和每日短会有助于维持改进。** Visual management and daily huddles help sustain the changes.
- **例子报告分流评估时间下降40%；材料没有附研究出处。** The example reports a 40% fall in triage assessment time; it supplies no study citation.

**辨析：** 减少浪费不等于删除必要的安全检查。40%仅作为课件示例结果，不作为通用效果。

**练习：** Lean 希望消除什么、最大化什么？ What does Lean seek to eliminate, and what does it maximize?

**参考：** 消除浪费、最大化价值。 Eliminate waste and maximize value.

### L3-05-03 变异与流程浪费的区别

Six Sigma versus Lean · PDF 37

- **Six Sigma 重点是缺陷与变异，运用数据分析和统计控制。** Six Sigma focuses on defects and variability using data analysis and statistical control.
- **Lean 重点是流转、等待、资源效率和不增值工作。** Lean focuses on flow, waiting, resource efficiency and removing non-value-added work.
- **两者有交集，可以组合使用；延误问题可能同时需要流程分析与变异分析。** They overlap and can be combined; a delay problem may require both flow analysis and variation analysis.

**辨析：** 这是一道辨析题；请自查两种方法是否写反，关键词核对不能替代理解。

**练习：** 哪种方法重点处理变异？哪种重点处理浪费与流转？ Which method emphasizes variability, and which emphasizes waste and flow?

**参考：** Six Sigma 处理变异；Lean 处理浪费与流转。 Six Sigma addresses variability; Lean addresses waste and flow.

## 精益六西格玛的整合

### L3-06-01 Lean Sigma 与手术部位感染案例

Lean Sigma and surgical infections · PDF 39, 40

- **Lean Sigma 结合 Lean 对流转和浪费的关注，以及 Six Sigma 对缺陷和变异的关注。** Lean Sigma combines Lean’s flow and waste focus with Six Sigma’s defect and variation focus.
- **手术部位感染案例一方面梳理手术流程，另一方面分析与感染率相关的变异来源。** The surgical-site infection case streamlines surgical processes and examines sources of variation associated with infection rates.
- **教学案例描述结果改善，但未提供研究来源或具体临床操作方案。** The teaching case reports improved outcomes but does not provide a source study or detailed protocol.

**练习：** Lean Sigma 结合哪两种方法？ Which two methods are combined in Lean Sigma?

**参考：** Lean 和 Six Sigma。 Lean and Six Sigma.

### L3-06-02 实施所需的四方面支持

Conditions for Lean Sigma · PDF 41

- **领导、培训、文化及组织目标一致性支持 Lean Sigma 实施。** Leadership, training, culture and organizational alignment support Lean Sigma implementation.
- **领导设定目标与资源；员工学习 DMAIC 和价值流分析；团队共同承担责任并协作。** Leaders set goals and resources; staff learn DMAIC and value stream mapping; teams share accountability and collaborate.
- **共同愿景有助于把改善融入日常工作。** Shared vision helps integrate improvement into everyday work.

**课堂补充：** 老师解释 accountability 不应理解为把所有责任推给一线，而应联系共同目标和责任。Accountability was linked to shared responsibility rather than blame shifting.

**练习：** 列出课件描述的四方面实施支持。 Name the four implementation supports described on the slide.

**参考：** 领导；培训；文化；目标一致性。 Leadership; training; culture; alignment.

### L3-06-03 如何看课件中的改善数据

Read performance metrics critically · PDF 42

- **课件列出：运营成本下降15–20%、照护转衔缺陷下降40%、满意度评分上升30%、一年内平均住院日减少1.8天。** The slide reports operational costs down 15–20%, transition defects down 40%, satisfaction scores up 30%, and average stay down 1.8 days within a year.
- **所给材料未说明这些数字对应的具名研究、基线定义和样本细节。** These numbers lack named study sources, baseline definitions and sample details in the supplied material.
- **学习反思：询问测量对象、比较时段、患者差异，以及是否存在其他解释。** Study reflection: ask what was measured, the comparison period, patient differences and whether other changes could explain the result.

**辨析：** 保留数字用于识别课件案例，但不当作已核实的研究证据，也不据此计算因果效果。

**练习：** 能把这些百分比当作每家医院必然达到的效果吗？ Can the slide percentages be treated as guaranteed results for every hospital?

**参考：** 不能，需要核对来源与情境。 No. The source and context must be checked.

## 方法选择、整合与采用障碍

### L3-07-01 如何选择及整合方法

Select and combine methods · PDF 44, 45

- **按问题类型、机构规模、文化、资源、数据需求及团队参与选择方法。** Choose methods based on the problem, organizational size, culture, resources, data needs and team involvement.
- **可用匹配：FMEA 识别潜在流程失效；FTA 分析故障路径；Lean 改善浪费与延误；Six Sigma 减少变异；Kaizen 支持日常小步改善。** Possible matches: FMEA for potential process failures; FTA for failure pathways; Lean for waste and delays; Six Sigma for variability; Kaizen for daily incremental change.
- **整合框架、统一规程、组成跨部门团队，并使用共享数据平台或仪表板。** Integrate frameworks, standardize protocols, form cross-functional teams and use shared data platforms or dashboards.

**辨析：** 方法不是互斥选项；不要机械地把一个问题永久对应到一种工具。

**练习：** 课件列出的哪三个情境因素影响方法选择？ Which three context factors on the slide influence method choice?

**参考：** 机构规模、文化、资源。 Organizational size, culture and resources.

### L3-07-02 数字化、AI 与国际对标

Digitalization, AI and benchmarking · PDF 46

- **电子健康记录（EHR）和物联网（IoT）等数字工具可支持数据获取和质量监测。** Digital tools such as EHRs and IoT can support data access and quality monitoring.
- **AI 辅助分析可识别模式和潜在失效；国际对标有助于发现绩效差距。** AI-assisted analysis can identify patterns and potential failures; global benchmarking helps identify performance gaps.
- **这些是质量改善方向，不代表技术本身就能保证改善照护。** These are directions for quality improvement, not a guarantee that technology alone improves care.

**课堂补充：** 老师补充患者隐私、数据泄露和系统安全维护问题。The lecturer highlighted privacy, leakage and security.

**辨析：** 学习延伸：防火墙只是安全控制的一部分；AI 还需可靠数据、验证和人工监督。这些不是课件所报告的效果保证。

**练习：** 列出本节强调的三项未来方向。 Name the three future directions highlighted in this section.

**参考：** 数字化、AI辅助质量控制、国际对标。 Digitalization, AI-assisted quality control and global benchmarking.

### L3-07-03 采用障碍一：变革阻力

Resistance to change · PDF 47, 48, 49

- **阻力可能来自对未知的担心、失去控制感、工作保障顾虑、沟通不足或缺少参与。** Resistance may reflect fear of the unknown, loss of control, job-security concerns, communication gaps or lack of involvement.
- **批判性反思是追问阻力为什么出现，以及管理者是否解释了目的、好处和预期。** Critical reflection asks why resistance occurs and whether managers have explained the purpose, benefits and expectations.
- **让受影响员工参与规划和决策，有助于理解及形成主人翁意识。** Involve affected staff in planning and decisions to support understanding and ownership.

**课堂补充：** 老师以员工担心 AI 影响工作保障为例，强调说明目的、听取意见和员工参与。The AI example illustrated job-security concerns.

**辨析：** “Encourage critical reflection on barriers to adoption”＝鼓励深入分析新方法为何难以落实，并提出有依据的应对；不只是列出障碍名称。

**练习：** 针对变革阻力，给出沟通与参与方面各一个应对。 Name two management responses to resistance: one about communication and one about participation.

**参考：** 清晰沟通目的，并让员工参与规划。 Explain the purpose clearly and involve staff in planning.

### L3-07-04 采用障碍二：资源限制

Resource constraints · PDF 50

- **实施前考虑资金、人手、时间、基础设施、技术与支持能力。** Consider funds, personnel, time, infrastructure, technology and technical support before implementation.
- **机会成本是把资源投入新计划时，需要放弃或推迟的其他选择。** Opportunity cost is what must be given up or delayed when resources are committed to a new initiative.
- **现实评估能力、清晰说明取舍，并结合员工意见排列项目优先级。** Assess capacity realistically, make trade-offs transparent and prioritize projects with staff input.

**课堂补充：** 老师结尾反复提醒管理者同时考虑 resistance to change 与 resource constraints。Both barriers were repeatedly emphasized at the end.

**练习：** 资金与人力资本一项列出哪三种基本资源不足？ What three basic resource shortages are listed under financial and human capital?

**参考：** 资金、人手、时间不足。 Insufficient funds, personnel and time.

## 方法选择速查

| 方法 | 核心问题 |
|---|---|
| Taguchi | 条件变化时如何保持稳定表现？ |
| FTA | 哪些原因组合导致顶事件？ |
| FMEA | 每个步骤可能怎样失效、影响是什么？ |
| Kaizen | 每天有哪些小改变值得测试？ |
| Quality Circles | 如何让一线小组定期解决问题？ |
| Six Sigma | 如何减少缺陷与变异？ |
| Lean | 如何减少浪费并改善流转？ |
| Lean Sigma | 如何同时改善流转与稳定性？ |

## 重点词汇

| English | 中文 | PDF页 |
|---|---|---|
| proactive | 主动预防的 | 4 |
| evidence | 证据 | 4 |
| variation | 变异 | 8 |
| variability | 变异性 | 8 |
| robust design | 稳健设计 | 10 |
| calibration | 校准 | 10 |
| exposure | 曝光 | 10 |
| orthogonal array | 正交表 | 11 |
| signal-to-noise ratio | 信噪比 | 11 |
| biomarker | 生物标志物 | 11 |
| adherence | 依从性 | 13 |
| comorbidity | 共病 | 13 |
| reliability | 可靠性 | 14 |
| interaction | 交互作用 | 14 |
| fault tree | 故障树 | 16 |
| deductive | 演绎的 | 18 |
| top-down | 自上而下的 | 18 |
| logic gate | 逻辑门 | 18 |
| malfunction | 故障 | 20 |
| hypoxia | 缺氧 | 20 |
| maintenance | 维护 | 20 |
| failure mode | 失效模式 | 21 |
| severity | 严重度 | 22 |
| occurrence | 发生频度 | 22 |
| detection | 检测；发现 | 22 |
| transfusion | 输血 | 23 |
| barcode | 条码 | 23 |
| incremental | 渐进的 | 25 |
| empowerment | 赋权 | 26 |
| standardization | 标准化 | 26 |
| bottleneck | 瓶颈 | 27 |
| throughput | 单位时间处理量 | 28 |
| morale | 士气 | 28 |
| discharge | 出院 | 29 |
| quality circle | 品管圈 | 30 |
| facilitator | 引导者 | 31 |
| ownership | 主人翁意识 | 31 |
| psychological safety | 心理安全 | 32 |
| defect | 缺陷 | 34 |
| measure | 测量 | 34 |
| analyze | 分析 | 34 |
| control | 控制 | 34 |
| value stream | 价值流 | 36 |
| triage | 分流 | 36 |
| huddle | 短会 | 36 |
| non-value-added | 不增值的 | 37 |
| accountability | 责任承担 | 41 |
| alignment | 目标一致性 | 41 |
| length of stay | 住院日数 | 42 |
| context | 情境 | 44 |
| cross-functional | 跨职能的 | 45 |
| benchmarking | 对标 | 46 |
| resistance | 阻力 | 49 |
| involvement | 参与 | 49 |
| resource constraints | 资源限制 | 50 |
| opportunity cost | 机会成本 | 50 |
| trade-off | 取舍 | 50 |

## 内容核对

- 学生版第10页影像例子未完成，依据课堂讲述补充。
- 部分PDF文本留空、截断或白字难读；优先结合可见内容和转录，不臆补研究结论。
- FTA不是所有RCA方法的同义词；稳健设计不代表零变异。
- 未采用转录中无法可靠辨认的六西格玛百分比或软件缩写扩写。
- 课件中的35%、58%、40%、15–20%、30%及1.8天均缺少具名研究出处，保留为教学示例数值。
- 老师反复强调变革阻力与资源限制，但所给记录不含完整、明确的最终考题清单，不将重点等同必考题。
