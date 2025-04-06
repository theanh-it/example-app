<script setup lang="ts">
import PageApp from "@/components/page-app.vue";
</script>

<template>
  <PageApp title="DMV tests" back="/">
    <div class="content">
      <p v-for="i in 100" :key="i">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
    </div>
  </PageApp>
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
