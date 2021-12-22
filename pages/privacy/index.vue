<template>
  <main-content>
    <h1>{{ privacy.title }}</h1>
    <nuxt-content :document="privacy" />
  </main-content>
</template>

<script>
export default {
  async asyncData({ $content, error, i18n }) {
    let privacy;
    try {
      privacy = await $content('privacy').where({ slug: { $contains: `.${i18n.locale || 'de'}` } }).fetch();
      if (privacy?.length === 1) {
        return { privacy: privacy[0] };
      }
    } catch (e) {
      error({ message: 'Privacy policy not found' });
    }
    error({ message: 'Privacy policy not found' });
  }
};
</script>
