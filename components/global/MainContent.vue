<template>
  <div>
    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
      <div class="">
        <div class="relative shadow-xl sm:overflow-hidden">
          <div class="absolute inset-0">
            <img class="h-full w-full object-cover" :src="siteImageUrl" alt="header picture">
            <div class="main-image absolute inset-0 mix-blend-multiply"></div>
          </div>
          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 v-if="siteImageHeader" class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <div class="main-title" style="display: flex; justify-content: center">
                <div style="padding: 3px 10px; background-color: white">{{ siteImageHeader }}</div>
              </div>
            </h1>
            <p v-if="siteImageDescription" class="main-description mt-6 max-w-lg mx-auto text-center text-xl sm:max-w-6xl">
              {{ siteImageDescription }}
            </p>
            <div v-if="siteImageAction" class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:gap-5">
                <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-neutral-400 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                  {{ siteImageAction }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white max-w-7xl mx-auto sm:px-6 lg:px-8">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  props: {
    siteImageUrl: {
      type: String,
      default: '/img/office.jpeg'
    },
    siteImageHeader: {
      type: String,
      default: ''
    },
    siteImageDescription: {
      type: String,
      default: ''
    },
    siteImageAction: {
      type: String,
      default: ''
    }
  }
};
</script>
<style lang="postcss" scoped>

  .main-image {
    background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.65) 100%) no-repeat center center scroll;
  }

  .main-title {
    display: flex;
    justify-content: center;
    color: var(--color-primary);
  }

  .main-description {
    background-color: white;
    color: black;
    padding: 10px;
  }

</style>
