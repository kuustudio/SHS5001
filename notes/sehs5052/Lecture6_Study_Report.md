# SEHS5052 Lecture 6 — Deep learning and neural networks

深度学习与神经网络

Source: SEHS5052-Lecture 06 - With Notes.pdf

English narration is extracted page by page. Bilingual notes are study summaries, not a complete literal translation. Source-page snapshots and unverified slide OCR are available on the website.

## PDF 1–2: Deep-learning overview / 深度学习概览

The lecture covers neural foundations, CNNs, LSTMs, autoencoders and training challenges. Use page 2 as the lecture's content guide.

本讲覆盖神经网络基础、CNN、LSTM、自编码器及训练问题。首页图示与目录共同用于定位内容，目录以第2页为准。

## PDF 3–3: From neurons to security / 从神经元到安全任务

The introduction covers neuron mathematics, three architectures, security applications and deployment challenges. Biological neurons are an analogy, not an exact engineering blueprint.

本页介绍四部分：神经元数学基础、三类架构、安全应用及部署挑战。生物神经元是启发类比，人工网络并非生物结构的精确复制。

## PDF 4–5: Perceptron / 感知机

A neuron computes y=f(Wx+b). A single perceptron has limited capacity; multilayer networks need nonlinearities for complex relationships.

输入与权重相乘求和，加偏置后经过激活函数：y=f(Wx+b)。单个感知机表达能力有限，多层网络需非线性才能拟合复杂关系。

## PDF 6–7: MLP / 多层感知机

Inputs pass through hidden transformations to outputs. More layers can increase capacity but also training difficulty and overfitting risk.

输入层接收特征，隐藏层逐层变换，输出层形成预测。增加层数增加表达能力，也可能增加训练困难与过拟合风险。

## PDF 8–9: Why activations matter / 激活函数作用

Composed linear transformations remain linear. Nonlinear activations enable richer boundaries; consider gradients, output range and task.

连续线性变换仍等价于线性变换。非线性激活让网络学习弯曲决策边界，选择时关注梯度、输出范围与任务。

## PDF 10–11: Sigmoid and tanh / Sigmoid与tanh

Sigmoid outputs between 0 and 1; tanh between −1 and 1. Saturation yields small gradients, and probability interpretations need calibration checks.

Sigmoid输出在0与1之间，常用于二分类输出；tanh输出在−1与1之间。饱和区域梯度小，概率解释还需校准检查。

## PDF 12–13: Rectified linear unit / ReLU

ReLU(x)=max(0,x), with unit slope for positive inputs. It helps gradient flow but can produce inactive neurons and does not solve every training problem.

ReLU(x)=max(0,x)，正区间梯度为1，计算简单。它缓解部分梯度问题，但仍可能出现死亡神经元，不能保证训练永无梯度困难。

## PDF 14–15: Loss functions / 损失函数

Loss measures prediction error. Binary and categorical cross-entropy suit different tasks; imbalance may require weighting or sampling changes.

损失度量预测与目标的差异。二分类常用二元交叉熵，多分类可用类别交叉熵；类别不平衡时还需调整权重或采样。

## PDF 16–17: Backpropagation and optimization / 反向传播与优化

Forward computation yields predictions, loss measures error, backpropagation computes gradients, and an optimizer updates weights.

前向产生预测，损失评价误差，反向传播用链式法则计算梯度，优化器再更新权重。计算梯度与更新参数是不同步骤。

## PDF 18–19: Training cycle / 训练循环

An epoch is one pass through the training set. Monitor both training and validation curves; improving training loss alone is insufficient.

一轮epoch表示完整经过训练集一次。观察训练与验证曲线，训练损失下降但验证变差可能意味着过拟合。

## PDF 20–21: Foundations review / 基础复习

Architecture transforms representations, activations add nonlinearity and gradients guide learning. Lower loss does not guarantee global optimality or deployment success.

记住三个要点：网络结构变换表示、激活提供非线性、梯度反馈支持学习。训练降低目标损失，但不保证全局最优或真实环境有效。

## PDF 22–22: Architecture selection / 架构选择入口

Choose models based on input structure, labels and objective. CNNs, LSTMs and autoencoders are this lecture's focus, not an exhaustive menu.

根据输入结构、标签与任务目标选择模型。CNN、LSTM与自编码器是本讲重点，不代表所有任务只能选这三类。

## PDF 23–24: Matching and learning / 从匹配到学习

Signatures and learned representations offer different strengths. Learned patterns may generalize but remain vulnerable to bias, evasion and threshold errors.

固定特征匹配与学习表示具有不同优势。学习方法可能识别未见过的相似模式，但仍会受数据偏差、规避和阈值影响。

## PDF 25–26: CNN convolution / CNN卷积

Learned filters slide across inputs to form feature maps. Shared weights detect local patterns; the representation affects what can be learned.

可学习过滤器在输入上滑动，生成局部特征图；权重共享帮助识别重复模式。适合网格和局部结构，但结果依赖表示方式。

## PDF 27–28: Binary-to-image representation / 二进制转图像

Map bytes 0–255 to grayscale pixels, arrange rows and train a classifier. Layout, resizing and evaluation splits influence results.

把每个字节0–255映射为灰度值，按固定宽度排列成图像，再训练分类器。布局、缩放与数据分割可能影响效果，准确率不能直接照搬。

## PDF 29–30: Recurrent models / RNN与LSTM

Recurrent states carry sequence context. LSTM input, forget and output gates regulate memory; useful context length still depends on training and data.

序列事件通过状态保留上下文。LSTM用输入门、遗忘门、输出门控制记忆，有助于长期依赖，但实际有效跨度仍取决于训练与数据。

## PDF 31–32: Sequence detection / 序列入侵检测

Individually ordinary events can form a suspicious sequence. Validate ordering, windows and thresholds rather than assuming every slow attack is detectable.

单个事件可能正常，连续侦察、异常连接与数据传输可能共同可疑。按时间顺序建模并验证窗口与阈值，避免保证所有慢速攻击都可检出。

## PDF 33–34: Autoencoders / 自编码器

An encoder forms a latent representation and a decoder reconstructs input. Reconstruction error can signal deviation, not automatically maliciousness.

编码器把输入压缩到潜在表示，解码器尝试重建。学习正常数据后可用重建误差作为异常分数，但异常与恶意不能直接等同。

## PDF 35–36: Thresholds and drift / 重建阈值与漂移

Lower thresholds usually flag more inputs; higher ones can miss subtle anomalies. Calibrate independently and monitor changing normal behaviour.

较低阈值通常提高告警数量，较高阈值可能漏掉细微异常。用独立数据校准，并考虑正常业务变化引起的漂移。

## PDF 37–38: Data-to-architecture mapping / 数据与架构对应

Consider CNNs for local structure, LSTMs for sequence context and autoencoders for reconstruction anomalies. Combinations need empirical validation.

局部空间模式可考虑CNN，时间顺序可考虑LSTM，重建异常可考虑自编码器。它们可组合，但选择仍需实验证据。

## PDF 39–40: Hybrid models and explanation / 混合模型与解释

Classification, anomaly discovery and generative methods can cooperate. Explain evidence and preserve review and rollback before consequential responses.

分类、异常发现与生成式数据方法可协作。自动响应前应解释证据、评估置信程度并保留人工复核与回退能力。

## PDF 41–41: Applications / 应用路线

Characterize data, labels and desired output before designing preprocessing, training, evaluation and deployment.

先问数据是什么形式、是否有标签、输出要解决什么问题，再追踪预处理、训练、评估和上线流程。

## PDF 42–43: No unique mapping / 选择不是唯一对应

The spatial, temporal and deviation mapping is a useful guide, not a unique rule. Training objectives determine label needs; LSTMs are not limited to supervised classification.

讲义用空间、时间和偏离作直观对应，但数据结构不会唯一决定架构。标签需求由训练目标决定，LSTM也不只用于监督分类。

## PDF 44–45: Malware visualization / 恶意软件视觉表示

Byte images enable visual models without executing files. This representation does not make malware analysis a solved problem.

读取字节并重排为图像可利用视觉模型技术，不需要执行样本。但视觉分类并未把恶意软件分析变成已经解决的问题。

## PDF 46–47: CNN classification pipeline / CNN分类流程

Convolution, pooling and classifier layers produce predictions. Validate on independent samples and variants, reserving difficult cases for analysts.

图像经过卷积、池化和分类层产生预测。各步骤学习或聚合结构，结果应在独立样本和变种上验证，再交由分析员处理复杂案例。

## PDF 48–49: Temporal context / 时间上下文

Frequency, order and spacing within windows can reveal patterns missing from snapshots. A hidden state is compressed context, not perfect full-history storage.

时间窗口内的频率、顺序和间隔可揭示单个快照看不到的活动。状态是压缩表示，并不是无损保存全部历史。

## PDF 50–51: Gates and bidirectionality / 门控与双向模型

Gates regulate cell state. Bidirectional models use future context, so streaming use must account for window availability and latency.

细胞状态由输入、遗忘和输出门调节。双向模型使用后续上下文，适合完整序列分析；实时场景要考虑等待窗口与延迟。

## PDF 52–53: Normal models and novelty / 正常模型与未知威胁

Normal-only training supports novelty detection, but attacks may reconstruct well and benign changes may score highly. Zero-day coverage is not guaranteed.

只用正常样本训练可支持新颖性检测，但攻击可能被良好重建，正常变化也可能产生高误差。不能承诺覆盖所有零日。

## PDF 54–55: Reconstruction error and response / 重建误差与响应

Compare input with reconstruction and set validated severity thresholds. Combine high-error alerts with other evidence and investigation.

比较原输入与重建结果计算误差，用验证集设置分级阈值。严重告警应结合其他证据和人员调查，不能仅凭误差自动认定攻击。

## PDF 56–57: Architecture review / 架构应用复习

Review local structure, sequence context and reconstruction deviation. Page 57 adds no extractable narration and is retained for traceability.

CNN关注局部结构、LSTM关注序列、自编码器关注重建偏离。第57页没有新增可提取讲稿，保留来源页以便核对。

## PDF 58–58: Training challenges / 训练挑战

Deployment challenges include generalization, class distribution and data efficiency. Diagnose the failure before choosing a remedy.

真实部署要解决泛化、类别分布与数据效率。先识别失败原因，再选择正则化、重采样或迁移学习。

## PDF 59–60: Lab to deployment / 实验室到真实环境

Operational data differs in traffic, prevalence and time. Overfitting, imbalance and scarcity need different remedies; historical accuracy is not a deployment guarantee.

训练环境可能与真实流量、攻击比例和时间分布不同。过拟合、类别不平衡及数据稀缺需要不同处理，历史高准确率不能保证上线效果。

## PDF 61–62: Overfitting / 过拟合

Memorizing training noise produces a generalization gap. Check capacity, data size, leakage and training duration.

模型记住训练噪声，导致训练表现好而验证或测试较差。检查容量、数据量、泄漏和训练时长，再决定如何降低复杂度。

## PDF 63–64: Regularization / 正则化

Dropout reduces co-adaptation, L1/L2 constrain weights and early stopping uses validation performance. Tune these controls; they do not guarantee adversarial robustness.

Dropout训练时随机屏蔽部分单元，减少共同适应；L1/L2约束权重，早停参考验证表现。比例需调参，不能保证对抗鲁棒性。

## PDF 65–66: Accuracy paradox / 准确率陷阱

With 99.9% benign traffic, predicting benign always gives 99.9% accuracy and zero attack recall. Inspect confusion-matrix metrics.

若99.9%流量正常，全部预测正常也有99.9%准确率，但攻击召回率为0。必须查看混淆矩阵、精确率和召回率。

## PDF 67–68: Handling imbalance / 处理类别不平衡

Undersampling, oversampling and cost-sensitive loss address imbalance. Resample training data only and evaluate on a realistic held-out distribution.

欠采样减少多数类，过采样增加少数类，代价敏感损失调整错误权重。只在训练集做重采样，保留真实测试分布验证效果。

## PDF 69–70: Data scarcity / 数据稀缺

Expert verification makes security labels scarce and delayed. Assess whether related-task knowledge can help without assuming fixed sample counts guarantee success.

安全标签往往依赖昂贵的专家确认，形成数据与时间瓶颈。评估迁移学习是否能利用相关任务经验，避免无证据的数据量承诺。

## PDF 71–72: Transfer learning / 迁移学习

Adapt a pretrained model by replacing its head and freezing or fine-tuning layers. Source-target relevance matters and negative transfer is possible.

使用预训练模型，替换目标任务输出层，冻结或微调部分层。源域与目标域相关性很重要，也可能出现负迁移。

## PDF 73–74: Deployment review / 部署检查

Review generalization, class balance and provenance before choosing remedies. Continue monitoring, reevaluation and rollback planning after deployment.

检查泛化差距、类别比例与数据来源，再选择正则化、损失权重与迁移方案。上线后监控、复评和回退是持续工作。

## PDF 75–76: Further reading / 进一步阅读

Build on the architectures and training challenges through explainability, adversarial-learning and deployment research. Original reading details are retained.

先掌握三类架构和训练挑战，再阅读可解释性、对抗学习与实际部署研究。原文保留推荐教材信息。

## PDF 77–77: Closing page / 结束页

This page has no extractable notes.

本页无可提取讲稿。

## PDF 78–78: Black-box tutorial / 黑盒直觉练习

Use the interactive examples to connect inputs, outputs and errors, and explain how thresholds, class balance and distribution change results.

通过互动示例观察模型输入、输出与错误类型。尝试解释为什么改变阈值、类别比例或数据分布会改变结果。

## Original source — PDF page 1

[No extractable narration; see source image.]

## Original source — PDF page 2

Table of 
Contents

• Part A: Neural Network Basics:

• Perceptrons and multilayer networks
• Activation functions (ReLU, sigmoid, tanh)
• Backpropagation and training
• Part B: Advanced Architectures:

• Convolutional Neural Networks (CNN):

image-based threat detection
• Recurrent Neural Networks (RNN/LSTM):

temporal pattern detection
• Autoencoders: unsupervised anomaly

detection
• Part C: DL in Cybersecurity:

• Malware detection using CNN on binary

sequences
• Network traffic anomaly detection using

LSTM
• Autoencoder-based zero-day detection
• Part D: Training Considerations:

• Overfitting and regularization
• Class imbalance (normal vs. attacks)
• Transfer learning

Week 6: Deep Learning & Neural Networks for Security Applications

## Original source — PDF page 3

Welcome to Lecture 6, where we move from the broad landscape of machine learning into its most powerful sub-
field: deep learning and neural networks. If last week gave you the toolkit, this week gives you the precision 
instruments. The slide shows a biological neuron alongside its labelled anatomy — dendrites that receive signals, a 
nucleus that processes them, an axon that transmits the result, and synaptic terminals that pass the signal to the next 
cell. This is not decoration. The entire field of deep learning was reverse-engineered from this single biological 
blueprint.

We will cover four parts today: the mathematical foundations of how a neuron works (Part A), three major deep 
learning architectures (Part B), how each architecture maps onto a specific class of cybersecurity problem (Part C), and 
finally the practical engineering challenges you will encounter when you try to deploy these models in the real world 
(Part D). By the end of the lecture you should be able to look at a threat — a malware binary, a stream of network 
traffic, a zero-day anomaly — and know immediately which architecture to reach for and why.

## Original source — PDF page 4

The perceptron is the simplest possible artificial neuron, and it is the foundation on which every deep learning system 
in existence is built. Its mechanism mirrors the biological neuron almost exactly. It receives a vector of numerical 
inputs 𝑋— for example, the byte counts and flag values in a network packet header. Each input is multiplied by a 
learnable weight 𝑊, capturing how much importance the model assigns to that feature. The results are summed, a 
bias term 𝑏is added to shift the decision boundary, and the total is passed through an activation function 𝑓. The 
output equation is simply 𝑌= 𝑓𝑊𝑋+ 𝑏 .

The key word in that equation is "learnable." The weights start random, and the training process — which we will 
cover in a few slides — adjusts them iteratively until the perceptron outputs the correct answer for the training data. 
In cybersecurity terms, a single perceptron might learn that a high source-port value combined with a large payload 
size tends to indicate a port scan. That is a simple linear boundary. On its own, a single perceptron can only solve 
linearly separable problems, which is why we need to stack them into networks.

Remember this slide whenever you see a complex architecture later today. No matter how many layers or how many

## Original source — PDF page 5

parameters a model has — GPT has hundreds of billions — every single operation inside it reduces to this same equation, 
applied millions of times in sequence and in parallel. Understanding the atom means you can always reason about what the 
network is doing at its most fundamental level.

## Original source — PDF page 6

A single perceptron can draw a straight line between classes. But real-world threats are not separated by straight lines 
— they occupy complex, non-linear regions of a very high-dimensional feature space. The Multilayer Perceptron (MLP) 
solves this by stacking layers of perceptrons so that each layer learns increasingly abstract representations of the 
input. The Input Layer receives raw data — say, a packet header with 40 features. The Hidden Layers transform those 
features progressively: early layers learn simple combinations, middle layers learn combinations of combinations, and 
by the final hidden layer the network has built rich, abstract representations of threat versus benign behaviour. The 
Output Layer then collapses those representaƟons into a single decision: Benign or Malicious.

The word "Deep" in Deep Learning refers specifically to the number of hidden layers. A network with one hidden layer 
is shallow; a network with dozens of hidden layers is deep. Depth is important because each additional layer multiplies 
the expressive power of the model — a network with two layers can approximate any continuous function in theory, 
but in practice deeper networks learn far more efficiently from data. Modern intrusion detection models routinely use 
five to twenty hidden layers.

## Original source — PDF page 7

One important practical note: more layers does not automatically mean better. Very deep networks introduce training 
challenges — the vanishing gradient problem in particular — which is why activation functions and training algorithms matter 
so much. We will come back to those challenges shortly. For now, the key insight is that the hidden layers are where all the 
interesting work happens — they are the "feature engineering" that traditional ML required humans to do manually, now 
learned automatically from data.

## Original source — PDF page 8

If you remove activation functions from a neural network, you are left with a very expensive linear regression, 
regardless of how many layers you add. The reason is that the composition of linear functions is still a linear function. 
Activation functions introduce non-linearity, which is what allows the network to model complex, curved decision 
boundaries rather than just hyperplanes. Think of the activation function as the gate that decides whether a neuron 
"fires" — whether it contributes its signal to the next layer or stays silent.

The slide contrasts a linear activation — which produces a straight-line relationship between input and output — with 
a non-linear activation, which can bend and curve to capture complex patterns. In cybersecurity, this distinction is 
critical. The boundary between legitimate user behaviour and an attacker's behaviour is almost never a straight line. 
An attacker might mimic normal traffic volume but with subtly different timing patterns; the network needs curved 
boundaries to separate those cases.

There are three activation functions you must know for this course, and the next two slides cover them in detail. Each 
has a different shape, a different output range, and is suited to different positions in the network. Choosing the wrong

## Original source — PDF page 9

activation function can cause a network to train very slowly or not at all — a real engineering concern when working with 
deep security models.

## Original source — PDF page 10

Sigmoid maps any input to an output between 0 and 1, which makes it a natural probability estimator. When your 
output neuron uses Sigmoid, you can read its output as a confidence score: 0.97 means the model is 97% confident 
this is a phishing attempt. This property makes Sigmoid almost universally used in the final output neuron of binary 
classifiers — "Is this malware: yes (close to 1) or no (close to 0)?" The Tanh function works similarly but outputs values 
between -1 and +1, centering the output around zero, which often helps with numerical stability in intermediate 
layers.

The critical limitation of both functions is the vanishing gradient problem, marked with the warning symbol on the 
slide. As inputs become very large or very small, both curves flatten out — their derivative approaches zero. During 
backpropagation, this means the gradient signal that needs to flow backwards through the network becomes 
vanishingly small, and weights in early layers receive almost no update signal. In a deep network with many layers, this 
effectively means the early layers stop learning entirely, crippling the training process.

This limitation is why Sigmoid and Tanh are rarely used in hidden layers of modern deep networks — they are largely

## Original source — PDF page 11

reserved for output layers where their probabilistic interpretation is valuable. For hidden layers, the field has converged on a
much simpler function that largely solved the vanishing gradient problem: ReLU, which the next slide covers.

## Original source — PDF page 12

ReLU — the Rectified Linear Unit — is arguably the most important activation function in modern deep learning, and 
its formula is almost embarrassingly simple: 𝑓𝑥= max 0 𝑥 .If the input is positive, pass it through unchanged. If 
the input is negative or zero, output zero. That's the entire function. Yet this simplicity produces an enormously 
important property: for positive inputs, the derivative is always exactly 1, which means the gradient signal flows 
through ReLU neurons without shrinking. This directly solves the vanishing gradient problem that cripples Sigmoid and 
Tanh in deep networks.

The sparse activation property is equally important. Because ReLU outputs zero for any negative input, at any given 
moment only a subset of neurons in a ReLU layer are active. This mirrors biological neural efficiency — the brain 
doesn't fire all neurons simultaneously — and it has two practical benefits: it reduces computational cost, and it 
introduces a natural form of regularization by preventing neurons from co-adapting too closely to specific training 
examples.

In cybersecurity applications, ReLU enables the deep networks required for complex threat detection. A malware

## Original source — PDF page 13

binary classification network might have 15-20 convolutional and dense layers. Without ReLU, training such a deep network 
with Sigmoid or Tanh would be practically impossible because gradients would vanish before reaching the early layers. With 
ReLU, training these very deep networks becomes tractable. Variants like Leaky ReLU and ELU address the "dying ReLU" 
problem — where some neurons get stuck outputting zero permanently — but standard ReLU remains the default choice for 
most deep learning work.

## Original source — PDF page 14

The loss function is the mathematical instrument that tells the network how wrong it is on each training step. It 
computes a single number — the loss — representing the distance between the model's prediction and the true label. 
The entire goal of training is to minimise this number. The loss landscape visualisation on the slide shows this as a 
multidimensional surface with peaks and valleys; training navigates this surface searching for the lowest valley, the 
global minimum.

There are two loss functions you will encounter most often in security applications. Binary Cross-Entropy is used for 
two-class problems — anomaly versus normal, malware versus benign. It penalises the model heavily when it predicts 
high confidence in the wrong class: if the model is 99% confident a real malware sample is benign, Binary Cross-
Entropy assigns a very large penalty, forcing aggressive weight updates. Categorical Cross-Entropy extends this to 
multi-class problems — for instance, classifying an attack as one of several categories: DDoS, Botnet, Ransomware, or 
Spyware. Each class gets its own output neuron, and the loss measures how well the full probability distribution over 
classes matches the true one-hot label.

## Original source — PDF page 15

Choosing the right loss function for your security task is not a minor detail. Using the wrong loss function can cause a model to 
optimise for the wrong objective — for example, a model optimising for overall accuracy on a heavily imbalanced dataset will 
simply predict "benign" for everything and achieve high accuracy while detecting nothing. Later in Part D we will see how 
modifying the loss function — specifically by penalising false negatives more heavily than false positives — is one of the key 
strategies for handling the class imbalance problem endemic to security datasets.

## Original source — PDF page 16

10
Optimization for Deep Learning (Momentum, RMSprop, AdaGrad, Adam) : https://www.youtube.com/watch?v=NE88eqLngkg

Backpropagation is the algorithm that actually trains neural networks, and understanding it conceptually is essential 
even if you never implement it from scratch. The process has four steps. First, the Forward Pass: input data travels 
from the Input Layer through all hidden layers to the Output Layer, producing a prediction. Second, the loss function 
measures the error — the gap between prediction and ground truth. Third, the Backward Pass: using the chain rule of 
calculus, the algorithm computes the gradient of the loss with respect to every weight in the network, flowing the 
error signal backwards from Output to Input. Fourth, an optimisation algorithm — typically SGD (Stochastic Gradient 
Descent) or Adam — uses those gradients to update each weight in the direcƟon that reduces the loss.

Think of it as iterative feedback, much like training a new security analyst. You present them with a threat, they make 
a decision, you tell them what the right answer was and why, and they adjust their judgement accordingly. The 
network does exactly this, but millions of times per second, on millions of training examples. The weights are the 
"judgements" being refined, and the gradients tell the network precisely how to change each weight to do better on 
the next example.

## Original source — PDF page 17

The optimiser choice matters significantly in practice. Adam (Adaptive Moment Estimation) is the default for most deep 
learning work because it adapts the learning rate individually for each weight and converges quickly. SGD with momentum is 
sometimes preferred for its better generalisation properties when training very deep networks. In cybersecurity applications, 
where training datasets can be large and training time is a real operational constraint, choosing an efficient optimiser can be 
the difference between a model ready for deployment in hours versus days.

## Original source — PDF page 18

The training cycle brings everything together into a continuous loop: Forward Pass → Loss Calculation → 
Backpropagation → Weight Update → repeat. The unit of iteration is the epoch — one complete pass through the 
entire training dataset. The slide shows a Loss vs. Epochs graph where the loss drops steeply in the early epochs and 
gradually flattens as the model converges. Convergence is the point at which additional training produces diminishing 
returns — the model has extracted most of the learnable informaƟon from the data.

What you want to see is the training loss and validation loss both decreasing together and then stabilising at similar 
values. If training loss continues to fall while validation loss starts rising, the model is overfitting — memorising the 
training data rather than learning generalisable patterns. This is one of the most common failure modes in security 
model development, and we dedicate all of Part D to handling it. In cybersecurity, where training data might consist of 
samples collected from a specific network environment, overfitting is a particular concern because the deployment 
environment will always differ from the lab.

A steep early drop in the loss curve is actually a positive signal — it means the model is quickly learning to distinguish

## Original source — PDF page 19

the broad structural differences between threats and normal activity. The later, slower improvement phase is where the model 
refines its understanding of edge cases: the borderline traffic that looks almost-but-not-quite malicious, the polymorphic 
malware variant that shares only partial similarity with known families. This refinement phase requires careful monitoring and 
a healthy validation set to ensure the model is genuinely learning rather than memorising.

## Original source — PDF page 20

This summary slide crystallises the three pillars of neural network fundamentals into a simple table. Architecture: 
MLPs stack neurons layer by layer, with each hidden layer learning progressively more abstract representations of 
threat patterns — from raw packet bytes to high-level behavioural signatures. Activation: ReLU is your default choice 
for hidden layers because it solves the vanishing gradient problem and trains efficiently; Sigmoid is your choice at the 
output for binary probability estimation. Learning: Backpropagation minimises the loss function iteratively, 
conƟnuously adapƟng the network's weights to new threat examples and improving its ability to generalise.

The closing line — "Next: Convolutional Neural Networks for Malware Analysis" — is our bridge to Part B. Everything 
we have just covered applies universally to all neural networks. But the MLP we described treats all input features as 
equivalent, ignoring spatial or temporal structure. CNNs, RNNs, and Autoencoders are specialised architectures that 
exploit the specific structure of their input data — images, sequences, and unlabelled distributions respectively — to 
achieve dramatically better performance on their target tasks.

Carry three things into Part B: first, the equation 𝑌= 𝑓𝑊𝑋+ 𝑏 is the universal building block; second, activation

## Original source — PDF page 21

functions are what give networks their non-linear expressive power; and third, backpropagation is the feedback mechanism 
through which all deep learning systems acquire their capabilities. Everything in Part B, C, and D is built on these three 
foundations.

## Original source — PDF page 22

Welcome to Part B. In Part A, we established the mathematical foundation: the perceptron, activation functions, and 
backpropagation. Now we specialise. The central question of this section is: given a particular type of cybersecurity 
data, which neural architecture should you deploy? The answer depends entirely on the structure of the data, and this 
section covers the three most important architectures — CNNs, RNNs/LSTMs, and Autoencoders — which together 
cover the vast majority of deep learning security applicaƟons you will encounter in pracƟce.

## Original source — PDF page 23

Traditional security systems operate on explicit matching — they hold a database of known threat signatures and 
check whether incoming data matches an entry. This is fundamentally reactive: the system can only catch what has 
already been catalogued. The moment an attacker makes any modification — changes a single byte, reorders a 
function, obfuscates a string — the signature no longer matches, and the threat passes through undetected. This is 
why polymorphic and metamorphic malware defeat tradiƟonal anƟvirus so consistently.

Deep learning architectures represent a fundamentally different philosophy: instead of matching, they perceive and 
learn. A CNN doesn't look up a malware hash — it looks at the structure of the binary and recognises patterns of 
obfuscation, encryption, and packing that characterise malicious intent regardless of the specific byte values. An LSTM 
doesn't check whether a traffic sequence matches a known attack signature — it learns what normal traffic rhythm 
looks and flags deviations from that learned baseline. The key word in the slide is the shift from systems 
that MATCH to systems that SEE and UNDERSTAND.

This philosophical shift has profound operational implications. A matching system requires a signature to exist before

## Original source — PDF page 24

it can detect a threat — by definition, it cannot detect zero-day attacks. A perceptual, learning-based system can flag 
suspicious behaviour it has never seen before, simply because that behaviour deviates from what it has learned to recognise
as normal. This is the capability that makes deep learning genuinely transformative for security operations, rather than merely 
an incremental improvement.

## Original source — PDF page 25

Convolutional Neural Networks were originally designed for image recognition, but their core capability — detecting 
local spatial patterns through learnable filters — transfers powerfully to any data that has a grid-like topology. The 
mechanism works as follows: a small filter (for example, a 3×3 matrix of learnable weights) slides across the entire 
input, computing a dot product at each position. Where the filter pattern matches the local input pattern, the 
response is high; where it doesn't match, the response is low. This creates a feature map highlighting where in the 
input the paƩern occurs.

Crucially, CNNs learn hierarchies of patterns. In image recognition, early convolutional layers detect edges and corners, 
middle layers detect shapes and textures, and deep layers detect complex object parts. The same hierarchy applies in 
cybersecurity: early layers in a malware-detecting CNN might detect common byte sequences such as PE header 
structures or encryption constants, middle layers might detect combinations of those sequences indicating packing or 
obfuscation, and deep layers might recognise the overall structural signature of a specific malware family.

The "local patterns" capability is essential because malware authors consistently exploit specific binary structures —

## Original source — PDF page 26

file headers, import tables, encryption routines — that appear in predictable locations within an executable. CNNs are 
architecturally designed to find exactly these kinds of local, spatially-arranged patterns without requiring the analyst to specify 
in advance where to look. The feature extraction is entirely automatic, driven by the training labels.

## Original source — PDF page 27

This slide introduces one of the most elegant ideas in modern malware analysis: converting binary executables into 2D 
grayscale images and then applying image classification techniques. The process is straightforward: take the raw bytes 
of an executable file, interpret each byte value (0–255) as a pixel intensity, and arrange the bytes row by row to form a 
2D image of a fixed width, with height determined by the file size. The result is a grayscale image that visually encodes 
the complete structure of the binary.

Why does this work? Because malware families share code structure. Binaries from the same malware family — say, 
different variants of WannaCry — are built from the same codebase, even if packed or obfuscated differently. When 
visualised as images, samples from the same family exhibit similar visual textures and structural patterns, even when 
their byte-level hashes are completely different. Benign software from different applications shows entirely different 
visual structures. These differences are perceptible to a CNN in the same way that different species of butterfly are 
perceptible to an image classifier.

Research has demonstrated that CNNs trained on malware visualisations can classify malware families with accuracy

## Original source — PDF page 28

exceeding 98% while being robust to packing and obfuscation — techniques specifically designed to defeat signature-based 
detection. The real-world implication is significant: an analyst who previously had to wait for a new hash to be submitted to 
VirusTotal and a human expert to analyse it can now obtain near-instant classification of a new sample purely from its binary 
structure, without any dynamic execution or API call analysis.

## Original source — PDF page 29

Standard feedforward networks, including MLPs and CNNs, suffer from a fundamental limitation for cybersecurity: 
they have no memory. Each input is processed independently, with no awareness of what came before. This is 
catastrophic for any security problem where the context and sequence of events matters — which is most of them. An 
Advanced Persistent Threat doesn't announce itself with a single malicious packet; it unfolds over hours or days as a 
sequence of reconnaissance, lateral movement, privilege escalaƟon, and exﬁltraƟon steps.

Recurrent Neural Networks (RNNs) solve this by introducing a feedback loop: the hidden state from processing 
step 𝑡is passed forward and combined with the input at step 𝑡+ 1. This creates a form of memory — the network's 
current state reflects not just the current input but the history of all previous inputs. However, standard RNNs suffer 
from their own vanishing gradient problem: in long sequences, the gradient signal from early timesteps becomes 
negligible by the time it propagates back through many recurrent steps, causing the network to effectively forget 
events that happened more than a few timesteps ago.

LSTMs (Long Short-Term Memory networks) are specifically engineered to solve this. They introduce three gating

## Original source — PDF page 30

mechanisms: an Input Gate that controls how much new information to incorporate into memory, a Forget Gate that controls 
how much existing memory to discard, and an Output Gate that controls what to expose to the next layer. These gates allow 
the LSTM to maintain relevant context across hundreds or thousands of timesteps — precisely the capability required to 
detect APTs that unfold over extended periods. An LSTM analysing system call sequences can maintain context from a 
suspicious process spawned two hours ago when evaluating a network connection attempt two hours later.

## Original source — PDF page 31

The application of LSTMs to intrusion detection rests on a simple but powerful observation: network traffic, system 
calls, and user activity are all inherently sequential, and the meaning of any individual event depends critically on its 
context within the sequence. A single DNS lookup to an unusual domain might be noise. But a sequence of: 
reconnaissance scan → DNS lookup to unknown domain → outbound connection → large data transfer is a 
recognisable narrative — a potenƟal data exﬁltraƟon incident.

The specific challenge this slide highlights is Advanced Persistent Threats — attacks designed to be slow, patient, and 
stealthy. APT actors deliberately fragment their activities to stay below threshold-based detection limits: no single 
action triggers an alert, but the cumulative pattern is unmistakably malicious. LSTM-based systems analyse the full 
sequence of events and predict the next most likely action based on learned baselines of normal behaviour. Deviations 
from this prediction — a sequence step that doesn't fit the established pattern — trigger an anomaly score, flagging 
the sequence for analyst review.

Practical deployments use LSTM models trained on labelled sequences of network flows — both normal and attack

## Original source — PDF page 32

flows — to learn what legitimate traffic patterns look like over time. The model processes new traffic in real time, maintaining 
a rolling hidden state that captures recent history, and generates an anomaly score for each new packet or flow. When the 
score exceeds a threshold — indicating the current sequence deviates significantly from normal — an alert is raised. This 
temporal awareness is what allows LSTM-based IDS to catch APTs and slow-and-low attacks that completely evade point-in-
time signature matching.

## Original source — PDF page 33

Autoencoders represent the third paradigm: instead of learning to classify known threats (CNNs and LSTMs), they 
learn to model normal data — and detect threats as deviations from that model. The architecture has two 
symmetrical components. The Encoder compresses the input data into a compact representation called the latent 
space or bottleneck, forcing the network to discard low-variance, irrelevant detail and retain only the essential 
structure of the input. The Decoder then attempts to reconstruct the original input from this compressed 
representaƟon.

The training philosophy is the key insight: autoencoders are trained exclusively on benign data. The network learns to 
compress and reconstruct normal traffic, normal file structures, normal user behaviour — whatever "normal" means 
in your specific deployment environment. Because it has never seen attack data, it has no ability to efficiently 
compress and reconstruct malicious inputs. When a malicious input is passed through a trained autoencoder, the 
reconstruction is poor — the decoder cannot accurately recover the original from the latent representation — and this 
poor reconstruction is measured as a high reconstruction error.

## Original source — PDF page 34

This is "digital instinct" because the system doesn't need to know what an attack looks like. It only needs to know what normal 
looks like. Any input that is sufficiently abnormal — whether it's a known attack variant, a zero-day exploit, or a completely 
novel threat — will produce a high reconstruction error and trigger an alert. This is the only deep learning approach that 
provides genuine coverage of unknown unknowns: threats that have never been seen and cannot be anticipated.

## Original source — PDF page 35

The operational use of reconstruction error is straightforward but requires careful calibration. After training the 
autoencoder on clean, benign data, you define a threshold — a reconstruction error value below which inputs are 
considered normal and above which inputs are flagged as anomalous. Setting this threshold involves a genuine trade-
off: a low threshold flags more inputs as anomalous (high recall, but more false positives), while a high threshold 
reduces false posiƟves but misses subtler aƩacks (lower recall).

In practice, the threshold is set using a held-out validation set of known normal traffic. You might set it at the 99th 
percentile of reconstruction errors observed on benign validation data — meaning only the 1% most unusual benign 
samples would be flagged. Then, when you test against labelled attack data, you check whether known attacks 
produce reconstruction errors above this threshold. In well-designed systems, genuine attacks — which have 
structural properties very different from normal traffic — produce reconstruction errors significantly above even the 
99th percentile of benign traffic, giving clean separation.

One important operational consideration: autoencoders must be retrained periodically as the definition of "normal"

## Original source — PDF page 36

evolves. Network behaviour changes as new applications are deployed, user populations shift, and infrastructure is updated. 
An autoencoder trained six months ago might flag legitimate new services as anomalous simply because they weren't part of 
the training distribution. Continuous retraining on recent normal traffic — essentially keeping the model's notion of normal 
current — is essential for maintaining low false positive rates in production.

## Original source — PDF page 37

This matrix is a practical decision tool that should guide your architecture choices in real security engineering work. 
The rule is simple: the nature of the data dictates the architecture. CNN is "the Eye" — it perceives spatial patterns in 
grid-structured data. Use CNN when your data can be represented as a 2D structure: malware binary visualisations, 
network flow feature matrices, packet payload grids. RNN/LSTM is "the Memory" — it remembers temporal context in 
sequential data. Use LSTM when the order of events matters: network traffic time series, system call sequences, user 
acƟvity logs, API call traces.

Autoencoder is "the Instinct" — it knows normal so deeply that it recognises the abnormal without being told what to 
look for. Use Autoencoders when you have abundant unlabelled normal data but few or no labelled attack examples 
— precisely the situation for zero-day detection. The data types also tell the story: CNNs work on spatial/grid data, 
LSTMs on sequential/time-series data, and Autoencoders on unlabelled baselines. When choosing an architecture in 
practice, the first question to ask is always: what is the structure of my input data?

Note that these architectures are not mutually exclusive. Production security systems frequently layer them: an

## Original source — PDF page 38

autoencoder might flag anomalous network flows for further investigation, an LSTM might then analyse the sequence history 
of the flagged connection to assign a threat confidence score, and a CNN might simultaneously analyse any files transferred in 
that connection. This layered approach — combining Sight, Memory, and Instinct — is what the next slide describes as the 
future of hybrid AI defence.

## Original source — PDF page 39

The final slide of Part B describes where the field is heading: towards unified, hybrid AI systems that combine all three 
architectural paradigms within a single coordinated defence platform. Discriminative AI — CNNs, LSTMs, supervised 
classifiers — handles known threats, classifying samples against a trained taxonomy of attack types. Generative AI —
GANs, variational autoencoders — simulates attack scenarios to augment training data and probe model robustness. 
Unsupervised learning — standard autoencoders, clustering algorithms — hunts unknown threats in the spaces where 
supervised models have no visibility.

The integration is referred to as "CyberAI" — an aspirational term for defence systems that move beyond any single 
technique. The practical implication is that when you are designing a security AI system, you should think not about 
"which architecture should I use" but "how do these architectures work together to cover the full threat spectrum." 
Known malware requires supervised classification. Novel malware requires anomaly detection. Persistent, stealthy 
intrusions require temporal analysis. A production system needs all three.

Explainability remains the open challenge highlighted in Part D: a hybrid system making automated blocking decisions

## Original source — PDF page 40

must be able to justify those decisions to human operators. Without explainability, the Human-AI alliance breaks down —
analysts stop trusting the system, either over-relying on it blindly or ignoring it entirely. The architectural sophistication 
covered in this section must always be paired with the interpretability work needed to make these systems trustworthy in 
operational environments.

## Original source — PDF page 41

Welcome to Part C — the applied section. Parts A and B gave you the science; this part gives you the engineering. We 
now take each of the three architectures and trace them through concrete cybersecurity deployment scenarios. The 
slide's three visuals — a pixel grid for CNNs, a waveform for LSTMs, and a compression-reconstruction sphere for 
Autoencoders — are not merely decorative. They encode the fundamental principle of this entire section: the visual 
structure of the data should immediately suggest the appropriate architecture. If your data looks like a grid, think 
CNN. If your data flows over time, think LSTM. If your data has no labels but you need to find deviations, think 
Autoencoder.

## Original source — PDF page 42

This is perhaps the most important design principle in applied deep learning for cybersecurity, and the slide states it 
explicitly. Spatial data — static binary code, visualised executables, packet header grids — maps naturally to CNNs. 
CNNs were invented to process grid-like data, and a malware binary mapped to a 2D pixel grid is exactly 
that. Temporal data — sequential network traffic, time-ordered API calls, user activity streams — maps to LSTMs. The 
ordering of events carries essential information, and LSTMs were designed specifically to exploit that temporal 
ordering. Deviation detection — zero-day attacks, unknown anomalies, novel threat patterns with no available labels 
— maps to Autoencoders. When you have no labelled attack examples to train a classifier, Autoencoders provide the 
only path to automated detecƟon.

This three-way mapping is also a diagnostic tool. When a security ML project is failing — the model isn't learning, or 
generalises poorly — the first question to ask is whether the architecture matches the data structure. Teams that 
apply a feedforward MLP to sequential network data, ignoring temporal ordering, consistently underperform teams 
that use LSTMs, simply because the MLP discards the most informative aspect of the data. Similarly, applying a 
supervised LSTM to a zero-day detection problem fails by definition, because the LSTM requires labelled attack

## Original source — PDF page 43

examples that don't exist.

The practical workflow for any security ML project should therefore start not with model selection but with data 
characterisation: What is the structure of my input data? Does it have spatial organisation? Temporal order? Is it labelled or 
unlabelled? The answers to these questions uniquely determine the appropriate architecture, and the rest of the engineering 
work follows from that choice.

## Original source — PDF page 44

The code snippet on this slide is deliberately included to make the malware-to-image conversion concrete and 
demystifiable. The process is mechanical: read the raw bytes of an executable, interpret each byte value (0–255) as a 
grayscale pixel intensity, arrange them in rows of fixed width, and write the result as a standard image format. The 
resulting file is a genuine image — it can be visualised in any image viewer and passed directly into any CNN 
architecture designed for image classiﬁcaƟon.

The insight behind this approach, pioneered by Nataraj et al. at UC Santa Barbara, is that malware families share 
structural properties at the binary level that manifest as distinctive visual textures when the bytes are visualised this 
way. Ransomware families tend to show high-entropy (random-looking) regions corresponding to their encryption 
routines. Trojan families often show low-entropy header regions followed by high-entropy payload sections. Rootkits 
exhibit different patterns reflecting their focus on stealth and minimal footprint. These visual differences are 
consistent within a family even across variants produced by different obfuscation tools.

The practical advantage is that visualisation converts malware analysis into a solved computer vision problem. The

## Original source — PDF page 45

deep learning community has invested decades of research into image classification — architectures like ResNet, VGG, and 
EfficientNet achieve near-human accuracy on large-scale image datasets. By converting malware to images, the cybersecurity 
field inherits all of this accumulated research directly, without needing to reinvent feature extraction techniques for binary 
analysis. This is also an early example of transfer learning — a concept we return to in Part D.

## Original source — PDF page 46

This slide traces the complete pipeline from malware binary to classification decision. The input is a 256×256 grayscale 
image — a malware binary converted using the process from the previous slide. The first convolutional layer applies a 
bank of learnable filters to this image, producing a set of feature maps that highlight different local patterns —
repeating byte sequences, structural headers, high-entropy blocks. Pooling downsamples these feature maps, 
reducing computation and making the detected patterns progressively more abstract and translation-invariant. A 
second convolutional layer then detects patterns in patterns — combinations of features that characterise specific 
malware behaviours.

After the convolutional and pooling layers, the resulting feature maps are flattened and passed into a Fully Connected 
Layer — a standard MLP — that performs the final classification. The output layer produces probabilities for each 
class: Benign or one of several Malware families. The key insight highlighted on the slide is that this entire pipeline —
from raw bytes to family classification — requires no manual signature creation. The CNN automatically discovers 
which visual patterns are diagnostic for each malware family, driven purely by the training labels.

## Original source — PDF page 47

This automation is the transformative value for security operations. Traditional malware analysis requires a skilled reverse 
engineer to examine each new sample, identify its behaviour through static and dynamic analysis, and write a new detection 
rule or signature. This process takes hours or days per sample. A trained CNN classifies a new binary in milliseconds, with 
accuracy that matches or exceeds expert analysts on known families. The human analyst's time is then freed for the genuinely 
difficult cases: novel families, targeted attacks, and evasion technique analysis.

## Original source — PDF page 48

The contrast on this slide — Space (static snapshot) versus Time (dynamic sequence) — articulates exactly why CNNs 
and MLPs are inadequate for network intrusion detection. If you capture a single network packet in isolation, you see: 
a source IP, a destination IP, a port number, a protocol, a payload. Nothing in that single packet unambiguously 
identifies a DDoS attack or a port scan. The attack only becomes visible when you observe the sequence: the same 
source IP sending 10,000 SYN packets in 30 seconds, or a methodical sequence of connection attempts stepping 
through port numbers 1 through 65535.

Static analysis — treating each packet as an independent data point — misses the temporal context entirely. It's like 
trying to understand a conversation by reading only every tenth word in isolation. The meaning is in the sequence, the 
transitions, the rhythm. A DDoS attack is characterised by an abnormal burst pattern across a short time window. An 
APT's lateral movement is characterised by a slow, methodical sequence of authentication attempts and resource 
accesses spread over hours. Both are invisible to snapshot-based analysis.

LSTMs solve this by reading network traffic as a narrative. The model processes one packet at a time, maintaining a

## Original source — PDF page 49

hidden state that carries forward the context of all previous packets. By the time it processes packet 𝑡௡ ,its hidden state 
encodes the full history of the traffic flow — who communicated with whom, in what order, at what intervals, with what 
payloads. Deviations from the expected narrative — a burst of packets where smooth flow was expected, or an unusual 
destination following a pattern of reconnaissance — produce anomaly scores that trigger alerts. The green checkmark on the 
slide represents exactly this capability: detecting DDoS burst patterns by recognising the transition from normal baseline traffic 
to the anomalous surge at 𝑡ଷ through 𝑡ହ.

## Original source — PDF page 50

The LSTM cell diagram on this slide is worth spending time on because the three gates are the actual mechanism of 
selective memory — the reason LSTMs can detect APTs that unfold over hours. The Cell State is the long-term 
memory, a vector that persists across many timesteps. Unlike the hidden state of a standard RNN, which is overwritten 
at each step, the cell state is modified gently and deliberately by the gates. Input Gate: at each new packet, this gate 
decides how much of the new information to write into the cell state. If the new packet looks like normal traffic, the 
input gate opens parƟally; if it looks highly unusual, the input gate opens fully to encode that anomaly into memory.

The Forget Gate is equally important: it decides how much of the current cell state to retain versus discard. If the 
traffic stream has returned to normal after a suspicious burst, the forget gate helps the model let go of the now-stale 
anomaly representation. Without this mechanism, the memory would fill up with stale information from long ago, 
degrading the model's sensitivity to current events. The Output Gate controls what portion of the current cell state is 
exposed to the next layer — essentially, what aspect of the accumulated memory is relevant for making the current 
prediction.

## Original source — PDF page 51

Bidirectional LSTMs, referenced on the slide, process the sequence both forward (past to present) and backward (present to 
past), allowing the model to use both historical context and near-future context when evaluating any given timestep. This is 
particularly valuable for offline forensic analysis of captured traffic, where the full sequence is available. For real-time 
detection, unidirectional forward-processing LSTMs are used because future traffic hasn't arrived yet. Both modes are 
deployed in practice — real-time for operational alerts, bidirectional for post-incident forensic analysis.

## Original source — PDF page 52

Zero-day attacks are by definition outside the training distribution of any supervised classifier — there are no labelled 
examples, no known signatures, and no prior incidents to learn from. This slide presents the autoencoder approach as 
the solution: train exclusively on normal traffic, learn the normal manifold precisely, and flag anything that doesn't 
conform to that manifold as a potential threat. The key phrase on the slide is "learn the normal so perfectly that any 
deviation — even one never seen before — triggers an alert".

The visualisation shows normal traffic as a well-connected hexagonal network of nodes — structured, predictable, 
internally consistent. The zero-day attack appears as orange nodes (A, B, C) that break the "Mold Boundary" — they 
connect in ways and exhibit properties that fall outside the region the autoencoder learned to reconstruct accurately. 
The model doesn't know what attack type A, B, or C represents. It doesn't need to. It simply measures the distance 
between the input and the autoencoder's reconstruction, and nodes that are too far from the learned normal 
manifold are flagged with a "Deviation Alert.“

This approach is sometimes called "one-class classification" or "novelty detection" in the academic literature. It is

## Original source — PDF page 53

particularly powerful in environments where the threat landscape is rapidly evolving — where new malware variants, new 
exploit techniques, and new attack infrastructure emerge faster than any labelling team can keep up with. The autoencoder's 
detection capability doesn't degrade as new attack types emerge; if anything, sufficiently novel attacks produce even higher 
reconstruction errors than known variants, because they are even further from the learned normal distribution.

## Original source — PDF page 54

The reconstruction error diagram on this slide makes the detection mechanism concrete. A malicious packet —
represented as the distorted orange envelope — is fed into the trained autoencoder's Encoder, which compresses it 
into the Latent Space. The Decoder then attempts to reconstruct a clean packet from this compressed representation. 
Because the autoencoder was trained only on benign packets, its decoder is optimised to reconstruct benign 
structure. When given a malicious packet, the best reconstruction it can produce is a benign-looking packet — the 
closest normal representation to the malicious input. The result: Input ≠ Output, and the difference (measured as 
Mean Squared Error or similar) is flagged as HIGH ERROR → ANOMALY DETECTED.

The latent space dimension is a critical design parameter. A very small latent space (aggressive compression) forces 
the autoencoder to discard even moderate detail, potentially losing the subtle structural differences between normal 
and slightly anomalous traffic. A very large latent space (mild compression) might be capable of reconstructing even 
malicious inputs accurately, because it retains enough capacity to represent any input. The right latent dimensionality 
is determined empirically: typically starting with a bottleneck that retains 10-20% of the input dimensions, then tuning 
based on validation reconstruction error distributions for normal versus attack traffic.

## Original source — PDF page 55

In deployment, the reconstruction error is monitored in real time. You maintain a rolling distribution of recent reconstruction 
errors for all observed traffic. Sudden spikes — individual packets or flows with reconstruction errors far above the recent 
baseline — trigger tiered alerts. Low-severity deviations might be logged for later review; high-severity deviations —
reconstruction errors in the top 0.01% of the observed distribution — trigger immediate analyst escalation. This tiered 
response system allows security teams to allocate investigation resources proportional to the severity of the anomaly signal.

## Original source — PDF page 56

This summary table is the reference you should keep in mind for every deep learning security 
project. CNN processes Spatial data: use it for malware binary analysis, where the 2D visualisation of binary structure 
allows visual pattern recognition that catches obfuscated variants invisible to signature 
matching. LSTM processes Temporal data: use it for network traffic anomaly detection, where the sequence and 
timing of packets carries the narrative of an attack that no single-packet snapshot can 
reveal. Autoencoder detects Deviation: use it for zero-day and unknown threat detection, where the absence of 
labels makes supervised approaches impossible and only a well-trained model of "normal" can idenƟfy the abnormal.

The closing statement is the practical engineering takeaway: "Effective cybersecurity requires a hybrid approach, 
layering these architectures to cover the full threat spectrum." No single architecture is sufficient. CNN cannot catch 
slow-moving APTs because it has no memory. LSTM cannot catch zero-day malware in binaries because it doesn't 
understand spatial structure. Autoencoders, by design, cannot classify known attack types because they were never 
trained on attack labels. Each architecture covers the blind spots of the others, and a production-grade security AI 
platform should deploy all three in a coordinated pipeline.

## Original source — PDF page 57

[No extractable narration; see source image.]

## Original source — PDF page 58

Title: Training Considerations
Welcome to Part D — the engineering realities section. Parts A through C covered the science and architecture of 
deep learning for cybersecurity. This section covers what happens when you try to actually deploy these models in 
production — the gap between the elegant theory of the previous slides and the messy reality of operational security 
data. The slide's three keywords — Generalization, Distribution, and Efficiency — define the three fundamental 
challenges: building models that work on data they've never seen, handling the severely skewed class distributions of 
real security datasets, and achieving this with the limited labelled data available.

## Original source — PDF page 59

The contrast between "The Lab" and "The Wild" on this slide captures a challenge that causes more real-world deep 
learning failures than any algorithm limitation. In the lab, datasets are curated: classes are roughly balanced, data is 
relatively clean, and samples represent a well-defined distribution. The KDD Cup 1999 dataset — still widely used in 
academic IDS research — has these characteristics, which is why models trained and evaluated on it routinely report 
99%+ accuracy. In the real world, none of these condiƟons hold.

Real security data is overwhelmingly normal. In a typical enterprise network, legitimate traffic might constitute 99.9% 
of all flows. Attack samples are rare, often collected only retrospectively after an incident, and frequently mislabelled
because the initial triage itself was uncertain. The data is noisy — benign traffic contains legitimate anomalies 
(software updates, backups, VPN connections) that superficially resemble attack patterns. And hidden threats —
attacks that haven't yet been detected — are mixed into what is labelled as "normal" data, invisibly corrupting the 
training set.

The three failure modes on the slide correspond directly to the three solutions in Parts D's remaining slides.

## Original source — PDF page 60

Overfitting — the Variance Trap — is addressed by regularisation and dropout. Class Imbalance — the Needle in the Haystack 
— is addressed by resampling and cost-sensitive loss functions. Data Scarcity — the Cold Start — is addressed by transfer 
learning. Understanding which failure mode you are facing is the essential first step in any real-world deployment, because the 
solutions are different for each problem.

## Original source — PDF page 61

Overfitting is defined precisely on the slide: the model memorises training noise instead of learning underlying 
patterns. The diagnostic symptom — 99% training accuracy but 60% test accuracy — represents a model that has 
effectively become a lookup table for the training set. It can reproduce training labels perfectly but has learned 
nothing generalisable about the diﬀerences between aƩack and normal traﬃc.

The cybersecurity manifestation of overfitting is particularly consequential. A model that memorises specific malware 
hashes from the training set will fail against any variant with even a single modified byte — polymorphic malware 
generates new variants automatically for every infection specifically to exploit this. A model that memorises specific 
attack IP addresses from the training set will fail the moment an attacker changes infrastructure, which skilled threat 
actors do routinely. The underlying patterns — the API call sequences, the network flow characteristics, the binary 
code structure — remain consistent across variants, but an overfit model ignores them in favour of the specific 
memorised details.

The slide's visualisation of a high-degree polynomial fitted through noisy data points is the classic illustration of

## Original source — PDF page 62

overfitting. The degree-10 polynomial passes through every training point perfectly but oscillates wildly between them — a 
model that "knows" the training data too well while knowing nothing about the true underlying function. In neural network 
terms, this occurs when the model has too much capacity relative to the training data size, or when training continues too long 
beyond the point of generalisation.

## Original source — PDF page 63

Dropout is the simplest and most effective regularisation technique for deep neural networks, and the diagram on the 
slide illustrates it perfectly: during each training step, a random subset of neurons is "switched off" — their outputs 
are set to zero and they contribute nothing to the forward pass or backward pass for that iteration. Typically, 20-50% 
of neurons are dropped per layer per training step.

The mechanism for preventing overfitting is elegantly described as "forcing resilience." Because any neuron might be 
absent on any given training step, the network cannot rely on specific neurons to detect specific patterns. It cannot 
develop "star player" neurons that fire only for particular training examples. Instead, every neuron must contribute 
robustly to the general pattern, because its co-dependent neurons might not be present. This forces the network to 
learn redundant, distributed representations — the same feature recognised by multiple neurons in multiple ways —
which is exactly what makes for robust generalisation to unseen data.

In the security context, dropout-regularised models are more robust to adversarial perturbations: small modifications 
to malware or traffic designed to evade detection. Because the model doesn't rely on any single pattern, removing or

## Original source — PDF page 64

perturbing that pattern doesn't flip the classification. Additional regularisation techniques worth noting include L1/L2 weight 
regularisation, which penalise large weight values and prevent the network from concentrating its pattern-recognition 
capability in a few dominant connections, and early stopping, which halts training when validation loss stops improving, 
preventing the model from continuing to overfit the training data.

## Original source — PDF page 65

The Accuracy Paradox on this slide is one of the most important — and most frequently overlooked — issues in 
security ML deployment. The scenario is straightforward: if 99.9% of network traffic is benign, a model that classifies 
everything as benign achieves 99.9% accuracy. By any naive metric, this is an excellent model. In practice, it is 
completely useless — a model with a 0% attack detection rate provides no security value whatsoever, regardless of its 
accuracy score.

Class imbalance is not a minor statistical inconvenience; it is a fundamental challenge that standard deep learning 
training procedures cannot handle without modification. The gradient updates during training are implicitly weighted 
by class frequency: rare attack samples contribute proportionally tiny gradient updates compared to the abundant 
benign samples. The network converges to a solution that is excellent at recognising benign traffic — which is most of 
what it sees — and poor at recognising attacks — which are rare training examples. The result is exactly the 99.9% 
accurate, 0% useful model described on the slide.

The severity of this imbalance varies by security domain but is uniformly severe. Network intrusion datasets might

## Original source — PDF page 66

have 1 attack sample for every 10,000 benign flows. Credit card fraud detection datasets might have 1 fraudulent transaction 
per 100,000 legitimate ones. Endpoint malware datasets might have 1 malicious file per 10,000 benign applications. In every 
case, naive training without imbalance correction produces models biased almost entirely toward predicting the majority 
class.

## Original source — PDF page 67

(Synthetic Minority 
Oversampling Technique)

e.g., “Missing a real attack is five times — or fifty

times — worse than raising a false alarm."

The slide presents two complementary approaches to the imbalance problem. Data-Level solutions manipulate the 
training dataset before training begins. Undersampling reduces the majority class by randomly removing benign 
samples until the classes are more balanced — simple but wasteful of information. Oversampling increases the 
minority class by generating synthetic attack samples, either by duplicating existing samples with small perturbations 
or using sophisticated techniques like SMOTE (Synthetic Minority Oversampling Technique) or GANs (which generate 
enƟrely new syntheƟc aƩack samples with the full staƟsƟcal properƟes of real aƩacks).

Algorithm-Level solutions modify the training process itself rather than the data. Cost-sensitive loss functions assign 
higher penalties to misclassifying the minority class — in the security context, Penalty(False Negative) >> Penalty(False 
Positive). Where standard Binary Cross-Entropy treats every misclassification equally, cost-sensitive loss tells the 
model: "Missing a real attack is five times — or fifty times — worse than raising a false alarm." This directly counters 
the gradient imbalance by forcing the model to allocate disproportionate learning capacity to correctly classifying the 
rare attack examples.

## Original source — PDF page 68

In practice, both approaches are often combined. A security team might use SMOTE to generate synthetic attack samples, 
bringing the dataset closer to balance, and then train with a cost-sensitive loss that still penalises false negatives more heavily. 
The right balance depends on the specific security context and risk tolerance: in an environment where false positives cause 
significant operational disruption, the penalty ratio might be 5:1; in an environment protecting critical infrastructure where 
missing an attack is catastrophic, the ratio might be 100:1.

## Original source — PDF page 69

Deep learning models have a well-known data hunger. A ResNet-50 trained on ImageNet uses 1.2 million labelled 
images. A GPT-class language model trains on effectively the entire internet. These massive datasets are available 
because labelling natural images and text is cheap and scalable — the labels are often inherent in the data structure. 
In cybersecurity, labelling is neither cheap nor scalable.

Every labelled attack sample requires a human expert — a malware analyst, a network security engineer, a forensic 
investigator — to examine the sample, understand its behaviour, verify its classification, and document the label. This 
process takes hours per sample for complex threats. For emerging attack types — new malware families, novel APT 
techniques, zero-day exploits — the labelled samples may not exist at all until after the first successful attack has been 
investigated and documented, by definition too late to train a preventive model.

The Cold Start problem is therefore not just about quantity of data but about timing: the most valuable labelled data 
— samples of the newest, most dangerous threats — is the most scarce because it requires a security incident to have 
already occurred and been fully investigated. This creates a structural lag between when threats emerge and when

## Original source — PDF page 70

models can be trained to detect them. Transfer learning, covered in the next slide, is the primary engineering response to this 
structural constraint.

## Original source — PDF page 71

Transfer learning is the process of taking a model pre-trained on a large, related dataset and adapting it to a specific 
target task with limited data. The process on the slide has three steps. First, pre-train on a massive generic dataset —
for example, a CNN pre-trained on ImageNet for general image recognition, or a malware classifier pre-trained on a 
large database of general malware samples from public repositories like VirusTotal. Second, freeze the feature 
extraction layers — the early and middle convolutional or recurrent layers that have learned general low-level and 
mid-level patterns. Third, fine-tune only the final classification layers using your small, task-speciﬁc security dataset.

The intuition is that low-level patterns transfer across related tasks. A CNN pre-trained on general images has learned 
to detect edges, textures, and structural patterns — capabilities that transfer directly to malware visualisation analysis. 
A malware classifier pre-trained on general malware families has learned to detect obfuscation patterns, encryption 
signatures, and packing indicators — capabilities that transfer to the specific APT malware you're trying to classify with 
only 50 labelled samples. You don't need 50,000 labelled APT samples to train an effective APT detector; you need 
50,000 samples of related data and 50 samples of APT-specific data to fine-tune the final layers.

## Original source — PDF page 72

This is the direct solution to the Cold Start problem. When a new threat emerges and you have only a handful of confirmed 
samples, you don't train from scratch — you take your best pre-trained security model, freeze its feature extraction layers, and 
fine-tune the classification head on the few available samples. The result is a high-quality detector built in hours rather than
months, without needing to wait for enough samples to train a model from scratch. Transfer learning is now considered 
essential practice for any production security ML deployment.

## Original source — PDF page 73

This final checklist consolidates the three engineering challenges and their solutions into an actionable decision 
framework. Fight Overfitting → Use Regularisation (Dropout): whenever your training accuracy significantly exceeds 
your validation accuracy, apply dropout to the hidden layers and monitor whether the gap closes. Standard dropout 
rates are 20-50%; start at 30% and tune from there. Manage Imbalance → Use Resampling or Cost-Sensitive Loss: 
before any security training run, assess the class distribution of your dataset. If the attack-to-benign ratio is more than 
1:10, apply SMOTE oversampling and/or cost-sensitive loss weighting. Never evaluate model performance using 
accuracy alone on imbalanced data — use F1-score, precision-recall curves, or AUC-ROC.

Leverage Transfer Learning → Don't train from scratch: virtually every practical security ML project should start with a 
pre-trained model rather than random initialisation. For malware visualisation, start with ImageNet-pretrained CNNs. 
For NLP-based threat intelligence, start with BERT or similar language models pre-trained on security corpora. For 
network traffic analysis, use models pre-trained on large public IDS datasets such as CICIDS or NSL-KDD. Fine-tuning a 
pre-trained model consistently outperforms training from scratch with limited data, and it dramatically reduces the 
computational resources required for model development.

## Original source — PDF page 74

The transformation described at the bottom — "Fragile Lab Model → Robust Security System" — is not automatic. It requires 
deliberate application of all three techniques, continuous monitoring in production, and regular retraining as the threat 
landscape evolves. A model that is robust today may become fragile in six months as attackers adapt to it, as normal traffic 
patterns shift with new deployments, and as the class distribution of threats changes with new campaign activity. The work 
described in this slide is not a one-time deployment exercise; it is an ongoing operational discipline.

## Original source — PDF page 75

For students who want to deepen their understanding beyond today's lecture, three references are provided. 
Sarker's AI-Driven Cybersecurity and Threat Intelligence (Chapters 3, 4, and 6) provides excellent applied coverage of 
neural network architectures in security contexts, with case studies grounded in real deployment scenarios. Kolosnjaji
et al.'s Artificial Intelligence for Cybersecurity (Chapters 5, 9, 15, and 17) goes into greater technical depth on specific 
architectures and includes worked examples and code.

Stallings and Brown's Computer Security: Principles and Practice provides the foundational security context that makes 
all of the deep learning work meaningful — you need to understand what an intrusion detection system is designed to 
do, what a malware sample consists of, and how APT campaigns unfold before you can meaningfully evaluate whether 
a deep learning solution is addressing the right problem.

My recommendation is to read Sarker's book alongside this lecture's slides, following up the architectural descriptions 
in Parts B and C with the operational deployment discussions in his chapters on intrusion detection and malware 
analysis. For those interested in the research frontier, the academic literature on adversarial deep learning for

## Original source — PDF page 76

cybersecurity — attacks on ML models and defences against those attacks — is where the most active and consequential work 
is currently happening, and it builds directly on every concept covered in today's lecture.

## Original source — PDF page 77

[No extractable narration; see source image.]

## Original source — PDF page 78

Tutorial 6 - Deep 
Learning Intuition

for Security 
(Black-Box View)

https://colab.research.google.com/drive/1Xu2kVp

_IhEFtFcVj6yxX6XAfxnlGPKZm?usp=sharing

