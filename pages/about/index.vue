<template>
  <div>
    <img v-if="aboutUs.cover" class="cover-image" :src="aboutUs.cover" />
    <main>
      <section v-if="aboutUs" class="w-full max-w-5xl mx-auto">
        <h1 class="title">{{ aboutUs.title }}</h1>
        <nuxt-content class="m-0 w-full max-w-none" :document="aboutUs" />
        <!--      <nuxt-content class="mt-1 mb-4 text-primary-600 dark:text-primary-400">{{ aboutUs.body }}</nuxt-content>-->
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return { locale: this.$i18n.locale };
  },
  async asyncData({ i18n, $content, error }) {
    let aboutUs;
    try {
      aboutUs = await $content(`about/about.${i18n.locale || 'de'}`).fetch();
    } catch (e) {
      error({ message: 'About us not found' });
    }
    return { aboutUs };
  }
};
</script>
