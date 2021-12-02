# WebPageCommunication
一个浏览器同网站不同窗口通信的方法

## 开始
* 在需要通信的两个页面引入 `msg.js` 文件
```
<script src="./msg.js"></script>
```

## 条件
* 同浏览器
* 同网站


## 教程

* 在需要**发送**消息的页面添加
  ```javascript
  // 'name' 为通信双方通信标识，发送方和接收方需要相同才能收到消息
  // 'msg' 为发送的消息内容
  window.msg.send('name', 'msg')
  ```
  
* 在需要**接收**消息的页面添加
  ```javascript
  // 'name' 为通信双方通信标识，发送方和接收方需要相同才能收到消息
  // msg 为收到的消息内容
  window.msg.onmessage('name', (msg) => {
    // 收到消息后处理
  })
  ```
  
---
## 实现原理
* 同网站在不同窗口中共享 `window.localStorage`
* 使用 `window.addEventListener('storage', () => {})` 监听消息
