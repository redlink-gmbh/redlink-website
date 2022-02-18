<template>
  <main-content>
    <h1>Blogs</h1>
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      <div v-for="post in posts" :key="post.title" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <a :href="post.href" target="_blank">
          <img class="h-48 object-cover w-full" :src="post.imageUrl" alt="" />
          </a>
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <p class="text-sm font-medium text-indigo-600">
              <a :href="'?filter='+post.category" class="hover:underline">
                {{ post.category }}
              </a>
            </p>
            <a :href="post.href" target="_blank" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">
                {{ post.title }}
              </p>
              <p class="mt-3 text-base text-gray-500">
                {{ post.description }}
              </p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a :href="post.author.href">
                <span class="sr-only">{{ post.author.name }}</span>
                <img class="h-10 w-10 rounded-full" :src="post.author.imageUrl" alt="" />
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                <a :href="post.author.href" class="hover:underline">
                  {{ post.author.name }}
                </a>
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time :datetime="post.date">
                  {{ post.dateString }}
                </time>
                <span aria-hidden="true"> &middot; </span>
                <span> {{ post.readingTime }}min read </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="blog in blogs" :key="blog.title">
      <nuxt-link :to="localePath({ path: `blogs/${blog.slug}` })" class="card card--clickable">
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
      </nuxt-link>
    </div>
    <p class="text-center mt-10 mb-10" v-if="filter"><a href="?">Show all links</a></p>
  </main-content>
</template>

<script>

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

export default {
  async asyncData({ $content, error, query }) {
    const filter = query?.filter;
    let posts;
    try {
      posts = await $content('blog').fetch();
      posts = posts.filter(p => {
        return filter ? p.category === filter : true;
      });
      posts.forEach(p => {
        p.dateString = formatDate(p.date);
      })
    } catch (e) {
      error({ message: 'Blog entries not found' });
    }
    return { posts, filter };
  }
};
</script>
