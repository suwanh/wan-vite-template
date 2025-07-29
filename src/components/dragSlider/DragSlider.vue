<template>
  <!-- 拖拽滑块 -->
  <div class="w-full">
    <!-- 框 -->
    <div class="slider-container border-rd-[0.25rem] relative bg-#EDEDF0">
      <div class="w-full h-full absolute text-align-center">
        {{ props.message }}
      </div>
      <div class="flex h-full items-center">
        <div v-if="isTextStep">滑块</div>
        <el-icon
          v-if="!isTextStep"
          :size="20"
          color="#A8ABB2"
          class="slider border-rd-[0.25rem] pa-2 bg-#fff"
        >
          <DArrowRight />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//按需引入icon
import { DArrowRight } from '@element-plus/icons-vue';
defineOptions({ name: 'DragSlider' });

interface DragSliderProps {
  message?: string;
  isTextStep?: boolean;
}
const props = withDefaults(defineProps<DragSliderProps>(), {
  message: '按住滑块拖动',
  isTextStep: false
  // stepsList: () => [],
  // currentId: 1,
  // width: '45rem'
});
</script>

<style scoped lang="less">
.slider-container {
  border: 0.0625rem solid #dcdfe6;
  .slider {
    border: 0.0625rem solid #dcdfe6;
  }
}
</style>
