<template>
  <div class="login-container w-screen h-screen flex items-center justify-end">
    <div class="container w-[27vw] bg-#fff b-rd-[10px] mr-10">
      <div class="flex flex-col items-center text-left p-6">
        <div class="w-full font-size-[1.75rem] font-700">欢迎回来</div>
        <div class="w-full font-size-[1.125rem] mt-2">
          输入您的账号和密码登录
        </div>
        <el-form
          ref="form"
          :model="formData"
          class="w-full mt-4"
          label-position="right"
        >
          <el-form-item
            prop="account"
            :rules="valid('请输入账号')"
          >
            <el-input
              v-model="formData.account"
              placeholder="请输入账号"
            />
          </el-form-item>
          <el-form-item
            prop="password"
            :rules="valid('请输入密码')"
          >
            <el-input
              v-model="formData.password"
              placeholder="请输入密码"
              type="password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button
              class="w-full"
              type="primary"
              @click="onSubmit"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { valid } from '@/utils/validators.ts';

defineOptions({
  name: 'MspToolsAdvantageProvinceConfigAdd'
});

const form = ref(null);
const formData = reactive({
  account: '',
  password: ''
});

const onSubmit = () => {
  form.value?.validate(valid => {
    if (!valid) return;
  });
  // if (!formEl) return
  // await formEl.validate((valid, fields) => {
  //   if (valid) {
  //     console.log('submit!')
  //   } else {
  //     console.log('error submit!', fields)
  //   }
  // })
};
</script>

<style scoped lang="less">
.login-container {
  background-image:
    url('https://static.liuliangguo.com/website/2025/07/02/10/8e9e3ff17ed9ccdd589d1b1b9c04e0b1.webp'),
    url('https://static.liuliangguo.com/website/2025/07/02/10/78e3d7fab938dc49fcadeee4f3522eb2.webp');
  background-position:
    center center,
    left center;
  background-repeat: no-repeat no-repeat;
  .container {
    box-shadow: 0.125rem 0.125rem #99c2f4;
  }
}
</style>
