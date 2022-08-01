import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            // 设置状态
            IsShowLogin: false,//是否显示“登陆”
            IsShowRegister: false,//是否显示“注册”
            NickName: localStorage["NickName"]//昵称，登录成功后赋值
        }
    },
    mutations: {
        // 操作状态
        OpenLogin(state) {
            state.IsShowLogin = true;
        },
        CloseLogin(state) {
            state.IsShowLogin = false;
        },
        OpenRegister(state) {
            state.IsShowRegister = true;
        },
        CloseRegister(state) {
            state.IsShowRegister = false;
        },
        SettingNickName(state, NickName) {
            state.NickName = NickName;
        }
    }
})
export default store;