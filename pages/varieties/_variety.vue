<template>
  <main>
    <section v-if="post">
      <article>
        <nav class="mb-8" aria-label="go back">
          <router-back class="block" />
        </nav>
        <h1 class="">{{ post.title }}</h1>
        <p class="mt-1 mb-8 text-primary-600 dark:text-primary-400">{{ post.description }}</p>
        <img v-if="post.cover" class="w-full object-cover grape-variety" :src="post.cover" />
        <nuxt-content :document="post" />
        <div v-if="post.gallery" class="nuxt-content">
          <img v-for="image in post.gallery" class="image" :key="image.id" :src="image" />
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content('varieties', params.variety).fetch();
    } catch (e) {
      error({ message: 'Project not found' });
    }
    return { post };
  }
};
</script>
<style scoped lang="postcss">
.grape-variety {
  max-height: 350px;
}
</style>
