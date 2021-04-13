/**
 * 函数是组件
 * 通过父级找到存放路由信息的对象
 * 通过路径找到需要渲染的组件
 * 将其渲染
 */
export default {
    functional: true,
    render(h, {parent}) {
        let routeMap = parent.$router.routeMap;
        let path = parent.$route.path
        return h(routeMap[path])
    }
}