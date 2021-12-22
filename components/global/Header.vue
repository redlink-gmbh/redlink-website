<template>
  <nav class="bg-white">
    <div class="flex items-center justify-center">
      <div class="absolute menu-button-container left-0 sm:hidden">
        <!-- Mobile menu button-->
        <button
          @click="open = !open"
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            class="hidden h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex items-center justify-center">
        <div class="flex align-center items-center m-2">
          <nuxt-link :to="localePath('/')" class="flex items-center">
            <img class="block lg:hidden h-24 z-10 bg-white logo" src="/icon.png" alt="Workflow" />
            <img class="hidden lg:block h-24 z-10 bg-white logo" src="/icon.png" alt="Workflow" />
            <span class="hidden lg:block ml-3 font-black uppercase name-header">Weinmacher Nick</span>
          </nuxt-link>
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <nuxt-link
              @click="open = false"
              class="px-3 rounded-b-none rounded-t-md py-2 text-sm font-medium header-link"
              v-for="route of routes"
              :key="route.keyName"
              :to="localePath(route.route)"
              >{{ $t(`header.${route.keyName}`) }}</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="open" class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <nuxt-link
            @click.native="open = false"
            class="block rounded-b-none rounded-t-md px-3 py-2 text-base font-medium header-link"
            v-for="route of routes"
            :key="route.keyName"
            :to="localePath(route.route)"
            >{{ $t(`header.${route.keyName}`) }}</nuxt-link
          >
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data: () => {
    return {
      open: false,
      routes: [
        { keyName: 'aboutUs', route: '/about' },
        { keyName: 'grapeVarieties', route: '/varieties' },
        { keyName: 'news', route: '/news' },
        { keyName: 'contact', route: '/contact' }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
.logo {
  border-radius: 6rem;
  opacity: 0.9;
  box-shadow: 0 -1px 2px var(--color-primary-200);
}
.menu-button-container {
  top: 1.2rem;
}
#mobile-menu {
  margin-top: -35px;
  margin-bottom: 35px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.header-link {
  margin-bottom: -5px;
  &:hover {
    @apply bg-primary-200 text-white;
  }
}
.name-header {
  margin-bottom: -5px;
}
</style>
