<template>
  <footer class="bg-white fixed bottom-0 w-full">
    <div class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8 py-4 flex flex-wrap justify-center ">
      <nav class="flex flex-wrap justify-center mr-4" aria-label="Footer">
        <div class="ml-2">
          <nuxt-link class="mr-1" :to="switchLocalePath('nl')">NL</nuxt-link>/
          <nuxt-link :to="switchLocalePath('de')">DE</nuxt-link>
        </div>
        <nuxt-link class="ml-2" v-for="route of routes" :key="route.keyName" :to="localePath(route.route)">{{
          $t(`header.${route.keyName}`)
        }}</nuxt-link>
        <!--        <a href="/admin" class="ml-2" target="_blank">Admin</a>-->
      </nav>
      <p class="text-center text-base text-gray-300">
        &copy; 2021 Weinmacher Nick
      </p>
    </div>
  </footer>
</template>

<script>
const routes = [
  { keyName: 'contact', route: '/contact' },
  { keyName: 'impressum', route: '/impressum' }
];

export default {
  name: 'Footer',
  data: () => {
    return {
      routes
    };
  }
};
</script>
