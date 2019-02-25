import HashRouter from './src/HashRouter';
import HistoryRouter from './src/HistoryRouter';
import list from './src/RouteList';

class WebRouter {

  constructor(routerConfig) {
    if(routerConfig.mode === 'hash'){
        this.router = new HashRouter(routerConfig.routeList);
    }else{
        this.router = new HistoryRouter(routerConfig.routeList);
    }
  }

}

//路由模式
const MODE = 'hash';  

// 创建即绑定window事件，路由生效
const webRouter = new WebRouter({
  mode: MODE,
  routeList: list
});
