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
                <div style="padding: 3px 10px; background-color: rgb(255,255,255,0.75)">{{ siteImageHeader }}</div>
              </div>
            </h1>
            <p v-if="siteImageDescription" class="main-description mt-6 max-w-lg mx-auto text-center text-xl sm:max-w-6xl">
              {{ siteImageDescription }}
            </p>
            <div v-if="siteImageAction" class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:gap-5">
                <a v-bind:href="siteImageActionUrl" class="flex link items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-neutral-400 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                  {{ siteImageAction }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
      <div class="max-w-5xl mx-auto mt-4">
        <slot />
      </div>
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
    },
    siteImageActionUrl: {
      type: String,
      default: '#'
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
    background-color: rgba(255, 255, 255, 0.75);
    color: black;
    padding: 10px;
  }

  .link {
    font-weight: bold;
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
    height: 40px;
    border: 2px solid white;
    margin-left: 10px;
    background-color:rgba(0, 0, 0, 0.5);

    &:hover {
      background-color: white;
      color: black;
    }
  }

</style>
