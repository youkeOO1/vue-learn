/**
 * 
 * $route中存放当前路由信息来自$.router.history下的current
 * 同时$router上也存放着
 */
class History {
    constructor() {
        this.current = {
            path:null,
        }
    }
}

export default History