# SEHS5052 Lecture 2 — Cryptography, threats and risk

密码学、威胁与风险

Source: SEHS5052-Lecture 02 - With Notes.pdf

English narration is extracted page by page. Bilingual notes are study summaries, not a complete literal translation. Source-page snapshots and unverified slide OCR are available on the website.

## PDF 1–1: Overview / 课程总览

The overview connects cryptography, threats and risk analysis. Consult the source image for diagram details.

概览图串联密码学、威胁环境与风险分析；图表细节可查看原页。

## PDF 2–2: Lecture roadmap / 本讲路线

Start with cryptographic tools, relate them to security goals, then study threats, attack trees and risk prioritization.

从密码工具出发，理解它们保护哪些安全目标，再学习攻击类别、攻击树和风险排序。

## PDF 3–4: Security ecosystem / 安全生态

Threat agents exploit vulnerabilities in valuable assets. Countermeasures reduce likelihood or impact. Distinguish threats, weaknesses and resulting risk.

资产具有价值，威胁利用漏洞产生损失风险；控制措施减少威胁成功的机会或后果。不要混淆威胁、漏洞与风险。

## PDF 5–6: Symmetric encryption / 对称加密

Both parties use a shared secret key. AES efficiently protects bulk data, while secure key distribution and storage remain essential.

发送方与接收方使用同一秘密密钥完成加密和解密。AES适合大量数据，主要难点是安全分发与保存密钥。

## PDF 7–8: Block and stream ciphers / 分组与流密码

Block ciphers process fixed-size blocks; stream ciphers combine data with a keystream. AES and ChaCha20 illustrate the distinction; correct use matters.

分组密码处理固定长度数据块；流密码生成密钥流与数据结合。AES和ChaCha20是例子，实际安全还依赖正确模式与随机数管理。

## PDF 9–10: Key distribution / 密钥分发

Sending a secret key openly exposes it. Secure communication needs a way to establish shared secrets across an untrusted network.

在不可信网络直接发送秘密密钥会被截获。需要安全建立共享秘密，不能把密钥保护问题当作已解决。

## PDF 11–12: Public-key cryptography / 公钥密码

Public keys can be shared; private keys remain secret. Public-key techniques support encryption, signatures or agreement, with algorithm-specific roles and higher cost.

公钥可以公开，私钥必须保密。公钥技术支持加密、签名或密钥协商，但具体算法用途不同，运算通常比对称算法昂贵。

## PDF 13–13: Optional RSA video / RSA选看视频

The optional video explores RSA mathematics. Keep the public/private-key distinction central to revision.

数学示例用于进一步理解RSA，不必把选看视频当作额外必考范围。重点仍是公钥与私钥的用途。

## PDF 14–15: Hybrid cryptography / 混合密码

Hybrid schemes establish or protect session keys using public-key mechanisms, then use symmetric encryption for efficient bulk protection.

混合方案用公钥机制建立或保护会话密钥，再用对称算法处理大量数据，结合密钥建立能力与处理效率。

## PDF 16–17: Hash functions / 哈希

Hashing maps data to a fixed-length digest. Comparing a trusted digest helps check integrity; a plain hash alone does not authenticate the sender.

哈希把任意长度输入映射到固定长度摘要。输入变化通常使摘要明显改变；比较可信摘要可检查文件完整性，但摘要本身不证明发送者身份。

## PDF 18–19: MAC / 消息认证码

A MAC uses a message and shared key to verify integrity and origin from a key holder. Shared ownership prevents third-party proof of which holder generated it.

MAC使用消息和共享秘密密钥生成验证码，接收方重新计算并比较，以检查完整性与来自持钥方的真实性。双方都持钥，不能据此独立证明是哪一方生成。

## PDF 20–21: Digital signatures / 数字签名

Sign with a private key and verify with its public key. Signatures support integrity, origin authentication and non-repudiation evidence, not confidentiality by themselves.

私钥用于签名、公钥用于验证。签名支持完整性、来源认证及不可否认性相关证据，但不会自动隐藏消息内容。

## PDF 22–23: Key identity / 公钥身份问题

Possessing a public key does not establish its owner. An intermediary could substitute keys; trusted identity-to-key binding is needed.

拿到公钥不代表知道它属于谁。中间人可能替换密钥，因此需要可信机制把身份与公钥绑定。

## PDF 24–25: Certificates / 证书

An X.509 certificate binds a subject to a public key and includes issuer signatures and validity information. Validate trust, identity and validity.

X.509证书包含主体、公钥、签发者签名及有效期等字段。验证证书时既要检查信任链，也要核对目标身份与有效性。

## PDF 26–27: PKI and revocation / PKI与撤销

PKI links roots, intermediates and end entities. CRLs and OCSP distribute revocation status after compromise; validation policy affects protection.

信任链连接根CA、中间CA和实体证书。私钥泄露后可撤销证书，CRL与OCSP用于传播状态；检查策略也影响实际效果。

## PDF 28–29: Combining mechanisms / 组合安全机制

Identity trust, key establishment, encryption and integrity serve different purposes. Understand the roles rather than assuming every HTTPS version uses one identical procedure.

身份信任、密钥建立、数据加密与完整性保护承担不同职责。理解各层目的，比把某一个具体握手流程当作所有HTTPS版本都相同更重要。

## PDF 30–31: Quantum threat / 量子威胁

The lecture discusses quantum risks to public-key systems. Focus on migration and long-lived data protection; consult the correction note on predictions and AES-512.

讲义讨论量子计算对公钥算法的潜在影响。复习重点是密码迁移与长期数据保护，讲义中的时间预测与AES-512说法需参照校核说明。

## PDF 32–35: Threat-analysis roadmap / 威胁分析路线

Cryptography does not stop every threat. Map assets, examine malware, denial of service, injection and AI-enabled threats, then prioritize defences systematically.

密码学不能防住所有威胁。先识别数字生态与资产，再分析恶意软件、拒绝服务、注入和AI相关攻击，最后以模型安排防御。

## PDF 36–37: Assets and protection / 资产与防护

Match controls to hardware, software, data and networks. Physical security, encryption, access control and recovery complement one another.

硬件、软件、数据与网络需要不同控制。按损失后果与暴露程度组合物理保护、加密、访问控制与备份，不能只因机房上锁就忽略数据加密。

## PDF 38–39: Cloud and IoT / 云与物联网

Cloud security divides responsibilities between provider and customer. IoT expands device and supply-chain exposure; manage identity, configuration, updates and monitoring.

云的共享责任要求区分供应商与客户的职责；物联网扩大设备与供应链攻击面。关注配置、身份、固件更新和持续监控。

## PDF 40–41: Threat actors / 威胁行为者

Motivations include challenge, activism, profit and strategic goals. Use your organization's threat context to prioritize hardening, detection, recovery and intelligence.

攻击者的动机可能是挑战、政治、经济利益或战略目标。根据自身业务判断更相关的对手，再选择加固、检测、恢复与情报投入。

## PDF 42–43: Malware propagation / 恶意软件传播

Viruses need host files, worms self-propagate, trojans disguise their purpose, and drive-by downloads exploit browsing exposure. Match defences to propagation.

病毒依附宿主文件；蠕虫可自行传播；木马伪装成有用程序；路过式下载利用浏览器环境。区分传播机制才能选择补丁与用户教育等控制。

## PDF 44–44: Supporting visual / 补充图示

No notes are extractable here. The source image is retained for the malware-related visual; no missing narration is invented.

本页无可提取讲稿；保留原页供复核恶意软件相关图示，不凭空补写教师讲稿。

## PDF 45–46: Malware payloads / 恶意载荷

Payload describes the malicious action: ransomware, logic bombs, stealth, theft or botnet control. Payload and propagation are separate classification dimensions.

载荷描述感染后做什么：勒索加密、逻辑炸弹、隐藏控制、窃密或加入僵尸网络。传播方式与载荷是两个独立分类维度。

## PDF 47–48: Denial of service / DoS与DDoS

DoS exhausts bandwidth or system resources. DDoS distributes traffic across sources, requiring more than one IP block and often upstream mitigation.

攻击通过耗尽带宽、连接、CPU或内存损害可用性。DDoS由多个来源协同，单个IP封禁通常不足；恢复能力与上游防护都重要。

## PDF 49–49: Supporting visual / 补充图示

This page has no extractable narration; consult its visual alongside the denial-of-service discussion.

本页没有可提取讲稿，可结合前后的拒绝服务内容查看原图。

## PDF 50–51: Amplification and mitigation / 反射放大与缓解

Reflection and amplification redirect larger responses toward a victim. Combine upstream filtering, mitigation services, capacity and monitoring, and reduce vulnerable devices.

反射放大把响应流量送往受害目标，放大资源压力。防御需上游过滤、缓解服务、容量与监控配合，并减少被利用的设备。

## PDF 52–53: Injection / 注入攻击

Injection occurs when untrusted input becomes executable instructions. Parameterized SQL separates values from code; other interpreters require context-specific controls.

不可信输入被解释为命令会改变程序逻辑。SQL参数化查询将数据与代码分开；不同解释器仍需适合其上下文的验证与安全接口。

## PDF 54–54: Supporting visual / 补充图示

No narration is extractable. Use the source visual in the transition from injection to AI-enabled threats.

本页没有可提取讲稿；请查看原图，并联系前面的注入攻击与后面的AI威胁。

## PDF 55–56: AI as attack and defence / AI的双重作用

AI can scale phishing, impersonation and malware variation, while also supporting anomaly detection and alert analysis. Evaluate both its strengths and limits.

AI可提高钓鱼、冒充与恶意变种生成的规模，也能用于异常检测和告警分析。理解能力和限制，不能把AI视为万能防线。

## PDF 57–58: Mapping threats to CIA / 把威胁映射到CIA

Eavesdropping chiefly harms confidentiality, tampering integrity and denial of service availability. Real incidents can affect several goals at once.

窃听主要损害保密性，篡改主要损害完整性，拒绝服务主要损害可用性。实际攻击可能同时影响多项目标。

## PDF 59–60: Layered attack surfaces / 多层攻击面

People, networks, software and data all create exposure. Combine MFA, segmentation, secure development and encryption rather than trusting the perimeter alone.

人、网络、软件与核心数据都可能成为入口。组合MFA、分段、安全开发与加密，不把全部信任放在外围防火墙。

## PDF 61–62: AND and OR trees / AND与OR攻击树

OR nodes require any one child path; AND nodes require all conditions. Use trees to examine routes to an attacker goal and identify control points.

OR节点表示任一路径足够；AND节点表示所有子条件都必须满足。用攻击树检查可达目标的路径并定位有效控制点。

## PDF 63–64: Risk prioritization / 风险排序

Risk is often simplified as likelihood times impact. Document assumptions and compare control cost with reduction; scores support judgement rather than guarantee certainty.

风险常以可能性乘影响作简化表达。先说明估计依据，再比较控制成本与风险降低；评分帮助讨论，不能把主观估计变成确定事实。

## PDF 65–66: Lecture 2 review / 第二讲复习

Link cryptographic protection, threat behaviour, attack paths and risk-based decisions. Match controls to the problem they actually address.

密码学是盾，威胁是需要理解的对象，模型用于决定优先级。把资产、攻击路径、风险与控制连起来复习。

## PDF 67–67: Closing page / 结束页

This page contains no extractable notes.

本页无可提取讲稿。

## PDF 68–69: Cryptography tutorials / 密码学练习

The tutorials compare symmetric and asymmetric cryptography and demonstrate hashing. Explain key roles, input changes and the security properties each mechanism provides.

两项互动练习分别比较对称与非对称加密，并观察密码哈希。重点解释输入变化、密钥用途及不同机制提供的安全属性。

## Original source — PDF page 1

[No extractable narration; see source image.]

## Original source — PDF page 2

Chapter 2, Stallings and Brown

We're going to journey through the fundamental cryptographic mechanisms that protect our digital world, 
understand the threats that target these systems, and learn how to model and quantify security risk. This lecture is 
titled "From Foundation to Frontlines," reflecting our progression from basic cryptographic principles to real-world 
threat analysis and defense strategies.

Today's content builds directly on Lecture 1, where we established the CIA triad—confidentiality, integrity, and 
availability. Now we'll explore the cryptographic tools that enforce these principles and the threats they protect 
against. By the end of this session, you'll understand how cryptography works, what threats target our systems, and 
how security professionals model and mitigate risk in practice.

## Original source — PDF page 3

Stopping Interception

Stopping Modification

Stopping Interruption

Opening Framework: Assets, Threats, Vulnerabilities, Risk & Countermeasures

Let's start with our foundational model—this diagram shows the complete security ecosystem. At the center are 
our assets: data, hardware, networks—anything of value to an organization. Threat agents—hackers, malware, 
insiders—wish to abuse these assets. They do this by exploiting vulnerabilities: weaknesses in our systems' design or 
implementation. When a threat finds a vulnerability, it creates risk: the potential for loss.

The CIA triad sits at the core of asset protection. Confidentiality means stopping unauthorized interception—attackers 
cannot see data. Integrity means stopping unauthorized modification—attackers cannot alter data. Availability means 
stopping interruption—systems stay accessible to authorized users. Together, these three principles guide all security 
design.

Finally, we have countermeasures: controls that organizations implement to reduce risk. Firewalls, encryption, 
intrusion detection systems, security training—all are countermeasures. Our job in this lecture is to understand

## Original source — PDF page 4

which countermeasures work best. Cryptography, which we'll explore in the next section, is one of the most powerful 
countermeasures we have. This framework will guide our analysis throughout today.

## Original source — PDF page 5

(unreadable 
scrambled data)

Apply AES (Advanced 
Encryption Standard)

How Two Parties Share Secrets Securely

Symmetric encryption is our first cryptographic tool. The idea is simple: take plaintext—readable data—add a secret 
key that both sender and recipient possess, apply an encryption algorithm like AES (Advanced Encryption Standard), 
and you get ciphertext—unreadable scrambled data. The recipient, who has the same secret key, applies the 
decryption algorithm and recovers the original plaintext. The core requirement is that sender and recipient must 
share the SAME key.

Why is this powerful? Because if the algorithm is strong (and AES is world-class), an attacker who intercepts the 
ciphertext cannot recover the plaintext without the key. This protects confidentiality—the attacker sees only 
gibberish. The standards we use—DES, Triple DES, AES—are time-tested and approved by NIST. AES-256, using a 256-
bit key, is considered unbreakable with current technology.

But symmetric encryption has a critical weakness: how do sender and recipient share the secret key in the first place?

## Original source — PDF page 6

They can't send it over an insecure network—an attacker could intercept it. This dilemma—how to share a secret without 
transmitting it—is what we'll solve with asymmetric encryption. For now, know that symmetric encryption is fast, efficient, 
and perfect for bulk data encryption once both parties have the key.

## Original source — PDF page 7

Two Approaches to Encrypting Data

Symmetric encryption comes in two flavors: block ciphers and stream ciphers. Block ciphers, like AES, process data in 
fixed-size chunks—typically 128 bits. The algorithm treats these chunks as blocks and applies complex 
transformations. You can see in the diagram how a 128-bit block is encrypted as a unit, producing a 128-bit block of 
ciphertext. Block ciphers are deterministic and widely used because they're reliable and well-studied.

Stream ciphers, like ChaCha20, work differently. They generate a "key stream"—a sequence of random-looking bits 
derived from the secret key. Then, they encrypt data byte-by-byte (or bit-by-bit) by combining the plaintext with the 
key stream using the XOR operation (if i/p are identical, then o/p is 0). Imagine the key stream as a one-time pad 
that's generated on-the-fly. Stream ciphers are often faster and more elegant, especially for real-time applications like 
video streaming.

The practical takeaway: both approaches achieve confidentiality, but through different mechanisms. Block ciphers are

## Original source — PDF page 8

deterministic and easier to implement securely; stream ciphers are flexible and efficient. In practice, you'll see AES (block
cipher) in most enterprise systems, while stream ciphers appear in performance-critical applications. Neither is inherently 
superior—they're tools for different purposes.

## Original source — PDF page 9

The Core Problem: How Do We Share the Secret Key?

Here's the critical problem we face: Two parties want to communicate securely. They need a secret key. But how do 
they establish this key without an attacker intercepting it? In the diagram, Point A and Point B represent two 
communicating parties. Between them lies an insecure network—the internet. If they try to transmit the key directly, 
an eavesdropper could capture it. Once the key is compromised, all communication encrypted with that key is 
compromised.

This is called the "key distribution problem," and it has plagued cryptography for centuries. Before the 1970s, there 
was no mathematical solution—both parties had to meet in person or use a trusted courier to exchange the key. This 
made secure communication expensive and impractical at scale. Think about it: how would you securely share a key 
with millions of customers worldwide without meeting them in person?

The solution to this dilemma is asymmetric encryption, our next topic. Asymmetric encryption allows us to solve the

## Original source — PDF page 10

key distribution problem using mathematics instead of physical meetings or couriers. This is one of the most important 
breakthroughs in the history of cryptography. Let's explore how it works.

## Original source — PDF page 11

Two Keys, One Secret: Public and Private

Asymmetric encryption fundamentally changes the game. Instead of one secret key, we use two mathematically linked 
keys: a public key and a private key. Here's the magic: anyone can encrypt using the public key, but ONLY the owner 
of the private key can decrypt. This is mathematically possible because of the one-way nature of certain 
mathematical functions—like the factorization of large prime numbers (used in RSA) or elliptic curve operations.

Let's see how it works with Alice and Bob. Alice publishes her public key everywhere—on a website, in a directory, 
printed on business cards. She keeps her private key secret. When Bob wants to send Alice a message, he encrypts it 
using Alice's public key. Now the message is ciphertext that only Alice can decrypt—using her private key. An attacker 
who intercepts the ciphertext and even has Alice's public key cannot decrypt it. The public key does not give away the 
private key's secret.

This solves the distribution problem! Bob and Alice never need to meet or exchange a secret key. Alice's public key

## Original source — PDF page 12

can be transmitted over insecure channels—it's "public" after all. The mathematics ensures that exposing the public key 
doesn't compromise the private key. The algorithms we use—RSA, Elliptic Curve Cryptography (ECC), Diffie-Hellman—are 
computationally expensive compared to symmetric encryption, but for solving the key distribution problem, the cost is worth 
it.

## Original source — PDF page 13

The RSA Encryption Algorithm - How Does It Actually Work + Step-by-Step Example.

8
The video is optional and only for the ones who are curious about how RSA works in terms of maths.

## Original source — PDF page 14

Use case: HTTPS

Combining Symmetric Speed with Asymmetric Security

Now we face a tradeoff: symmetric encryption is fast but requires a shared secret key. Asymmetric encryption solves 
key distribution but is slow. How do we get both speed AND security? The answer: digital envelopes, a hybrid 
approach used by SSL/TLS (the protocol behind HTTPS), PGP, and countless secure communication systems.

Here's the process: Alice wants to send Bob a large file securely. First, she generates a random symmetric key and 
encrypts the file using symmetric encryption (like AES-256). This is fast, even for large files. Then, she takes that 
symmetric key and encrypts it using Bob's public key via asymmetric encryption. Now she sends Bob two things: (1) 
the encrypted file, and (2) the encrypted symmetric key. Bob receives both. He uses his private key to decrypt the 
symmetric key, then uses that key to decrypt the file.

The genius is that each cryptographic tool is used for what it does best. Symmetric encryption handles bulk data 
(fast, efficient). Asymmetric encryption handles the key distribution problem (secure, solves the dilemma). The

## Original source — PDF page 15

symmetric key is small—typically 256 bits—so even though asymmetric encryption is slow, it's applied to only a tiny piece of 
data. HTTPS, when you browse a secure website, uses exactly this approach: asymmetric encryption to establish a symmetric 
key, then symmetric encryption for the entire session. "Symmetric speed plus asymmetric security"—that's the digital 
envelope.

## Original source — PDF page 16

What is Hashing ?

Creating Digital Fingerprints That Prove Integrity

A hash function is a mathematical algorithm that takes input of any size—a document, an image, your entire email 
history—and produces a fixed-size output called a hash or digest. This hash is a "digital fingerprint" of the input data. 
If you change even one bit of the input, the hash changes completely. This is called the avalanche effect: tiny input 
changes produce drastically different outputs. The example hash on the slide—the long hexadecimal string—is a SHA-
256 hash, which always produces a 256-bit (64-character) output.

Hash functions have three critical properties. (1) they are one-way: you can easily compute the hash from the data, 
but you cannot reverse the process—you cannot recover the original data from the hash. This is what makes hash 
functions suitable for storing passwords. (2) they have collision resistance: it's infeasible to find two different 
messages that produce the same hash. (3) they have the avalanche effect we just mentioned. The standards we use—
SHA-2 and SHA-3, both approved by NIST—are designed to satisfy all three properties.

## Original source — PDF page 17

PRACTICLE EXAMPLE: 
Why do we care about hash functions? Because they protect integrity. If you download a file from the internet, the provider 
might publish the file's SHA-256 hash. After downloading, you compute the hash of your downloaded file. If your hash 
matches the published hash, you know the file hasn't been altered. Attackers cannot modify the file without changing its 
hash—and they can't recreate the matching hash because hashing is one-way. Hash functions are also the foundation for 
digital signatures and message authentication codes, which we'll explore next.

## Original source — PDF page 18

(symmetric)

(known to both sender and receiver)

(short code)
-
Message + MAC code sent to the receiver 
-
Receiver verifies if their copy of secret key 
+ Message = same MAC code?

Message Authentication Code MAC

Proving Integrity + Authenticity with a Shared Key

A Message Authentication Code (MAC) is similar to a hash, but with a twist: it uses a secret key. You take a message, 
add a secret key known to both sender and recipient, apply the MAC algorithm (like HMAC), and produce a short code. 
When the recipient receives the message and the MAC, they compute the MAC using their copy of the secret key. If 
the MACs match, two things are proven: (1) the message hasn't been altered (integrity), and (2) the sender really is 
who they claim (authenticity)—because only someone with the secret key could have produced that MAC.

The key difference from hashing is authentication. A hash proves integrity—the file hasn't changed—but it doesn't 
prove who created the hash. An attacker could intercept a file, modify it, recompute the hash, and update the 
published hash. With a MAC, this is impossible because the attacker doesn't have the secret key. Think of a MAC like a 
signed document: the hash is like the document itself, but the MAC is like a signature on the document—it proves 
who put their "seal" on it.

## Original source — PDF page 19

MACs are extremely useful in practice. When two parties share a secret key (perhaps established via asymmetric encryption), 
they can use MACs to ensure every message they exchange is both genuine and unmodified. HMAC, which combines hashing 
with a secret key, is the standard approach and is built into most security protocols. Note that MACs are symmetric: both 
sender and recipient must have the same key. This is different from digital signatures, which use asymmetric keys—our next 
topic.

## Original source — PDF page 20

(asymmetric)

Using Asymmetric Encryption to Prove Authenticity

A digital signature is created by encrypting a hash of a message with the sender's private key. 
Here's the process: Alice writes a message, computes its hash, then encrypts the hash using her private key. This 
encrypted hash is the "signature." Alice sends the signature along with the original message (unencrypted). Bob 
receives both. To verify the signature, Bob computes the hash of the message himself, then decrypts the signature 
using Alice's public key. If the decrypted hash matches his computed hash, the signature is valid.

Why is this powerful? Because only Alice has her private key. If Bob successfully decrypts the signature with Alice's 
public key, it proves that Alice created the signature. This is called non-repudiation: Alice cannot deny that she signed 
the message. In contrast, MACs use symmetric keys—both parties have the same key—so either could have created 
the MAC. Digital signatures provide stronger proof of origin. They're used in every context where authenticity and 
non-repudiation matter: software signing (proves the software came from the publisher), email signatures, contracts, 
legal documents, blockchain.

## Original source — PDF page 21

The trade-off is that digital signatures are computationally expensive—asymmetric encryption is slow. But remember, we're 
only encrypting the hash (a small fixed-size value), not the entire message. So even though asymmetric encryption is slow, 
the signature itself is created and verified quickly. Also note that digital signatures do NOT provide confidentiality—anyone 
can read the message and verify the signature. If you want confidentiality, you'd use encryption. If you want authenticity and 
non-repudiation, you use digital signatures. If you want both, you encrypt the message AND sign it—a common practice in 
secure email.

## Original source — PDF page 22

Man-in-the-Middle (MITM) attack

The Identity Problem: I Have the Key, But Who Are They?
Here's a scenario: Bob receives a public key labeled "from Alice." He uses it to decrypt a message. Great! But how 
does Bob know the key actually belongs to Alice? What if an attacker—we call them "Eve"—intercepted the public key 
transmission and substituted her own key? Bob would decrypt messages thinking they're from Alice, but actually 
decrypting messages encrypted with Eve's key. This is called a Man-in-the-Middle (MITM) attack.

Bob says: "I have the key, but who owns the identity?" This is the trust gap. Asymmetric encryption solves the 
distribution problem, but introduces a new problem: how do we authenticate the keys themselves? In other words, 
how does Bob know that a public key really belongs to Alice and not to an impostor? We've solved the "how to 
exchange secrets" problem, but created a new problem: "how to verify identities."

The solution, which we'll explore in the next slides, is Public Key Infrastructure (PKI) and digital certificates. Rather 
than trusting an unverified key, both Alice and Bob trust a third party—a Certificate Authority (CA)—that has verified 
their identities and signed a certificate binding their identity to their public key. This certificate becomes proof of

## Original source — PDF page 23

identity, just like a government-issued ID proves you are who you claim to be. This is the bridge from cryptography alone to a 
complete trusted communication system.

## Original source — PDF page 24

Binding Identity to Public Key via CA Signature
An X.509 certificate is a digital document that binds a person's (or organization's) identity to their public key, signed by 
a trusted third party—a Certificate Authority (CA). Think of it like a digital passport. In the slide, we see Bob's 
certificate structure. It contains three essential components: (1) Subject ID—who owns the certificate (Bob's name, 
email, unique identifier), (2) Public Key—Bob's actual public key that others will use to encrypt messages to him, 
and (3) Issuer Signature—the digital signature of a CA (in this case, GlobalTrust Inc.) certifying that this certificate is 
legitimate.

The CA's role is to verify identities. When Bob applies for a certificate, the CA vets Bob—checks government ID, 
verifies email ownership, validates organization details. Once satisfied, the CA signs Bob's certificate with the CA's own 
private key. This signature is proof that the CA stands behind the certificate. When Alice wants to send a secure 
message to Bob, she downloads Bob's certificate from a public directory. She verifies the CA's signature on the 
certificate, and she trusts the CA, so she trusts that the certificate really belongs to Bob.

## Original source — PDF page 25

The certificate uses the X.509 V3 format, which is an international standard (RFC 5280). Certificates include metadata like 
validity dates (when the certificate expires), serial numbers, extensions for additional attributes, and much more. Certificates
are public—anyone can see them. But because they're signed by a trusted CA, they provide assurance of identity. This is how 
HTTPS works: when you visit a website, the server presents its certificate, your browser verifies the CA signature, and then 
you trust the server's public key.

## Original source — PDF page 26

CRL (periodic) vs. OCSP (real-time)

Certificate Revocation List
Online Certificate Status Protocol

Hierarchical Trust: From Root CAs to End Users
A Public Key Infrastructure (PKI) is not a single entity but a complete system for managing certificates and keys. It's 
organized hierarchically, like a chain of trust. At the top sits the Root CA—the "ultimate trust" authority. The Root CA is 
self-signed (it signs its own certificate) because there's no higher authority to certify it. Root CAs are exceedingly rare 
and protected with extreme security. Examples include VeriSign, DigiCert, and Comodo. Your operating system or 
browser comes preloaded with a small set of trusted Root CAs.

Below the Root CA are Intermediate CAs (shown in silver in the slide)—they provide "regional" or "organizational" 
trust. The Root CA signs the Intermediate CAs' certificates, and the Intermediate CAs sign end-user or website 
certificates. This hierarchy distributes responsibility and limits damage if a key is compromised. If an Intermediate CA's 
key is compromised, the Root CA can revoke it—only that branch of the trust tree is affected. At the bottom are End 
Entities (shown in bronze): individual users, websites, and services with their own certificates signed by an 
Intermediate CA.

## Original source — PDF page 27

The slide also shows revocation mechanisms: CRL (Certificate Revocation List) and OCSP (Online Certificate Status Protocol). 
These are the "kill switches" for compromised certificates. If a certificate is stolen or the private key is exposed, the CA can
revoke it by adding it to the CRL or responding with "revoked" via OCSP. When you access a website, your browser may check 
whether the website's certificate has been revoked. This ensures that even if an attacker steals a key, the certificate 
becomes useless once revoked. Together, these components—Root CAs, Intermediate CAs, end-entity certificates, and 
revocation mechanisms—form the PKI that underpins secure communication on the internet.

## Original source — PDF page 28

Layer 1
Layer 2
Layer 3
Layer 4

How All Cryptographic Tools Work Together
Now we bring everything together. Look at this diagram—it shows four layers of security, and every layer serves a 
purpose. At the Foundation (Layer 1) is PKI: certificates and the Certificate Authority system. This layer establishes 
trust in identities. When you visit a website, you download its certificate and verify the CA's signature. This proves 
you're talking to the real company, not an impostor.

At the Handshake (Layer 2) is Asymmetric Encryption: the public-key exchange. Once you've established the website's 
identity via its certificate, you use asymmetric encryption to securely exchange a symmetric key with the website. This 
solves the distribution problem—you and the website establish a shared secret without anyone listening in being able 
to intercept it.

At the Tunnel (Layer 3) is Symmetric Encryption: the fast, efficient AES algorithm. Once you and the website share a 
symmetric key, every message you exchange is encrypted using AES. This happens for every HTTP request and 
response. Attackers see only ciphertext; the data is confidential.

## Original source — PDF page 29

At the Integrity (Layer 4) is Hashing/HMAC (Hashing Message Authentication Code): every message also includes an HMAC 
to prove it hasn't been altered in transit. If an attacker modifies even one byte, the HMAC verification fails, and you know 
something is wrong.

Together, these four layers create total trust construction: Layer 1 proves identity, Layer 2 establishes a shared secret, Layer 3 
encrypts data, Layer 4 verifies integrity. When you visit "https://..." —note the "S" for Secure—this is exactly what's 
happening. HTTPS uses all four layers. This is why we can confidently send credit card numbers, passwords, and sensitive data
over the internet. The architecture is proven, mathematically sound, and battle-tested for decades. This is the template for 
building secure systems.

## Original source — PDF page 30

Watch: Global Encryption Is 
DEAD. A 2034 Quantum Attack

Will DOOM the ECONOMY.

The Quantum Threat and Tomorrow's Cryptography
For the past several decades, RSA encryption has been essentially unbreakable with classical computers. The security 
relies on the difficulty of factoring large prime numbers. However, there's a threat on the horizon: quantum 
computers. A quantum computer running Shor's Algorithm could, in principle, factor large numbers exponentially 
faster than classical computers. A quantum computer sufficiently powerful to break RSA might exist within 10-20 
years—or might not. The timeline is uncertain, but the threat is real.

This creates an urgency in the cryptographic community: we must move toward post-quantum cryptography (PQC)—
algorithms that remain secure even against quantum computers. The leading candidates are lattice-based 
cryptography, which relies on the difficulty of solving problems in high-dimensional lattices. These are fundamentally 
harder for quantum computers to solve. NIST (National Institute of Standards and Technology) is standardizing post-
quantum algorithms now, so that organizations can begin transitioning before quantum computers become a practical 
threat.

## Original source — PDF page 31

The good news: this transition is well underway. By the time quantum computers mature, we'll have post-quantum standards 
in place. Also, symmetric encryption (like AES) is believed to be quantum-resistant—even doubling the key length (AES-512) 
would make it computationally infeasible for quantum computers to break. The main vulnerability is asymmetric encryption, 
particularly RSA. Organizations are beginning to plan their transition, though it won't happen overnight. This is a "future" 
concern, but it's one that security professionals must be aware of today. For our course, the key takeaway is that 
cryptographic tools evolve as threats evolve—security is never static.

## Original source — PDF page 32

[Transition slide: "Now that we understand HOW cryptography protects us, let's explore WHAT we're protecting 
against and HOW we model threats."]

Navigating the Digital Ecosystem, Threat Landscapes, and Security Models
We've now spent an hour understanding cryptographic tools. They're powerful, but they're not magic. They protect 
against eavesdropping, modification, and impersonation—but threats are far broader. An attacker might use malware 
to bypass encryption entirely. They might exploit a software vulnerability that has nothing to do with cryptography. 
They might use social engineering to trick an employee into revealing a password. And they might exploit the 
expanding attack surface: cloud services, IoT devices, mobile phones—all new vectors for attack.

This visual—the "digital fortress"—shows the complexity of the modern threat landscape. We have firewalls at the 
perimeter, cloud services in the cloud, endpoints (computers, phones) throughout the network, data storage 
everywhere, and external interfaces and devices constantly connecting. Threats come from all directions: the internet, 
insider threats, supply chain compromises, physical attacks. No single tool—not even perfect encryption—can protect

## Original source — PDF page 33

us against every threat vector.

In this section, we'll map the threat landscape. We'll define the digital ecosystem and the assets we're protecting. We'll 
explore the main categories of threats: malware, denial of service, injection attacks, and AI-enabled threats. Then we'll 
introduce security frameworks—CIA triad application, attack surface analysis, attack trees, and risk quantification—that help 
security professionals think systematically about threats and defenses.

## Original source — PDF page 34

A Structured Approach to Cybersecurity Analysis
Let me give you a roadmap for the rest of the lecture. It's divided into three phases, each building on the previous 
one:

Phase 1: The Digital Ecosystem (Context) — We'll define what assets exist in modern organizations. We'll categorize 
them: hardware, software, data, networks. We'll also explore the expanding perimeter: how cloud computing and IoT 
devices have enlarged the attack surface. You cannot defend what you don't understand, so understanding your assets 
is the first step.

Phase 2: The Threat Landscape (Conflict) — We'll explore what attacks look like. Who attacks? Why? What methods 
do they use? We'll examine three major categories: malware (how it spreads and what it does), denial of service 
attacks (exhausting resources), and injection attacks (corrupting logic). We'll also look at emerging threats involving AI. 
Understanding threats helps you anticipate where attacks will come.

## Original source — PDF page 35

Phase 3: Security Models (Framework) — Finally, we'll learn HOW to think about security systematically. We'll apply the CIA 
triad to threats. We'll analyze attack surfaces. We'll construct attack trees—diagrams that decompose attacker goals into sub-
goals and specific methods. And we'll quantify risk mathematically using the risk equation: Risk = Likelihood × Impact. This 
framework transforms security from a chaotic domain into an engineered discipline.

## Original source — PDF page 36

What We're Protecting: Hardware, Software, Data, Networks
Every organization has assets, and every asset has vulnerabilities. Let's categorize them. Hardware: computer systems, 
data storage devices, communication devices. Hardware is vulnerable to availability attacks—if someone destroys a 
server, it's no longer available. Software: operating systems, utilities, applications. Software is vulnerable to corruption 
and unauthorized modification—malware can alter system behavior. Data: files, databases, passwords, intellectual 
property. Data is vulnerable to all three CIA failures: confidentiality (stolen), integrity (modified), and availability 
(deleted).

Networks: communication lines, bridges, routers. Networks are vulnerable to interception (eavesdropping) and 
disruption (DoS attacks). The diagram shows these categories and how they relate. Notice the security controls: 
guards at entrances (physical security), authentication mechanisms (users provide credentials), firewalls (control 
traffic), encryption (protect data in transit). Each control addresses a specific vulnerability.

The key insight: different assets require different protections. You'd never encrypt a hard drive that's physically

## Original source — PDF page 37

locked in a secure room, but you MUST encrypt data transmitted over the public internet. You'd implement strict access 
controls (authentication) for databases containing sensitive data, but not for public information. Security is not a one-size-
fits-all checklist. It's a tailored approach based on which assets you have, what vulnerabilities they face, and which threats 
are relevant. Understanding your asset landscape is the foundation of any security program.

## Original source — PDF page 38

Modern Threats in Cloud and IoT Environments
The traditional IT environment—servers in a company's own data center—is shrinking. More and more, organizations 
are moving to cloud computing. The NIST definition: ubiquitous, on-demand access to shared configurable resources. 
You get infrastructure (servers, storage), platforms (databases, development tools), and software (email, productivity 
apps) delivered as services—IaaS (Infrastructure as a Service), PaaS (Platform as a Service), SaaS (Software as a 
Service). The cloud is flexible and cost-effective, but it introduces new security challenges: shared infrastructure, 
reduced visibility, reliance on the cloud provider's security.

Simultaneously, IoT devices—smart sensors, cameras, routers, wearables—are proliferating. Every device has 
components: sensors (collect data), actuators (take actions), microcontrollers (process data), transceivers 
(communicate). These devices are often poorly secured, lacking updates, with default passwords. The Mirai botnet, 
which we'll discuss later, exploited thousands of IoT cameras and routers. The expanding perimeter means the attack 
surface has grown dramatically. You're no longer defending a perimeter—you're defending a cloud, mobile devices, 
and distributed IoT systems.

## Original source — PDF page 39

Security professionals must understand these environments. In cloud, you share responsibility: the cloud provider secures the
infrastructure; you secure your data, applications, and access controls. In IoT, you must manage devices across the supply 
chain, ensure firmware updates, and monitor for compromises. The complexity has increased, but so have the tools. 
Understanding cloud and IoT is essential for modern security.

## Original source — PDF page 40

Advanced Persistent Threats

Who Attacks and Why?
Let's meet the threat actors. The diagram shows a spectrum from low sophistication (left) to high sophistication 
(right). Recreational/Hobby Hackers: motivated by technical challenge and peer reputation. They might scan 
networks, deface websites, or exploit simple vulnerabilities. They often lack malicious intent—it's the technical puzzle 
they enjoy. Hacktivists: motivated by social or political causes. They perform DDoS attacks to protest, deface websites 
for visibility, or steal and leak data to expose organizations. They're more motivated than hobby hackers.

Cyber Criminals: motivated by financial reward. They deploy ransomware (encrypt data, demand payment), steal 
identities, commit fraud. They're sophisticated enough to profit consistently. They might operate in criminal networks 
with specialization: some write code, others do reconnaissance, others launder money. Finally, State-Sponsored 
Attackers (APTs—Advanced Persistent Threats): motivated by espionage or sabotage. They're persistent (they'll attack 
for months or years), well-funded (government budgets), and use advanced techniques. They might steal military 
secrets, disrupt infrastructure, or develop zero-day exploits.

## Original source — PDF page 41

Each category requires different defense strategies. Against hobby hackers, basic hardening works. Against hacktivists, you 
need incident response capabilities. Against cyber criminals, you need both prevention and recovery (ransomware backups). 
Against APTs, you need threat intelligence, advanced detection, and national-level coordination. Understanding your likely 
adversaries shapes your security posture. A small nonprofit faces different threats than a defense contractor. Threat modeling 
means understanding who wants to attack you and why.

## Original source — PDF page 42

How Malware Spreads
Malware is malicious software, and the first way to classify it is by propagation mechanism: how does it 
spread? Viruses: parasitic code that attaches to executable files. When you run an infected program, the virus runs 
and replicates into other executables. It needs a host—it cannot run standalone. It's user-driven; you have to run the 
infected program. Worms: independent, self-replicating code. Unlike viruses, worms don't need a host file. They scan 
for vulnerable systems and exploit network vulnerabilities to spread automatically, without user action. A worm can 
infect 100,000 systems in an hour.

Trojans: appear useful but hide malicious function. You download what looks like a utility, but it's actually malware. 
Trojans don't typically self-replicate; they rely on social engineering to trick you into running them. They might open a 
"backdoor" that gives attackers access to your system. Drive-by Downloads: when you visit a compromised website, 
the site exploits browser vulnerabilities and silently downloads and installs malware without your knowledge. These 
are particularly insidious because you don't realize you're infected.

## Original source — PDF page 43

The key insight: understanding propagation helps you defend. Viruses can be stopped by not running untrusted code. Worms
require patching (closing network vulnerabilities). Trojans require user awareness training. Drive-by downloads require 
browser updates and security extensions. Each propagation mechanism has specific defenses. When we talk about defending 
against malware in Lecture 3, we'll return to these categories.

## Original source — PDF page 44

[No extractable narration; see source image.]

## Original source — PDF page 45

What Malware Does After Infection
Once malware infects a system, what does it do? The second classification dimension is payload: the malicious action.

-
System Corruption: Ransomware encrypts your files and demands payment (extortion). You can't access your data 
without paying the attacker. Logic Bombs: dormant code that triggers on a specific condition (a date, an event). A 
disgruntled employee might plant a logic bomb that deletes data on a future date. 
-
Stealth Attacks: Rootkits gain root (administrator) access and hide their presence from the OS and antivirus—you 
don't know you're infected. Backdoors bypass normal security checks, giving attackers a permanent way back into 
the system.
-
Information Theft: Spyware and Keyloggers monitor your activity, capturing keystrokes, screenshots, 
passwords. Phishing uses social engineering (fake emails) to trick you into revealing credentials.
-
Attack Agents: Bots and Zombies are compromised systems under attacker control. They form botnets that launch 
coordinated attacks like DDoS.

## Original source — PDF page 46

Notice that propagation and payload are independent. The same worm could carry a ransomware payload (encrypt and 
extort) or a spyware payload (steal data). Defenders must think in two dimensions: how does it spread (propagation)? What 
does it do (payload)? Understanding both helps you respond. A spyware infection requires threat hunting and credential reset.
A ransomware infection requires restoring from backups. A botnet infection requires network isolation. One-size-fits-all 
defenses don't work.

## Original source — PDF page 47

Attacks on Availability
Denial of Service (DoS) is an attack on availability—one of our CIA triad. The goal: prevent authorized users from 
accessing a service. The mechanism: exhaust resources—CPU, memory, or bandwidth. There are two main vectors.

-
Attack Vector 1: Bandwidth Flooding — send so much traffic that legitimate traffic can't get through. Imagine a 
water pipe flooded with water; legitimate customers get no water.
-
Attack Vector 2: System Resource Exhaustion — don't flood bandwidth; instead, exhaust server resources. Send 
many connection requests but don't complete them (SYN Flooding). The server runs out of connection table slots 
and rejects new connections.

The diagram shows a typical DoS attack: the attacker floods a target with malicious traffic from a single source. This is 
detectable because all traffic comes from one IP address. You can block that IP, and the attack stops. But what if the 
attacker controlled thousands of sources?

## Original source — PDF page 48

This motivates Distributed Denial of Service (DDoS). Instead of attacking from one source, the attacker controls many 
compromised systems (a botnet) and coordinates them to attack the same target. Now you can't block a single IP; you're being 
attacked from thousands. The 2016 Mirai botnet attacked the DNS provider Dyn with 1.2 Tbps (terabits per second) of 
traffic—the largest DDoS at that time. DoS attacks don't steal data; they don't modify data. They simply break availability. For 
some services (an e-commerce site during the holiday shopping season), DoS can cost millions in lost revenue. Defending 
against DoS requires bandwidth overprovisioning, traffic filtering, and incident response.

## Original source — PDF page 49

[No extractable narration; see source image.]

## Original source — PDF page 50

What is Domain 
Name System(DNS)?

From DoS to Distributed DoS to Amplification
Let's dive deeper into DDoS. The Mirai Botnet Example (2016) showed how powerful DDoS can be. Mirai infected 
thousands of IoT devices—security cameras, routers, DVRs—most running default passwords never changed by 
owners. The botmaster commanded all these devices to send traffic to Dyn, a major DNS provider. The result: 1.2 Tbps
of traffic, the internet's largest DDoS at that time. Dyn's services went down. Major websites—Twitter, Netflix, Spotify, 
Reddit—couldn't resolve Dyn's domain names, so users couldn't access them.

But there's a more sophisticated variant: Amplification Attacks. Here's how it works: the attacker doesn't control 
enough devices to flood the target with traffic volume. Instead, the attacker spoofs the target's IP address and sends 
requests to third-party services (like DNS servers or NTP servers). These services respond—but the response goes to 
the spoofed IP, which is the target. The magic: the response is much larger than the request. A 100-byte DNS query 
can generate a 4,000-byte response. The attacker effectively "amplifies" their traffic 40x. With modest bandwidth, the 
attacker can flood a target with massive traffic.

## Original source — PDF page 51

Together, DDoS and amplification represent a sophisticated attack on availability. Defending against them requires: (1) 
Bandwidth overprovisioning—have more capacity than attackers expect; (2) Traffic filtering—identify and block attack 
patterns; (3) ISP-level mitigation—your internet provider can filter traffic before it reaches you; (4) DDoS mitigation services—
companies like Akamai and Cloudflare specialize in absorbing DDoS attacks. Also, organizations must reduce the number of 
vulnerable IoT devices—firmware updates, changing default passwords, and security reviews.

## Original source — PDF page 52

‘ ’ OR ‘1’=‘1’

What is Structured Query 
Language (SQL) Injection?

Corrupting Logic and Data Integrity
Our third major threat category is Injection Attacks. The vulnerability: untrusted user input is sent directly to an 
interpreter (like a database or shell) without validation. The attacker manipulates the input to change the interpreter's 
behavior. The classic example: SQL Injection. Imagine a login form asking for a username. The code looks like: SELECT 
* FROM users WHERE name = '$user_input'; The developer assumed the user would enter a name, and the database 
would search for it.

But what if the attacker enters: 1' OR '1'='1 ? Now the query becomes: SELECT * FROM users WHERE name = '1' OR 
'1'='1'; The condition '1'='1' is always true, so the query returns ALL users. The attacker bypasses authentication, 
logging in as the first user (often an administrator). This is a tautology—a logical condition always true. Once logged 
in, the attacker might steal data, modify records, or delete everything.

The root cause is simple: trusting user input. The developer should have validated and sanitized input, preventing 
special SQL characters from being interpreted. Other injection attacks include Command Injection (inject OS

## Original source — PDF page 53

commands into a web input, and the OS executes them) and XSS—Cross-Site Scripting (inject JavaScript into a web page, and 
it runs in users' browsers). All follow the same pattern: untrusted input reaches an interpreter, changing behavior. Defending 
requires: input validation, parameterized queries (the database treats input as data, not code), and escaping special 
characters. Injection attacks are preventable, yet they appear in OWASP's Top 10 because many developers still don't follow 
these practices.

## Original source — PDF page 54

[No extractable narration; see source image.]

## Original source — PDF page 55

AI as Both Weapon and Shield
We're now seeing AI deployed in cybersecurity contexts—both offensively and defensively. AI for Offense: Automated 
Phishing — generative AI can write convincing phishing emails at scale, personalizing each one. Deepfakes — AI-
generated audio and video can impersonate executives, tricking employees ("the CEO wants you to wire 
money"). Malware Variants — AI can mutate malware automatically, evading signature-based detection. These AI-
powered attacks scale what human attackers could do manually.

AI for Defense: Anomaly Detection — machine learning models baseline normal user and system behavior, flagging 
deviations (a user accessing files outside normal hours is anomalous). Behavioral Analysis — rather than matching 
signatures (known bad patterns), AI learns what "normal malware behavior" looks like—file system access patterns, 
network connections—and detects unknown malware. Threat Prediction — AI finds patterns in security data, 
predicting which systems are likely to be targeted next.

This is why our course is titled "AI-driven Cybersecurity Management." AI is not just a threat; it's a fundamental tool

## Original source — PDF page 56

for modern defense. As threats become more sophisticated (AI-generated attacks), defenses must match (AI-based detection). 
This dual nature—AI as both weapon and shield—means security professionals must understand both. We'll dive deeper into 
AI-based detection techniques in Lecture 5. For now, recognize that AI is reshaping the threat landscape and the defense 
landscape in parallel.

## Original source — PDF page 57

Applying CIA to Real Threats
Remember our CIA framework from Slide 2? Now we apply it. Confidentiality: No unauthorized disclosure. Threats: 
Spyware (monitors your activity), Phishing (steals credentials), Packet Sniffing (eavesdrops on network traffic). All 
attack confidentiality—your data becomes visible to attackers. Integrity: No unauthorized modification. Threats: SQL 
Injection (modifies database records), Web Defacement (alters website content), Viruses (modify system files). All 
attack integrity—your data becomes untrustworthy. Availability: Timely and reliable access. Threats: DoS/DDoS 
(exhaust resources), Ransomware (encrypts data, locks you out), Physical Destruction (destroy servers). All attack 
availability—your services become inaccessible.

This mapping is crucial. When you encounter a threat, ask: "Which CIA property does it attack?" A ransomware attack 
attacks availability (you can't access files) and might attack integrity (you can't trust modified files). A data breach 
attacks confidentiality. A logic bomb attacks integrity (and maybe availability if it deletes critical data). Understanding 
which CIA property a threat targets helps you prioritize defenses. If your primary concern is confidentiality, 
encryption is critical. If it's availability, redundancy and backup are critical. If it's integrity, tamper detection is

## Original source — PDF page 58

critical.

The CIA triad has been the framework for cybersecurity since the 1980s. It's not perfect—modern threats sometimes target 
"accountability" or "authenticity"—but it's the standard mental model. Using CIA consistently across your organization helps 
everyone speak the same language about security.

## Original source — PDF page 59

Four Layers of Potential Attack
An attack surface is the set of all points where an attacker might enter a system. The slide shows four layers, 
concentric rings protecting your asset. Layer 1: Human Surface — Social engineering, insider threats, phishing emails. 
Attacks exploiting human psychology. Layer 2: Network Surface — Vulnerabilities in network protocols, unpatched 
systems exposed on the internet, misconfigured firewalls. Layer 3: Software Surface — Bugs in application code, 
buffer overflows, injection vulnerabilities, race conditions. Layer 4: Data/Core — The asset itself—database, files, 
cryptographic keys.

The strategy: Defense in Depth. Layer defenses so that failure in one layer doesn't mean total compromise. If Layer 2 
(network defenses) fails and an attacker gets inside, Layer 3 (code security) still blocks them. If that fails, Layer 4 
(encryption, access controls on data) still protects the asset. You never want a single point of failure.

Notice the arrows from each layer pointing to the asset. Attacks originate from all directions—you can't defend just at 
the perimeter. The perimeter (network layer) is porous. Insider threats come from within. Malware already inside

## Original source — PDF page 60

attacks the software and data layers. Security professionals often call the perimeter "hardened cheese"—hard on the outside, 
soft inside. Modern security requires depth: multi-factor authentication (human layer), network segmentation (network layer), 
secure code practices (software layer), and encryption (data layer). Together, they create overlapping defenses.

## Original source — PDF page 61

Decomposing Attacker Goals into Methods
An attack tree is a diagram that breaks down an attacker's objective into sub-objectives and specific attack methods. 
At the root is the attacker's goal (e.g., "Compromise Online Banking Account"). Nodes below are sub-goals (e.g., 
"Compromise User Credentials"). Leaf nodes are specific attack methods (e.g., "Phishing Email," "Keylogger 
Malware"). The tree uses logic: OR-nodes mean the attacker can achieve the goal by choosing ANY ONE path. AND-
nodes mean the attacker must accomplish ALL sub-goals.

Example: To compromise a banking account, the attacker could (OR) compromise the user's credentials OR perform 
an injection attack on the login system. If they compromise credentials, they could (OR) send a phishing email OR 
install keylogger malware. Each branch represents a different attack path. The tree helps security teams: (1) Identify 
all possible attack paths—not just the obvious ones; (2) Prioritize defenses—defend against the easiest or most 
likely paths first; (3) Assess completeness—"have we covered all threats?“

Attack trees are standard in threat modeling. They transform an abstract threat ("compromise my banking account")

## Original source — PDF page 62

into concrete, analyzable attack vectors. A team building security defenses would say, "We defend against phishing with email
filtering and user training. We defend against keylogging with endpoint detection. We defend against injection attacks with 
input validation." By defending against all leaf nodes, they defend against the root goal. Attack trees bring structure to threat 
analysis.

## Original source — PDF page 63

Risk = (Likelihood × Impact)
Finally, we quantify risk. Many organizations talk vaguely about "high risk" and "low risk," but risk should 
be measurable. The equation: Risk = (Likelihood of Threat Exploiting Vulnerability) × (Impact). Likelihood is the 
probability that an attack will occur and succeed. Impact is the damage if it does. The product is risk.

Example: A vulnerability in an internal admin tool might have HIGH impact (if exploited, attackers gain admin access), 
but LOW likelihood (the tool is only accessible from inside the network, and few attackers have inside access). Risk = 
High × Low = Medium. Meanwhile, an unpatched web server visible on the internet has HIGH likelihood (attackers 
constantly scan for it) and HIGH impact (compromised servers can be used to attack the network). Risk = High × High = 
Critical. Resources should focus on the critical risk.

The definitions shown: Asset is a resource of value. Threat is potential to exploit a vulnerability. Vulnerability is 
weakness in design or implementation. Risk is potential for loss. Countermeasure is control to reduce risk. All fit into 
our original framework from Slide 2. Organizations use this framework constantly: identify assets, assess

## Original source — PDF page 64

vulnerabilities, estimate likelihood of threats exploiting those vulnerabilities, estimate impact, calculate risk, and allocate 
countermeasures to highest-risk areas.

This approach forces objectivity. Instead of defending everything equally, you focus on the biggest risks. It also communicates 
value to leadership: "Implementing this countermeasure reduces risk by X%" is concrete. Risk quantification turns security 
from an art into an engineering discipline.

## Original source — PDF page 65

Four Strategic Pillars
As we close, let me summarize with four pillars. The Shield: Cryptography provides Confidentiality, Integrity, and 
Authentication. We spent an hour on this. Cryptography is foundational. But it's not a complete solution.

The Landscape: A porous attack surface spanning Network, Software, and People. Attacks come from all directions. 
Your network perimeter is permeable. Software has bugs. Employees can be tricked. You must defend in depth across 
all layers.

The Sword: Threats range from self-replicating Worms to destructive Ransomware. Threats are diverse and evolving. 
Malware, DoS, injection, phishing, insider threats—each requires specific understanding and defenses.

The Strategy: Identify assets, model threats, and apply the right cryptographic tools. This is the systematic approach. 
Start with your assets. Understand what you're protecting. Model threats against those assets (using attack trees). 
Apply appropriate defenses—crypto where it helps, patching where needed, user training against social engineering.

## Original source — PDF page 66

Risk-rank your actions. Implement defense in depth. Monitor and respond.

## Original source — PDF page 67

[No extractable narration; see source image.]

## Original source — PDF page 68

Tutorial A - Symmetric vs 
Asymmetric Encryption -
Interactive Demo

https://colab.research.google.com/drive/1MHkng9U
opMOAyW5p7Gan9jVqnQsxyHip?usp=sharing

## Original source — PDF page 69

Tutorial B - Cryptographic 
Hashing - Interactive Demo

https://colab.research.google.com/drive/1ygT_MX_
eAnuFq3Tv-WwD7sl4kyLrZVsj?usp=sharing

