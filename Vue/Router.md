# Router
## history
> pushState/replaceState()

history.pushState(stateObj[存储数据], "", url);  
window.location.pathname = 获取pathname

```
(function () {
    //路由
    const router = [
        { path: '/index', template: '<div>index<h1>hello react</h1></div>' },
        { path: '/new', template: '<div>new</div>' },
        { path: '/about', template: '<div>about</div>' }
    ];
    //判断是否存在path
    let path = () => {
        let readypath = router.find((i) => i.path == window.location.pathname)
        readypath ? $('#router').html(readypath['template']) : history.replaceState(null, null, '/')
    }
    path()
    //click 路由跳转
    $('a').on('click', function () {
        let dataIndex = $(this).attr('index') //获取当前索引
        let item = router[dataIndex]
        if (item) {
            history.pushState({}, null, router[dataIndex].path) //路由跳转
            $('#router').html(item['template']) //渲染html
        } else {
            console.log('路由不存在！！！')
        }
    })
    $(window).on('popstate', function () {
        path()
    })
}())
```

hash内容

location.hash = #获取hash内容

```
class Router {
    constructor(route, node) {
        if (!Array.isArray(route)) {
            return console.error('route error route must []')
        }
        this.route = route
        this.node = this.isElm(node) ? node : $(node)
        this.redir()
        this.change()

    }
    //判断node
    isElm(node) {
        return node.nodeType === 1
    }
    //跳转路由
    add(index, hash) {
        this.route[index] ? this.node.html(this.route[index].component) : '';
        this.route[index] ? location.hash = "#" + hash : '';
    }
    //初始化路由
    redir() {
        if (location.hash) {
            let tem = this.route.find(i => i.path === location.hash.slice(1));
            tem ? this.node.html(tem.component) : '';
        } else {
            return
        }
    }
    //监听路由变化
    change(){
        window.addEventListener('hashchange',()=>{
            this.redir()
        })
    }
}
(function (Router) {
    // console.log(location.hash)
    // console.log(Router)
    let router = new Router([
        { path: '/index', component: '<h1>hello index</h1>' },
        { path: '/new', component: '<div>hello new </div>' },
        { path: '/about', component: '<h1>hello index</h1>' }
    ], '#router')
    $('a').on('click', function () {
        router.add($(this).attr('index'), $(this).attr('router-link'))
    })
}(Router))
```
