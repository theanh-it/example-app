<script setup lang="ts">
import { useRouter } from "vue-router";

const props = defineProps<{
  title: string;
  toBack?: string;
}>();

const router = useRouter();

const back = () => {
  if (props.toBack) {
    router.push(props.toBack);
  } else {
    router.back();
  }
};
</script>

<template>
  <div class="top-bar">
    <div class="item -btn">
      <v-btn
        icon="mdi-arrow-left-thin"
        active-color="red"
        variant="text"
        class="btn"
        @click="back"
      />
    </div>
    <div class="item -title">{{ title }}</div>
    <div class="item -btn"></div>
  </div>
</template>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .item {
    display: flex;
    align-items: center;
    justify-content: center;
    &.-btn {
      min-width: 48px;
      min-height: 48px;
    }
    &.-title {
      flex: 1;
      font-size: 16px;
      color: $black-500;
    }
  }
  > .item :deep(.btn) {
    max-width: 35px;
    max-height: 35px;
    color: $black-500;
  }
  > .item :deep(.btn .v-btn__overlay) {
    background-color: $white;
  }
}
</style>
