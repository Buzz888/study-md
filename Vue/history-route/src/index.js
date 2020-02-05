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
