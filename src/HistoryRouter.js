class HistoryRouter {
    constructor(list){
        this.list = list;
        window.webRouter = this;

        // 给link绑定事件
        var link = document.getElementById('link');
        link.addEventListener('click',(event)=>{
            var path = event.target.id;
            history.pushState(null, null, path);
            // 需要注意的是调用history.pushState()或history.replaceState()不会触发popstate事件。
            // 只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back()）
            // 直接手动route即可
            console.log('history mode');
            window.webRouter.route(list,'/'+path);
        })

        // window.addEventListener('popstate',() =>{
        //     console.log('history mode');
        //     var path = window.location.pathname;
        //     webRouter.route(list,path);
        // });

    }

    route(list,path){

        console.log(path);

        const ELEMENT = document.getElementById('router');

        var ele = this.list.find( item => item.path === path );

        if(ele === undefined){
            // 没有匹配的
        }else{
            ELEMENT.innerHTML = ele.component;
        }
    }
}

export default HistoryRouter;