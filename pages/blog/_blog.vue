<template>
  <section v-if="team">
    <article>
      <h1 class="">{{ team.title }}</h1>
      <p class="mt-1 mb-8 text-primary-600 dark:text-primary-400">{{ team.description }}</p>
      <nuxt-content :document="team" />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let team;
    try {
      team = await $content('team', params.team).fetch();
    } catch (e) {
      error({ message: 'Blog not found' });
    }
    return { team };
  }
};
</script>
