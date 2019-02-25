class HashRouter {
    constructor(list){
        this.list = list;
        window.webRouter = this;

        // 给link绑定事件
        var link = document.getElementById('link');
        link.addEventListener('click',(event)=>{
            var path = event.target.id;
            window.location.hash = path;
        })

        // 绑定触发事件
        window.addEventListener('hashchange',(event)=>{
            console.log(event);
            // 当前的url
            var cur = event.newURL;
            // 也有可能是首页的情况 http://localhost:3000/
            var index = cur.indexOf('#');
            if(index<0 || index === 0 ){
                // 首页
                webRouter.route(list,'/')
            }else{
                var path = cur.slice(index+1);
                // 路由页面
                webRouter.route(list,'/'+path);
            }
        });
    }

    route(list,path){

        console.log(path);
        console.log(list);

        const ELEMENT = document.getElementById('router');

        var ele = this.list.find( item => item.path === path );

        if(ele === undefined){
            // 没有匹配的
            console.log(ele);
        }else{
            console.log(ele);
            ELEMENT.innerHTML = ele.component;
        }
    }
}

export default HashRouter;