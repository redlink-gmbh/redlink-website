<template>
  <main-content>
    <h1>Blogs</h1>
    <div v-for="blog in blogs" :key="blog.title">
      <nuxt-link :to="localePath({ path: `blogs/${blog.slug}` })" class="card card--clickable">
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
      </nuxt-link>
    </div>
  </main-content>
</template>

<script>
export default {
  async asyncData({ $content, error, i18n }) {
    let blogs;
    try {
      blogs = await $content('blog').where({ slug: { $contains: `.${i18n.locale || 'de'}` } }).fetch();
    } catch (e) {
      error({ message: 'Blog entries not found' });
    }
    return { blogs  };
  }
};
</script>
