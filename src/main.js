import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 🚀 Vue Router untuk navigasi
import "./assets/tailwind.css"; // 🚀 Tailwind CSS
import * as FlowbiteComponents from "flowbite-vue"; // 🚀 Flowbite Vue komponen

// 🚀 Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 🚀 Import Icon yang digunakan
import {
  faClipboardList,
  faNetworkWired,
  faSearch,
  faCoins,
  faSync,
  faCalendarAlt,
  faSyncAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

// 🚀 Tambahkan ikon ke library FontAwesome
library.add(
  faClipboardList,
  faNetworkWired,
  faSearch,
  faCoins,
  faSync,
  faCalendarAlt,
  faSyncAlt,
  faClock,
);

const app = createApp(App);
app.use(router); // 🚀 Aktifkan Vue Router

// 🚀 Daftarkan FontAwesome di aplikasi
app.component("font-awesome-icon", FontAwesomeIcon);

// 🚀 Registrasi semua komponen Flowbite secara otomatis
Object.entries(FlowbiteComponents).forEach(([name, component]) => {
  if (name.startsWith("Fwb")) {
    app.component(name, component);
  }
});

app.mount("#app"); // 🚀 Mount Vue App
