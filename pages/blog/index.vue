<template>
  <main-content>
    <h1>Blogs</h1>
    <div v-for="team in blogs" :key="team.title">
      <nuxt-link :to="localePath({ path: `team/${team.slug}` })" class="card card--clickable">
        <h3>{{team.title}}</h3>
        <p>{{team.description}}</p>
      </nuxt-link>
    </div>
  </main-content>
</template>

<script>
export default {
  async asyncData({ $content, error, i18n }) {
    let blogs;
    try {
      blogs = await $content('team').where({ slug: { $contains: `.${i18n.locale || 'de'}` } }).fetch();
    } catch (e) {
      error({ message: 'News entries not found' });
    }
    return { blogs  };
  }
};
</script>
