import type { CapacitorConfig } from "@capacitor/cli";

const dev = true;

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "my-vue-app",
  webDir: "dist",
};

if (dev) {
  Object.assign(config, {
    server: {
      url: "http://192.168.1.20:8100",
      cleartext: true,
    },
  });
}

export default config;
