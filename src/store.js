import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // 储存信息的仓库
    state:{
        count:0,
        studentList:[]
    }
})