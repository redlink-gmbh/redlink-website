<template>
  <main-content>
    <h1>Jobs</h1>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
        <div v-for="job in jobs" :key="job.title" class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
          <nuxt-link :to="localePath({ path: `jobs/${job.slug}` })" class="card card--clickable">
            <div class="flex-1 min-w-0">
              <a href="#" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true" />
                <p class="text-sm font-medium text-gray-900">
                  {{ job.title }}
                </p>
                <p class="text-sm text-gray-500 truncate">
                  {{ job.description }}
                </p>
              </a>
            </div>
          </nuxt-link>
        </div>
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
