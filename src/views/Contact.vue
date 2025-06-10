<template>
  <div class="container mx-auto px-4 py-16 max-w-5xl">
    <!-- Breadcrumb -->
    <nav class="text-gray-400 text-sm mb-4">
      <router-link to="/" class="hover:text-purple-400 transition"
        >Home</router-link
      >
      ›
      <span class="text-gray-200">Contact</span>
    </nav>

    <!-- Header Section -->
    <div class="text-center mb-16">
      <p class="text-xl text-purple-400">We are here to help.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Left Column - Contact Information -->
      <div>
        <p class="text-purple-300 mb-8">
          Have something to say? We are here to help. Fill up the form or send
          an email or call us.
        </p>

        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <svg
              class="w-6 h-6 text-purple-400 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span class="text-purple-300">Indonesian</span>
          </div>

          <div class="flex items-start gap-3">
            <svg
              class="w-6 h-6 text-purple-400 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a
              href="mailto:winsnip@gmail.com"
              class="text-purple-300 hover:text-purple-400"
              >winsnip@gmail.com</a
            >
          </div>

          <div class="flex items-start gap-3">
            <svg
              class="w-6 h-6 text-purple-400 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a
              href="tel:+19874587899"
              class="text-purple-300 hover:text-purple-400"
              >+62 (89) 8987 899</a
            >
          </div>
        </div>
      </div>

      <!-- Right Column - Contact Form -->
      <div>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <input
              type="text"
              id="fullName"
              v-model="formData.fullName"
              placeholder="Full Name"
              class="w-full px-4 py-3 bg-transparent border border-purple-500 rounded-full text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-purple-400"
              required
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              placeholder="Email Address"
              class="w-full px-4 py-3 bg-transparent border border-purple-500 rounded-full text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-purple-400"
              required
            />
          </div>

          <div>
            <textarea
              id="message"
              v-model="formData.message"
              placeholder="Your Message"
              rows="5"
              class="w-full px-4 py-3 bg-transparent border border-purple-500 rounded-2xl text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-purple-400"
              required
            ></textarea>
          </div>

          <!-- Tombol Submit dengan Style Setengah Lingkaran -->
          <button
            type="submit"
            class="w-full bg-purple-700 text-white py-3 px-6 rounded-full hover:bg-purple-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
  data() {
    return {
      formData: {
        fullName: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted with data:", this.formData);
      alert("Thank you! Your message has been sent.");
      this.formData = { fullName: "", email: "", message: "" };
    },
  },
};
</script>
