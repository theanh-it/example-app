<script setup lang="ts">
import { ref } from "vue";
import { SafeArea } from "capacitor-plugin-safe-area";

import BottomBarApp from "@/layout/bottom-bar-app.vue";

const height = ref<number>(0);

SafeArea.getStatusBarHeight().then(({ statusBarHeight }) => {
  height.value = statusBarHeight;
});
</script>

<template>
  <div class="layout-app">
    <div class="safe-area" :style="{ minHeight: `${height}px` }">
      {{ height }}
    </div>
    <div class="content">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
    <BottomBarApp class="bottom-bar-app" />
  </div>
</template>

<style lang="scss" scoped>
.layout-app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: $white;
  overflow: hidden;
  > .safe-area {
    background-color: $white;
  }
  > .content {
    flex-grow: 1;
    background-color: $white;
    overflow: hidden;
  }
  > .bottom-bar-app {
    background-color: $white;
  }
}

.page {
  &-enter-active,
  &-leave-active {
    transition: $time;
  }
  &-enter-from {
    opacity: 0;
    transform: scale(1.1);
  }
  &-enter-to {
    opacity: 1;
    transform: scale(1);
  }
  &-leave-from {
    opacity: 0.5;
    transform: scale(1);
  }
  &-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
}

.bottom-bar {
  &-enter-active,
  &-leave-active {
    transition: $time;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    height: 0px;
  }
  &-enter-to,
  &-leave-from {
    opacity: 1;
    height: 60px;
  }
}
</style>
