<template>
  <div class="container mx-auto px-4 py-16 max-w-5xl">
    <!-- Breadcrumb -->
    <nav class="text-gray-400 text-sm mb-4">
      <router-link to="/" class="hover:text-purple-400 transition"
        >Home</router-link
      >
      ›
      <span class="text-gray-200">About</span>
    </nav>

    <!-- Header Section -->
    <div class="text-center mb-16">
      <p class="text-xl text-purple-400">We are a small passionate team.</p>
    </div>

    <!-- Mission Section -->
    <div class="mb-16 text-center">
      <h2 class="text-3xl font-bold text-white mb-4">
        Empowering the world with Crypto.
      </h2>
      <p class="text-lg text-purple-300 max-w-4xl mx-auto">
        We are a team with extensive experience in the cryptocurrency space. Our
        journey in crypto has equipped us with deep insights into blockchain
        technology, decentralized finance (DeFi), and digital asset management.
      </p>
    </div>

    <!-- Team Members Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="member in team"
        :key="member.name"
        class="bg-purple-900/30 border border-purple-800 rounded-lg p-6 text-center text-white transition-all hover:bg-purple-800/50"
      >
        <!-- Profile Picture -->
        <img
          :src="member.image"
          :alt="member.name"
          class="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
        />

        <!-- Name & Position -->
        <h3 class="text-xl font-bold">{{ member.name }}</h3>
        <p class="text-purple-400">{{ member.position }}</p>

        <!-- Social Media Icons -->
        <div class="flex justify-center space-x-4 mt-4">
          <a
            v-if="member.telegram"
            :href="member.telegram"
            target="_blank"
            class="text-purple-400 hover:text-purple-300 transition"
          >
            <i class="fab fa-telegram text-2xl"></i>
          </a>
          <a
            v-if="member.twitter"
            :href="member.twitter"
            target="_blank"
            class="text-purple-400 hover:text-purple-300 transition"
          >
            <i class="fab fa-twitter text-2xl"></i>
          </a>
          <a
            v-if="member.youtube"
            :href="member.youtube"
            target="_blank"
            class="text-purple-400 hover:text-purple-300 transition"
          >
            <i class="fab fa-youtube text-2xl"></i>
          </a>
          <a
            v-if="member.github"
            :href="member.github"
            target="_blank"
            class="text-purple-400 hover:text-purple-300 transition"
          >
            <i class="fab fa-github text-2xl"></i>
          </a>
        </div>

        <!-- Experience Description -->
        <p class="text-gray-300 mt-4 text-sm">{{ member.experience }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
  data() {
    return {
      team: [
        {
          name: "Winnodex",
          position: "Founder & Software Developer",
          image: require("@/assets/image-team/win.png"),
          telegram: "https://t.me/Winnodexx",
          twitter: "https://x.com/WinNode",
          youtube: "",
          github: "https://github.com/winnode",
          experience:
            "Passionate about building innovative and scalable solutions. Experienced in coding, system architecture, and software development for blockchain and web applications.",
        },
        {
          name: "MDP KCA",
          position: "Co-Founder & Trader Analyst",
          image: require("@/assets/image-team/mdp.png"),
          telegram: "https://t.me/mdpkca",
          twitter: "",
          youtube: "https://www.youtube.com/@mdpkca",
          github: "",
          experience:
            "Expert in market analysis and trading strategies. Specializes in crypto trends, risk management, and technical analysis for smart investment decisions.",
        },
        {
          name: "Bang Pateng",
          position: "Web Development & Influencer",
          image: require("@/assets/image-team/bgpateng.png"),
          telegram: "https://t.me/bg_pateng",
          twitter: "https://twitter.com/bangpateng_",
          youtube: "https://youtube.com/@bangpateng",
          github: "https://github.com/bangpateng",
          experience:
            "Building modern websites while engaging audiences through social media, digital marketing, and tech innovations.",
        },
        {
          name: "One Nov",
          position: "Admin & Programmer",
          image: require("@/assets/image-team/onenov.jpg"),
          telegram: "https://t.me/OneNov02",
          twitter: "",
          youtube: "",
          github: "",
          experience:
            "Managing systems, troubleshooting issues, and developing efficient code to streamline workflows and optimize performance.",
        },
        {
          name: "Jamal",
          position: "Admin & Influencer",
          image: require("@/assets/image-team/jamal.jpg"),
          telegram: "https://t.me/jamalsetiawan",
          twitter: "https://x.com/Bang_Satoshi",
          youtube: "https://www.youtube.com/@BangSatoshi",
          github: "",
          experience:
            "Balancing administrative tasks with content creation, engaging audiences, and growing online communities effectively.",
        },
        {
          name: "WHTech",
          position: "Frontend Development & Software Analyst",
          image: require("@/assets/image-team/jamal.jpg"),
          telegram: "https://t.me/EnyongBae",
          twitter: "https://x.com/WHTechno",
          github: "https://github.com/WHTechno",
          experience:
            "Creating user-friendly frontends and analyzing software to keep things fast, functional, and fun to use.",
       },
      ],
    };
  },
};
</script>

<style scoped>
/* Hover effect for icons */
a:hover {
  text-decoration: none;
}
</style>
