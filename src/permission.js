import router, { dynamicRoutes } from './router/index';

let menuInit = false;
router.beforeEach((to, from, next) => {
    if(to.path === '/' || menuInit){
        next()
    }else{
        router.addRoutes(dynamicRoutes)
        menuInit = true;
        next({path: to.path})
    }
})