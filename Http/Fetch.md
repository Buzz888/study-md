# Fetch
---
### Fetch Ajax 主要区别:
- 返回的 Promise 不会被标记为 reject,仅当网络故障时或请求被阻止时，才会标记为 reject。
- 不会接受跨域 cookies
- 不会发送 cookies 除非使用了credentials

### 基本的Fetch请求

```javascript
fetch(url)
  .then(function(response) {
    return response.json();
  })
```
> Body类型:

- arrayBuffer( )
- blob( )
- json( )
- text( )
- formData( )

## Fetch传参

```
fetch(url,{
body: JSON.stringify(data),
cache: 'no-cache', 
//缓存:*default, no-cache, reload, force-cache, only-if-cached
credentials: 'same-origin', // include, same-origin, *omit
headers: {
      'content-type': 'application/json'
    },
method: 'POST', // *GET, POST, PUT, DELETE, etc.
mode: 'cors', // no-cors, cors, *same-origin
redirect: 'follow', // manual, *follow, error
referrer: 'no-referrer', // *client, no-referrer 
)
```
 