# AJAX
---
## Get

```
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        xhr.status === 200 && console.log(xhr.responseText);
    }
}
xhr.open(
    "GET",
    "http://localhost:3000"
);
xhr.send()
//readyState表示状态
0 - (未初始化)还没有调用send()方法
1 - (载入)已调用send()方法，正在发送请求
2 - (载入完成)send()方法执行完成
3 - (交互)正在解析响应内容
4 - (完成)响应内容解析完成，可以在客户端调用了
```

## POST DELTE PUT

```
xhr.open(
    "POST",
    "http://localhost:3000"
);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//text/plain; charset=utf-8 传递的“表格数据”是纯文本（utf-8编码)
//multipart/form-data; boundary=xxx 用于上传文件

xhr.send(data)
```


