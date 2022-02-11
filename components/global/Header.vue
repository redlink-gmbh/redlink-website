<template>
  <header class="fixed z-20 w-full" id="header">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-4 flex items-center justify-between border-b border-primary-500 md:border-none">
        <div class="flex items-center">
          <nuxt-link :to="localePath('/')">
            <img class="logo h-10" src="/logo-white.png" alt="Redlink GmbH" />
          </nuxt-link>
          <div class="hidden ml-10 space-x-8 md:block">
            <nuxt-link class="text-base font-medium text-white hover:text-indigo-50 p-1 rounded border-white"
                       @click="open = false"
                       v-for="route of routes"
                       :key="route.keyName"
                       :to="localePath(route.route)"
            >{{ $t(`header.${route.keyName}`) }}</nuxt-link>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <a href="#" class="inline-block bg-red-300 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Let's talk</a>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 md:hidden">
        <nuxt-link class="text-base font-medium text-white hover:text-indigo-50"
            @click="open = false"
            v-for="route of routes"
            :key="route.keyName"
            :to="localePath(route.route)"
        >{{ $t(`header.${route.keyName}`) }}</nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data: () => {
    return {
      open: false,
      routes: [
        { keyName: 'about', route: '/' },
        { keyName: 'team', route: '/team' },
        { keyName: 'jobs', route: '/jobs' },
        { keyName: 'blog', route: '/blog' }
      ]
    };
  },
  mounted:() => {
    var scrollpos = window.scrollY;
    var header = document.getElementById("header");

    function add_class_on_scroll() {
      header.classList.add("header-fade-in");
    }

    function remove_class_on_scroll() {
      header.classList.remove("header-fade-in");
    }

    window.addEventListener('scroll', function(){
      //Here you forgot to update the value
      scrollpos = window.scrollY;

      if(scrollpos > 20){
        add_class_on_scroll();
      }
      else {
        remove_class_on_scroll();
      }
    });
  }
};
</script>

<style lang="postcss" scoped>
header {
  background: rgba(255,255,255,0.2)
}
.header-fade-in {
  background: var(--color-primary);
  transition: background 0.5s ease;
}
</style>
