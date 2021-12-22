<template>
  <section v-if="blog">
    <article>
      <h1 class="">{{ blog.title }}</h1>
      <p class="mt-1 mb-8 text-primary-600 dark:text-primary-400">{{ blog.description }}</p>
      <nuxt-content :document="blog" />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let blog;
    try {
      blog = await $content('blog', params.blog).fetch();
    } catch (e) {
      error({ message: 'Blog not found' });
    }
    return { blog };
  }
};
</script>
