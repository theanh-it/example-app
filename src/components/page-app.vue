<script setup lang="ts">
import TopBar from "@/components/top-bar.vue";

defineProps<{
  title?: string;
  back?: string;
  hiddenTopBar?: boolean;
}>();
</script>

<template>
  <div class="page-app">
    <template v-if="!hiddenTopBar">
      <slot v-if="$slots.topBar" name="topBar" />
      <TopBar v-else :title="title" :toBack="back" />
    </template>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-app {
  height: 100%;
  display: flex;
  flex-direction: column;
  > .content {
    flex-grow: 1;
    padding: 0px 20px;
    overflow: hidden;
    overflow-y: auto;
  }
}
</style>
