<template>
  <main-content>
    <h1>{{ legal.title }}</h1>
    <nuxt-content :document="legal" />
  </main-content>
</template>

<script>
export default {
  async asyncData({ $content, error, i18n }) {
    let legal;
    try {
      legal = await $content('legal').where({ slug: { $contains: `.${i18n.locale || 'de'}` } }).fetch();
      if (legal?.length === 1) {
        return { legal: legal[0] };
      }
    } catch (e) {
      error({ message: 'Legal notice not found' });
    }
    error({ message: 'Legal notice not found' });
  }
};
</script>
