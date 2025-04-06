// Vuetify
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { VBtn, VIcon } from "vuetify/components";
import { Ripple } from "vuetify/directives";

export const vuetify = createVuetify({
  components: {
    VBtn,
    VIcon,
  },
  directives: {
    Ripple,
  },
  icons: {
    defaultSet: "mdi",
  },
  defaults: {
    VBtn: {
      variant: "outlined",
    },
  },
});
