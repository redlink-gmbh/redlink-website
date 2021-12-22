<template>
  <main-content>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.title">
      <nuxt-link :to="localePath({ path: `jobs/${job.slug}` })" class="card card--clickable">
        <h3>{{job.title}}</h3>
        <p>{{job.description}}</p>
      </nuxt-link>
    </div>
  </main-content>
</template>

<script>
export default {
  async asyncData({ $content, error, i18n }) {
    let jobs;
    try {
      jobs = await $content('jobs').where({ slug: { $contains: `.${i18n.locale || 'de'}` } }).fetch();
    } catch (e) {
      error({ message: 'Jobs not found' });
    }
    return { jobs  };
  }
};
</script>
