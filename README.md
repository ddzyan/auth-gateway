## 简介

egg 框架中完成 OAuth 认证流程，实现第三方登录，并且获取第三方用户信息

用户第一次进行第三方登录时，需要经历的流程：

1. 跳转第三方授权页面，授权成功返回 code
2. 后端根据 code ，向第三方获取用户信息
3. 验证用户信息，实现接口鉴权
4. 将用户信息保存到 session
5. 接口中如果要使用用户信息，再从 session 中获取用户 ID，再到数据库中查询完整信息。

用户第二次登录，则直接从第 5 步开始
