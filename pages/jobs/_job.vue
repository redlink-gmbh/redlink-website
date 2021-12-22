<template>
  <main-content>
    <article v-if="job">
      <h1 class="">{{ job.title }}</h1>
      <p class="mt-1 mb-8 text-primary-600 dark:text-primary-400">{{ job.description }}</p>
      <nuxt-content :document="job" />
    </article>
  </main-content>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let job;
    try {
      job = await $content('jobs', params.job).fetch();
    } catch (e) {
      error({ message: 'Blog not found' });
    }
    return { job };
  }
};
</script>
