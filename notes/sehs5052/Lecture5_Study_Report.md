# SEHS5052 Lecture 5 — Machine learning for cybersecurity

安全机器学习基础

Source: SEHS5052-Lecture 05 - With Notes.pdf

English narration is extracted page by page. Bilingual notes are study summaries, not a complete literal translation. Source-page snapshots and unverified slide OCR are available on the website.

## PDF 1–2: ML overview / 机器学习概览

The lecture covers supervised, unsupervised and semi-supervised learning, then their security value. Match data, task, algorithm and evaluation.

本讲依次学习监督、无监督、半监督学习，以及机器学习在安全中的价值。重点是数据、任务、算法和评估之间的匹配。

## PDF 3–3: From rules to learning / 从规则到学习

Learn patterns from examples for malware, intrusion and phishing tasks. Reliable data and human judgement remain necessary.

由明确规则转向从样本中学习模式，用于恶意软件、入侵与钓鱼识别。机器学习仍需可靠数据与人员判断。

## PDF 4–5: Labels and ground truth / 标签与真实依据

Supervised models rely on verified labels. Incorrect or inconsistent ground truth undermines even sophisticated algorithms.

监督模型依赖经过核实的标签。错误或不一致的标签会传递到模型，算法复杂并不能弥补错误的训练依据。

## PDF 6–7: Classification and regression / 分类与回归

Classification predicts discrete categories; regression predicts continuous values. Choose the task according to the required output.

分类预测离散类别，例如恶意或正常；回归预测连续数值，例如流量或风险量。先看输出需求，再选模型。

## PDF 8–9: Algorithm choices / 算法选型

SVM, Random Forest and boosting learn differently. Compare them on independent validation data rather than assuming one always wins.

SVM、随机森林与梯度提升提供不同的学习方式。性能取决于数据、特征和调参，应通过独立验证比较，不预设某算法永远最好。

## PDF 10–11: Support vector machines / SVM

SVM seeks a large-margin boundary determined by support vectors. Kernels support nonlinear relationships; scaling and computation matter.

SVM寻找间隔较大的决策边界，支持向量决定边界；核方法可表达非线性关系。注意特征缩放与大数据计算成本。

## PDF 12–13: Random Forest / 随机森林

Train diverse trees using sampled data and features, then aggregate predictions. Vote fractions are not automatically calibrated probabilities.

多棵树使用抽样数据与随机特征训练，再聚合预测，降低单树的不稳定性。投票比例不等同于经过校准的真实概率。

## PDF 14–15: Gradient boosting / 梯度提升

Boosting sequentially improves the current ensemble's loss. Learning rate, tree complexity and rounds need tuning to avoid fitting noise.

依次加入模型以改进当前损失，与随机森林的独立建树不同。学习率、树复杂度与轮数影响效果，也要防止追逐噪声。

## PDF 16–17: Data splits / 训练、验证、测试

Fit on training data, tune on validation data and evaluate finally on a held-out test set. Training performance is not generalization.

训练集用于拟合，验证集用于调参，测试集用于最终评估。不能用训练表现代替泛化，也不要反复根据测试结果选择模型。

## PDF 18–19: Confusion matrix / 混淆矩阵

TP detects attacks, FP raises false alarms, FN misses attacks and TN correctly rejects benign events. Error costs guide metrics and thresholds.

TP是真攻击被发现；FP是正常被误报；FN是真攻击被漏掉；TN是正常被正确排除。错误成本决定指标和阈值选择。

## PDF 20–21: Precision / 精确率

Precision = TP/(TP+FP): what fraction of alerts are genuine? Low precision burdens analysts, but precision alone does not measure coverage.

Precision = TP/(TP+FP)，回答告警中多少是真的。精确率低会增加无效调查；它不能单独说明找到了多少实际攻击。

## PDF 22–23: Recall / 召回率

Recall = TP/(TP+FN): what fraction of actual attacks are detected? Assess its trade-off with false alarms.

Recall = TP/(TP+FN)，回答实际攻击中发现了多少。提高召回通常需要结合误报评估，不能仅凭单一指标判断系统可用。

## PDF 24–25: F1 and thresholds / F1与阈值

F1 = 2PR/(P+R), the harmonic mean of precision and recall. It helps with imbalance but does not encode every operational cost.

F1 = 2PR/(P+R)，是精确率和召回率的调和平均。类别不平衡时比只看准确率更有帮助，但仍不能代表全部业务成本。

## PDF 26–27: ROC and AUC / ROC-AUC

ROC plots FPR against TPR across thresholds. AUC summarizes ranking, not the deployment threshold or actual alert precision.

ROC以FPR为横轴、TPR为纵轴展示阈值变化。AUC反映排序能力，不直接告诉部署阈值或真实告警精确率。

## PDF 28–29: Supervised pipeline / 监督学习流程

Define the task, prepare reliable labels, select models and evaluate independently. Monitor drift and detection errors after deployment.

确定任务，准备可信标签，选择算法，再用独立数据与合适指标评估。上线后继续检查漂移、误报和漏报。

## PDF 30–32: Unlabelled data / 无标签数据

Most security telemetry lacks labels. Unsupervised methods reveal structure and guide investigation without automatically proving malicious intent.

大量安全日志缺少标签，人工逐条标注成本高。无监督学习可发现结构并组织调查，但不能凭聚类结果直接确定恶意性质。

## PDF 33–34: Unsupervised objective / 无监督目标

Without target labels, models learn from similarity, density or structure. An anomaly is an investigation signal, not a verdict.

只有输入X，没有目标标签Y，模型从相似性、密度或结构中学习。异常表示偏离模式，应作为调查线索。

## PDF 35–36: Clustering / 聚类

Clustering groups similar examples and separates dissimilar ones. Analysts must interpret and validate what the groups mean.

聚类让组内样本相似、组间差异更大。它可组织邮件、流量或恶意软件样本，簇的含义仍需人员解释和验证。

## PDF 37–38: K-means clustering / K-means

Choose K, assign points to nearest centers and update means until stable. Initialization, scale, outliers and cluster shape affect results.

预先选K，分配样本到最近中心，再更新均值中心，重复至稳定。初始化、尺度、异常值和簇形状会影响结果。

## PDF 39–40: Density-based clustering / DBSCAN

DBSCAN finds dense regions and noise without a preset cluster count. Tune epsilon and minimum samples; varying densities can be difficult.

DBSCAN以邻域密度发现簇，并标记噪声，不需预设簇数。epsilon与最小样本数需要调整，密度差异大时可能困难。

## PDF 41–42: Hierarchical clustering / 层次聚类

A dendrogram represents nested similarity and family relationships. It aids interpretation but may be expensive at large scale.

用树状图表示多层相似关系，便于比较家族与子群。适合需要解释关系的数据，但大规模计算可能较昂贵。

## PDF 43–44: Comparing clustering / 比较聚类方法

Consider K-means for a known approximate group count, DBSCAN for density and noise, and hierarchical methods for nested relationships. Validate against the data.

已知近似组数可考虑K-means；关注密度与噪声可考虑DBSCAN；关注层次关系可考虑层次聚类。最终按数据验证。

## PDF 45–46: Dimensionality / 维度灾难

High dimensions can weaken distance intuition, increase sparsity and raise cost. Reduce redundancy carefully without discarding useful signals blindly.

特征增加可能使距离更难解释、数据更稀疏并增加成本。减少冗余和噪声有帮助，但不应假设所有高维信息都无用。

## PDF 47–48: Principal component analysis / PCA

PCA projects onto orthogonal high-variance directions. Preserving variance does not guarantee preservation of the best attack-detection signals.

PCA寻找最大方差的正交方向并投影到较低维空间。保留较多方差不保证保留最有用的攻击识别信号，需验证任务效果。

## PDF 49–50: Projection and anomalies / 降维与异常

Low-dimensional plots reveal clusters and outliers. Thresholds trade false alarms against misses; visual separation alone is not proof of an attack.

低维图可帮助观察正常簇与离群点，阈值影响误报与漏报。图上分离只是证据之一，不等于已经证明攻击。

## PDF 51–52: Campaign clustering / 攻击活动聚类

Templates, link structure, infrastructure and behaviour can connect distinct samples. Clustering suggests campaigns for analyst verification.

邮件模板、链接结构、基础设施或行为特征可关联看似不同的样本。聚类帮助发现共同活动，仍需情报和人工核实。

## PDF 53–54: User and entity behaviour analytics / UEBA

Build per-user or entity baselines for timing, resource access and volume. Valid credentials do not guarantee legitimate behaviour, and deviations need context.

按用户或实体建立正常行为基线，检查异常时间、访问资源和传输量。凭据有效不代表行为合理，异常也可能有正当业务原因。

## PDF 55–55: Semi-supervised learning / 半监督入口

Combine scarce reliable labels with abundant unlabelled data, using both label meaning and distribution structure.

少量可靠标签与大量无标签数据共同训练，利用标签含义和数据分布。它适用于标签昂贵的安全场景。

## PDF 56–57: Labelling bottleneck / 标签瓶颈

Expert investigation makes labels costly and delayed. Model confidence is not equivalent to verified ground truth.

确认恶意样本常需专家分析，且标签可能在事后才得到。标注质量和成本限制模型更新速度，不能把模型置信分数当作人工确认。

## PDF 58–59: Labels plus structure / 标签与结构结合

Labels identify classes while unlabelled data reveals distribution. Benefits depend on whether structural assumptions fit the task.

标签提供类别含义，无标签数据揭示样本分布。只有结构假设与实际任务相符时，增加无标签数据才可能帮助泛化。

## PDF 60–61: Unlabelled is not benign / 无标签不等于正常

Unlabelled logs may contain attacks or insider activity. Account for contamination rather than labelling all unlabelled traffic benign.

未标注日志中可能包含攻击、窃密和内部威胁。训练时要考虑污染，不能直接把所有未标注流量当正常样本。

## PDF 62–63: Boundaries and distribution / 边界与分布

Sparse labels leave boundary uncertainty. Unlabelled structure can guide boundaries toward low-density regions when that assumption is valid.

少量标签可能不足以确定边界，无标签数据帮助了解高密度区域。边界通常倾向低密度处，但该假设需要验证。

## PDF 64–65: Three assumptions / 三项假设

Smoothness, cluster and manifold assumptions connect nearby samples, shared groups and lower-dimensional structure. They are assumptions, not guarantees.

平滑假设认为相近样本标签相近；聚类假设认为同簇多属同类；流形假设认为高维数据受较低维结构约束。它们不是必然成立的事实。

## PDF 66–67: Unknown-threat signals / 未知威胁线索

Learning normal structure can reveal deviations, but benign novelty and normal-looking attacks remain possible. Calibrate and validate before response.

学习正常结构可发现偏离，但新业务也会异常，攻击也可能类似正常。未知威胁检测需要阈值校准、独立评估和人工调查。

## PDF 68–69: Changing patterns / 模式变化

Business and network changes shift normal behaviour. Verify update data and monitor post-update errors.

业务、用户和网络改变使正常基线漂移。更新模型前核实数据来源与质量，持续监测更新后的误报与漏报。

## PDF 70–71: Sparse labels and feedback / 少量标签与反馈

A few confirmed samples can guide investigation of similar groups. Feed back verified labels rather than treating every prediction as ground truth.

少数已确认样本可引导相似群体调查；人工验证后再回流标签。不要把模型自行预测的结果全部当成真值。

## PDF 72–73: Semi-supervised limitations / 半监督局限

Wrong labels can propagate, unlabelled data can be poisoned and graph methods can be costly. Use independent validation and controlled updates.

错误标签可能扩散；无标签数据也可能被污染；大规模图方法成本较高。使用独立验证、质量检查与可回退的更新流程。

## PDF 74–75: Semi-supervised review / 半监督复习

Use scarce labels efficiently and exploit structure to investigate novelty. Benefits depend on data quality and assumptions, not a universal superiority claim.

核心是提高稀缺标签的利用率、适应数据结构并寻找未知异常。效果取决于数据质量和假设成立情况，不保证永远优于监督学习。

## PDF 76–78: Scale and speed / 规模与速度

Telemetry can exceed manual review capacity. ML assists triage and prioritization; measure real throughput rather than assuming a universal speed.

日志规模超过人工逐条处理能力。机器学习可辅助筛选与排序，把分析员时间集中到重要事件；实际吞吐需测量。

## PDF 79–80: Patterns and signatures / 模式与已知特征

Behaviour learning complements fixed signatures. Rules and models can coexist and both require evasion and error evaluation.

学习行为模式可补充固定特征，帮助识别变化中的样本。规则和模型可共存，都需要针对规避、误报与漏报验证。

## PDF 81–81: Three capabilities / 三项能力

The lecture emphasizes pattern recognition, adaptation and high-dimensional integration. Translate these into measurable operational goals.

模式识别、适应变化与多源高维分析是讲义强调的能力。把能力转为可验证目标，例如减少调查量而不增加漏报。

## PDF 82–83: Hierarchical features / 分层特征学习

Deep networks compose low-level features into higher-level representations. Depth alone does not ensure better results.

深层网络从低层特征组合出更抽象模式，减少部分人工特征设计。更深并不自动更好，仍依赖数据、训练和任务匹配。

## PDF 84–85: Credentials and behaviour / 有效凭据与异常行为

Unusual timing, downloads or resource access can signal compromise. Interpret deviations using role and business context.

异常时间、大量下载或越出常用资源范围可提示账户失陷。结合岗位与业务情境调查，不能仅因夜间登录就判为攻击。

## PDF 86–87: Adapting to novelty / 适应未知攻击

Models can flag unseen deviations without guaranteeing zero-day detection. Combine ongoing evaluation, updates and layered controls.

模型可关注未见过的行为偏离，但不能保证零日必被识别。持续评估、更新和多层控制共同降低风险。

## PDF 88–89: Heterogeneous data / 多源高维数据

Traffic, system calls, text and sensors provide complementary views. Align and process them carefully before fusion.

流量、系统调用、文本和传感器提供不同视角。统一时间与特征处理后可融合分析，但需防止数据泄漏和无关特征干扰。

## PDF 90–91: Learning feedback loop / 闭环学习

Train, test independently, deploy, verify alerts and retrain. Reliable feedback can improve models; bad feedback can degrade them.

训练、独立测试、部署、验证告警和再训练形成循环。高质量反馈帮助改进，错误反馈也可能使模型退化。

## PDF 92–93: Further reading / 延伸阅读

Use the suggested reading after mastering tasks, data, algorithms and metrics. Bibliographic details remain in the original notes.

本页提供教材与研究阅读方向。先掌握任务、数据、算法和指标，再阅读具体安全应用；书目信息保留在原文。

## PDF 94–94: Closing page / 结束页

This page has no extractable notes.

本页无可提取讲稿。

## PDF 95–95: Spam and phishing tutorial / 垃圾邮件练习

Use the classification demo to practise splitting, features and metrics, comparing false-alarm and missed-phishing costs.

通过分类演示练习数据分割、特征处理与指标解释，特别比较误报正常邮件和漏掉钓鱼邮件的代价。

## Original source — PDF page 1

[No extractable narration; see source image.]

## Original source — PDF page 2

Table of 
Contents

Part A: Supervised Learning:

• Classification vs. Regression
• Training/testing paradigms
• Evaluation metrics: precision, recall, F1-

score, ROC-AUC
• Common algorithms: SVM, Random

Forest, Gradient Boosting
Part B: Unsupervised Learning:

• Clustering techniques: K-means, DBSCAN,

Hierarchical clustering
• Dimensionality reduction: PCA
• Use cases in cybersecurity
Part C: Semi-Supervised Learning:

• Labeled vs. unlabeled data
• Applications to threat detection (limited

labeled data)
Part D: Why ML for Cybersecurity:

• Pattern recognition in complex data
• Adaptation to evolving threats
• Handling high-dimensional data

Week 5: Machine Learning Fundamentals for Cybersecurity

## Original source — PDF page 3

Welcome to Lecture 5, where we transition from understanding cybersecurity threats to examining the machine 
learning techniques that enable automated defense systems. Today's lecture is divided into four parts, starting with 
supervised learning paradigms, which form the foundation of many modern cybersecurity applications. We'll explore 
how machines can learn from labeled examples to make predictions about new, unseen data.

Over the next few weeks, you'll see how these ML fundamentals directly apply to real-world cybersecurity challenges 
like malware detection, intrusion prevention, and threat classification. This lecture provides the technical toolkit you'll 
need to understand and implement AI-driven security solutions in your organizations.

## Original source — PDF page 4

Traditional programming in cybersecurity relies on explicit, rule-based logic—if a packet comes from port 80, allow it; 
if a file has a known malicious signature, block it. While effective for known threats, this approach is brittle and 
requires constant manual updates as new attack vectors emerge. Traditional rule-based systems struggle with the 
velocity and volume of modern cyber threats, where attackers can modify their techniques faster than security teams 
can write new rules.

Machine learning offers a paradigm shift by enabling systems to automatically learn patterns from data rather than 
following hard-coded instructions. Instead of writing thousands of if-then rules, we train models on historical 
examples of benign and malicious behavior, allowing them to generalize to new, previously unseen threats. The 
objective is to create a mapping function that takes input features—like network traffic characteristics or file 
signatures—and outputs a classification such as "benign" or "malicious.“

This automated approach doesn't eliminate human expertise; rather, it augments analyst capabilities by handling 
routine pattern recognition at machine speed. The key concept is "ground truth"—a dataset of verified, labeled

## Original source — PDF page 5

examples that serves as the training foundation. Without accurate ground truth, even the most sophisticated algorithms will 
produce unreliable results, which is why data quality and proper labeling are critical success factors in ML-driven cybersecurity.

## Original source — PDF page 6

Spam vs. Normal,

Supervised learning problems fall into two broad categories based on the type of output we're predicting. 
Classification tasks involve assigning discrete labels to inputs—for instance, determining whether an email is spam or 
legitimate (ham), or whether a file is malware or benign software. These are categorical decisions with distinct 
boundaries, making them ideal for threat identification scenarios where we need clear yes/no answers.

Regression tasks, on the other hand, predict continuous numerical values rather than discrete categories. In 
cybersecurity, regression might be used to forecast vulnerability scores (like Common Vulnerability Scoring System 
(CVSS) ratings), predict the likelihood of a breach occurring within a specific timeframe, or estimate the potential 
impact of an attack in monetary terms. While classification tells us "what category does this belong to," regression 
tells us "what value should we expect.“

Understanding this distinction is crucial because it determines which algorithms we select, how we evaluate model 
performance, and how we interpret results for security operations. Most real-time security systems rely heavily on 
classification for immediate threat detection, while strategic security planning often leverages regression for risk

## Original source — PDF page 7

forecasting and resource allocation. Throughout this course, we'll see both approaches applied to different aspects of 
cybersecurity defense.

## Original source — PDF page 8

Supervised learning sits within a broader machine learning hierarchy that includes unsupervised learning (finding 
patterns without labels), semi-supervised learning (combining labeled and unlabeled data), and reinforcement 
learning (learning through trial and error with rewards). Within supervised learning, we further distinguish between 
classification and regression tasks, with some algorithms capable of handling both.

Today, we're focusing on three powerful classification algorithms that have proven particularly effective in 
cybersecurity applications. Support Vector Machines (SVM) act as precision tools that find optimal decision 
boundaries by maximizing the margin between different classes—imagine drawing the clearest possible line between 
malicious and benign data points. Random Forest serves as a consensus builder, combining multiple decision trees to 
reduce the risk of overfitting and improve prediction reliability through ensemble voting.

Gradient Boosting, particularly the XGBoost implementation, takes an iterative approach by sequentially building 
models that correct the errors of previous ones. This sequential error correction makes gradient boosting extremely 
powerful for complex classification tasks where simple models fall short. Each algorithm has distinct strengths: SVM

## Original source — PDF page 9

excels with high-dimensional data like text classification, Random Forest handles noisy data well and provides feature 
importance rankings, while XGBoost often achieves the highest accuracy on structured data but requires more careful tuning 
to prevent overfitting.

## Original source — PDF page 10

(a decision boundary that separates 
different classes in the feature space)

Support vectors

(a wider margin indicates a clearer 
separation and more reliable 
classification)

Support Vector Machines work by finding the optimal hyperplane—a decision boundary that separates different 
classes in the feature space. Think of the hyperplane as a fence between two neighborhoods: benign traffic on one 
side, malicious traffic on the other. But SVM doesn't just find any fence—it finds the fence that maximizes the distance 
to the nearest neighbors on both sides, creating the widest possible "margin of safety" between classes.

The data points closest to this decision boundary are called support vectors, and they're critical because they define 
the margin. If we could remove all other data points and keep only the support vectors, the decision boundary would 
remain unchanged—these are the most informative examples that define the boundary between classes. The width of 
this margin is inversely related to the model's confidence; a wider margin indicates a clearer separation and more 
reliable classification.

SVM shines particularly well in high-dimensional spaces, making it ideal for text-based cybersecurity applications like 
phishing email classification. When analyzing phishing emails, each word can be a feature, creating feature spaces 
with thousands of dimensions. SVM's mathematical properties ensure it performs well even when the number of

## Original source — PDF page 11

features exceeds the number of samples, a common scenario in text classification. However, SVM can be computationally 
expensive on very large datasets, and careful kernel selection is crucial for optimal performance.

## Original source — PDF page 12

(single decision tree)

Random Forest embodies the principle that collective wisdom surpasses individual judgment. Instead of relying on a 
single decision tree that might overfit to training data quirks, Random Forest trains dozens or even hundreds of 
decision trees, each seeing a slightly different view of the data through random sampling. This ensemble approach 
dramatically reduces the risk of overfitting because errors made by individual trees tend to cancel out when we 
aggregate their predictions.

Each tree in the forest is trained on a bootstrap sample—a random subset of the training data selected with 
replacement—and at each split in the tree, only a random subset of features is considered. This double randomness 
(random samples and random features) ensures that individual trees are decorrelated, meaning they make different 
errors rather than all being wrong in the same way. When making a prediction, each tree votes, and the majority vote 
determines the final classification.

Random Forest offers several practical advantages for cybersecurity applications. It provides built-in feature 
importance rankings, helping analysts understand which network traffic characteristics or file attributes most strongly

## Original source — PDF page 13

indicate malicious behavior. It handles missing data gracefully, requires minimal hyperparameter tuning compared to other 
algorithms, and naturally provides uncertainty estimates through vote distributions. When a decision is nearly unanimous, we 
can be more confident than when votes are split 60-40.

## Original source — PDF page 14

Gradient Boosting takes a fundamentally different ensemble approach compared to Random Forest. While Random 
Forest builds all trees independently and in parallel, Gradient Boosting builds trees sequentially, with each new tree 
specifically designed to correct the mistakes of the previous ensemble. Think of it as an iterative refinement process: 
the first tree makes predictions, we identify where those predictions were wrong, and the second tree focuses
specifically on those difficult cases.

This sequential correction process continues for hundreds or thousands of iterations, with each new tree adding a 
small incremental improvement. The "gradient" in gradient boosting refers to the mathematical optimization process 
that determines exactly what pattern each new tree should learn. XGBoost (eXtreme Gradient Boosting) is a highly 
optimized implementation that includes regularization to prevent overfitting, parallel processing for speed, and built-
in handling of missing values.

In cybersecurity competitions and real-world deployments, XGBoost consistently achieves state-of-the-art 
performance on structured data like network flow records, system logs, and malware feature vectors. However, this

## Original source — PDF page 15

power comes with complexity—XGBoost has numerous hyperparameters that require careful tuning, and the sequential 
nature means training can be slower than Random Forest. The iterative error correction also makes XGBoost more susceptible 
to noisy or mislabeled data, as the model may "chase" these errors and overfit. Despite these challenges, XGBoost remains a 
top choice when maximum accuracy is the priority.

## Original source — PDF page 16

(overfitting is particularly dangerous because attackers constantly evolve their techniques, and a

model that overfits to historical attack patterns won't recognize novel variants)

(70-80%) 
(20-30%)

The golden rule of machine learning is simple yet frequently violated: never test your model on the data it was trained 
on. This principle is fundamental because testing on training data measures memorization, not generalization. A 
model that perfectly classifies all training examples might simply have memorized specific signatures rather than 
learning underlying patterns, and will fail spectacularly when deployed against new, unseen threats.

Overfitting occurs when a model learns not just the genuine patterns in the data but also the random noise and 
idiosyncrasies specific to the training set. It's like a student who memorizes practice exam questions without 
understanding the underlying concepts—they'll ace the practice test but fail the real exam. In cybersecurity, overfitting 
is particularly dangerous because attackers constantly evolve their techniques, and a model that overfits to historical 
attack patterns won't recognize novel variants.

The standard solution is to split your dataset into distinct training and testing sets before any model development 
begins. Typically, 70-80% of data goes to training and 20-30% to testing, though these ratios can vary based on dataset 
size. The testing set must remain completely untouched during model development—it's your "future simulation" that

## Original source — PDF page 17

estimates how the model will perform on tomorrow's threats. Some practitioners also create a third "validation" set for 
hyperparameter tuning, ensuring the test set truly remains unseen until final evaluation.

## Original source — PDF page 18

The confusion matrix is the fundamental tool for understanding classification model performance in detail. It's a 2x2 
table for binary classification that breaks down predictions into four categories based on actual versus predicted 
labels. True Positives (TP) are threats correctly identified as threats—the ideal outcome. False Positives (FP) are benign 
events incorrectly flagged as threats, often called "false alarms" in security operations.

False Negatives (FN) represent missed attacks—actual threats that the model classified as safe, which is often the 
most dangerous error in cybersecurity. True Negatives (TN) are normal events correctly classified as benign, which 
typically constitute the vast majority of predictions in operational systems since attacks are relatively rare. 
Understanding the confusion matrix is crucial because it reveals not just accuracy, but the types of errors your model 
makes.

In cybersecurity, the relative costs of FP and FN errors vary dramatically by context. A false positive in email spam 
filtering is merely annoying—a legitimate email in the spam folder. But a false positive in an automated network 
blocking system could disrupt business operations, while a false negative could allow data exfiltration. This asymmetry

## Original source — PDF page 19

in error costs means we must look beyond simple accuracy to metrics that capture the specific failure modes we care about, 
which brings us to precision and recall.

## Original source — PDF page 20

(total number of 
positive predictions )

Precision answers the critical question: "Of all the threats we flagged, how many were actually real threats?" 
Mathematically, it's the ratio of True Positives to the total number of positive predictions (TP + FP). High precision 
means that when your model raises an alarm, you can trust it—the alert is likely legitimate rather than a false alarm. 
Think of precision as a measure of "trustworthiness" or "reliability" of positive predictions.

In the cybersecurity context, low precision creates alert fatigue, where analysts are overwhelmed by false positives 
and may start ignoring alerts altogether. If your malware detection system flags 1,000 files per day but only 10 are 
actually malicious (1% precision), analysts will quickly learn to tune out the alerts, potentially missing real threats 
hidden among the noise. This is why precision is critically important for any security tool that requires human 
investigation or response.

However, precision alone is insufficient because it's easy to achieve 100% precision by being extremely conservative—
only flag something as malicious when you're absolutely certain. Such an approach would achieve perfect precision 
but miss most attacks. We need to balance precision against recall (coverage), which is why both metrics must be

## Original source — PDF page 21

considered together. In some scenarios, like automated blocking systems with high business impact, we might optimize for 
precision at the expense of recall, accepting that we'll miss some attacks to avoid disrupting operations. The right balance 
depends on your specific risk tolerance and operational constraints.

## Original source — PDF page 22

(all actual positives)

High recall means comprehensive 
coverage—you're catching most of the 
threats rather than letting them slip through

(called "sensitivity" or "true positive rate" )

Recall is often prioritized in 
scenarios where the cost of

missing an attack is very

high, such as in critical 
infrastructure protection.

Imagine a fishing net metaphor:

a net with larger holes (higher 
threshold for detection) catches

fewer fish but less debris (high 
precision, low recall), while a 
fine-mesh net catches more fish

but also more debris (high

recall, low precision).

Recall addresses the complementary question: "Of all the actual threats that existed, how many did we successfully 
catch?" Mathematically, it's the ratio of True Positives to all actual positives (TP + FN). High recall means 
comprehensive coverage—you're catching most of the threats rather than letting them slip through. Recall is 
sometimes called "sensitivity" or "true positive rate" in the literature.

Low recall is extremely dangerous in cybersecurity because it represents undetected threats entering your network or 
system. If your intrusion detection system has 40% recall, it means 60% of actual attacks go unnoticed, potentially 
allowing attackers to establish persistence, exfiltrate data, or move laterally through your network. This is why recall is 
often prioritized in scenarios where the cost of missing an attack is very high, such as in critical infrastructure 
protection or detection of advanced persistent threats (APTs).

The challenge is that optimizing for recall typically reduces precision, and vice versa. You can achieve high recall by 
flagging more items as threats, but this increases false positives and decreases precision. Imagine a fishing net 
metaphor: a net with larger holes (higher threshold for detection) catches fewer fish but less debris (high precision,

## Original source — PDF page 23

low recall), while a fine-mesh net catches more fish but also more debris (high recall, low precision). The optimal configuration 
depends on your specific security context and the relative costs of false positives versus false negatives.

## Original source — PDF page 24

The F1-score elegantly solves the precision-recall tradeoff by combining both metrics into a single value using the 
harmonic mean. Unlike the arithmetic mean, the harmonic mean heavily penalizes extreme imbalances—if either 
precision or recall is very low, the F1-score will also be low, even if the other metric is high. This mathematical 
property makes F1 the ideal single metric for model comparison when both types of errors matter.

The F1-score is particularly critical in cybersecurity because of severe class imbalance. In real network traffic, benign 
events vastly outnumber attacks—perhaps 99.9% normal and 0.1% malicious. In such scenarios, simple accuracy is a 
misleading metric. A naive model that classifies everything as "benign" would achieve 99.9% accuracy but 0% recall 
and undefined precision—completely useless for security. The F1-score, by contrast, would be zero, correctly 
indicating the model's failure.

When evaluating cybersecurity models, always examine the F1-score alongside the confusion matrix to understand 
the balance between catching threats and minimizing false alarms. Some advanced applications use weighted variants 
like F2-score (emphasizing recall) or F0.5-score (emphasizing precision) when one error type is significantly more

## Original source — PDF page 25

costly than the other. In practice, you'll often plot precision-recall curves showing the tradeoff across different decision 
thresholds, allowing stakeholders to choose the operating point that best matches their risk tolerance and operational 
capacity.

## Original source — PDF page 26

AUC can be interpreted as the 
probability that the model will 
rank a randomly chosen positive 
example higher than a randomly

chosen negative example

True Positive Rate (recall)

Receiver Operating Characteristic (ROC)

i.e., (100% TPR, 0% FPR),

The Receiver Operating Characteristic (ROC) curve provides a comprehensive visualization of classifier performance 
across all possible decision thresholds. The curve plots True Positive Rate (recall) on the Y-axis against False Positive 
Rate on the X-axis as we vary the classification threshold. A perfect classifier reaches the top-left corner (100% TPR, 
0% FPR), while random guessing produces a diagonal line (50% AUC).

The Area Under the Curve (AUC) summarizes the ROC curve into a single metric ranging from 0 to 1, where 1.0 
represents perfect classification. AUC can be interpreted as the probability that the model will rank a randomly chosen 
positive example higher than a randomly chosen negative example. An AUC of 0.99, as shown in your slide, indicates 
excellent discriminative ability—the model almost always ranks actual threats higher than benign events.

ROC-AUC has become a standard metric in cybersecurity competitions and publications because it's threshold-
agnostic and handles class imbalance better than simple accuracy. However, for severely imbalanced datasets, 
precision-recall curves sometimes provide more informative insights than ROC curves. In production deployments, 
you'll select a specific operating point on the ROC curve based on your organization's tolerance for false positives

## Original source — PDF page 27

versus false negatives, then monitor whether the model maintains this performance over time as attack patterns evolve.

## Original source — PDF page 28

Let's consolidate what we've covered in Part A into a cohesive pipeline for automated cyber defense. The mission is to 
move from manual, rule-based defense to automated, learning-based defense that can adapt to evolving threats. Our 
objective is to choose between classification (identifying threat categories) and regression (forecasting continuous risk 
metrics) based on the specific security problem we're addressing.

Our arsenal consists of three powerful supervised learning algorithms: SVM for high-dimensional data like text 
analysis, Random Forest for robust ensemble predictions with feature importance insights, and XGBoost for maximum 
accuracy on structured data. The drill—our training methodology—emphasizes proper train/test splitting and k-fold 
cross-validation to ensure our models generalize to new threats rather than merely memorizing historical patterns.

Finally, our scorecard comprises the F1-score and ROC-AUC metrics, which provide a balanced assessment of both 
precision (trustworthiness of alerts) and recall (comprehensive threat coverage). The closing quote reminds us that 
model development isn't the end goal—generalization to tomorrow's unseen attacks is what matters. A model that 
performs brilliantly on historical data but fails against new attack variants is worse than useless; it creates false

## Original source — PDF page 29

confidence. This is why continuous monitoring, updating, and testing against emerging threats are essential components of 
operational ML systems in cybersecurity.

## Original source — PDF page 30

Welcome to Part B, where we shift from supervised learning—which requires labeled examples—to unsupervised 
learning, which discovers patterns in unlabeled data. In this section, I call this the "data detective's toolkit" because 
unsupervised learning is fundamentally about investigation and discovery rather than prediction. You're examining 
evidence without knowing in advance what you're looking for.

This capability is crucial in cybersecurity because the vast majority of data we encounter is unlabeled. While we might 
have verified samples of known malware families or confirmed intrusion logs, we simultaneously collect terabytes of 
network traffic, system logs, and IoT sensor data every day with no labels attached. Unsupervised learning allows us to 
extract value from this "dark data" by finding hidden structures, identifying anomalies, and grouping similar events—
all without needing expensive expert labeling.

## Original source — PDF page 31

Modern organizations face an overwhelming volume and velocity of data. Network devices generate millions of log 
entries per hour, IoT sensors stream continuous readings, and cloud infrastructure produces massive amounts of 
telemetry. The challenge is that this data arrives faster than security analysts can review it, and the vast majority 
remains unlabeled—we don't know what's normal versus suspicious until something goes wrong.

This creates what I call the "labeled data paradox": supervised learning requires labeled examples to train, but labeling 
requires expert analysis that doesn't scale to the volume of data we're collecting. It's like trying to identify a criminal in 
a crowd when you've never seen their photograph—you don't have a "mugshot" to match against. Traditional 
supervised approaches simply can't scale to this reality.

Unsupervised learning flips the paradigm. Instead of asking "does this match a known threat pattern?" we ask "does 
this deviate from normal patterns?" or "which events cluster together in suspicious ways?" This shift from recognition 
to discovery enables automated analysis of unlabeled data at scale, surfacing anomalies and patterns that would 
otherwise remain hidden in the noise. The intelligence cycle—direction, collection, analysis, dissemination, and

## Original source — PDF page 32

review—can now operate at machine speed rather than being bottlenecked by human analysis.

## Original source — PDF page 33

Unsupervised learning operates on input data X without corresponding target labels Y. This might seem impossible at 
first—how can a machine learn anything without being told what's correct? The key insight is that useful structure 
exists in the data itself. Events that are similar tend to cluster together, anomalies stand apart from the majority, and 
high-dimensional data often lies on lower-dimensional manifolds that can be discovered mathematically.

The detective's logic perfectly captures the unsupervised mindset: "I don't know who the criminal is, but I know these 
50 events are suspiciously similar to each other and different from everything else." Maybe they all originate from the 
same IP range, occur at the same time of day, and involve similar DNS queries. Individually, each event might appear 
benign, but the pattern of similarity suggests a coordinated campaign worth investigating.

This approach is particularly powerful for discovering zero-day threats and unknown attack patterns. When attackers 
use novel techniques that don't match existing signatures, supervised models trained on historical threats will miss 
them. But unsupervised anomaly detection can flag unusual patterns even without knowing exactly what type of 
attack is being attempted. The output isn't a definitive "malicious" label—it's an alert that says "these events deserve

## Original source — PDF page 34

human investigation because they deviate from established norms."

## Original source — PDF page 35

Clustering is the fundamental technique in unsupervised learning—it's about organizing unstructured data into 
meaningful groups. Imagine a digital forensics lab receiving a mixed pile of evidence: IP addresses from various 
connections, email samples, authentication logs, and file hashes, all jumbled together with no organization. Clustering 
algorithms automatically sort this chaos into coherent groups based on similarity.

The goal is to maximize intra-cluster similarity (items within a group should be similar to each other) while minimizing 
inter-cluster similarity (different groups should be distinct from one another). In cybersecurity, this organizational 
power has immediate applications. We can cluster malware samples into families based on code similarity, group 
phishing emails into campaigns based on shared infrastructure or message templates, and profile user behaviors into 
distinct patterns based on login times, accessed resources, and activity sequences.

This automated grouping accelerates analyst workflows dramatically. Instead of examining thousands of individual 
events, analysts review representative samples from each cluster and apply decisions at the cluster level. If one cluster 
contains known malware, the entire cluster is likely malicious. If another cluster matches normal user behavior

## Original source — PDF page 36

patterns, those events can be deprioritized. Clustering transforms "noise into signal" by revealing the underlying structure 
hidden in apparently chaotic data.

## Original source — PDF page 37

assign each data point

to its nearest centroid

based on distance 
(typically Euclidean)

initialize K centroids (cluster

centers) randomly in the

feature space

recompute each centroid 
as the mean position of all

points currently assigned

to that cluster

repeat steps 2-3 until 
convergence, when centroid

positions stabilize.

K-Means is the workhorse of clustering algorithms—fast, simple, and effective for many applications. The algorithm 
works in four iterative steps. First, we initialize K centroids (cluster centers) randomly in the feature space. Second, we 
assign each data point to its nearest centroid based on distance (typically Euclidean). Third, we recompute each 
centroid as the mean position of all points currently assigned to that cluster. Fourth, we repeat steps 2-3 until 
convergence, when centroid positions stabilize.

The "Quick Sorter" nickname reflects K-Means' efficiency—it scales well to large datasets and typically converges in 
relatively few iterations. However, it requires specifying K (the number of clusters) in advance, which isn't always 
obvious in real-world security data. If you're clustering malware samples, how do you know in advance how many 
distinct families exist? Domain knowledge helps, but often you'll need to try multiple K values and use metrics like the 
silhouette score or elbow method to identify the optimal number.

K-Means works best when clusters are roughly spherical and similar in size, which may not hold for all cybersecurity 
applications. It's also sensitive to initial centroid placement—different random initializations can yield different final

## Original source — PDF page 38

clusterings. Despite these limitations, K-Means remains widely used for applications like grouping similar network flows, 
segmenting user populations, or organizing malware samples when the approximate number of groups is known.

## Original source — PDF page 39

Unlike K-Means, DBSCAN 
doesn't require specifying the

number of clusters in 
advance, and it can discover

clusters of arbitrary shapes

rather than just spherical

ones.

DBSCAN (Density-Based Spatial Clustering of Applications with Noise) takes a fundamentally different approach from 
K-Means—instead of forcing every point into a cluster, it identifies high-density regions and explicitly labels isolated 
points as noise or outliers. This "outlier hunter" capability makes DBSCAN particularly valuable for cybersecurity 
anomaly detection, where the outliers are often more interesting than the clusters.

The algorithm has two key parameters: epsilon (the neighborhood radius around each point) and MinPts (minimum 
points required for a high-density region). Core points have at least MinPts neighbors within epsilon distance and form 
the centers of clusters. Border points fall within epsilon of a core point but don't have enough neighbors to be core 
points themselves. Noise points are isolated—they don't fall within epsilon of any core point and represent potential 
anomalies.

Unlike K-Means, DBSCAN doesn't require specifying the number of clusters in advance, and it can discover clusters of 
arbitrary shapes rather than just spherical ones. The explicit noise identification makes it ideal for detecting outliers 
that represent potential security threats—unusual network connections, anomalous user behaviors, or novel malware

## Original source — PDF page 40

samples that don't fit any known family. However, DBSCAN struggles when clusters have varying densities, and parameter 
selection (epsilon and MinPts) requires careful tuning based on your specific data characteristics.

## Original source — PDF page 41

Hierarchical clustering builds a tree-like structure (dendrogram) that reveals relationships at multiple levels of 
granularity, from individual samples up to major groups. This "family tree" visualization is extremely valuable in 
cybersecurity for understanding malware lineages, attack campaign evolution, and the relationships between threat 
actors. The dendrogram shows not just which items cluster together, but how closely related different clusters are to 
each other.

There are two approaches to building the hierarchy. Agglomerative (bottom-up) clustering starts with each data point 
as its own cluster and iteratively merges the closest pairs until all points are in a single cluster. Divisive (top-down) 
clustering starts with all points in one cluster and recursively splits clusters until each point is separate. Agglomerative 
is more common in practice because it's computationally more efficient.

The slide's example shows the WannaCry malware family organized hierarchically, with variants branching from 
common ancestors. This visualization helps analysts understand evolutionary relationships—Variant 1 and Variant 2 
share a common ancestor, and files within each variant are more similar to each other than to the other variant.

## Original source — PDF page 42

Hierarchical clustering excels with smaller datasets where relationship visualization adds analytical value, such as 
understanding the evolution of a specific threat campaign over time. However, it doesn't scale as well to massive datasets due 
to computational complexity.

## Original source — PDF page 43

Each clustering algorithm has distinct strengths that make it suitable for different cybersecurity scenarios. K-Means is 
fast and simple, making it ideal when you know roughly how many groups exist and your data forms relatively 
spherical, similarly-sized clusters. Examples include segmenting network traffic into service types or grouping users 
into behavior profiles when you know the approximate number of categories.

DBSCAN handles noise and outliers explicitly, making it the top choice for anomaly detection tasks where discovering 
the unusual is more important than organizing the normal. Its ability to find clusters of arbitrary shapes is valuable 
when threat patterns don't conform to simple geometric distributions. Use DBSCAN for discovering unusual patterns 
in network traffic, identifying compromised accounts exhibiting anomalous behavior, or finding novel malware that 
doesn't fit known families.

Hierarchical clustering provides taxonomy and lineage visibility, making it perfect for malware family analysis, 
understanding attack campaign evolution, and visualizing relationships between threats. The dendrogram output is 
particularly valuable for communicating findings to stakeholders and for incremental analysis as new samples arrive—

## Original source — PDF page 44

you can see where they fit in the existing taxonomy. Use hierarchical clustering with smaller, curated datasets where the 
relationship structure provides analytical insights beyond simple grouping.

## Original source — PDF page 45

As we add more features to our analysis—packet size, timestamp, protocol, geographic origin, port numbers, payload 
characteristics—we enter high-dimensional space where our intuitions from 2D or 3D break down. This is the "curse 
of dimensionality," where too many features paradoxically make patterns harder to detect rather than easier. In high-
dimensional spaces, most points become roughly equidistant from each other, and the concept of "nearest neighbors" 
loses meaning.

The computational cost increases exponentially with dimensionality. If you're analyzing network traffic with 100 
features, the feature space has 2^100 possible regions, far exceeding the number of data points you have. This sparse 
data population means clustering algorithms struggle to find meaningful groupings, distance metrics become 
unreliable, and models tend to overfit by finding spurious patterns that don't generalize.

Moreover, not all features are equally informative. Some features might be redundant (highly correlated with other 
features), while others might be pure noise that obscures genuine patterns rather than revealing them. Having dozens 
or hundreds of clues can actually confuse the investigation rather than clarifying it. This motivates dimensionality

## Original source — PDF page 46

reduction—techniques that identify the most informative combinations of features while discarding redundant or noisy 
dimensions. By projecting high-dimensional data into lower-dimensional spaces intelligently, we maintain the information 
content while making pattern detection computationally feasible and statistically sound.

## Original source — PDF page 47

Principal Component Analysis (PCA) is the most widely used dimensionality reduction technique, and understanding it 
is crucial for practical ML work in cybersecurity. PCA identifies the directions in feature space with maximum variance 
and projects the data onto these "principal components." Think of it like shining a light on a complex 3D object and 
analyzing the 2D shadow—you lose some information, but if you choose the right angle (the right projection), you 
preserve the most important characteristics.

Mathematically, PCA finds orthogonal axes through your data where the variance is maximized. The first principal 
component captures the most variance possible in a single dimension, the second principal component captures the 
most remaining variance while being perpendicular to the first, and so on. Typically, the first few principal components 
capture the majority of variance, allowing you to represent high-dimensional data accurately using just 2-3 
dimensions.

In cybersecurity, this has immediate practical applications. Network logs might have 50+ features describing each 
connection—packet sizes, inter-arrival times, protocol flags, port numbers, etc. PCA can reduce this to 2-3 principal

## Original source — PDF page 48

components that capture 80-90% of the variance, making it computationally feasible to cluster millions of connections or 
visualize network traffic patterns in 2D. The key is that PCA preserves the variance (information) while reducing computational 
complexity and the curse of dimensionality.

## Original source — PDF page 49

This slide demonstrates PCA's power for anomaly detection in network traffic analysis. Raw network logs with 50+ 
features per connection are projected into just 2 principal components that capture the majority of variance. When 
visualized as a scatter plot, normal traffic forms a dense cluster (the blue cloud), while anomalous traffic—potential 
DoS attacks or intrusions—appears as outliers spatially separated from the normal cluster.

The logic behind this approach is simple but powerful: define "normal" behavior by learning the structure of legitimate 
traffic, then flag deviations from this normal profile as potentially malicious. This is fundamentally different from 
signature-based detection, which requires knowing what attacks look like. Instead, we're defining what normal looks 
like and treating everything else as suspicious—an approach that can catch zero-day attacks and novel techniques.

In practice, you'd set a threshold distance from the normal cluster—points beyond this threshold trigger alerts for 
analyst investigation. The threshold can be tuned based on your false positive tolerance: a tighter threshold (closer to 
the normal cluster) catches more subtle anomalies but generates more false positives, while a looser threshold 
reduces false positives but might miss subtle attacks. This visualization also helps analysts quickly understand what

## Original source — PDF page 50

makes flagged traffic anomalous—they can see that it's spatially separated from normal patterns in the reduced feature space.

## Original source — PDF page 51

Clustering combined with feature extraction enables powerful grouping of threats into campaigns, even when exact 
signatures differ. In this phishing example, five emails have different subjects and sender addresses—traditional 
signature-based detection might treat them as unrelated. However, clustering based on structural features (HTML 
templates, embedded links, sender infrastructure, linguistic patterns) reveals they're part of the same phishing 
campaign (#42).

This campaign-level detection is far more valuable than individual email detection because it reveals the scale and 
coordination of threat actor operations. Instead of blocking five separate emails, you've identified an active campaign 
and can proactively search for other emails with similar characteristics, block the infrastructure being used, and 
update threat intelligence feeds. This transforms reactive defense (block this specific email) into proactive defense 
(block this entire campaign and predict future variants).

The same principle applies to malware family identification. New malware variants might have different file hashes 
due to polymorphism or packing, defeating simple signature matching. But clustering based on behavioral features

## Original source — PDF page 52

(system calls, network connections, registry modifications) groups variants into families, allowing analysts to understand 
attacker toolkits and relationships between threats. This structural similarity analysis is more robust to evasion than exact
matching, and it scales because clustering is automated—humans provide expertise in interpreting the clusters, not in 
manually comparing every sample.

## Original source — PDF page 53

User and Entity Behavior Analytics represents one of the most valuable applications of unsupervised learning in 
cybersecurity—detecting insider threats and compromised accounts by identifying deviations from established 
behavioral baselines. For each user or system entity, we build a normal behavior profile based on historical data: 
typical login times, usual data access patterns, standard workflow sequences, and common resource usage.

The slide shows User Bob's normal activity occurring during business hours (09:00-17:00), but a massive data transfer 
spike occurs at 3:00 AM—far outside Bob's established baseline. This anomaly could indicate several threats: Bob's 
account has been compromised and an attacker is exfiltrating data, Bob himself is a malicious insider stealing 
information, or Bob's credentials were stolen and are being used remotely. Any of these scenarios warrants immediate 
investigation.

Traditional security controls like authentication systems tell you "Is this the right user?" but can't distinguish between 
legitimate Bob and an attacker with Bob's credentials. UEBA answers a different question: "Is this user behaving 
normally?" This behavioral approach catches threats that bypass perimeter defenses and authentication—the insider

## Original source — PDF page 54

threat or the compromised account that has legitimate credentials but suspicious intentions. The key is that UEBA learns what
"normal" means for each individual user, so it adapts to diverse working patterns rather than enforcing a one-size-fits-all 
policy.

## Original source — PDF page 55

Welcome to Part C, where we explore semi-supervised learning—the middle ground between purely supervised and 
purely unsupervised approaches. This paradigm is particularly relevant to cybersecurity because it directly addresses 
our data reality: we have small amounts of expensive, expert-labeled data and massive amounts of cheap, unlabeled 
data. Semi-supervised learning leverages both, using the labeled data to guide the learning process while exploiting 
the structure revealed by the unlabeled data.

The subtitle "Bridging the Gap Between Data Volume and Threat Intelligence" captures the core value proposition. 
Threat intelligence—verified malware samples, confirmed intrusion logs, validated phishing emails—is scarce and 
costly to obtain because it requires expert analysis, often after an incident has occurred. Meanwhile, data volume is 
overwhelming—terabytes of network traffic, billions of DNS queries, millions of authentication logs—all arriving 
continuously with no labels attached. Semi-supervised learning bridges this gap by making the unlabeled data work for 
us, improving model performance beyond what would be possible with labeled data alone.

## Original source — PDF page 56

Modern organizations face what I call the data paradox: we're data-rich but label-poor. Network devices, cloud 
infrastructure, IoT sensors, and endpoint agents generate terabytes of logs daily—an effectively infinite stream of 
data. However, labeled data—examples where we definitively know whether an event is malicious or benign—is 
scarce and expensive. Expert labeling requires skilled analysts, and labels often only become available after an 
incident has been detected, investigated, and confirmed.

This bottleneck creates real problems for security teams. Supervised learning starves because there's insufficient 
labeled training data to build accurate models, especially for rare attack types or emerging threats where we have few 
examples. Purely unsupervised learning wanders without guidance—it can find patterns and anomalies, but it can't 
tell you which patterns represent threats versus which are merely unusual but benign behaviors. We need something 
that combines the strengths of both paradigms.

The slide's code snippet and classification output illustrate the scarcity of confirmed labels. Each definitively labeled 
example—"Classification: MALWARE (Critical), Confidence: 98.75%, Validated by: ANALYST_03"—represents hours of

## Original source — PDF page 57

expert analysis. Getting to 98.75% confidence requires deep investigation of file behavior, network connections, registry 
modifications, and comparison against threat intelligence databases. This level of validation simply can't scale to the billions of 
events we observe daily, which motivates semi-supervised approaches that maximize the value of scarce labels by 
incorporating unlabeled data into the learning process.

## Original source — PDF page 58

Semi-supervised learning occupies the middle ground between supervised learning (which requires 100% labeled 
data) and unsupervised learning (which operates with 0% labels). The definition is straightforward: training models on 
a small amount of labeled data combined with a large amount of unlabeled data. But the key insight is that this 
combination can achieve performance exceeding what either approach could accomplish alone.

The goal is to exploit the hidden structure in unlabeled data to refine decision boundaries. Labeled data tells us 
definitively that certain examples are malicious or benign, establishing anchor points. Unlabeled data reveals the 
underlying geometry of the feature space—how similar examples cluster together, how the data is distributed across 
the space, and what manifold structure exists. By combining these two sources of information, semi-supervised 
learning makes more informed predictions than using labeled data alone.

This is particularly powerful in cybersecurity because many threats exist on a continuum rather than as discrete 
categories. A file that's 90% similar to known malware is probably malicious even if we haven't seen that exact variant 
before. Network traffic that deviates from normal patterns in similar ways to confirmed intrusions is worth

## Original source — PDF page 59

investigating. Semi-supervised learning leverages this continuum structure, using the small number of definitive labels to 
interpret the large-scale patterns visible in unlabeled data.

## Original source — PDF page 60

That massive stream of unlabeled network 
traffic may contain ongoing attacks, low-and-
slow data exfiltration, reconnaissance activity, 
and command-and-control communications.

The unlabeled user logs may contain insider 
threats and compromised accounts.

The unlabeled file submissions may contain 
new malware variants.

The typical semi-supervised scenario in cybersecurity involves a severe imbalance: perhaps 10% labeled data (known 
malware signatures, verified phishing emails, confirmed intrusion logs) and 90% unlabeled data (raw network traffic, 
DNS queries, user activity logs). These percentages aren't arbitrary—they reflect the reality that labeling is expensive 
and slow while data collection is cheap and fast.

What makes semi-supervised learning compelling is the insight that "unlabeled" doesn't mean "useless." In 
cybersecurity, the unlabeled data isn't noise—it's the context where threats hide. That massive stream of unlabeled 
network traffic contains ongoing attacks, low-and-slow data exfiltration, reconnaissance activity, and command-and-
control communications. The unlabeled user logs contain insider threats and compromised accounts. The unlabeled 
file submissions contain new malware variants.

Semi-supervised learning treats unlabeled data as a valuable resource rather than a problem. Even though we don't 
know the true labels, the unlabeled data reveals structure: malware samples cluster by family, normal network traffic 
follows predictable patterns, legitimate user behavior exhibits consistency. This structure provides supervision signals

## Original source — PDF page 61

that complement the explicit labels. The art of semi-supervised learning is figuring out how to leverage this implicit 
supervision without being misled by the lack of definitive labels.

## Original source — PDF page 62

This visualization powerfully illustrates why semi-supervised learning works. The "Supervised Only" panel shows an 
arbitrary decision boundary based solely on a few labeled points (red and blue stars). With limited labels, the 
boundary might separate the classes correctly for the training samples, but it has no idea about the true data 
distribution. It's making decisions blindly in regions where no labeled data exists.

The "Reality" panel reveals what unlabeled data shows us: the actual data manifold—how samples are distributed 
throughout the feature space. The labeled points aren't isolated; they're surrounded by clouds of unlabeled samples 
with similar characteristics. This manifold structure is invisible to purely supervised learning but reveals critical 
information about where decision boundaries should be placed.

The "SSL Solution" panel shows how semi-supervised learning uses unlabeled data to guide the decision boundary 
along low-density regions between clusters, respecting the manifold structure. Rather than cutting arbitrarily through 
high-density regions (which likely contain samples from the same class), the boundary follows the natural gaps in the 
data distribution. This principle—"unlabeled data reveals the manifold structure, allowing the model to 'connect the

## Original source — PDF page 63

dots' between scarce labels"—is fundamental to understanding why semi-supervised learning achieves better generalization 
than supervised learning with the same small number of labels.

## Original source — PDF page 64

If two files have nearly identical code 
structure and behavioral characteristics,

they're probably both malware or both

benign, not mixed.

Malware from the same family clusters together

based on shared code and behavior; benign

software from the same developer or 
application category also clusters together

While network traffic might have 100+ features,

the actual malicious versus benign variations 
primarily occur along a few key dimensions—

the data has intrinsic lower dimensionality.

Semi-supervised learning's effectiveness depends on assumptions about data structure that typically hold in 
cybersecurity contexts. The Continuity Assumption states that points close together in feature space likely share the 
same label. If two files have nearly identical code structure and behavioral characteristics, they're probably both 
malware or both benign, not mixed. This assumption justifies propagating labels from labeled to nearby unlabeled 
examples.

The Cluster Assumption states that points in the same high-density cluster likely share the same label, and decision 
boundaries should pass through low-density regions between clusters. Malware from the same family clusters 
together based on shared code and behavior; benign software from the same developer or application category also 
clusters together. Decision boundaries should separate these distinct clusters rather than cutting through their 
centers.

The Manifold Assumption states that high-dimensional cyber data actually lies on lower-dimensional structures 
embedded in the high-dimensional space. While network traffic might have 100+ features, the actual malicious versus

## Original source — PDF page 65

benign variations primarily occur along a few key dimensions—the data has intrinsic lower dimensionality. This assumption 
justifies techniques like dimensionality reduction and graph-based methods that exploit manifold structure. Together, these 
assumptions explain why leveraging unlabeled data improves model performance: the unlabeled data reveals geometric 
structure that helps place decision boundaries more accurately than labels alone would allow.

## Original source — PDF page 66

By training on a small set of labeled attacks and legitimate traffic + a large volume of unlabeled

normal traffic, the model learns the boundaries of normal behavior in high detail. Anything falling 
outside this normal region—sufficiently far from the manifold of legitimate activity—triggers an alert.

Semi-supervised learning's most compelling application is zero-day attack detection—identifying threats that have 
never been seen before and have no existing labels or signatures. Traditional supervised learning fails here because it 
requires labeled examples of each threat type, and by definition, zero-day attacks have no prior examples. Purely 
signature-based detection also fails because there's no signature to match.

Semi-supervised learning solves this by defining the "normal" manifold so precisely that any significant deviation is 
flagged as suspicious, even without a specific attack signature. By training on a small set of labeled attacks and 
legitimate traffic, plus a large volume of unlabeled normal traffic, the model learns the boundaries of normal behavior 
in high detail. Anything falling outside this normal region—sufficiently far from the manifold of legitimate activity—
triggers an alert.

The slide's visualization shows normal traffic as a dense blue region and various threats (red/orange) scattered 
outside. Known threats that were in the labeled training data appear in one area, but zero-day attacks appear 
elsewhere—yet both are flagged because they deviate from normal. This approach provides protection against

## Original source — PDF page 67

unknown threats, though it requires careful calibration to avoid false positives from legitimate but unusual activities. The key
insight is that semi-supervised learning uses unlabeled data to densely populate the normal region, making the 
normal/abnormal boundary precise enough to catch novel attacks.

## Original source — PDF page 68

(This adaptability is crucial for long-term operational 
deployment where continuous manual updates aren't 
scalable.)

Network traffic patterns constantly evolve—new applications deploy, users change behavior, infrastructure updates 
occur. This means that static detection rules rapidly become stale, and attackers can evade them by mimicking current 
legitimate traffic. The challenge is maintaining accurate models of "normal" traffic without requiring continuous 
manual relabeling as patterns shift.

Semi-supervised learning provides an elegant solution: use the constant stream of unlabeled packets to continuously 
update the baseline of normal traffic. Most network traffic is benign (though unlabeled), so clustering and anomaly 
detection on unlabeled data reveals current normal patterns. The small number of confirmed intrusion labels guides 
the decision boundary between normal and malicious, but unlabeled traffic keeps the normal baseline current.

This approach adapts to evasion techniques without manual relabeling. If attackers start using HTTPS for command-
and-control to blend with legitimate encrypted traffic, the baseline automatically adjusts to recognize this as common, 
and detection focuses on behavioral anomalies within encrypted traffic rather than simply flagging encryption. The 
model evolves with the network environment, maintaining effectiveness even as both legitimate and malicious

## Original source — PDF page 69

patterns change. This adaptability is crucial for long-term operational deployment where continuous manual updates aren't 
scalable.

## Original source — PDF page 70

This scenario perfectly illustrates semi-supervised learning's power: a new botnet variant appears with only 5 
confirmed malware samples, but millions of devices in your network logs are potentially infected. Traditional 
supervised learning would struggle with only 5 training examples. But semi-supervised learning propagates the 
"malicious" label to thousands of infected devices based on connection pattern similarity visible in the unlabeled logs.

The slide's family tree visualization shows how this works. The few known malware samples (labeled red hexagons) 
anchor the detection, but they're surrounded by slightly altered variants (unlabeled white circles) that share similar 
network behavior—contacting the same command-and-control infrastructure, exhibiting similar traffic patterns, 
making connections at similar intervals. Even though these variants are technically unlabeled, their similarity to known 
samples in feature space allows semi-supervised algorithms to propagate labels through the similarity graph.

This dramatically accelerates incident response. Instead of manually analyzing millions of logs to find all infected 
devices, semi-supervised learning automatically flags devices exhibiting similar behavior to the few confirmed 
infections. Analysts review a manageable set of high-confidence detections, validate them, and then feed those

## Original source — PDF page 71

validations back as additional labels, further improving the model. This human-in-the-loop approach combines the scalability 
of machine learning with the domain expertise of human analysts, catching widespread infections early before they cause 
major damage.

## Original source — PDF page 72

One mislabeled benign file in the "malware" 
training set could cause thousands of legitimate

files to be flagged, disrupting operations.

Since semi-supervised learning uses unlabeled 
data to shape decision boundaries, poisoning

the unlabeled data can be even more effective

than poisoning labeled training data.

These limitations don't invalidate semi-supervised learning, but they require careful implementation, continuous monitoring

for data quality issues, and robust validation to ensure the model isn't being manipulated or learning from corrupted data.

While powerful, semi-supervised learning has significant risks that security practitioners must understand. The 
propagation of bad labels is particularly dangerous: if your initial labeled dataset is biased, contains errors, or is 
poisoned by an attacker, those errors will spread to thousands of unlabeled samples. One mislabeled benign file in the 
"malware" training set could cause thousands of legitimate files to be flagged, disrupting operations.

Adversarial attacks specifically targeting semi-supervised systems are a growing concern. Attackers can inject carefully 
crafted "noise" into the unlabeled data pool—samples designed to warp the decision boundary in their favor. Since 
semi-supervised learning uses unlabeled data to shape decision boundaries, poisoning the unlabeled data can be even 
more effective than poisoning labeled training data. The slide's visualization shows a green "normal" node being 
overwhelmed by red "poisoned" nodes that gradually corrupt the surrounding structure.

Computational cost is also significant, particularly for graph-based methods like label propagation. Computing 
similarity between all pairs of points requires O(n²) memory and computation, which becomes prohibitive for datasets 
with millions of samples. Approximation methods exist, but they introduce their own tradeoffs between accuracy and

## Original source — PDF page 73

efficiency. These limitations don't invalidate semi-supervised learning, but they require careful implementation, continuous 
monitoring for data quality issues, and robust validation to ensure the model isn't being manipulated or learning from 
corrupted data.

## Original source — PDF page 74

Let's consolidate the core lessons from Part C into three pillars. First, efficiency: semi-supervised learning maximizes 
the utility of scarce, expensive threat intelligence by combining it with abundant unlabeled data. When expert labels 
are your bottleneck, semi-supervised approaches deliver better performance than supervised learning with the same 
small number of labels. This efficiency directly translates to cost savings—fewer analyst hours spent labeling data—
and faster deployment—you don't need to wait for massive labeled datasets before building effective models.

Second, structure: semi-supervised learning's power comes from exploiting the natural manifold and clustering 
structure in cybersecurity data. Malware families cluster together, normal traffic follows predictable patterns, user 
behaviors exhibit consistency. By respecting this structure when placing decision boundaries, semi-supervised models 
generalize better than models that ignore the geometric information revealed by unlabeled data.

Third, defense: semi-supervised learning is crucial for detecting zero-day threats where signatures don't yet exist. By 
precisely defining normal behavior using abundant unlabeled traffic and using scarce labels to separate malicious from 
normal, we can flag novel attacks that don't match any known signature. This proactive capability—catching threats

## Original source — PDF page 75

we've never seen before based on deviation from normal—is increasingly essential as attackers use automation and AI to 
generate novel variants at scale, faster than signature databases can be updated.

## Original source — PDF page 76

(Why is machine learning essential for 
modern cybersecurity? )

Welcome to the final part of today's lecture, where we step back from specific techniques to address the fundamental 
question: Why is machine learning essential for modern cybersecurity? This isn't just about adopting new 
technology—it's about survival in an environment where threats evolve faster than traditional defenses can adapt. The 
subtitle "The Evolutionary Adaptation" captures this dynamic: cybersecurity is now an evolutionary arms race, and 
machine learning provides the adaptation mechanism needed to keep pace with adversaries.

## Original source — PDF page 77

Modern cyber defense faces a fundamental speed problem: logs and network traffic accumulate faster than human 
analysts can review them. Enterprise networks generate millions of log entries per hour from firewalls, intrusion 
detection systems, endpoint agents, cloud infrastructure, and IoT devices. Even a large security operations center with 
dozens of analysts can't manually review this volume—traditional infrastructure is drowning in its own telemetry.

Compounding this problem, attacks occur at machine speed. Automated malware can scan thousands of targets per 
second, exploit vulnerabilities within milliseconds of discovery, and exfiltrate gigabytes of data in minutes. The time 
from initial compromise to lateral movement and data theft has collapsed from weeks to hours. Human response 
timelines—measured in hours or days for investigation, decision-making, and remediation—simply can't match 
attacker speed.

This velocity mismatch creates what I call "the void"—a growing gap between the volume and speed of threats and 
our capacity to respond to them. Traditional security approaches that rely on human review of alerts and manual 
investigation of incidents can't scale to this new reality. Machine learning is essential because it operates at machine

## Original source — PDF page 78

speed, processing millions of events per second, identifying patterns and anomalies in real-time, and triggering automated 
responses without human latency. This isn't about replacing human analysts—it's about triaging the massive volume of data to 
focus human expertise where it's most valuable.

## Original source — PDF page 79

The quote "You cannot write a rule for a threat that hasn't been invented yet" encapsulates the fundamental 
limitation of signature-based and rule-based security approaches. Traditional defenses rely on predetermined 
signatures—known malware hashes, specific attack patterns, documented exploit techniques. This approach is 
inherently reactive: we can only defend against threats we've already seen and documented.

Attackers exploit this reactive nature through rapid innovation and mutation. Polymorphic malware changes its 
appearance with each infection, generating unique file hashes that evade signature-based antivirus. Attackers use 
living-off-the-land techniques, leveraging legitimate administrative tools in malicious ways that don't match attack 
signatures. Novel exploits of zero-day vulnerabilities have no signatures because they've never been documented. By 
the time signatures are created and distributed, attackers have moved on to new techniques.

This creates an unwinnable game: defenders are always one step behind, updating signatures to catch yesterday's 
threats while attackers deploy tomorrow's techniques. Machine learning breaks this cycle by learning patterns rather 
than memorizing signatures, enabling recognition of malicious behavior even in novel forms. Instead of asking "Does

## Original source — PDF page 80

this match a known malware hash?" ML asks "Does this behave like malware based on underlying patterns?" This shift from 
recognition to pattern-based classification provides defense against threats that haven't been invented yet, because the 
patterns of malicious behavior persist even as specific implementations evolve.

## Original source — PDF page 81

ML 
systems

(enables detection of threats 
based on behavioralsignatures

rather than explicit rules)

(allows systems to evolve with changing threat

landscapes and network environments

without constant manual updates)

(integrates heterogeneous data sources—
network logs, system calls, user behavior, threat 
intelligence—into unified analysis that captures

the complex, multi-faceted nature of modern

attacks)

Together, these three pillars

provide the foundation for 
effective modern cyber defense.

Modern cybersecurity must transition from reactive containment—responding to known threats after they're 
detected—to proactive prediction—anticipating and preventing unknown threats before they cause damage. This 
transition requires three fundamental capabilities that machine learning uniquely provides: pattern recognition, 
adaptation, and handling high-dimensionality. These aren't just features of ML systems; they're survival requirements 
in the current threat landscape.

Pattern recognition enables detection of threats based on behavioral signatures rather than explicit rules. Adaptation 
allows systems to evolve with changing threat landscapes and network environments without constant manual 
updates. High-dimensionality handling integrates heterogeneous data sources—network logs, system calls, user 
behavior, threat intelligence—into unified analysis that captures the complex, multi-faceted nature of modern attacks. 
Together, these three pillars provide the foundation for effective modern cyber defense.

## Original source — PDF page 82

Deep learning's power comes from hierarchical feature extraction—learning representations at multiple levels of 
abstraction from raw data. Shallow networks with one hidden layer can learn simple patterns, but deep neural 
networks with many hidden layers can learn complex, hierarchical patterns. Lower layers might detect simple features 
like specific byte sequences or packet sizes, middle layers combine these into higher-level patterns like protocol 
behaviors, and upper layers recognize complex attack patterns composed of these behaviors.

This hierarchical learning enables deep neural networks to "find the signal in the noise"—to extract meaningful threat 
indicators from noisy, high-dimensional data where simpler models see only random variation. Traditional feature 
engineering requires human experts to manually design features capturing attack characteristics. Deep learning 
automatically discovers these features from data, often finding patterns that human experts didn't anticipate.

The key advantage for cybersecurity is that deep learning can process raw data—packet captures, log files, binary 
executables—without extensive preprocessing or feature engineering. This end-to-end learning discovers patterns 
directly from data, including subtle indicators that might be missed by manual feature design. As attacks become more

## Original source — PDF page 83

sophisticated and subtle, this automated pattern discovery becomes increasingly valuable. Deep learning has achieved 
breakthrough performance in malware classification, network intrusion detection, and phishing identification precisely 
because it can learn complex patterns from raw data that were previously invisible to traditional methods.

## Original source — PDF page 84

Traditional security controls verify credentials—"Is this the correct username and password?"—but can't distinguish between the legitimate user and an 
attacker who stole those credentials. Behavioralanalytics adds a second layer: "Is this user behaving normally?" Even with valid credentials, behavior that 
deviates from established patterns triggers investigation. This is particularly powerful for detecting compromised accounts used for data exfiltration or 
lateral movement, where the attacker has legitimate credentials but suspicious intentions.

This case study illustrates behavioral analytics' power to detect threats that bypass credential-based authentication. 
The authorized user shows smooth, rhythmic patterns in their keystroke dynamics and mouse movements—the 
consistent patterns of a human working at their normal pace. The compromised account shows erratic, jagged 
patterns—the behavior of an attacker unfamiliar with the victim's typical workflow, or possibly an automated script 
that moves differently than a human user.

Traditional security controls verify credentials—"Is this the correct username and password?"—but can't distinguish 
between the legitimate user and an attacker who stole those credentials. Behavioral analytics adds a second layer: "Is 
this user behaving normally?" Even with valid credentials, behavior that deviates from established patterns triggers 
investigation. This is particularly powerful for detecting compromised accounts used for data exfiltration or lateral 
movement, where the attacker has legitimate credentials but suspicious intentions.

Machine learning enables this by building individual behavioral profiles for each user based on historical data—typical 
working hours, usual resources accessed, standard patterns of activity. Then it flags deviations: the executive who

## Original source — PDF page 85

normally works 9-5 suddenly logs in at 3 AM and downloads sensitive customer data, the developer who normally accesses 
source code repositories suddenly queries the HR database, the intern whose account attempts to access restricted network 
segments they've never accessed before. These behavioral anomalies warrant investigation even though the authentication 
was technically valid. This represents a fundamental shift from "credentials as security" to "behavior as security."

## Original source — PDF page 86

This proactive capability—evolving with the attack rather than playing

catch-up—is essential when facing sophisticated adversaries who 
continuously develop new techniques specifically designed to evade

detection.

Zero-day attacks—exploits of previously unknown vulnerabilities—represent the ultimate test of cyber defense 
because there are no signatures, no prior examples, and no time to develop countermeasures before the attack 
occurs. Traditional static defenses fail completely against true zero-days. Machine learning provides defense through 
adaptation: the ability to recognize malicious behavior patterns even in novel implementations.

Continuous learning enables ML models to refine their understanding of "normal" versus "malicious" in real-time as 
new data arrives. Instead of being frozen at deployment, models update their decision boundaries as they observe 
new traffic, user behaviors, and system activities. This means that as the network environment evolves—new 
applications deploy, user populations change, business processes shift—the model adapts to maintain accuracy 
without requiring manual retraining.

Unsupervised learning contributes by detecting anomalies without prior knowledge of what attacks look like. By 
modeling the distribution of normal behavior, unsupervised techniques flag significant deviations even if those 
deviations don't match any known attack pattern. The slide's visualization of a virus attacking a shield illustrates this

## Original source — PDF page 87

evolutionary dynamic: the threat constantly changes form, but the defense adapts to maintain protection. This proactive 
capability—evolving with the attack rather than playing catch-up—is essential when facing sophisticated adversaries who 
continuously develop new techniques specifically designed to evade detection.

## Original source — PDF page 88

(data is rather multi-dimensional)

Cybersecurity data is fundamentally multi-dimensional and heterogeneous. A comprehensive threat assessment might 
integrate network packet captures (source/destination IPs, ports, protocols, payload sizes), system call sequences 
(process behaviors, file operations, registry modifications), natural language text (email content, log messages, threat 
intelligence reports), and IoT sensor telemetry (physical access, environmental conditions). Each data source has its 
own dimensionality—network flows might have 50+ features, system calls hundreds of features, text thousands of 
features.

Traditional analysis struggles with this complexity. Signature-based systems focus on single data types—file hashes, 
network signatures, or rule patterns—missing the cross-domain relationships that often distinguish sophisticated 
attacks from benign activity. Manual analysis can't process thousands of variables simultaneously to identify complex 
correlations. The slide's contrast between a simple 2D chart and a glowing multidimensional hypercube illustrates this 
leap in complexity.

Machine learning excels precisely because it's designed to process high-dimensional data and find patterns across all

## Original source — PDF page 89

dimensions simultaneously. Deep neural networks can ingest raw packets, system calls, and log text concurrently, learning 
complex relationships between network behavior, system behavior, and user activity. Ensemble methods can fuse predictions 
from models specialized on different data types. Dimensionality reduction techniques like PCA can project high-dimensional 
data into interpretable lower-dimensional spaces while preserving the information content. This ability to handle 
heterogeneous, high-dimensional data is crucial because sophisticated attacks often combine techniques across multiple 
domains—network, system, and social engineering—in coordinated campaigns that are only visible when all data sources are 
analyzed together.

## Original source — PDF page 90

The key is maintaining high-
quality feedback—ensuring that 
validations are accurate—because

the model learns from what it's

told.

Low-quality feedback 
(mislabeled validation results) 
corrupts the model rather than 
improving it, which is why data 
quality and validation processes

are critical operational

concerns.

This slide illustrates the iterative nature of ML-driven security systems. Training (Phase 1) uses labeled examples of 
benign data and malware to build a predictive model that learns patterns distinguishing the two classes. Testing 
(Phase 2) applies this model to unknown data, making decisions about whether each sample is benign or malicious. 
Critically, these decisions can be validated—either automatically through sandboxing and behavior monitoring, or by 
human analysts investigating flagged items.

This validation feedback feeds back into training, creating a continuous improvement loop. Correct predictions 
confirm the model's understanding; incorrect predictions (false positives and false negatives) become valuable training 
examples that refine the decision boundary. Over time, this feedback loop reduces false positives by learning which 
benign activities were incorrectly flagged, and reduces false negatives by incorporating missed attacks into the training 
data.

In operational systems, this loop runs continuously: the model makes thousands of predictions per hour, a subset is 
validated (either automatically or by analysts), validation results feed back as new training data, and the model

## Original source — PDF page 91

periodically retrains to incorporate these lessons. This self-improving system gets more accurate over time with operational 
experience, adapting to the specific threat landscape and network environment of each deployment. The key is maintaining 
high-quality feedback—ensuring that validations are accurate—because the model learns from what it's told. Low-quality 
feedback (mislabeled validation results) corrupts the model rather than improving it, which is why data quality and validation 
processes are critical operational concerns.

## Original source — PDF page 92

For students who want to dive deeper into the topics we've covered today, I recommend three key resources. Dr. Iqbal 
H. Sarker's 2024 book "AI-Driven Cybersecurity and Threat Intelligence" from Springer provides comprehensive 
coverage of AI/ML applications across the cybersecurity landscape, with particular strength in explainable AI and real-
world deployment considerations.

Bojan Kolosnjaji and colleagues' "Artificial Intelligence for Cybersecurity" offers excellent technical depth on specific 
algorithms and techniques, with practical exercises and code examples. This is ideal if you want to implement the 
techniques we've discussed. Finally, Stallings and Brown's "Computer Security: Principles and Practice" provides 
essential foundational knowledge in core security principles that contextualize where and why ML techniques are 
valuable—it's important to understand the cybersecurity problems before diving into ML solutions.

I encourage you to explore these resources to deepen your understanding of the material we've covered. Remember 
that cybersecurity and AI are both rapidly evolving fields, so supplementing these texts with current research papers, 
conference presentations, and security blogs will help you stay current with emerging techniques and threats. In next

## Original source — PDF page 93

week's lecture, we'll build on these fundamentals by exploring specific applications in depth, starting with anomaly detection 
and intrusion prevention systems.

## Original source — PDF page 94

[No extractable narration; see source image.]

## Original source — PDF page 95

Tutorial 5 -Intro

ML for 
Cybersecurity –
Spam / Phishing

Demo

https://colab.research.google.com/drive/1g7u9jLJ

JUdc4Kunyr9mpgZrQsGzks2_D?usp=sharing

