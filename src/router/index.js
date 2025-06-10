import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Testnet from "../views/Testnet.vue";
import Dill from "../views/testnets/Dill.vue"; // Halaman detail Hemi
import Hemi from "../views/testnets/Hemi.vue"; // Halaman detail Hemi
import Sunrise from "../views/testnets/Sunrise.vue"; // Perbaikan: mengubah import Hemi menjadi Sunrise
import Intento from "../views/testnets/Intento.vue";
import About from "../views/About.vue"; // Import the About component
import Contact from "../views/Contact.vue"; // Import the About component
import Tools from "../views/Tools.vue"; // Import the About component
import Licensing from "../views/Licensing.vue"; // Import the About component
import Privacy from "../views/Privacy.vue"; // Import the About component

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/testnet",
    name: "Testnet",
    component: Testnet,
  },
  {
    path: "/testnet/dill",
    name: "Dill",
    component: Dill,
  },
  {
    path: "/testnet/intento",
    name: "Intento",
    component: Intento,
  },
  {
    path: "/testnet/hemi",
    name: "Hemi",
    component: Hemi,
  },
  {
    path: "/testnet/sunrise",
    name: "Sunrise",
    component: Sunrise,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/tools",
    name: "Tools",
    component: Tools,
  },
  {
    path: "/licensing",
    name: "Licensing",
    component: Licensing,
  },
  {
    path: "/privacy-policy",
    name: "Privacy",
    component: Privacy,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
