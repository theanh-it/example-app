<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="bottom-bar-app">
    <v-btn variant="text" stacked class="btn" @click="router.push('/')">
      <v-icon class="icon">mdi-home</v-icon>
      <span class="text">Home</span>
    </v-btn>
    <v-btn variant="text" stacked class="btn" @click="router.push('/tests')">
      <v-icon class="icon">mdi-file</v-icon>
      <span class="text">DMV tests</span>
    </v-btn>
    <v-btn variant="text" stacked class="btn">
      <v-icon class="icon">mdi-heart</v-icon>
      <span class="text">Favorite</span>
    </v-btn>
    <v-btn variant="text" stacked class="btn">
      <v-icon class="icon">mdi-cog</v-icon>
      <span class="text">Settings</span>
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.bottom-bar-app {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px $padding $padding $padding;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}
.bottom-bar-app :deep(.btn .text) {
  display: block;
  margin-top: 4px;
  font-size: 10px;
  font-weight: 500;
  min-width: 50px;
}
.bottom-bar-app :deep(.btn .icon) {
  font-size: 20px;
}
</style>
