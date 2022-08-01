<template>
    <el-dialog v-model="IsShowRegister" title="注册" width="30%" :before-close="handleClose">
        <el-form :model="userInfo" label-width="60px">
            <el-form-item label="昵称">
                <el-input v-model="userInfo.NickName" />
            </el-form-item>
            <el-form-item label="用户名">
                <el-input v-model="userInfo.UserName" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="userInfo.Password" type="password" show-password />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="Submit">确定</el-button>
                <el-button @click="CloseRegister">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { Register } from '../http/index'
//vuex
const store = useStore()
const IsShowRegister = computed(() => store.state.IsShowRegister)
const handleClose = (done: () => void) => {
    store.commit('CloseRegister')
    done();
};

const userInfo = ref()
userInfo.value = {
    NickName: "",
    UserName: "",
    Password: "",
}
const Submit = async () => {
    // console.log(userInfo.value);
    var data = {
        NickName: userInfo.value.NickName,
        UserName: userInfo.value.UserName,
        Password: userInfo.value.Password
    }
    // var res = (await Register(data)).data;
    var res = (await Register(data)).data;
    
    if (res.issuccess) {
        ElMessage({
            message: '注册成功！',
            type: 'success',
        })
        // let user = JSON.parse(FormatToken(res.result))
        localStorage["token"] = res.username;
        //设置全局变量的值,用于显示登陆成功后的昵称
        store.commit('SettingNickName', res.username)
        //设置localStorage，保证页面刷新后vuex的值可以从里面读，避免刷新后状态丢失
        localStorage["NickName"] = res.username
        //注册成功后隐藏注册框
        store.commit('CloseRegister')
        userInfo.value.NickName = ''
        userInfo.value.UserName = ''
        userInfo.value.Password = ''
    } else {
        ElMessage.error('注册失败！')
    }
}

const CloseRegister = () => {
    store.commit('CloseRegister')
}
</script>

<style lang="scss">
.el-form-item:last-child {
  .el-form-item__content {
    margin-left: 104px !important;
  }
}
</style>