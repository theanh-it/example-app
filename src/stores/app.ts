import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const loading = ref(false);

  const showLoading = () => (loading.value = true);

  const hiddenLoading = () => (loading.value = false);

  return {
    loading,
    showLoading,
    hiddenLoading,
  };
});
