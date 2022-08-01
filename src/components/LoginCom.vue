<template>
  <div>
    <el-dialog v-model="IsShowLogin" title="登录" width="30%" :before-close="handleClose">
    <el-form :model="form" label-width="55px">
      <el-form-item label="用户名">
        <el-input v-model="form.UserName" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.Password" type="password" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Submit">确定</el-button>
        <el-button @click="CloseLogin">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from 'vuex'
import { Login } from '../http/index'
import { ElMessage } from 'element-plus'
const store = useStore()
// 根据IsShowLogin的值判断是否显示登录框
const IsShowLogin = computed(() => store.state.IsShowLogin)
// 点击了关闭按钮，修改IsShowLogin状态为false并关掉登录框
const handleClose = (done: () => void) => {
  store.commit('CloseLogin')
  done();
};

const form = ref();
form.value = {
  UserName: "",
  Password: ""
}
const CloseLogin = () => {
  store.commit('CloseLogin')
}
const Submit = async () => {
  // console.log(form.value);
  var data = {
    UserName: form.value.UserName,
    Password: form.value.Password
  }
  var res = (await Login(data)).data;
  
  if (res.issuccess) {
    ElMessage({
      message: '登录成功！',
      type: 'success',
    })
    // let user = JSON.parse(FormatToken(res.result))
    localStorage["token"] = res.username;
    //设置全局变量的值
    store.commit('SettingNickName', res.username)
    //设置localStorage，保证页面刷新后vuex的值可以从里面读，避免刷新后状态丢失
    localStorage["NickName"] = res.username
    //登录成功后隐藏登录框
    store.commit('CloseLogin')
    form.value.UserName = ''
    form.value.Password = ''
  } else {
    ElMessage.error(res.msg)
  }
}
</script>

<style lang="scss">
.el-dialog__title {
  margin-left: 17px !important;
}
</style>