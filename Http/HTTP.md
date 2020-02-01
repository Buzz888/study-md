# HTTP
---
### http 与 https
>HTTP协议传输的数据都是未加密的，明文传输，因此使用HTTP协议传输隐私信息非常不安全，为了保证这些隐私数据能加密传输，于是网景公司设计了SSL（Secure Sockets Layer）协议用于对HTTP协议传输的数据进行加密，从而就诞生了HTTPS。

## 区别
- http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。
- http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。